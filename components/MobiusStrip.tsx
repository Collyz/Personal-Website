'use client';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Scene
      const scene = new THREE.Scene();
      scene.background = null;
      // Camera
      const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.set(0, 0, 12);
      camera.lookAt(0, 0, 0);
      // Renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      // renderer.setClearColor(0x000000, 0); // transparent background
      containerRef.current?.appendChild(renderer.domElement);
      // renderer.setClearColor(0x000000, 0);
      // Ambient light (base visibility)
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);
      // Directional Light (sun like)
      const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);
      // Orbital Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      // Clock
      const clock = new THREE.Clock();
      
      // Fade in plane
      const fadeMaterial = new THREE.MeshBasicMaterial({
        color: 0x163832,
        transparent: true,
        opacity: 1, // start fully opaque
      });

      const fadePlane = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30),
        fadeMaterial
      );
      fadePlane.position.set(0, 0, 5); // in front of the camera
      scene.add(fadePlane);


      // Loading the duck
      let duck: THREE.Group | null = null;
      // For duck animations
      let pathIndex = 0;
      let speed = 35;
      let duckBoundingHeight = 0;
      // Load the duck into the scene, color each body part
      new OBJLoader().load('/models/Rubber_Derpy.obj', obj => {
        obj.scale.set(1, 1, 1);
        obj.traverse(child => {
          if (child instanceof THREE.Mesh) {
            if (child.name.includes('body')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xf5c542,
                roughness: 0.4,
                metalness: 0.2,
              });
            } else {
              // Correct the surface normals on the eyes
              child.geometry.computeVertexNormals();
              child.geometry.normalizeNormals();
              child.material = new THREE.MeshStandardMaterial({
                color: '#000000', // Black
                side: THREE.DoubleSide,
                roughness: 0.2,
                metalness: 0.5,
              });
            }
            
          }
        });

        duck = obj;
        // Compute bounding height so the bottom of the duck can touch the mobius surface correctly
        const duckBox = new THREE.Box3().setFromObject(duck);
        const duckSize = new THREE.Vector3(); duckBox.getSize(duckSize);
        duckBoundingHeight = duckSize.y;;
        scene.add(duck);
      }); 

      // Parallel Transport Setup
      const positions = [];
      const tangents: THREE.Vector3[] = [];
      const normals: THREE.Vector3[] = [];
      const binormals: THREE.Vector3[] = [];
      const centerPositions: THREE.Vector3[] = [];
      const colors = [];
      const segmentsU = 200;
      const segmentsV = 40;
      const centerJ = Math.floor(segmentsV / 2);
      const size = 8;
      const R = 1.2;
      // Create mobius strip dot cloud
      for (let i = 0; i < segmentsU; i++) {
        const u = (i / segmentsU) * 2 * Math.PI;

        for (let j = 0; j <= segmentsV; j++) {
          const v = (j / segmentsV) * 2 - 1;
          const x = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
          const y = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
          const z = (v / 2) * Math.sin(u / 2);
          const px = x * size;
          const py = y * size - 4;
          const pz = z * size;
      
          positions.push(px, py, pz);
          if (j === centerJ) {
            const p = new THREE.Vector3(px, py, pz);
            centerPositions.push(p);
            
            colors.push(0, 0, 0); // Coloring centers points black
          } else {
            colors.push(237/255, 52/255, 105/255);
          }
        }
      }
      // Adding the dot cloud to the scene
      const mobiusGeo = new THREE.BufferGeometry();
      mobiusGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      mobiusGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      const mobiusMat = new THREE.PointsMaterial({size: 0.08,vertexColors: true});
      const mobiusPoints = new THREE.Points(mobiusGeo, mobiusMat);
      // scene.add(mobiusPoints);

      const vertices: THREE.Vector3[][] = []; // 2D grid [u][v]
      for (let i = 0; i < segmentsU; i++) {
        const row: THREE.Vector3[] = [];
        const u = (i / segmentsU) * 2 * Math.PI;

        for (let j = 0; j <= segmentsV; j++) {
          const v = (j / segmentsV) * 2 - 1;
          const x = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
          const y = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
          const z = (v / 2) * Math.sin(u / 2);

          const px = x * size;
          const py = y * size - 4;
          const pz = z * size;

          const p = new THREE.Vector3(px, py, pz);
          row.push(p);
        }

        vertices.push(row);
      }

      const surfaceGeo = new THREE.BufferGeometry();
      const surfacePositions: number[] = [];
      const surfaceNormal: number[] = [];
      const surfaceColors: number[] = [];

      for (let i = 0; i < segmentsU; i++) {
        const nextI = (i + 1) % segmentsU;
        const isSeam = nextI === 0; // crossing the 2π → 0 seam (where twist must flip)

        for (let j = 0; j < segmentsV; j++) {
          const p00 = vertices[i][j];
          const p01 = vertices[i][j + 1];

          // Critical: flip V index at seam to account for Möbius half-twist
          const jj = isSeam ? (segmentsV - j) : j;
          const jj1 = isSeam ? (segmentsV - (j + 1)) : (j + 1);

          const p10 = vertices[nextI][jj];
          const p11 = vertices[nextI][jj1];


          // Triangle 1
          surfacePositions.push(p00.x, p00.y, p00.z);
          surfacePositions.push(p10.x, p10.y, p10.z);
          surfacePositions.push(p11.x, p11.y, p11.z);

          // Triangle 2
          surfacePositions.push(p00.x, p00.y, p00.z);
          surfacePositions.push(p11.x, p11.y, p11.z);
          surfacePositions.push(p01.x, p01.y, p01.z);

          // Normals (approximate)
          const n1 = new THREE.Vector3().subVectors(p10, p00).cross(new THREE.Vector3().subVectors(p11, p00)).normalize();
          const n2 = new THREE.Vector3().subVectors(p11, p00).cross(new THREE.Vector3().subVectors(p01, p00)).normalize();

          for (let k = 0; k < 3; k++) {
            surfaceNormal.push(n1.x, n1.y, n1.z);
            surfaceNormal.push(n2.x, n2.y, n2.z);
          }

          // Optional color
          for (let k = 0; k < 6; k++) {
            surfaceColors.push(237 / 255, 52 / 255, 105 / 255); // pink
          }
        }
      }

      surfaceGeo.setAttribute('position', new THREE.Float32BufferAttribute(surfacePositions, 3));
      surfaceGeo.setAttribute('normal', new THREE.Float32BufferAttribute(surfaceNormal, 3));
      surfaceGeo.setAttribute('color', new THREE.Float32BufferAttribute(surfaceColors, 3));

      const surfaceMat = new THREE.MeshStandardMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        roughness: 0.5,
        metalness: 0.2,
        transparent: true,
        opacity: 0.8
      });
      const mobiusMesh = new THREE.Mesh(surfaceGeo, surfaceMat);
      scene.add(mobiusMesh);



      // DEBUG: Visual TNB Frame Helpers (for orientation debugging)
      const tangentHelper = new THREE.ArrowHelper(new THREE.Vector3(1,0,0), new THREE.Vector3(), 2, 0xff0000); // Red = Forward (T)
      const normalHelper = new THREE.ArrowHelper(new THREE.Vector3(0,1,0), new THREE.Vector3(), 2, 0x00ff00);  // Green = Surface Normal (N)
      const binormalHelper = new THREE.ArrowHelper(new THREE.Vector3(0,0,1), new THREE.Vector3(), 2, 0x0000ff); // Blue = Side (B)

      // scene.add(tangentHelper);
      // scene.add(normalHelper);
      // scene.add(binormalHelper);


      // ===============================
      // TRUE Mobius Surface Frame (Parallel Transport Consistent)
      // Recompute T, N, B from parametric surface instead of Frenet transport
      // ===============================

      tangents.length = 0;
      normals.length = 0;
      binormals.length = 0;

      for (let i = 0; i < centerPositions.length; i++) {
        const u = (i / centerPositions.length) * Math.PI * 2;

        // Current center point (v = 0 on mobius)
        const p = centerPositions[i];

        // Small parametric offsets (stable differential frame)
        const du = 0.0001;
        const dv = 0.0001;

        // Point slightly forward along strip (du direction)
        const u2 = u + du;
        const xU = (R + (0 / 2) * Math.cos(u2 / 2)) * Math.cos(u2);
        const yU = (R + (0 / 2) * Math.cos(u2 / 2)) * Math.sin(u2);
        const zU = (0 / 2) * Math.sin(u2 / 2);
        const pU = new THREE.Vector3(xU * size, yU * size - 4, zU * size);

        // Point slightly across strip width (dv direction)
        const v2 = dv;
        const xV = (R + (v2 / 2) * Math.cos(u / 2)) * Math.cos(u);
        const yV = (R + (v2 / 2) * Math.cos(u / 2)) * Math.sin(u);
        const zV = (v2 / 2) * Math.sin(u / 2);
        const pV = new THREE.Vector3(xV * size, yV * size - 4, zV * size);

        // True tangent (forward along mobius centerline)
        const T = new THREE.Vector3().subVectors(pU, p).normalize();

        // Across-strip direction (surface direction, NOT binormal)
        const V = new THREE.Vector3().subVectors(pV, p).normalize();

        // TRUE surface normal (glues duck to strip, tilts correctly)
        const N = new THREE.Vector3().crossVectors(T, V).normalize();

        // Stable binormal (sideways along strip surface)
        const B = new THREE.Vector3().crossVectors(T, N).normalize();

        // Enforce frame continuity (prevents 180° flipping between segments)
        if (i > 0) {
          if (T.dot(tangents[i - 1]) < 0) T.negate();
          if (N.dot(normals[i - 1]) < 0) N.negate();
          if (B.dot(binormals[i - 1]) < 0) B.negate();
        }

        tangents.push(T);
        normals.push(N);
        binormals.push(B);
      }


      // ===============================
      // TNB Debug Dot Cloud (Helper Vectors for Orientation Visualization)
      // ===============================

      const tnbPositions: number[] = [];
      const tnbColors: number[] = [];
      const helperScale = 1.5; // length of helper vectors

      for (let i = 0; i < centerPositions.length; i++) {
        const p = centerPositions[i];
        const T = tangents[i];
        const N = normals[i];
        const B = binormals[i];

        // Tangent dot (RED)
        const tPos = p.clone().add(T.clone().multiplyScalar(helperScale));
        tnbPositions.push(tPos.x, tPos.y, tPos.z);
        tnbColors.push(1, 0, 0);

        // Normal dot (GREEN)
        const nPos = p.clone().add(N.clone().multiplyScalar(helperScale));
        tnbPositions.push(nPos.x, nPos.y, nPos.z);
        tnbColors.push(0, 1, 0);

        // Binormal dot (BLUE)
        const bPos = p.clone().add(B.clone().multiplyScalar(helperScale));
        tnbPositions.push(bPos.x, bPos.y, bPos.z);
        tnbColors.push(0, 0, 1);
      }

      tnbPositions.splice(0, tnbPositions.length);
      tnbColors.splice(0, tnbColors.length);

      // Tangents stay as-is
      const doubledTangents = [
        ...tangents,
        ...tangents
      ];

      // Normals and Binormals get duplicated with flipped second half
      const doubledNormals = [
        ...normals, 
        ...normals.map(n => n.clone().multiplyScalar(-1))
      ];

      const doubledBinormals = [
        ...binormals,
        ...binormals.map(b => b.clone().multiplyScalar(-1))
      ];

      const doubledCenterPositions = [
        ...centerPositions,
        ...centerPositions.map(p => p.clone())
      ];

      for (let i = 0; i < doubledNormals.length; i++) {
        const normal = doubledNormals[i];
        const binormal = doubledBinormals[i];
        const center = doubledCenterPositions[i] || centerPositions[i]; // use doubled center if exists

        if (normal instanceof THREE.Vector3 && binormal instanceof THREE.Vector3) {
          // Normal dot (Green)
          const nPos = center.clone().add(normal.clone().multiplyScalar(helperScale));
          tnbPositions.push(nPos.x, nPos.y, nPos.z);
          tnbColors.push(0, 1, 0);

          // Binormal dot (Blue)
          const bPos = center.clone().add(binormal.clone().multiplyScalar(helperScale));
          tnbPositions.push(bPos.x, bPos.y, bPos.z);
          tnbColors.push(0, 0, 1);
        }
      }


      // // Geometry for helper dot cloud
      // const tnbGeo = new THREE.BufferGeometry();
      // tnbGeo.setAttribute('position', new THREE.Float32BufferAttribute(tnbPositions, 3));
      // tnbGeo.setAttribute('color', new THREE.Float32BufferAttribute(tnbColors, 3));

      // // Material for helper vectors
      // const tnbMat = new THREE.PointsMaterial({ size: 0.12, vertexColors: true, depthWrite: false });

      // // Add helper vector dots to scene
      // const tnbPoints = new THREE.Points(tnbGeo, tnbMat);
      // scene.add(tnbPoints);

      // console.log("Doubled Centers: ", doubledCenterPositions.length);
      // console.log("Doubled Tangents: ", doubledTangents.length);
      // console.log("Doubled Binormals: ", doubledBinormals.length);
      // console.log("Doubled Normals: ", doubledNormals.length);

      // Handle window resizing
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      // Scene rendering function that moves the duck
      const fadeSpeed = 0.005;
      let delay = 100;
      const renderScene = () => {
        if (fadeMaterial.opacity > 0 && delay < 0) {
          fadeMaterial.opacity -= fadeSpeed;
          fadeMaterial.opacity = Math.max(fadeMaterial.opacity, 0);
        } else {
          delay -= 1;
        }
        if (duck && doubledCenterPositions.length > 1) {
          const delta = clock.getDelta();
          pathIndex += speed * delta;

          const len = doubledCenterPositions.length;
          const baseIndex = Math.floor(pathIndex);
          const idx0 = ((baseIndex % len) + len) % len;
          const idx1 = (idx0 + 1) % len;
          const t = pathIndex - baseIndex;

          const p0 = doubledCenterPositions[idx0];
          const p1 = doubledCenterPositions[idx1];

          // Interpolated position (stable)
          const pos = new THREE.Vector3().lerpVectors(p0, p1, t);

          // ===============================
          // PRECOMPUTED PARALLEL TRANSPORT FRAME (NO RUNTIME NORMAL COMPUTATION)
          // ===============================

          // Lerp precomputed orthogonal frame instead of recomputing geometry normals
          const T = new THREE.Vector3()
            .lerpVectors(doubledTangents[idx0], doubledTangents[idx1], t)
            .normalize()
            .multiplyScalar(-1); // flip direction
          const N = new THREE.Vector3().lerpVectors(doubledNormals[idx0], doubledNormals[idx1], t).normalize();
          const B = new THREE.Vector3().lerpVectors(doubledBinormals[idx0], doubledBinormals[idx1], t).normalize();

          // Re-orthonormalize ONCE (prevents drift but does NOT introduce noise)
          const Tn = T.clone().normalize();
          const Bn = new THREE.Vector3().crossVectors(Tn, N).normalize();
          const Nn = new THREE.Vector3().crossVectors(Bn, Tn).normalize();

          // Stable surface offset (uses consistent transported normal, not noisy geometric normal)
          const floatOffset = duckBoundingHeight * 0.25;
          const surfacePos = pos.clone().add(Nn.clone().multiplyScalar(floatOffset));
          duck.position.copy(surfacePos);

          // Debug helpers (now perfectly stable)
          tangentHelper.position.copy(pos);
          tangentHelper.setDirection(Tn);
          tangentHelper.setLength(2);

          normalHelper.position.copy(pos);
          normalHelper.setDirection(Nn);
          normalHelper.setLength(2);

          binormalHelper.position.copy(pos);
          binormalHelper.setDirection(Bn);
          binormalHelper.setLength(2);

          // ===============================
          // STABLE BASIS (MATCHES OBJ AXIS)
          // X = right (Bn)
          // Y = up (Nn)
          // Z = forward (Tn)
          // ===============================
          // If duck is sideways or flipped
          const basis = new THREE.Matrix4().makeBasis(Tn, Nn, Bn); // swap axes if needed
          const targetQuat = new THREE.Quaternion().setFromRotationMatrix(basis);

          // MUCH lower slerp to remove high-frequency jitter completely
          duck.quaternion.slerp(targetQuat, 0.08);
        }

        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      // Call the renderScene function to start the animation loop
      renderScene();

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      
    }
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;
