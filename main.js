import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Text } from 'troika-three-text';

// INSTANTIATIONS
const scene = new THREE.Scene(0xffffff);                                                                   // SCENE
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);        // CAMERA
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});                                  // RENDERER

// Renderer pixel ratio, size, and adding to DOM
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
// Camera pos
camera.position.set(-130, 70, 200);
// Scene background
scene.background = new THREE.Color(0xAFE2BA);



// GLTF (Lake Model) import and creation
const gltfloader = new GLTFLoader();     
let lake;
gltfloader.load(
	//resource url
	"./assets/models/lake2.glb",
	//called when the resource is loaded
	function( gltf ){
		
		lake = gltf.scene;          // Store the THREE.Scene to use elsewhere
		lake.position.set(15, 0, 0);
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

// IMAGE import and drawing
const imageLoader = new THREE.ImageLoader();
imageLoader.load(
	// resource URL
	'./assets/images/website-qr.png',
	function ( image ){
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		context.drawImage( image, 100, 100);
	},
	undefined,
	function(){
		console.error('An error happened');
	}
);


// TORUS
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);                 //Defines Points, Vertices, Faces. etc
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true} );     //Material for the torus
const donut = new THREE.Mesh( geometry, material );                        //Actual mesh object that connects the geometry and gives a material look to it
//scene.add(donut);                                                          //Adding the torus to the scene

// TEXT
const test1 = new Text();
test1.text = 'Lake-Fred';
test1.fontSize = 10;
test1.position.set(-10, 20, -100);
test1.color = 0x6f08ff;
scene.add(test1);


// LIGHTS
const light1 = new THREE.DirectionalLight(0xffffff, 1);
const light2 = new THREE.DirectionalLight(0xffffff, 1);
const light3 = new THREE.PointLight(0xffffff, 4000);
const light4 = new THREE.PointLight(0xffffff, 4000);
light3.name = 'Point_Light_1';
light4.name = 'Point_Light_2';
// LIGHTS POSITION
light1.position.set(0, 20, 0);
light2.position.set(0, -20, 0);
light3.position.set(0, 50, 0);
light4.position.set(0, -60, 0);
// LIGHT HELPERS
const helper1 = new THREE.DirectionalLightHelper(light1);
const helper2 = new THREE.DirectionalLightHelper(light2);
const helper3 = new THREE.PointLightHelper(light3);
const helper4 = new THREE.PointLightHelper(light4);
scene.add(light3, light4, helper3, helper4);

// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);           // Orbit controls
controls.enableDamping = true;
controls.autoRotate = true;

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
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

// Toggle wireframe
const button1  = document.querySelector('#wireframe_toggle');
button1.addEventListener('click', () => {
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

// Toggle lights
const button2 = document.querySelector('#light_toggle');
button2.addEventListener('click', () => {
    if(scene.getObjectByName('Point_Light_1') && scene.getObjectByName('Point_Light_2')){
		scene.remove(light3);
		scene.remove(light4);
		scene.add(light1);
		scene.add(light2);
		update();
	}else{
		scene.remove(light1);
		scene.remove(light2);
		scene.add(light3);
		scene.add(light4);
		update();
	}
});

const button3 = document.querySelector('#reset_camera');
button3.addEventListener('click', () => {
	controls.reset();
});

const button4 = document.querySelector('#zoom_camera');
button4.addEventListener('click', () => {
	controls.reset();
	camera.position.set(-50, 40, 100);
});


// Update
update();