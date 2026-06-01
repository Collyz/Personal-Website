'use client'

import FadeInText from '@/components/FadeInText';
import PDFViewer from '@/components/PDFViewer';

export default function ResumeContent() {
    return (
        <div 
        className='flex flex-col'
        >
            <main className="flex flex-col items-center">
                <FadeInText text="Resume" className='pt-16' additative={true}/>
                <PDFViewer
                    url="/resume/Resume_2_page_MM.pdf"
                    className='w-full max-w-3xl px-0 sm:px-5 py-8'
                />
            </main>

        </div>
    );
}