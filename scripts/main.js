import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setting the SCENE, CAMERA, and RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Positioning the camera appropriately
camera.position.setZ(60); 
camera.position.setY(20);


//GLTF Loader
const loader = new GLTFLoader();
loader.load(
	//resource url
	'/assets/delauney_reverse_color.glb',
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
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );                //Defines Points, Vertices, Faces. etc
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347} );     //Material for the torus
const donut = new THREE.Mesh( geometry, material );                        //Actual mesh object that connects the geometry and gives a material look to it
//scene.add(donut);                                                        //Adding the torus to the scene

// LIGHTS
// Fixed-point lightbulb
const pointLight1 = new THREE.PointLight(0xffffff, 1300);                   
const pointLight2 = new THREE.PointLight(0xffffff, 1300);
pointLight1.position.set(0, 20, 0);
pointLight2.position.set(0, -20, 0);

const temp = new THREE.DirectionalLight(0xffffff, );
const tempHelper = new THREE.DirectionalLightHelper(temp);
scene.add(temp, tempHelper);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0000);             // Universal light
scene.add(pointLight1, pointLight2);                                       // Removed ambient light

const lightHelper1 = new THREE.PointLightHelper(pointLight1);               // Show location for fixed-point light
const lightHelper2 = new THREE.PointLightHelper(pointLight2);
const gridHelper = new THREE.GridHelper(200, 50);                          // Show grid
scene.add(lightHelper1, lightHelper2);                                                    // Removed gridHelper

const controls = new OrbitControls(camera, renderer.domElement);           // Orbit controls


// Render/Animate loop (Called normally 60 times per second)
function animate() {
	requestAnimationFrame( animate );
    //Add anything here to do stuff to box before rendering
	donut.rotation.x += 0.01;                                             // Rotate torus x
	donut.rotation.y += 0.01;                                             // Rotate torus y

	controls.update();                                                    // Update oribital controls
	renderer.render( scene, camera );                                     // Update renderer
}

animate();