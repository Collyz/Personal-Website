import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// INSTANTIATIONS
const scene = new THREE.Scene(0xffffff);                                                                   // SCENE
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);        // CAMERA
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});                                               // RENDERER
const gltfloader = new GLTFLoader();                                                                       // GLTF Loader
//const textLoader = new TextLoader();

// Renderer pixel ratio, size, and adding to DOM
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
// Camera pos
camera.position.set(0, 30, 70);
// Scene background
scene.background = new THREE.Color(0xAFE2BA);

// GLTF (Lake Model) import and creation
gltfloader.load(
	//resource url
	"./assets/lake.glb",
	//called when the resource is loaded
	function( gltf ){
		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// Called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// Called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);


// TORUS
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);                //Defines Points, Vertices, Faces. etc
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347} );     //Material for the torus
const donut = new THREE.Mesh( geometry, material );                        //Actual mesh object that connects the geometry and gives a material look to it
scene.add(donut);                                                          //Adding the torus to the scene


// LIGHTS
const directionalLight1 = new THREE.DirectionalLight(0xffffff, .35);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, .45);
// LIGHTS POSITION
directionalLight1.position.set(0, 20, 0);
directionalLight2.position.set(0, -20, 0);
// LIGHT HELPERS
const directionalLightHelper1 = new THREE.DirectionalLightHelper(directionalLight1);
const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2);
scene.add(directionalLight1, directionalLight2, directionalLightHelper1, directionalLightHelper2);


// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);           // Orbit controls


// Render/Animate loop (Called normally 60 times per second)
function update() {
	requestAnimationFrame( update );

	donut.rotation.x += 0.01;                                             // Rotate torus x
	donut.rotation.y += 0.01;                                             // Rotate torus y

	controls.update();                                                    // Update oribital controls
	renderer.render( scene, camera );                                     // Update renderer
}

// Resizing
window.addEventListener('resize', onWindowResize, false);                 // Window event listener calls the resizing function
function onWindowResize(){
	// Changing the camera aspect ratio and renderer
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

// Update
update();