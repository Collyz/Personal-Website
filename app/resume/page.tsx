'use client'

import FadeInText from '@/components/FadeInText';
import { div } from 'motion/react-client';

export default function ResumeContent() {
    return (
        <div 
        className='flex flex-col'
        >
            <main className="flex flex-col items-center">
                <FadeInText text="Resume" className='pt-16' additative={true}/>
                <div style={{width: '100%'}} className='flex'>
                    <canvas
                    id='resume-canvas' 
                    className='justify-center flex-1 px-5'
                    />
                </div>
                

                {/* <iframe title="Mohammed Mowla's Resume" className="min-w-full min-h-screen md:px-24 md:py-16 py-12" src="https://drive.google.com/file/d/1LRT8oyhgvS-UE3zIvmz-OCEe5cCtdu9D/preview" allow="autoplay"></iframe> */}
            </main>

        </div>
    );
}