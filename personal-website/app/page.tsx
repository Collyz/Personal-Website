'use client';
import React, { ReactNode} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedTorus} from '../components/ThreeVisuals';
import Navbar from '../components/Navbar';


type CardProps = {
  title: string;
  description: string;
  href: string;
  children?: ReactNode; // For image or canvas
};

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a href={href} className="card">
      <h2 className="text-2xl font-bold">{title} </h2>
      <p className="text-lg">{description}</p>  
    </a>

  );
}

export default function HomeContent() {
  const oceanRef = React.useRef<any>(null);
  return (
  
  <div>
    <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="site-intro-header flex items-center justify-center sm:flex-row sm:items-end gap-2 px-16 lg:px-32">
          <h1 className="text-2xl lg:text-4xl">I'm Mohammed Mowla, a Computer Scientist at the FAA</h1>     
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
              camera={{ position: [0, 0, 25], fov: 90 }}
              style={{
                backgroundColor: 'transparent',
              }}
              onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0); // 👈 Make sure it looks at the boat
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls enableDamping={true} enableRotate={true}/>
              {/* <SpinningCube /> */}
              <AnimatedTorus startAngle={[0, 0, 0]}/>
              <AnimatedTorus startAngle={[90, 0, 0]} position={[8, 3, 0]} />
              <AnimatedTorus startAngle={[90, 0, 0]} position={[-8, -3, 0]} />
            </Canvas>
          </div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
  </div>
  );
}

