'use client';

import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

type MobiusWalkerProps = {
  size?: number;
  speed?: number;
  v?: number; // Position across width (-1 to 1)
};

export default function MobiusWalker({
  size = 10,
  speed = 0.3,
  v = 0, // Center by default
}: MobiusWalkerProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  let u = 0;

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Move forward
    u += delta * speed;

    // Keep looping
    const t = u % (Math.PI * 2);

    const R = 1;

    // Parametric position
    const x =
      (R + (v / 2) * Math.cos(t / 2)) * Math.cos(t);

    const y =
      (R + (v / 2) * Math.cos(t / 2)) * Math.sin(t);

    const z =
      (v / 2) * Math.sin(t / 2);

    meshRef.current.position.set(
      x * size,
      y * size,
      z * size
    );
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
