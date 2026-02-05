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
      camera.position.set(0, 3, 12);
      camera.lookAt(0, 0, 0);
      // Renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
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

      // // Render the scene and camera
      // renderer.render(scene, camera);
      
      const renderScene = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };
      
      // Load the duck into the scene, color each body part and correct the surface normals on the eyes
      let duck = null;
      new OBJLoader().load('/models/Rubber_Derpy.obj', obj => {
        obj.scale.set(1, 1, 1);
        obj.traverse(child => {
          if (child instanceof THREE.Mesh) {
            if (child.name.includes('body')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xf5c542,
                roughness: 0.4,
                metalness: 0.2
              });
            } else {
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
        duck.rotateOnAxis(new THREE.Vector3(0, 1, 0), .7);
        duck.position.y -= 5;
        scene.add(duck);
      }); 

      // Create mobius strip dot cloud
      const positions = [];
      const colors = [];
      const segmentsU = 200;
      const segmentsV = 40;
      const centerJ = Math.floor(segmentsV / 2);
      const size = 8;
      const R = 1.2;
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
            colors.push(0, 0, 0);
          } else {
            colors.push(237/255, 52/255, 105/255); //237, 52, 105
          }
        }
      }
      const mobiusGeo = new THREE.BufferGeometry();
      mobiusGeo.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      mobiusGeo.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 3)
      );
      const mobiusMat = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true
      });
      const mobiusPoints = new THREE.Points(mobiusGeo, mobiusMat);
      scene.add(mobiusPoints);

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
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




// #############################################################################


// 'use client';

// import React, { useMemo } from 'react';
// import { Points, PointMaterial } from '@react-three/drei';

// type MobiusStripProps = {
//   size?: number;
//   segmentsU?: number;
//   segmentsV?: number;
// };

// export default function MobiusStrip({
//   size = 10,
//   segmentsU = 200,
//   segmentsV = 30,
// }: MobiusStripProps) {

//   const { positions, colors, arrows, frames } = useMemo(() => {

//     const positions: number[] = [];
//     const colors: number[] = [];

//     const centerPoints: THREE.Vector3[] = [];

//     const tangents: THREE.Vector3[] = [];
//     const normals: THREE.Vector3[] = [];
//     const binormals: THREE.Vector3[] = [];

//     const arrows: THREE.ArrowHelper[] = [];

//     const R = 1.2;
//     const centerJ = Math.floor(segmentsV / 2);


//     /* ===============================
//        Generate Points
//     =============================== */

//     for (let i = 0; i < segmentsU; i++) {

//       const u = (i / segmentsU) * 2 * Math.PI;

//       for (let j = 0; j <= segmentsV; j++) {

//         const v = (j / segmentsV) * 2 - 1;

//         const x = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
//         const y = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
//         const z = (v / 2) * Math.sin(u / 2);

//         const px = x * size;
//         const py = y * size - 1;
//         const pz = z * size;

//         const isCenter = j === centerJ;


//         // Save centerline
//         if (isCenter) {
//           centerPoints.push(new THREE.Vector3(px, py, pz));
//         }


//         // Positions
//         positions.push(px, py, pz);


//         // Colors
//         if (isCenter) {
//           colors.push(1, 1, 1); // white
//         } else {
//           colors.push(10, 209, 57); // cyan
//         }
//       }
//     }


//     /* ===============================
//        Compute Tangents (T)
//     =============================== */

//     for (let i = 0; i < centerPoints.length; i++) {

//       const prev =
//         centerPoints[(i - 1 + centerPoints.length) % centerPoints.length];

//       const next =
//         centerPoints[(i + 1) % centerPoints.length];

//       const tangent = new THREE.Vector3()
//         .subVectors(next, prev)
//         .normalize();

//       tangents.push(tangent);
//     }


//     /* ===============================
//        Compute Normals & Binormals
//     =============================== */

//     for (let i = 0; i < centerPoints.length; i++) {

//       const u = (i / segmentsU) * 2 * Math.PI;

//       // Small offset in V direction
//       const v = 1 / segmentsV;

//       const x2 = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
//       const y2 = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
//       const z2 = (v / 2) * Math.sin(u / 2);

//       const sidePoint = new THREE.Vector3(
//         x2 * size,
//         y2 * size - 1,
//         z2 * size
//       );


//       // V direction
//       const tangentV = new THREE.Vector3()
//         .subVectors(sidePoint, centerPoints[i])
//         .normalize();


//       // Normal = T × V
//       const normal = new THREE.Vector3()
//         .crossVectors(tangents[i], tangentV)
//         .normalize();

//       normals.push(normal);


//       // Binormal = T × N
//       const binormal = new THREE.Vector3()
//         .crossVectors(tangents[i], normal)
//         .normalize();

//       binormals.push(binormal);
//     }


//     /* ===============================
//        Build ArrowHelpers (TNB)
//     =============================== */

//     for (let i = 0; i < centerPoints.length; i += 6) {

//       const p = centerPoints[i];

//       // Tangent (Red)
//       arrows.push(
//         new THREE.ArrowHelper(
//           tangents[i],
//           p,
//           0.8,
//           0xff0000
//         )
//       );

//       // Normal (Green)
//       arrows.push(
//         new THREE.ArrowHelper(
//           normals[i],
//           p,
//           0.8,
//           0x00ff00
//         )
//       );

//       // Binormal (Blue)
//       arrows.push(
//         new THREE.ArrowHelper(
//           binormals[i],
//           p,
//           0.8,
//           0x0000ff
//         )
//       );
//     }


//     return {
//       positions: new Float32Array(positions),
//       colors: new Float32Array(colors),
//       arrows,
//       frames: {
//         points: centerPoints,
//         tangents,
//         normals,
//         binormals,
//       }
//     }; 
    
//   }, [size, segmentsU, segmentsV]);


//   /* ===============================
//      Render
//   =============================== */

//   return (
//     <>
//       {/* Point Cloud */}
//       <Points positions={positions} colors={colors} stride={3}>
//         <PointMaterial
//           transparent
//           vertexColors
//           size={0.08}
//           sizeAttenuation
//           depthWrite={false}
//         />
//       </Points>

//       {/* Frenet Frame Arrows */}
//       {arrows.map((arrow, i) => (
//         <primitive key={i} object={arrow} />
//       ))}
//     </>
//   );
// }
