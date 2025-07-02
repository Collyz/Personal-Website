'use client';

import ArrowIcon from './ArrowIcon';
import React, { ReactNode } from 'react';

type ProjectCardProp = {
  title: string;
  date: string;
  description: string;
  href: string;
  show_line: boolean;
  status: boolean;
  children?: ReactNode; // For image or canvas
};


export function ProjectCard({ 
  title, 
  date,
  description, 
  href,
  show_line,
  status,
  children
 }: ProjectCardProp ) {
  
  let line = null;
  let project_progress = null;
  let link = null;
  
  if (show_line) {
    line = <hr className='h-[1] my-5' />;
  }
  
  if (status) {
    project_progress = <p className="text-xs py-[2px] ml-5 px-2 border-2 rounded-full border-green-500  max-h-fit bg-green-900/20">Completed</p>
  } else {
    project_progress = <p className="text-xs py-[2px] ml-5 px-2 border-2 rounded-full border-yellow-400 max-h-fit bg-yellow-600/70">WIP</p>
  }

  if (href != '') {
    link = <a href={href} className="card" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between">
              <h2 className="group/inner text-xl font-bold group-hover/outer:text-blue-400 pb-3">
              {title}
              <ArrowIcon />
            </h2>
            {project_progress}
            </div>
          </a>
  } else {
    link = <span>
            <div className="flex justify-between">
              <h2 className="group/inner text-xl font-bold group-hover/outer:text-blue-400 pb-3">
              {title}
              </h2>
              {project_progress}
            </div>
          </span>
  }

  return (
    <div className='px-12 md:px-24 lg:px-36 max-w-[1500px]'>
      <div className='group/outer hover:border-[0px] hover:rounded-md p-5 hover:bg-[#132d20b3]'>
        <p className='text-gray-400 text-sm pb-1'>
          {date}
        </p>
        {link}
        <div className='flex flex-col sm:flex-row'>
          {children}
          <p className="text-sm lg:text-base px-5">{description}</p>  
        </div>
      </div>
      {line}
    </div>
  );
}