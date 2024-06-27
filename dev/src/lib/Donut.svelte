<script>
    export let title = "empty";
    export let text = "empty";
    export let link = "#";
    import { onMount } from 'svelte';
    // @ts-ignore
    import * as THREE from 'three';
    // @ts-ignore
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

    let isMenuOpen = false;
    // @ts-ignore
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    let divWidth = 350;
    let divHeight = 160;
    let resizingDiv;
    let canvas;

    onMount(() => {
        resizingDiv = document.getElementById('card-div');
        divWidth = resizingDiv.clientWidth; 
        canvas = document.getElementById('card-scene');

        // INSTANTIATIONS
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        const camera = new THREE.PerspectiveCamera(70, divWidth / divHeight, 0.1, 500);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            canvas: canvas
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(divWidth, divHeight);
        // @ts-ignore
        camera.position.set(0, 0, 25);
        camera.lookAt(0, 0, 0);

        scene.background = new THREE.Color(0x5d8c68);

        const light1 = new THREE.DirectionalLight(0xffffff, 2.3);
        const light2 = new THREE.DirectionalLight(0xffffff, 2.3);
        // @ts-ignore
        light1.position.set(0, 20, 0);
        // @ts-ignore
        light2.position.set(0, -20, 0);
        scene.add(light1);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = false;

        const torusGeo = new THREE.TorusGeometry(10, 3, 12, 40, Math.PI * 2);
        const torusMat = new THREE.MeshBasicMaterial({ color: 0x156289 });
        const torus = new THREE.Mesh(torusGeo, torusMat);

        const wireframeMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        });
        const torusWireframe = new THREE.Mesh(torusGeo, wireframeMat);

        scene.add(torus);
        scene.add(torusWireframe);

        let rSpeed = 0.005;

        // @ts-ignore
        function updateTorusGeometry(newRadius, newTube, newRadSegments, newTubeSegments, newArc) {
            const newGeometry = new THREE.TorusGeometry(newRadius, newTube, newRadSegments, newTubeSegments, newArc);
            torus.geometry.dispose();
            torus.geometry = newGeometry;
            torusWireframe.geometry.dispose();
            torusWireframe.geometry = newGeometry;
        }

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
                const MAX_RAD = 10;
        const MIN_RAD = 5;

        const MAX_TUBE = 3;
        const MIN_TUBE = 2;

        const MIN_RAD_SEG = 3;
        const MAX_RAD_SEG = 20

        const MIN_TUBE_SEG = 3;
        const MAX_TUBE_SEG = 50;

        const MAX_ARC = Math.PI * 2;
        const MIN_ARC = Math.PI - (Math.PI- 0.5);
        function update() {
            requestAnimationFrame(update);
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
            // @ts-ignore
            torus.rotation.x += rSpeed;
            // @ts-ignore
            torus.rotation.y += rSpeed;
            // @ts-ignore
            torusWireframe.rotation.x += rSpeed;
            // @ts-ignore
            torusWireframe.rotation.y += rSpeed;
            controls.update();
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            divWidth = resizingDiv.clientWidth;
            camera.aspect = divWidth / divHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(divWidth, divHeight);
        }

        update();
    });
</script>
<div class="text-center text-wrap">
    {#if link === "#"}
    <h1 class="text-2xl underline pb-5">{title}</h1> 
    {:else}
    <h1 class="text-xl underline pb-5"><a class="hover:opacity-55" href="{link}">{title}
        <svg xmlns="http://www.w3.org/2000/svg" class='w-5 h-5 inline-block' viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd">
            <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g>
        </svg>
        </a>
        </h1>
    {/if}
    
    <div class="border rounded-lg text-center text-wrap p-2">
        <div class="border rounded-lg text-center bg-green-800 opacity-90 min-h-[350px] p-5">
            <div id="card-div" class="mt-1 border" style="max-height: 162px; min-height: 162px;">
                <canvas id="card-scene"></canvas>
            </div>
            <p class="pt-5">{@html text}</p>
        </div>
        
    </div>
</div>