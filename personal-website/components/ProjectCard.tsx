'use client';
import React, { ReactNode} from 'react';
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