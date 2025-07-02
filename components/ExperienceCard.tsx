'use client';

import ArrowIcon from '@/components/ArrowIcon';
import React, { ReactNode } from 'react';

type ExperienceProp = {
  title: string;
  company: string;
  role: string;
  date: string;
  description: string;
  href: string;
  show_line: boolean;
};


export function ExperienceCard ( {
  title,
  company,
  role,
  date,
  description,
  href,
  show_line
} : ExperienceProp) {
  let line = null;
  if (show_line) {
    line = <hr className='h-[1] my-5' />;
  }
  return (
    <div className='px-12 md:px-24 lg:px-36 max-w-[1500px]'>
      <div className='group/outer hover:border-[0px] hover:rounded-md p-5 hover:bg-[#132d20b3]'>
        <p className='text-gray-400 text-sm pb-1'>
          {date}
        </p>
        <a href={href} className="card" target="_blank" rel="noopener noreferrer">
          <h2 className="group/inner text-xl font-bold group-hover/outer:text-blue-400">
            {title} • {company} 
            <ArrowIcon />
          </h2>
        </a>
        <p className='text-gray-400 text-sm py-2'>{role}</p>
        <div >
          <p className="text-sm lg:text-base">{description}</p>  
        </div>
        
      </div>
      {line}
    </div>
  );
}