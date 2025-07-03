'use client'

import FadeInText from '@/components/FadeInText';

export default function ResumeContent() {
    return (
        <div>
            <main className="flex flex-col items-center">
                <FadeInText text="Resume" className='pt-16' additative={true}/>
                <iframe title="Mohammed Mowla's Resume" className="min-w-full min-h-screen md:px-24 md:py-16 py-12" src="https://drive.google.com/file/d/1LRT8oyhgvS-UE3zIvmz-OCEe5cCtdu9D/preview" allow="autoplay"></iframe>
            </main>

        </div>
    );
}