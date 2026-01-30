'use client';
import React from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OrbitTori } from '../components/ThreeVisuals';
import FadeInText from '../components/FadeInText';


export default function HomeContent() {
  return (
    <div>
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
          <div className="flex items-center justify-center sm:flex-row sm:items-end gap-2 px-16 lg:px-32">
            <FadeInText text="Hi, I'm Mohammed, a Computer Scientist at LS Technologies" className='pt-16' additative={true}/>
            
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="fixed inset-0 w-screen h-screen -z-1">
              <Canvas
                camera={{ position: [0, 0, 40], fov: 120 }}
                style={{
                  backgroundColor: 'transparent',
                }}
                onCreated={({ camera }) => {
                  camera.lookAt(0, 0, 0);
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls enableDamping={true} enableRotate={true} />
                {/* <OrbitTori /> */}
              </Canvas>
            </div>

          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
    </div>
  );
}

