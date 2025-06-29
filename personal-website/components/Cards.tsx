'use client';
import { div } from 'motion/react-client';
import React, { ReactNode } from 'react';
type CardProps = {
  title: string;
  company: string;
  role: string;
  date: string;
  description: string;
  href: string;
  show_line: boolean;
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
  company,
  role,
  date,
  description,
  href,
  show_line,
  children
} : CardProps) {
  let line = null;
  if (show_line) {
    line = <hr className='h-[1] mt-5' />;
  }
  return (
    <div className='py-4 px-12 md:px-24 lg:px-36 '>
      <div className='group/outer hover:border-[0px] hover:rounded-md p-5 hover:bg-[#132d20b3]'>
        <p className='text-gray-500 text-sm pb-1'>{date}</p>
        <a href={href} className="card" target="_blank" rel="noopener noreferrer">
          <h2 className="group/inner text-2xl font-bold group-hover/outer:text-blue-400">
            {title} • {company} 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block transform transition-transform duration-400 ease-in-out
              group-hover/inner:scale-[1.2]
              group-hover/inner:translate-x-[2px]
              group-hover/inner:-translate-y-[7px]
              h-4 w-4 shrink-0 ml-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
        </a>
        <p className='text-gray-500'>{role}</p>
        <p className="text-lg">{description}</p>  
        
      </div>
      {line}
    </div>
    

  );
}