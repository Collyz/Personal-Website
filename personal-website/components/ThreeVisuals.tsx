'use client';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { start } from 'repl';


export function AnimatedTorus({
  angleRef,
  radiusRef,
  color='lightblue', 
  scale=.75,
  startAngle = 0
}: {
  radiusRef: React.RefObject<number>;
  angleRef: React.RefObject<number>;
  scale?: number;
  color?: string;
  startAngle?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

// Updating the torus
useFrame(() => {
    if (meshRef.current) {
      const angle = angleRef.current;
      const radius = radiusRef.current;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      meshRef.current.position.set(x, y, 0);
      meshRef.current.rotation.y += .01;
      meshRef.current.rotation.z += .005;
      meshRef.current.rotation.x += .01;
    }
  });

  return(
    <mesh ref={meshRef} scale={scale} rotation={[0, startAngle, 0]}>
      <torusGeometry args={[7.5, 1.75, 16, 100]}/>
      <meshStandardMaterial color={color} wireframe={false}/>
    </mesh>
  )
}

export function OrbitTori() {
  const groupRef = useRef<THREE.Group>(null);
  const count = useRef(120);
  const radiusRef = useRef(12);
  const orbitDirection = useRef(-1);

  const angleRefs = useMemo(
    () =>
      Array.from({ length: count.current }).map((_, i) => ({
        current: (i / count.current) * Math.PI * 2,
      })),
    [count]
  );

  useFrame(() => {
    radiusRef.current += 0.05 * orbitDirection.current;
    if (radiusRef.current >= 15 || radiusRef.current <= 2) {
      orbitDirection.current *= -1;
    }
    if (groupRef.current) {
      groupRef.current.rotateZ(0.005);
    }
  });

  return (
    <group ref={groupRef}>
      {angleRefs.map((angleRef, i) => (
        <AnimatedTorus
          key={i}
          angleRef={angleRef}
          radiusRef={radiusRef}
          color={`hsl(${i * 3}, 80%, 60%)`}
          startAngle={(i / angleRefs.length) * Math.PI * 2}
        />
      ))}
    </group>
  );
}
