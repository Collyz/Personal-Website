import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Text } from 'troika-three-text';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

// Canvas sizing
const resizingDiv = document.getElementById('card-div');
const canvas = document.getElementById('card-scene');
let divWidth = resizingDiv.clientWidth; 
let divHeight = resizingDiv.clientHeight;
console.log(divHeight);

// INSTANTIATIONS
const resize_scale = 1.3;
const scene = new THREE.Scene(0xffffff);                                                                   // SCENE
const camera = new THREE.PerspectiveCamera( 70, divWidth / divHeight, 0.1, 500);        // CAMERA
const renderer = new THREE.WebGLRenderer({// RENDERER
	antialias: true,
	alpha: true,
	canvas: document.querySelector('#card-scene')
});

// Renderer pixel ratio, size, and add to DOM, camera position and angle
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( divWidth, divHeight);
camera.position.set(0, 0, 25);
camera.lookAt(0, 0, 0)

// Scene background
scene.background = new THREE.Color(0x5d8c68);

// LIGHTS
const light1 = new THREE.DirectionalLight(0xffffff, 2.3);
const light2 = new THREE.DirectionalLight(0xffffff, 2.3);

// LIGHTS POSITION
light1.position.set(0, 20, 0);
light2.position.set(0, -20, 0);

// LIGHT HELPERS
const helper1 = new THREE.DirectionalLightHelper(light1);
const helper2 = new THREE.DirectionalLightHelper(light2);
scene.add(light1);

// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);           // Orbit controls
controls.enableDamping = true;
controls.autoRotate = false;

// TORUS (i.e. donut)
let radGrow = -1;  // Initial growth direction (shrinking)
let radius = 10;  // Initial radius

let tubeGrow = -1;
let tube = 3;

let radSegGrow = 1;
let radialSegments = 12;

let tubeSegGrow = -1;
let tubularSegments = 40;

let arcGrow = -1;
let arc = Math.PI * 2;

const torusGeo = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
const torusMat = new THREE.MeshBasicMaterial({color: 0x156289});
const torus = new THREE.Mesh(torusGeo, torusMat);

// Wireframe material for the torus
const wireframeMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});
const torusWireframe = new THREE.Mesh(torusGeo, wireframeMat);

// Add both the solid and wireframe torus to the scene
scene.add(torus);
scene.add(torusWireframe);


const MAX_RAD = 10;
const MIN_RAD = 5;

const MAX_TUBE = 3;
const MIN_TUBE = 2;

const MIN_RAD_SEG = 3;
const MAX_RAD_SEG = 20

const MAX_TUBE_SEG = 100;
const MIN_TUBE_SEG = 3;

const MAX_ARC = Math.PI * 2;
const MIN_ARC = Math.PI - (Math.PI- 0.5);

// Function to update the TorusGeometry
function updateTorusGeometry(newRadius, newTube, newRadSegments, newTubeSegments, newArc) {
    const newGeometry = new THREE.TorusGeometry(newRadius, newTube, newRadSegments, newTubeSegments, newArc);
    torus.geometry.dispose();  // Dispose of the old geometry
    torus.geometry = newGeometry;  // Set the new geometry
    torusWireframe.geometry.dispose();
    torusWireframe.geometry = newGeometry;
}


// setTimeout(() => {
//     updateTorusGeometry(Math.PI * 2);
// }, 2000);

// Example: Update the arc to Math.PI * 2 after 2 seconds
let rSpeed = 0.005;
// RENDER/ANIMATION LOOP (Called normally 60 times per second)
function update() {
	requestAnimationFrame( update );
    // Update the torus
    radius += radGrow * 0.01;
    if (radius >= MAX_RAD || radius <= MIN_RAD) {
        radGrow *= -1;  // Reverse the growth direction
    }

    tube += tubeGrow * 0.01;
    if(tube >= MAX_TUBE || tube <= MIN_TUBE){
        tubeGrow *= -1;
    }

    radialSegments += radSegGrow * 0.01;
    if(radialSegments >= MAX_RAD_SEG || radialSegments <= MIN_RAD_SEG){
        radSegGrow *= -1;
    }

    tubularSegments += tubeSegGrow * 0.01;
    if(tubularSegments >= MAX_TUBE_SEG || tubularSegments <= MIN_TUBE_SEG){
        tubeSegGrow *= -1;
    }
    
    arc += arcGrow * 0.01;
    if(arc >= MAX_ARC || arc <= MIN_ARC){
        arcGrow *= -1;
    }

    // Update the torus geometry
    updateTorusGeometry(radius, tube, radialSegments, tubularSegments, arc);

    // TORUS SPIN
    torus.rotation.x += rSpeed;
    torus.rotation.y += rSpeed;
    torusWireframe.rotation.x += rSpeed;
    torusWireframe.rotation.y += rSpeed;
	controls.update();                                                    // Update oribital controls
	renderer.render( scene, camera );                                     // Update renderer
}

// RESIZING
window.addEventListener('resize', onWindowResize, false);                 // Window event listener calls the resizing function
function onWindowResize(){
	// Changing the camera aspect ratio and renderer
	divWidth = resizingDiv.clientWidth;
    divHeight = resizingDiv.clientHeight
    console.log(divHeight);
	camera.aspect = divWidth / divHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(divWidth, divHeight);
}


// Toggle Wireframe
const button1 = document.querySelector('#wireframe_toggle');
button1.addEventListener('click', () =>{
	lake.traverse((obj) => {
		if(obj.isMesh && obj.material instanceof THREE.MeshStandardMaterial){
			if (obj.material.wireframe){
				obj.material.wireframe = false;
			}else{
				obj.material.wireframe = true;
			}
		}
	});
});


// Update
update();