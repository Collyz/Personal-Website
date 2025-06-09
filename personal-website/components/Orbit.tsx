// components/Boat.tsx
'use client';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { group } from 'console';

export function SpinningCube() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="tomato" />
    </mesh>
  );
}

export function Spheres() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });
  return (
    <>
      <directionalLight position={[0, 20, 0]} intensity={2.3} />
      <directionalLight position={[0, -20, 0]} intensity={2.3} />
      <mesh position={[0, 0, 0]} ref={groupRef}>
        <torusGeometry args={[10, 3, 12, 40, Math.PI * 2]} />
        <meshStandardMaterial color="lightblue" wireframe={true}/>
      </mesh>
    </>
    

  );
}