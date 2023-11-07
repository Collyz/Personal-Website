import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { randFloat } from 'three/src/math/MathUtils';

// INSTANTIATIONS
const scene = new THREE.Scene(0xffffff);                                                                   // SCENE
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);        // CAMERA
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});                                  // RENDERER
const gltfloader = new GLTFLoader();                                                                       // GLTF Loader
//const textLoader = new TextLoader();

// Renderer pixel ratio, size, and adding to DOM
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
// Camera pos
camera.position.set(-50, 40, 100);
// Scene background
scene.background = new THREE.Color(0xAFE2BA);



// GLTF (Lake Model) import and creation
let lake;
gltfloader.load(
	//resource url
	"./assets/models/lake.glb",
	//called when the resource is loaded
	function( gltf ){
		lake = gltf.scene;          // Store the THREE.Scene to use elsewhere
		scene.add( gltf.scene );
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
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);                 //Defines Points, Vertices, Faces. etc
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true} );     //Material for the torus
const donut = new THREE.Mesh( geometry, material );                        //Actual mesh object that connects the geometry and gives a material look to it
scene.add(donut);                                                          //Adding the torus to the scene


// LIGHTS
const light1 = new THREE.DirectionalLight(0xffffff, .45);
const light2 = new THREE.DirectionalLight(0xffffff, .45);
const light3 = new THREE.PointLight(0xffffff, 1000);
// LIGHTS POSITION
light1.position.set(0, 20, 0);
light2.position.set(0, -20, 0);
light3.position.set(10, 20, 30);
// LIGHT HELPERS
const helper1 = new THREE.DirectionalLightHelper(light1);
const helper2 = new THREE.DirectionalLightHelper(light2);
const helper3 = new THREE.PointLightHelper(light3);
scene.add(light2, light3, helper1, helper2, helper3);


// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);           // Orbit controls



// Render/Animate loop (Called normally 60 times per second)
function update() {
	requestAnimationFrame( update );
    //Add anything here to do stuff to box before rendering
	// light1.position.x += 0.1;
	// light1.position.y += 0.1;
	// light1.position.z += 0.1;
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

// Toggle wireframe
const originalColor = 0x63FF28;
const button  = document.querySelector('button');
button.addEventListener('click', () => {
    lake.traverse((o) => {
        if (o.isMesh && o.material instanceof THREE.MeshStandardMaterial) {
            if (o.material.wireframe) {
                o.material.wireframe = false;
            } else {
                o.material.wireframe = true;
            }
        }
    });
});



// Update
update();