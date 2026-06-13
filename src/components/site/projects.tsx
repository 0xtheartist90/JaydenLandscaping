import Image from 'next/image';

import Reveal from '@/components/site/reveal';
import { PROJECTS } from '@/lib/projects';

const Projects = () => {
    return (
        <section id='projects' className='relative scroll-mt-20 overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
            {/* Subtle BGbeige texture */}
            <Image
                src='/images/BGbeige.webp'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='pointer-events-none object-cover opacity-[0.03]'
            />

            <div className='relative z-10 mx-auto max-w-7xl space-y-20 lg:space-y-32'>
                {PROJECTS.map((project, index) => (
                    <div
                        key={project.name}
                        className='grid items-center gap-8 lg:grid-cols-2 lg:gap-16'>
                        <Reveal className={index % 2 === 1 ? 'lg:order-last' : ''}>
                            <div className='group relative aspect-[4/3] overflow-hidden'>
                                <Image
                                    src={project.image}
                                    alt={`${project.name} — landscaping project in ${project.location}`}
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 50vw'
                                    className='object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.12}>
                            <p className='text-moss text-[11px] font-medium tracking-[0.3em] uppercase'>
                                {String(index + 1).padStart(2, '0')} — {project.location}
                            </p>
                            <h2 className='font-display text-forest mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl'>
                                {project.name}
                            </h2>
                            <p className='text-ink/70 mt-5 max-w-md text-base leading-relaxed font-light'>
                                {project.description}
                            </p>
                            <p className='text-moss mt-7 text-xs tracking-[0.16em] uppercase'>
                                {project.tags.join(' · ')}
                            </p>
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
