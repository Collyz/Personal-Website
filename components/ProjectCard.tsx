'use client';

import ArrowIcon from './ArrowIcon';
import React, { ReactNode } from 'react';
import SkillBubble from './SkillBubble';
import { div, p } from 'motion/react-client';

type ProjectCardProp = {
  title: string;
  date: string;
  description: string;
  href: string;
  show_line: boolean;
  status: boolean;
  children?: ReactNode; // For image or canvas
  skills: string[];
};


export function ProjectCard(props  : ProjectCardProp ) {

  
  let line = null;
  let project_progress = null;
  let link = null;
  
  if (props.show_line) {
    line = <hr className='h-[1] my-5' />;
  } else {
    line = <p className='my-5'/>
  }
  
  if (props.status) {
    project_progress = <p className="text-xs py-[2px] ml-5 px-3 border-2 rounded-full border-green-500  max-h-fit bg-green-900/20">Completed</p>
  } else {
    project_progress = <p className="text-xs py-[2px] ml-5 px-2 border-2 rounded-full border-yellow-400 max-h-fit bg-yellow-600/70">WIP</p>
  }

  if (props.href != '') {
    link = <a href={props.href} className="card" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between">
              <h2 className="group/inner text-xl font-bold group-hover/outer:text-blue-400 pb-3">
              {props.title}
              <ArrowIcon />
            </h2>
            {project_progress}
            </div>
          </a>
  } else {
    link = <span>
            <div className="flex justify-between">
              <h2 className="group/inner text-xl font-bold group-hover/outer:text-blue-400 pb-3">
              {props.title}
              </h2>
              {project_progress}
            </div>
          </span>
  }

  return (
    <div className='px-12 md:px-24 lg:px-36 max-w-[1500px]'>
      <div className='group/outer hover:border-[0px] hover:rounded-md p-5 hover:bg-[#132d20b3]'>
        <p className='text-gray-400 text-sm pb-1'>
          {props.date}
        </p>
        {link}
        <div className='flex flex-col sm:flex-row'>
          {props.children}
          <p className="text-sm lg:text-base sm:px-5">{props.description}</p>  
          
        </div>
        <div className="flex gap-2 flex-wrap pt-2 ">
          {props.skills?.map((item: string, index:number) => (
            <SkillBubble key={index} skill={item} />
          ))}  
        </div>  
      </div>
      {line}
    </div>
  );
}