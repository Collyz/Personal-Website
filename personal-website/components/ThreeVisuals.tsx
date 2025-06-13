'use client';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type TorusProps = {
  startAngle?: [number, number, number],
  radius?: number
  color?: string ,
  scale?: number ,
  position?: [number, number, number]
}

export function AnimatedTorus({
  startAngle = [0, 0, 0],
  radius = 3,
  color='lightblue', 
  scale=.75,
  position=[0, 0, 0]
}: TorusProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Torus parameter state
  const radiusRef = useRef(10);
  const tubeRef = useRef(3);
  const radialSegmentsRef = useRef(12);
  const tubularSegmentsRef = useRef(40);
  const arcRef = useRef(Math.PI * 2);

  // Direction refs
  const radGrow = useRef(-1);
  const tubeGrow = useRef(-1);
  const radSegGrow = useRef(1);
  const tubeSegGrow = useRef(-1);
  const arcGrow = useRef(-1);
  
  // Updating the values
  useFrame(() => {
    // Inner radius update
    // const radius = (radiusRef.current += radGrow.current * 0.01);
    // if (radius >= 10 || radius <= 7) radGrow.current *= -1;

    const radius = radiusRef.current;

    // Tube radius update
    // const tube = (tubeRef.current += tubeGrow.current * 0.001);
    // if (tube >= 3 || tube <= 2) tubeGrow.current *= -1;
    const tube = tubeRef.current;
    // Radial segments update
    const radialSegments = (radialSegmentsRef.current += radSegGrow.current * 0.001);
    if (radialSegments >= 30 || radialSegments <=10) radSegGrow.current *= -1;

    // Tube Segments update 
    // const tubularSegments = (tubularSegmentsRef.current += tubeSegGrow.current * 0.01);
    // if (tubularSegments >= 50 || tubularSegments <= 3) tubeSegGrow.current *= -1;
    const tubularSegments = tubularSegmentsRef.current;

    // Torus Arc update
    // const arc = (arcRef.current += arcGrow.current * 0.01);
    // if (arc >= Math.PI * 2 || arc <= Math.PI - (Math.PI - 0.5)) arcGrow.current *= -1;

    const arc = arcRef.current

    // Updating the torus geometry
    if (meshRef.current) {
      const newGeom = new THREE.TorusGeometry(
        radius, 
        tube,  
        Math.round(radialSegments), 
        Math.round(tubularSegments), 
        arc
      );

      meshRef.current.geometry.dispose();
      meshRef.current.geometry = newGeom;

      // Spin
      // meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.z += 0.005;
      // meshRef.current.rotation.y += 0.010;
    }
  });

  return(
    <mesh ref={meshRef} scale={scale} rotation={startAngle} position={position}>
      <torusGeometry args={[10, 3, 12, 40, Math.PI * 2]} />
      <meshStandardMaterial color={color} wireframe={true}/>
    </mesh>
  )
}