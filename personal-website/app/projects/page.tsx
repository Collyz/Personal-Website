'use client'

import { Navbar } from '@/components/Navbar';
import FadeInText from '@/components/FadeInText';
import { ProjectCard } from '@/components/ProjectCard';
import CascadingFadeIn from '@/components/CascadingFadeIn';

export default function ProjectContent() {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center">
                <FadeInText text="Projects" className='py-16' additative={true}/>
                <CascadingFadeIn 
                    components={[
                        <ProjectCard 
                        title={'DCGAN Animal Image Generation'} 
                        date={'April - May 2024'} 
                        description={''} 
                        href={''} 
                        show_line={true} 
                        status={false}
                        children={null}
                        />,
                        <ProjectCard 
                        title={'Lake Fred Research Project'} 
                        date={'January - November 2023'} 
                        description={''} 
                        href={'https://github.com/Collyz/Lake-Fred'} 
                        show_line={true} 
                        status={true}
                        children={null}
                        />,
                        <ProjectCard 
                        title={'Java Dynamic Website'} 
                        date={'May - June 2023'} 
                        description={''} 
                        href={''} 
                        show_line={true} 
                        status={true}
                        children={null}
                        />,
                        <ProjectCard 
                        title={'Syntax Type Website'} 
                        date={'March 2023 - April 2023'} 
                        description={''} 
                        href={''} 
                        show_line={true} 
                        status={true}
                        children={null}
                        />,
                        <ProjectCard 
                        title={'Traveling Salesperson Problem (TSP)'} 
                        date={'April 2023'} 
                        description={''} 
                        href={''} 
                        show_line={true} 
                        status={true}
                        children={null}
                        />,
                        <ProjectCard 
                        title={'Desktop Inventory Application'} 
                        date={'September - December 2022'} 
                        description={''} 
                        href={''} 
                        show_line={true} 
                        status={true}
                        children={null}
                        />,<ProjectCard 
                        title={'Java Statistical Library'} 
                        date={'January 2022 - May 2022'} 
                        description={''} 
                        href={''} 
                        show_line={true} 
                        status={true}
                        children={null}
                        />
                        
                    ]} 
                    />
            </main>
            <footer className='py-12'></footer>
        </div>
    );
}