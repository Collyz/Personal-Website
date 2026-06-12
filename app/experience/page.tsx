'use client'

import CascadingFadeIn from '@/components/CascadingFadeIn';
import FadeInText from '@/components/FadeInText';
import { ExperienceCard } from '@/components/ExperienceCard';

export default function ExperienceContent() {
    return (
        <div>
            <main className="flex flex-col items-center">
                <FadeInText text="Work Experience" className='py-16' additative={true}/>
                <CascadingFadeIn 
                    components={[
                        <ExperienceCard 
                            key={0}
                            title='Computer Scientist'
                            company='LS Technologies'
                            role='Software Automation – A.M.M.S.'
                            date="September 2024 - Present"
                            description="Develop and maintain automated regression test suites in Python using
                            Selenium and Appium for web and iOS applications, increasing overall test coverage
                            by 88% and safeguarding core business processes. Engineer CI/CD pipelines that
                            automate build retrieval, installation, and test environment configuration,
                            eliminating manual setup across up to 15 daily release builds. Build internal
                            automation tooling integrated with Jira to generate reporting matrices that track
                            team assignments, status, and progress. Design black-box test cases modeled on
                            real-world user scenarios across a suite of interconnected enterprise applications,
                            and collaborate with Subject Matter Experts (SMEs) and development teams within an
                            Agile/Scrum environment to identify, document, and resolve software defects."
                            show_line = {false}
                            href='https://lstechllc.com/'
                            skills={[
                                'Python', 'Selenium', 'Appium', 'CI/CD', 'Jira', 'Agile/Scrum', 'iOS',
                                'Regression Testing', 'Black-Box Testing', 'Test Automation'
                                ]
                            }
                        />,
                        <ExperienceCard 
                            key={1}
                            title='Computer Science Intern'
                            company='Federal Aviation Administration'
                            role='A.M.M.S. Testing and Automation'
                            date="June - August 2024"
                            description="Optimized an automated iOS regression test suite, reducing automation
                            run times by 33% through test script refactoring and simulator configuration tuning.
                            Expanded manual and automated test coverage of end-to-end user workflows in alignment
                            with Test and Evaluation (T&E) best practices. Led a team of 11 interns in developing
                            the Air Traffic Safety Management Team's organizational wiki using Confluence with
                            integrated Jira workflows, improving documentation and cross-team knowledge sharing.
                            Planned, executed, and reported on testing activities for web and mobile applications
                            within an Agile environment."
                            show_line = {false}
                            href='https://www.faa.gov/'
                            skills={[
                                'Python', 'Selenium', 'Appium', 'iOS', 'Confluence', 'Jira',
                                'Test & Evaluation (T&E)', 'Agile'
                                ]
                            }
                        />,
                        <ExperienceCard
                            key={2}
                            title='Tutoring Center Student Tutor' 
                            company='Stockton University' 
                            role='Computer Science and Mathematics Tutor' 
                            date="September 2023 - May 2024" 
                            description="Provided academic support to Computer Science students in Programming I & II,
                            delivering individualized tutoring in Java and Python to reinforce core programming
                            concepts and data structures. Led one-on-one sessions across technical subjects,
                            including physics-based programming, discrete mathematics, and calculus, adapting
                            explanations to a wide range of learning styles. Employed varied teaching strategies
                            and problem-solving techniques to promote engagement, deepen conceptual understanding,
                            and support long-term academic success."
                            show_line = {false}
                            href='https://www.stockton.edu/'
                            skills={[
                                'Java','Python', 'Calculus 1', 'Discrete Math', 'Data Structures and Algorithms', 'Physics Simulations'
                                ]
                            }
                        />,
                        <ExperienceCard 
                            key={3}
                            title='Computer Science Intern'
                            company='Federal Aviation Administration'
                            role='A.M.M.S. Testing and Automation'
                            date="June - August 2023"
                            description="Established a regression test suite in Java using Appium to automate
                            testing of an iOS mobile application, ensuring the continued functionality of
                            critical user scenarios. Deployed and benchmarked the Simulated Driver Radar
                            Recorder (SDRR) and its ecosystem on cloud-hosted Ubuntu (Linux) instances via
                            SSH and MobaXterm. Co-led a research project on the virtualization of test systems
                            and environments, mentoring peers and substantially accelerating lab configuration.
                            Gained hands-on experience with test automation frameworks, mobile testing, and
                            cloud-based infrastructure."
                            show_line = {false}
                            href='https://www.faa.gov/'
                            skills={[
                                'Java', 'Appium', 'iOS', 'Ubuntu (Linux)', 'SSH/MobaXterm', 'Virtualization',
                                'Cloud Infrastructure'
                                ]
                            }
                        />,
                    ]}
                />
            </main>
            
            <footer className='py-12'></footer>
        </div>
    );
}