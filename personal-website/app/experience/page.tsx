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
                    <ExperienceCard title='test' role='tester'  description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet.' href=''/>,
                    <ExperienceCard title='test' role='tester'  description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet' href=''/>,
                    <ExperienceCard title='test' role='tester'  description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet' href=''/>,
                    <ExperienceCard title='test' role='tester'  description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet' href=''/>,
                    <ExperienceCard title='test' role='tester'  description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus voluptas, voluptatum, aliquam soluta dolor deserunt, consequatur tempora pariatur consequuntur voluptatem tenetur atque amet aspernatur dolores beatae minus? Voluptatibus, eveniet' href=''/>
                    ]}
                    
                />
               
            </main>

        </div>
    );
}