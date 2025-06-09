'use client';
import React, { ReactNode, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import SpinningCube from '../components/Orbit';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';





function Navbar() {
  return ( 
    <nav className="flex justify-center items-center p-4 py-24">
      <ul className="flex gap-8 text-lg">
        <li><a href="/" className="hover:underline hover:bg-sky-700">Home</a></li>
        <li><a href="/about" className="hover:underline hover:bg-sky-700">About</a></li>
        <li><a href="/projects" className="hover:underline">Projects</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

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
          <div className="fixed inset-0 w-screen h-screen">
            <Canvas
              camera={{ position: [5, 5, 5], fov: 75 }}
              style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'transparent',
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls />
              <SpinningCube />
            </Canvas>
          </div>


        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
  </div>
  );
}

