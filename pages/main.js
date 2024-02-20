import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Text } from 'troika-three-text';

// Canvas sizing
const resizingDiv = document.getElementById('scene_div');
const canvas = document.getElementById('scene');
let divWidth = resizingDiv.clientWidth; 

// INSTANTIATIONS
const resize_scale = 1.3;
const scene = new THREE.Scene(0xffffff);                                                                   // SCENE
const camera = new THREE.PerspectiveCamera( 70, divWidth / window.innerHeight, 0.1, 500);        // CAMERA
const renderer = new THREE.WebGLRenderer({// RENDERER
	antialias: true,
	alpha: true,
	canvas: document.querySelector('#scene')
});


// Renderer pixel ratio, size, and add to DOM, camera position and angle
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( divWidth, window.innerHeight / resize_scale);
camera.position.set(-10, 50, 130);
camera.lookAt(0, 0, 0)

// Scene background
scene.background = new THREE.Color(0x003e29);

// TEXT
const text1 = new Text();
text1.text = 'Lake-Fred';
text1.fontSize = 10;
text1.position.set(-10, 20, -30);
text1.color = 0xE34234;
scene.add(text1);

// GLTF (Lake Model) import and creation
const gltfloader = new GLTFLoader();     
let lake;
gltfloader.load(
	//resource url
	"../assets/models/lake2.glb",
	//called when the resource is loaded
	function( gltf ){
		lake = gltf.scene;          // Store the THREE.Scene to use elsewhere
		lake.position.set(0, 0, 0);
		scene.add( gltf.scene );
	},
	// Called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// Called when loading has errors
	function ( error ) {
		console.log( error );
	}
);

// LIGHTS
const light1 = new THREE.DirectionalLight(0xffffff, 3);
const light2 = new THREE.DirectionalLight(0xffffff, 3);
const light3 = new THREE.PointLight(0xffffff, 5000);
const light4 = new THREE.PointLight(0xffffff, 5000);
const light5 = new THREE.AmbientLight(0xffffff, 1);
light3.name = 'Point_Light_1';
light4.name = 'Point_Light_2';
light5.name = 'Ambient_Light';
// LIGHTS POSITION
light1.position.set(0, 20, 0);
light2.position.set(0, -20, 0);
light3.position.set(0, 50, 0);
light4.position.set(0, -60, 0);
light5.position.set(0, 50, 0);

// LIGHT HELPERS
const helper1 = new THREE.DirectionalLightHelper(light1);
const helper2 = new THREE.DirectionalLightHelper(light2);
const helper3 = new THREE.PointLightHelper(light3);
const helper4 = new THREE.PointLightHelper(light4);
scene.add(light3, light4, light5);

// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);           // Orbit controls
controls.enableDamping = true;
controls.autoRotate = false;

// RENDER/ANIMATION LOOP (Called normally 60 times per second)
function update() {
	requestAnimationFrame( update );
    //Add anything here to do stuff to box before rendering
	light3.position.x = Math.sin(Date.now() / 500) / 2 * 150;
	light4.position.x = Math.sin(Date.now() / 500) / 2 * 150;
	controls.update();                                                    // Update oribital controls
	renderer.render( scene, camera );                                     // Update renderer
}

// RESIZING
window.addEventListener('resize', onWindowResize, false);                 // Window event listener calls the resizing function
function onWindowResize(){
	// Changing the camera aspect ratio and renderer
	divWidth = resizingDiv.clientWidth;
	camera.aspect = divWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(divWidth, window.innerHeight/resize_scale);
}

// Toggle lights
const button2 = document.querySelector('#light_toggle');
button2.addEventListener('click', () => {
    if(scene.getObjectByName('Point_Light_1') && scene.getObjectByName('Point_Light_2')){
		scene.remove(light3);
		scene.remove(light4);
		scene.add(light1);
		scene.add(light2);
	}else{
		scene.remove(light1);
		scene.remove(light2);
		scene.add(light3);
		scene.add(light4);
	}
});

const button3 = document.querySelector('#reset_camera');
button3.addEventListener('click', () => {
	controls.reset();
});

const checkbox1 = document.getElementById('cam_spin');
checkbox1.addEventListener('click', function() {
	if(checkbox1.checked){
		controls.autoRotate = true;
	}else{
		controls.autoRotate = false;
	}
});

// Update
update();