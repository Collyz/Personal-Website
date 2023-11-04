import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setting the Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.setZ(30); //Prevents the camera and the torus spawning in one another, moves the camera up


//GLTF Loader
const loader = new GLTFLoader();
loader.load(
	//resource url
	'/Models/delauney_reverse.glb',
	//called when the resource is loaded
	function( gltf ){

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
//Addding a torus
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); //Defines Points, Vertices, Faces. etc
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347} ); //Material for the torus
const donut = new THREE.Mesh( geometry, material ); //Actual mesh object that connects the geometry and gives a material look to it
scene.add(donut); //Adding the torus to the scene

//Adding a light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 0)

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0000);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);




// Render/Animate loop (Called normally 60 times per second)
function animate() {
	requestAnimationFrame( animate );
    //Add anything here to do stuff to box before rendering
	// Rotate the torus
	donut.rotation.x += 0.01;
	donut.rotation.y += 0.01;

	controls.update();
	renderer.render( scene, camera );
}

animate();