'use client'
import Image from 'next/image'
import FadeInText from '@/components/FadeInText';
import { ProjectCard } from '@/components/ProjectCard';
import CascadingFadeIn from '@/components/CascadingFadeIn';

export default function ProjectContent() {
    return (
        <div>
            <main className="flex flex-col items-center">
                <FadeInText text="Projects" className='py-16' additative={true}/>
                <CascadingFadeIn 
                    components={[
                        <ProjectCard 
                            key={0}
                            title={'Finite Automata Designer'} 
                            date={'February 2025 - Present'} 
                            description={'Recreation of the \'Theory of Computation\' final project using the Godot 4.0 engine, featuring enhanced visuals, improved state highlighting, and string acceptance animations. Currently being rebuilt from the ground up in Next.js for improved accessibility. Planned features include saving finite automata and export/print functionality.'} 
                            href={'https://github.com/Collyz/FiniteAutomataDesigner'} 
                            show_line={false} 
                            status={false}
                            skills={[
                                'Next.js', 'HTML Canvas', 'Tailwind', 'Google Auth', 'Godot 4', 'GDScript', 'Theory of Computation'
                                ]
                            }>
                            <Image src="/FA_Designer_godot.png"
                                alt="Finite Automata Designer in Godot"
                                width={800}
                                height={600}
                                className="mb-3 rounded-3xl object-cover sm:max-w-1/2 max-w-full"
                                style={{ height: 'auto' }}
                                sizes="(min-width: 640px) 50vw, 100vw"
                                priority />
                        </ProjectCard>,
                        <ProjectCard 
                            key={1}
                            title={'Gnomy'} 
                            date={'December 2024 - Present'} 
                            description={'A whimsical, "Doodle Jump"-inspired game where a gnome climbs endlessly upward through floating platforms. Built in Swift with SwiftUI and GameKit, it features a global leaderboard, local high score tracking, and music with audio controls.'}
                            href={'https://github.com/Collyz/Gnomy'} 
                            show_line={false} 
                            status={false}
                            skills={[
                                'Swift', 'SwiftUI', 'GameKit', 'iOS', 'AWS DynamoDB', 'Game Dev'
                                ]
                            }>
                            <div className='flex items-center m-2 mb-2'>
                                <img src="gnomy_leaderboard.png" alt="Gnomy leaderboard screenshot" className='max-w-1/2 object-cover rounded-3xl'/>
                                <span className='px-2'></ span>
                                <img src="gnomy_gameplay.png" alt="Gnomy gameplay screenshot" className='max-w-1/2 object-cover rounded-3xl'/>
                            </div>
                        </ProjectCard>,

                        <ProjectCard 
                            key={2}
                            title={'Theory Of Computation Final Project'} 
                            date={'ADD'} 
                            description={'Final project for Math-4472: Theory of Computation. A web-based tool for designing and testing Deterministic Finite Automata (DFA), allowing manual construction of automata and string input for parsing. Built with P5.js, the project focused on demonstrating core DFA functionality within a user-friendly interface. Current limitations include lack of support for non-determinism, step-by-step string parsing animations, and limited arrow rendering for bidirectional transitions.'} 
                            href={'https://collyz.github.io/Theory_Of_Computation_Final_Project/'} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'JavaScript', 'Bootstrap', 'Theory of Computation', 'Vite', 'p5.js'
                                ]
                            }>
                            <Image src="/toc_final_proj.png" 
                                alt="Theory of Computation Final Project Example Deterministic FA that accepts all strings starting with 1" 
                                width={800}
                                height={600}
                                className="mb-3 rounded-3xl object-cover sm:max-w-1/2 max-w-full"
                                style={{ height: 'auto' }}
                                sizes="(min-width: 640px) 50vw, 100vw"
                                priority/>
                        </ProjectCard>,

                        <ProjectCard
                            key={3} 
                            title={'DCGAN Animal Image Generation'} 
                            date={'April - May 2024'} 
                            description={'As part of the final project for CSCI-4464: Computer Vision at Stockton University, we developed a GAN-based image generation model using PyTorch. The goal was to create realistic images of cats and hamsters by training a Deep Convolutional GAN (DCGAN) on curated animal image datasets. We experimented with two datasets: Animals-10N and Kaggle Cats and Dogs. While Animals-10N offered variety, it included inconsistent and lower-quality images. The Kaggle dataset, with higher-resolution and more focused examples, led to significantly better visual results. Our best results came from using all 12,500 cat images in the Kaggle dataset. While the generated images were still rough, they consistently resembled the target animals and demonstrated the model’s learning progress.'} 
                            href={''} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'Python', 'PyTorch', 'Computer Vision', 'DCGAN', 'Image Generation', 'Convolutional Neural Network'
                                ]
                            }>
                            <Image src="/2000_epoch_and_imgs_DCGAN_ham_126_mins_imgs.png" 
                            alt="Hamster images generated from 2k epochs taking 126 images" 
                            width={800}
                            height={600}
                            className="mb-3 rounded-3xl object-cover sm:max-w-1/2 max-w-full"
                            style={{ height: 'auto' }}
                            sizes="(min-width: 640px) 50vw, 100vw"
                            priority/>
                        </ ProjectCard>,

                        <ProjectCard 
                            key={4}
                            title={'Lake Fred Research Project'} 
                            date={'January - November 2023'} 
                            description={'Research project conducted in collaboration with three other students and math faculty at Stockton University. Collected geospatial data from Lake Fred and used SciPy to generate a Delaunay triangulation of the lakebed. Utilized Blender’s Python API to convert over 2,000 data points into a 3D model suitable for visualization and 3D printing. Developed an interactive website using Three.js, Vite, and Bootstrap to display the lakebed model with surface and wireframe views.'} 
                            href={'https://github.com/Collyz/Lake-Fred'} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'Python', 'Blender', 'Calculus 3', '3D Printing', 'Research'
                                ]
                            }> 
                            <Image src="/lake-fred-triangulation.png" 
                                alt="2D Delauney Triangulation on Lake Fred Geospatial points"
                                width={800}
                                height={600}
                                className="mb-3 rounded-3xl object-cover sm:max-w-1/2 max-w-full"
                                style={{ height: 'auto' }}
                                sizes="(min-width: 640px) 50vw, 100vw"
                                priority/>
                        </ ProjectCard>,
                        // <ProjectCard 
                        // title={'Java Dynamic Website'} 
                        // date={'May - June 2023'} 
                        // description={''} 
                        // href={''} 
                        // show_line={true} 
                        // status={true}
                        // children={null}
                        // />,
                        <ProjectCard 
                            key={5}
                            title={'Syntax Type Website'} 
                            date={'March 2023 - April 2023'} 
                            description={'Final project for CSCI-4135: Web Application Engineering. A competitive typing game built with the WAMP stack, featuring guest and user login, saved high scores, and prompts based on popular programming language keywords.'} 
                            href={'https://github.com/Collyz/Syntax-Type'} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'WAMP'
                                ]
                            }>
                            <Image src="/syntax-type-landing.png" 
                            alt="Syntax Type landing page"
                            width={800}
                            height={600}
                            className="mb-3 rounded-3xl object-cover sm:max-w-1/2 max-w-full"
                            style={{ height: 'auto' }}
                            sizes="(min-width: 640px) 50vw, 100vw"
                            priority/>
                        </ProjectCard>,
                        <ProjectCard 
                            key={6}
                            title={'Traveling Salesperson Problem (TSP)'} 
                            date={'April 2023'} 
                            description={'Developed as part of CSCI-4463: Artificial Intelligence at Stockton University. Explored solutions to the Traveling Salesperson Problem (TSP) using Java. The most successful implementation, VBSS.java, applies a Value Biased Stochastic Sampling heuristic that favors selecting cities closer to the starting point based on Euclidean distance, effectively producing efficient tour paths for the given TSP instances.'} 
                            href={'https://github.com/Collyz/TravelingSalesPerson'} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'Java', 'TSP Problem', 'Stochastic Optimization', 'Artificial Intelligence'
                                ]
                            }/>,
                        <ProjectCard 
                            key={7}
                            title={'Beauty In You - Desktop Inventory Application'} 
                            date={'September - December 2022'} 
                            description={'Semester-long project for CSCI-4485: Software Engineering at Stockton University. Led a team of five to develop a desktop inventory management system for a local South Jersey business using JavaFX for the frontend, MySQL for data storage, and JavaMail API for client communication. Key features include an administrative login system, client email integration, low inventory tracking, and bulk order processing.'} 
                            href={'https://github.com/Collyz/Beauty-in-You-Inventory-App'} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'Java', 'JavaFX', 'MySQL', 'SceneBuilder', 'MVC'
                                ]
                            }>
                            <Image src="/beauty-in-you-login.png"
                            alt="Beauty In You Desktop Inventory Application login screen"
                            width={800}
                            height={600}
                            className="mb-3 rounded-3xl object-cover sm:max-w-1/2 max-w-full"
                            style={{ height: 'auto' }}
                            sizes="(min-width: 640px) 50vw, 100vw"
                            priority/>
                        </ProjectCard>,
                        <ProjectCard 
                            key={8}
                            title={'Java Statistical Library'} 
                            date={'January 2022 - May 2022'} 
                            description={'Semester-long project for CSCI-3327: Probability and Applied Statistics at Stockton University. Built a Java-based library featuring a Monte Carlo simulation for evaluating win probabilities across two decision scenarios, statistical distribution calculators, and simulations for seven real-world poker hand probabilities. Incorporated Apache Commons Math and JFreeChart to visualize salted and smoothed statistical data.'} 
                            href={'https://github.com/Collyz/Probablity-and-Statistics'} 
                            show_line={false} 
                            status={true}
                            skills={[
                                'Java', 'Statistics'
                                ]
                            }>
                        </ProjectCard>
                        
                    ]} 
                    />
            </main>
            <footer className='py-12'></footer>
        </div>
    );
}