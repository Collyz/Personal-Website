'use client'

import CascadingFadeIn from '../../components/CascadingFadeIn';
import { Navbar } from '../../components/Navbar';
import FadeInText from '@/components/FadeInText';
import { ExperienceCard } from '../../components/Cards';

export default function ExperienceContent() {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center">
                <FadeInText text="Work Experience" className='py-16' additative={true}/>
                <CascadingFadeIn 
                    components={[
                        <ExperienceCard 
                            title='Computer Scientist' 
                            company='LS Technologies' 
                            role='Computer Science Specialist Level 6' 
                            date="September 2024 - Present" 
                            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet.' 
                            show_line = {true}
                            href='https://lstechllc.com/'
                        />,
                        <ExperienceCard 
                            title='Computer Scientist Intern' 
                            company='Federal Aviation Administration' 
                            role='Computer Science Specialist Level 6' 
                            date="September 2024 - Present" 
                            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet.' 
                            show_line = {true}
                            href='https://www.faa.gov/'
                        />,
                        <ExperienceCard 
                            title='Tutoring Center Student Tutor' 
                            company='Stockton University' 
                            role='Computer Science and Mathematics Tutor' 
                            date="September 2024 - Present" 
                            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet.' 
                            show_line = {true}
                            href='https://www.stockton.edu/'
                        />,
                        <ExperienceCard 
                            title='Computer Scientist' 
                            company='Federal Aviation Administration' 
                            role='Computer Science Specialist Level 6' 
                            date="September 2024 - Present" 
                            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet.' 
                            show_line = {false}
                            href='https://www.faa.gov/'
                        />,
                    ]}
                />
               
            </main>
            <footer className='py-12'></footer>
        </div>
    );
}