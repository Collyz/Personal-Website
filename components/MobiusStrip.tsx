'use client';

import React, { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

type MobiusStripProps = {
  size?: number;      // Overall scale (default 10)
  segmentsU?: number; // Resolution around strip
  segmentsV?: number; // Width resolution
};

export default function MobiusStrip({
  size = 10,
  segmentsU = 200,
  segmentsV = 30,
}: MobiusStripProps) {
  const points = useMemo(() => {
    const positions: number[] = [];

    const R = 1.2; // Base radius

    for (let i = 0; i < segmentsU; i++) {
      const u = (i / segmentsU) * 2 * Math.PI; // 0 → 2π

      for (let j = 0; j <= segmentsV; j++) {
        const v = (j / segmentsV) * 2 - 1; // -1 → 1 

        // Parametric equations
        const x = (R + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
        const y = (R + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
        const z = (v / 2) * Math.sin(u / 2);

        // Scale
        positions.push(
          x * size,
          y * size,
          z * size
        );
      }
    }

    return new Float32Array(positions);
  }, [size, segmentsU, segmentsV]);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
