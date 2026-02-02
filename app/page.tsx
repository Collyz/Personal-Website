'use client';
import React, { useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Duck from '@/components/Duck';
import { OrbitTori } from '../components/ThreeVisuals';
import FadeInText from '../components/FadeInText';
import MobiusStrip from '@/components/MobiusStrip';
import { CameraHelper } from 'three';

export default function HomeContent() {

  // HINT STATE
  const [showHint, setShowHint] = useState(false);
  const interactedKey = 'mobius-interacted';

  useEffect(() => {
    const hasInteracted = localStorage.getItem(interactedKey);

    if (hasInteracted) return;

    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    const handleFirstInteraction = () => {
      localStorage.setItem(interactedKey, 'true');
      setShowHint(false);

      window.removeEventListener('pointerdown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };
  }, []);

  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">

        {/* Header */}
        <div className="flex items-center justify-center sm:flex-row sm:items-end gap-2 px-16 lg:px-32">
          <FadeInText
            text="Hi, I'm Mohammed, a Computer Scientist at LS Technologies"
            className="pt-16"
            additative={true}
          />
        </div>

        {/* Scene */}
        <div className="flex flex-col sm:flex-row gap-8">

          <div className="fixed inset-0 w-screen h-screen -z-1">

            {/* Hint Overlay */}
            {showHint && (
              <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
                <div className="bg-black/60 text-white px-6 py-3 rounded-xl text-lg backdrop-blur-md animate-pulse">
                  Tap or Click to Interact
                </div>
              </div>
            )}

            {/* Canvas */}
            <Canvas
              camera={{ position: [0, 0, 20], fov: 120 }}
              style={{ backgroundColor: 'transparent' }}
              onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0);
              }}
            >
              <ambientLight intensity={1} />
              <axesHelper args={[10]} />

              <directionalLight
                position={[5, 15, 0]}
                intensity={1}
              />
              <Duck
                scale={1.2}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
              />


              <OrbitControls
                enableDamping
                dampingFactor={0.04}
                rotateSpeed={0.6}
                zoomSpeed={0.8}
                panSpeed={0.5}
              />

              <MobiusStrip />
            </Canvas>

          </div>

        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" />
    </div>
  );
}


