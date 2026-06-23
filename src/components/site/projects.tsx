'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';

import Reveal from '@/components/site/reveal';
import { PROJECTS, projectSlug, type Project, type ProjectMedia } from '@/lib/projects';

import { Play } from 'lucide-react';

const ZOOM = 'object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105';

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
    // Mixed media (images + videos); clicking a thumbnail swaps the large slot.
    const media: ProjectMedia[] =
        project.media ?? [project.image, ...(project.gallery ?? [])].map((src) => ({ type: 'image', src }));
    const [active, setActive] = useState(0);
    const reverse = index % 2 === 1;

    return (
        <article
            id={projectSlug(project.name)}
            className='scroll-mt-24 grid items-center gap-8 lg:grid-cols-12 lg:gap-14'>
            {/* Large featured slot — cross-fades between images; plays the active video */}
            <Reveal
                direction={reverse ? 'right' : 'left'}
                blur
                className={`group relative aspect-[4/3] overflow-hidden lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                {media.map((item, mediaIndex) => {
                    const visible = active === mediaIndex ? 'opacity-100' : 'opacity-0';

                    if (item.type === 'video') {
                        return (
                            <Fragment key={mediaIndex}>
                                {/* poster keeps the cross-fade smooth */}
                                <Image
                                    src={item.poster}
                                    alt={`${project.name} — ${project.location}`}
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 60vw'
                                    className={`${ZOOM} transition-opacity duration-700 ${visible}`}
                                />
                                {/* only mount/play the active video */}
                                {active === mediaIndex && (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        poster={item.poster}
                                        aria-label={`${project.name} construction footage`}
                                        className='absolute inset-0 z-[1] h-full w-full object-cover'>
                                        <source src={item.src} type='video/mp4' />
                                    </video>
                                )}
                            </Fragment>
                        );
                    }

                    return (
                        <Image
                            key={mediaIndex}
                            src={item.src}
                            alt={`${project.name} — project in ${project.location}`}
                            fill
                            priority={index === 0 && mediaIndex === 0}
                            sizes='(max-width: 1024px) 100vw, 60vw'
                            className={`${ZOOM} transition-opacity duration-700 ${visible}`}
                        />
                    );
                })}
                <div className='pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/20 to-transparent' />
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

                {/* Thumbnails — click to swap the large slot; videos show a play badge */}
                <div className='mt-8 grid grid-cols-4 gap-3'>
                    {media.map((item, mediaIndex) => (
                        <button
                            key={mediaIndex}
                            type='button'
                            onClick={() => setActive(mediaIndex)}
                            aria-label={`View ${item.type === 'video' ? 'video' : 'image'} ${mediaIndex + 1} of ${project.name}`}
                            className={`relative aspect-square overflow-hidden border transition-all duration-300 ${
                                active === mediaIndex
                                    ? 'border-forest opacity-100'
                                    : 'border-transparent opacity-55 hover:opacity-90'
                            }`}>
                            <Image
                                src={item.type === 'video' ? item.poster : item.src}
                                alt=''
                                fill
                                sizes='120px'
                                className='object-cover'
                            />
                            {item.type === 'video' && (
                                <span className='absolute inset-0 flex items-center justify-center'>
                                    <span className='bg-black/45 text-cream flex h-6 w-6 items-center justify-center rounded-full backdrop-blur-sm'>
                                        <Play className='h-3 w-3 translate-x-[1px] fill-current' strokeWidth={0} />
                                    </span>
                                </span>
                            )}
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
