'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

type MobiusStripProps = {
  size?: number;
  segmentsU?: number;
  segmentsV?: number;
};

export default function MobiusStrip({
  size = 20,
  segmentsU = 200,
  segmentsV = 40,
}: MobiusStripProps) {
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const indices: number[] = [];

    const R = 1;

    // Generate vertices
    for (let i = 0; i <= segmentsU; i++) {
      const u = (i / segmentsU) * Math.PI * 2;
      for (let j = 0; j <= segmentsV; j++) {
        const v = (j / segmentsV) * 2 - 1;
        const x = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
        const y = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
        const z = (v / 2) * Math.sin(u / 2);

        positions.push(
          x * size,
          y * size,
          z * size
        );
      }
    }

    // Generate faces (indices)
    const vertsPerRow = segmentsV + 1;

    for (let i = 0; i < segmentsU; i++) {
      for (let j = 0; j < segmentsV; j++) {
        const a = i * vertsPerRow + j;
        const b = (i + 1) * vertsPerRow + j;
        const c = (i + 1) * vertsPerRow + (j + 1);
        const d = i * vertsPerRow + (j + 1);

        // Two triangles per quad
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    geometry.setIndex(indices);

    geometry.computeVertexNormals();

    return geometry;
  }, [size, segmentsU, segmentsV]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color="#db603a"
        side={THREE.DoubleSide} // Change to make one sided or double sided
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}
