'use client';
import React, { ReactNode } from 'react';
type CardProps = {
  title: string;
  role: string;
  description: string;
  href: string;
  children?: ReactNode; // For image or canvas
};

export function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a href={href} className="card">
      <h2 className="text-2xl font-bold">{title} </h2>
      <p className="text-lg">{description}</p>  
    </a>

  );
}

export function ExperienceCard ( {
  title,
  role,
  description,
  href, 
  children
} : CardProps) {
  return (
    <div className='py-4 px-12 md:px-24 lg:px-36'>
    <a href={href} className="card">
      <h2 className="text-2xl font-bold">{title} </h2>
      <p className='text-gray-500'>{role}</p>
      <p className="text-lg">{description}</p>  
    </a>
    </div>

  );
}