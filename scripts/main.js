import * as THREE from 'three';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// Setting the Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth/1.2, window.innerHeight/1.2 );
document.body.appendChild( renderer.domElement );
//GLTF Loader
//const loader = new GLTFLoader();

//Addding a torus
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); //Defines Points, Vertices, Faces. etc
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347} ); //Material for the torus
const donut = new THREE.Mesh( geometry, material ); //Actual mesh object that connects the geometry and gives a material look to it
scene.add(donut); //Adding the torus to the scene

camera.position.z = 30; //Prevents the camera and the torus spawning in one another, moves the camera up

// Render/Animate loop (Called normally 60 times per second)
function animate() {
	requestAnimationFrame( animate );
    //Add anything here to do stuff to box before rendering
	// Rotate the torus
	donut.rotation.x += 0.01;
	donut.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();