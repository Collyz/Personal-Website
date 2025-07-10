'use client'
import { div } from 'motion/react-client';
import React from 'react';

export default function SkillBubble({ skill }: {skill: string}) {
    return (
        <div >
            <p className='py-1 px-3 rounded-full border-2 border-green-700 bg-[#163832] text-green-100 hover:bg-green-800 hover:text-white transition-colors duration-200 font-semibold'>{skill}</p>
        </div>
    );
}