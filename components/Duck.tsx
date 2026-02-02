'use client';

import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';
import * as THREE from 'three';

type DuckProps = {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export default function Duck({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: DuckProps) {

  /* ============================
     Load OBJ
  ============================ */

  const duck = useLoader(
    OBJLoader,
    '/models/Rubber_Derpy.obj'
  );

  /* ============================
     Apply Materials
  ============================ */

  useEffect(() => {

    duck.traverse((child) => {
      if (child instanceof THREE.Mesh) {

        const name = child.name;

        // Body
        if (name.includes("body")) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#f5c542', // Yellow
            roughness: 0.4,
            metalness: 0.1,
          });
        }
        // Eyes
        else {
          child.material = new THREE.MeshStandardMaterial({
            color: '#000000', // Black
            side: THREE.DoubleSide,
            roughness: 0.4,
            metalness: 0.5,
          });
        }

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [duck]);

  /* ============================
     Render
  ============================ */

  return (
    <primitive
      object={duck}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}
