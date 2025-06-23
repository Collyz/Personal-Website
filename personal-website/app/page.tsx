'use client';
import React, { ReactNode} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OrbitTori } from '../components/ThreeVisuals';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';



export default function HomeContent() {
  const oceanRef = React.useRef<any>(null);
  return (
  
  <div>
    <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="site-intro-header flex items-center justify-center sm:flex-row sm:items-end gap-2 px-16 lg:px-32">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1.8, ease: "easeOut" }}
            className="text-2xl lg:text-4xl">
              I'm Mohammed Mowla, a Computer Scientist at the FAA
          </motion.h1>
          <h1 className="text-2xl lg:text-4xl"></h1>     
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          {/* <Card
            title="About Me"
            description="Learn more about my background and interests."
            href="/about"
          />
          <Card
            title="Projects"
            description="Explore my projects and contributions."
            href="/projects"
          />
          <Card
            title="Contact"
            description="Get in touch with me."
            href="/contact"
          /> */}
          <div className="fixed inset-0 w-screen h-screen -z-1">
            <Canvas
              camera={{ position: [0, 0, 25], fov: 120 }}
              style={{
                backgroundColor: 'transparent',
              }}
              onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0);
              }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls enableDamping={true} enableRotate={true}/>
              <OrbitTori />
            </Canvas>
          </div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
  </div>
  );
}

