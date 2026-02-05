import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


/* ============================
   Scene Setup
============================ */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050505);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 40);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


/* ============================
   Controls
============================ */

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


/* ============================
   Lights
============================ */

scene.add(new THREE.AmbientLight(0xffffff, 0.7));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);


/* ============================
   Mobius Data
============================ */

const size = 10;
const segmentsU = 200;
const segmentsV = 30;
const R = 1.2;

const centerPoints = [];
const tangents = [];
const normals = [];
const binormals = [];

const positions = [];
const colors = [];

const centerJ = Math.floor(segmentsV / 2);


/* ============================
   Generate Strip
============================ */

for (let i = 0; i < segmentsU; i++) {

  const u = (i / segmentsU) * 2 * Math.PI;

  for (let j = 0; j <= segmentsV; j++) {

    const v = (j / segmentsV) * 2 - 1;

    const x = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
    const y = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
    const z = (v / 2) * Math.sin(u / 2);

    const px = x * size;
    const py = y * size;
    const pz = z * size;

    if (j === centerJ) {
      centerPoints.push(new THREE.Vector3(px, py, pz));
    }

    positions.push(px, py, pz);

    if (j === centerJ) {
      colors.push(1, 1, 1);
    } else {
      colors.push(0, 1, 1);
    }
  }
}


/* ============================
   Compute Tangents
============================ */

for (let i = 0; i < centerPoints.length; i++) {

  const prev =
    centerPoints[(i - 1 + centerPoints.length) % centerPoints.length];

  const next =
    centerPoints[(i + 1) % centerPoints.length];

  const T = new THREE.Vector3()
    .subVectors(next, prev)
    .normalize();

  tangents.push(T);
}


/* ============================
   Normals / Binormals
============================ */

for (let i = 0; i < centerPoints.length; i++) {

  const u = (i / segmentsU) * 2 * Math.PI;
  const v = 1 / segmentsV;

  const x2 = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
  const y2 = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
  const z2 = (v / 2) * Math.sin(u / 2);

  const side = new THREE.Vector3(
    x2 * size,
    y2 * size,
    z2 * size
  );

  const V = new THREE.Vector3()
    .subVectors(side, centerPoints[i])
    .normalize();

  const N = new THREE.Vector3()
    .crossVectors(tangents[i], V)
    .normalize();

  normals.push(N);

  const B = new THREE.Vector3()
    .crossVectors(tangents[i], N)
    .normalize();

  binormals.push(B);
}


/* ============================
   Point Cloud
============================ */

const geo = new THREE.BufferGeometry();

geo.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(positions, 3)
);

geo.setAttribute(
  'color',
  new THREE.Float32BufferAttribute(colors, 3)
);

const mat = new THREE.PointsMaterial({
  size: 0.08,
  vertexColors: true
});

const points = new THREE.Points(geo, mat);
scene.add(points);


/* ============================
   Frenet Arrows
============================ */

for (let i = 0; i < centerPoints.length; i += 6) {

  scene.add(
    new THREE.ArrowHelper(
      tangents[i],
      centerPoints[i],
      0.8,
      0xff0000
    )
  );

  scene.add(
    new THREE.ArrowHelper(
      normals[i],
      centerPoints[i],
      0.8,
      0x00ff00
    )
  );

  scene.add(
    new THREE.ArrowHelper(
      binormals[i],
      centerPoints[i],
      0.8,
      0x0000ff
    )
  );
}


/* ============================
   Duck Loader
============================ */

let duck = null;

new OBJLoader().load('/models/Rubber_Derpy.obj', obj => {

  obj.scale.set(0.8, 0.8, 0.8);

  obj.traverse(c => { 
    if (c.isMesh) {
      c.material = new THREE.MeshStandardMaterial({
        color: 0xf5c542,
        roughness: 0.4,
        metalness: 0.2
      });
    }
  });

  duck = obj;
  scene.add(duck);
});


/* ============================
   Animation
============================ */

let t = 0;

function animate() {

  requestAnimationFrame(animate);

  controls.update();


  if (duck) {

    t += 0.0008;
    t %= 1;

    const n = centerPoints.length;

    const i = Math.floor(t * n);
    const j = (i + 1) % n;

    const a = (t * n) % 1;


    // Position
    const pos = centerPoints[i]
      .clone()
      .lerp(centerPoints[j], a);


    // Frame
    const T = tangents[i].clone().lerp(tangents[j], a).normalize();
    const N = normals[i].clone().lerp(normals[j], a).normalize();
    const B = binormals[i].clone().lerp(binormals[j], a).normalize();


    // Orientation
    const m = new THREE.Matrix4();
    m.makeBasis(B, N, T);

    duck.position.copy(pos);
    duck.quaternion.setFromRotationMatrix(m);
  }


  renderer.render(scene, camera);
}

animate();
