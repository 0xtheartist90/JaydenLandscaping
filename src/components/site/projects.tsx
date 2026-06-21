'use client';

import Image from 'next/image';
import { useState } from 'react';

import Reveal from '@/components/site/reveal';
import { PROJECTS, projectSlug, type Project } from '@/lib/projects';

const ZOOM = 'object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105';

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
    // Main image + gallery; clicking a thumbnail swaps the large image.
    const images = [project.image, ...(project.gallery ?? [])];
    const [active, setActive] = useState(0);
    const reverse = index % 2 === 1;

    return (
        <article
            id={projectSlug(project.name)}
            className='scroll-mt-24 grid items-center gap-8 lg:grid-cols-12 lg:gap-14'>
            {/* Large featured image — cross-fades between selected images */}
            <Reveal
                direction={reverse ? 'right' : 'left'}
                blur
                className={`group relative aspect-[4/3] overflow-hidden lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                {images.map((src, imageIndex) => (
                    <Image
                        key={imageIndex}
                        src={src}
                        alt={`${project.name} — landscaping project in ${project.location}`}
                        fill
                        priority={index === 0 && imageIndex === 0}
                        sizes='(max-width: 1024px) 100vw, 60vw'
                        className={`${ZOOM} transition-opacity duration-700 ${active === imageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </Reveal>

            {/* Text + thumbnails */}
            <Reveal
                direction={reverse ? 'left' : 'right'}
                blur
                delay={0.1}
                className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                <p className='text-moss text-[11px] font-medium tracking-[0.3em] uppercase'>
                    Project {String(index + 1).padStart(2, '0')} · {project.location}
                </p>
                <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl'>
                    {project.name}
                </h2>
                <p className='text-ink/70 mt-5 text-base leading-relaxed font-light'>{project.description}</p>

                <div className='mt-5 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className='border-forest/25 text-forest/75 rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase'>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Thumbnails — click to swap the large image */}
                <div className='mt-8 grid grid-cols-4 gap-3'>
                    {images.map((src, imageIndex) => (
                        <button
                            key={imageIndex}
                            type='button'
                            onClick={() => setActive(imageIndex)}
                            aria-label={`View image ${imageIndex + 1} of ${project.name}`}
                            className={`relative aspect-square overflow-hidden border transition-all duration-300 ${
                                active === imageIndex
                                    ? 'border-forest opacity-100'
                                    : 'border-transparent opacity-55 hover:opacity-90'
                            }`}>
                            <Image src={src} alt='' fill sizes='120px' className='object-cover' />
                        </button>
                    ))}
                </div>
            </Reveal>
        </article>
    );
};

const Projects = () => {
    return (
        <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
            {/* Subtle BGbeige texture — matches the homepage */}
            <Image
                src='/images/brand/BGbeige.webp'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='pointer-events-none object-cover opacity-[0.03]'
            />

            <div className='relative z-10 mx-auto max-w-7xl'>
                <Reveal blur className='max-w-2xl'>
                    <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Selected Work</p>
                    <h2 className='font-display text-forest mt-3 text-3xl leading-tight lg:text-4xl'>
                        Landscapes We&apos;re Proud Of
                    </h2>
                    <p className='text-ink/70 mt-5 text-base leading-relaxed font-light'>
                        A look at recent projects across the Greater Toronto Area — explore each gallery to see the detail
                        up close.
                    </p>
                </Reveal>

                <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-28'>
                    {PROJECTS.map((project, index) => (
                        <ProjectRow key={project.name} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
