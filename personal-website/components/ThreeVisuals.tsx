'use client';
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { start } from 'repl';
import { group } from 'console';


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
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const startTimeRef = useRef<number | null>(null);

// Updating the torus
useFrame(( { clock }) => {

    // Positions the torus in a circular orbit and applies local rotation on all axes
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

    if (startTimeRef.current === null) {
      startTimeRef.current = clock.getElapsedTime()
    }
    const elapsedTime = clock.getElapsedTime() - startTimeRef.current;

    // Controls opacity with a delay
    if (materialRef.current && elapsedTime > 2) {
      if (materialRef.current) {
        if (materialRef.current.opacity != 1) {
          materialRef.current.opacity += 0.005
        }
    }
    }

    
  });

  return(
    <mesh ref={meshRef} scale={scale} rotation={[0, startAngle, 0]}>
      <torusGeometry args={[7.5, 1.75, 16, 100]}/>
      <meshStandardMaterial ref={materialRef} color={color} wireframe={false} transparent opacity={0}/>
    </mesh>
  )
}

export function OrbitTori() {
  const groupRef = useRef<THREE.Group>(null)
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

    groupRef.current


  });

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.y = -7;
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
