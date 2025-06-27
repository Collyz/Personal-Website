'use client'

import { Navbar } from '../../components/Navbar';
import FadeInText from '@/components/FadeInText';

export default function ProjectContent() {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center">
                <FadeInText text="Projects" className='py-16' additative={true}/>
                
            </main>

        </div>
    );
}