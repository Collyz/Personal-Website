'use client'

import { Navbar } from '../../components/Navbar';
import FadeInText from '@/components/FadeInText';

export default function ResumeContent() {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center">
                <FadeInText text="Resume" className='pt-16' additative={true}/>
                
            </main>

        </div>
    );
}