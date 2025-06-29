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
                            description="Contributed to the AMMS (Automated Maintenance Management System) 
                            project by performing manual and automated black-box testing on cross-platform 
                            technical operations logging applications (web and iOS). Designed and implemented 
                            automated black-box test cases for a technical operations logging system on web 
                            and iOS platforms. Leveraged Python with Selenium and Appium to build a reusable 
                            and maintainable regression suite, enabling continuous validation of new features. 
                            Refactored test infrastructure to achieve a 92.5% runtime reduction for regression tests." 
                            show_line = {true}
                            href='https://lstechllc.com/'
                        />,
                        <ExperienceCard 
                            title='Computer Science Intern' 
                            company='Federal Aviation Administration' 
                            role='A.M.M.S. Testing and Automation' 
                            date="June - August 2024" 
                            description="Contributed to the AMMS project by developing and maintaining automated test 
                            coverage for a technical operations logging system across web and iOS platforms. 
                            Improved test execution efficiency by optimizing iOS simulator configurations. 
                            Additionally, led a team of 11 interns in building the AJI-3320 organizational Wiki for 
                            the Air Traffic Safety Management Team, leveraging Confluence with integrated Jira workflows." 
                            show_line = {true}
                            href='https://www.faa.gov/'
                        />,
                        <ExperienceCard 
                            title='Tutoring Center Student Tutor' 
                            company='Stockton University' 
                            role='Computer Science and Mathematics Tutor' 
                            date="September 2023 - May 2024" 
                            description="Provided academic support to Computer Science students in Programming I & II, 
                            delivering individualized tutoring in Java and Python to reinforce core programming concepts
                            . Led 1-on-1 sessions across technical subjects including physics-based programming, 
                            discrete mathematics, and calculus, adapting explanations to align with varied learning 
                            styles. Employed a range of teaching strategies and problem-solving techniques to promote engagement, 
                            deepen conceptual understanding, and support long-term academic success." 
                            show_line = {true}
                            href='https://www.stockton.edu/'
                        />,
                        <ExperienceCard 
                            title='Computer Scientist Intern' 
                            company='Federal Aviation Administration'
                            role='A.M.M.S. Testing and Automation' 
                            date="June - August 2023" 
                            description='Led initial implementation of iOS automation for the AMMS project using Appium with Java, establishing a foundation for scalable mobile testing. Documented manual test coverage across web and iOS platforms. Co-led a cohort project, providing technical guidance on configuring and leveraging a virtualized Simulated Driver Radar Recorder (SDRR) environment.' 
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