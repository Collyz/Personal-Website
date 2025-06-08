'use client'
import React from 'react';

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a href={href} className="card">
      <h2 className="text-2xl font-bold">{title} </h2>
      <p className="text-lg">{description}</p>  
    </a>

  );
}

export default function Title() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="site-intro-header flex items-center justify-center sm:flex-row sm:items-end gap-2 px-16 lg:px-32">
          <h1 className="text-2xl lg:text-4xl">I'm Mohammed Mowla, a Computer Scientist at the FAA</h1>
          
        </div>
        <div>
          <p className="text-lg justify-center">
            Welcome to my personal website! Here, you can find information about my work, projects, and how to get in touch with me.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <Card
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
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
