'use client';

import ArrowIcon from '@/components/ArrowIcon';
import React from 'react';
import SkillBubble from './SkillBubble';

type ExperienceProp = {
  title: string;
  company: string;
  role: string;
  date: string;
  description: string;
  href: string;
  show_line: boolean;
  skills: string[];
};


export function ExperienceCard (props: ExperienceProp) {
  let line = null;
  if (props.show_line) {
    line = <hr className='h-[1] my-5' />;
  }
  return (
    <div className='px-12 md:px-24 lg:px-36 max-w-[1500px]'>
      <div className='group/outer hover:border-[0px] hover:rounded-md p-5 hover:bg-[#132d20b3]'>
        <p className='text-gray-400 text-sm pb-1'>
          {props.date}
        </p>
        <a href={props.href} className="card" target="_blank" rel="noopener noreferrer">
          <h2 className="group/inner text-xl font-bold group-hover/outer:text-blue-400">
            {props.title} • {props.company} 
            <ArrowIcon />
          </h2>
        </a>
        <p className='text-gray-400 text-sm pt-1 pb-2'>{props.role}</p>
        <div >
          <p className="text-sm lg:text-base my-1">{props.description}</p>  
        </div>
        <div className='flex gap-2 pt-2'>
          {props.skills?.map((item: string) => (
          <SkillBubble skill={item} />
        ))}
        </div>
      </div>
      {line}
    </div>
  );
}