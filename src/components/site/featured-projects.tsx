'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Carousel from '@/components/site/carousel';
import { PROJECTS, projectSlug } from '@/lib/projects';

import { ArrowUpRight } from 'lucide-react';

// The homepage accordion shows a curated four; the full set lives on /projects.
const FEATURED = PROJECTS.filter((project) => project.name !== '64').slice(0, 4);

const ArrowBadge = () => (
    <span className='border-cream/50 text-cream absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300'>
        <ArrowUpRight className='h-4 w-4' strokeWidth={1.5} />
    </span>
);

const FeaturedProjects = () => {
    const [active, setActive] = useState(0);

    return (
        <section id='projects' className='relative scroll-mt-20 overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-28'>
            {/* Subtle BGbeige texture */}
            <Image
                src='/images/brand/BGbeige.webp'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='pointer-events-none object-cover opacity-[0.03]'
            />

            <div className='relative z-10 mx-auto max-w-7xl'>
                {/* Header row */}
                <div className='flex items-end justify-between gap-6'>
                    <div>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>
                            Featured Projects
                        </p>
                        <h2 className='font-display text-forest mt-3 text-3xl leading-tight lg:text-4xl'>
                            Recent Work
                        </h2>
                    </div>
                    <Link
                        href='/projects'
                        className='text-forest hover:text-moss group relative inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                        View All Projects
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </div>

                {/* Expanding accordion — desktop */}
                <div className='mt-12 hidden h-[34rem] gap-3 md:flex'>
                    {FEATURED.map((project, index) => {
                        const isActive = active === index;

                        return (
                            <Link
                                key={project.name}
                                href={`/projects#${projectSlug(project.name)}`}
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                                className={`group relative min-w-[8rem] overflow-hidden transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:min-w-[11rem] ${
                                    isActive ? 'flex-[5]' : 'flex-[1]'
                                }`}>
                                <Image
                                    src={project.image}
                                    alt={`${project.name} — landscaping project in ${project.location}`}
                                    fill
                                    sizes='(max-width: 1280px) 70vw, 860px'
                                    className={`object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        isActive ? 'scale-105' : 'scale-100'
                                    }`}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25' />
                                <div
                                    className={`bg-forest/40 absolute inset-0 transition-opacity duration-[850ms] ease-out ${
                                        isActive ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />

                                <ArrowBadge />

                                {/* Collapsed: just the title (fades out on expand) */}
                                <h3
                                    className={`font-display text-cream absolute inset-x-0 bottom-0 p-6 text-base whitespace-nowrap [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] transition-opacity duration-300 lg:p-8 lg:text-lg ${
                                        isActive ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {project.name}
                                </h3>

                                {/* Expanded: full detail — fades and rises in (no font-size jump) */}
                                <div
                                    className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:p-8 ${
                                        isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
                                    }`}>
                                    <div className='mb-4 flex flex-wrap gap-2'>
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className='border-cream/40 text-cream/90 rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.14em] whitespace-nowrap uppercase backdrop-blur-sm'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className='font-display text-cream text-4xl leading-[1.05] [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] sm:text-5xl'>
                                        {project.name}
                                    </h3>
                                    <p className='text-cream/85 mt-4 max-w-md text-sm leading-relaxed font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]'>
                                        {project.description}
                                    </p>
                                    <p className='text-beige mt-3 text-[11px] font-medium tracking-[0.22em] uppercase'>
                                        {project.location}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Swipeable carousel — mobile */}
                <Carousel className='mt-10 md:hidden' theme='dark'>
                    {FEATURED.map((project) => (
                        <Link
                            key={project.name}
                            href={`/projects#${projectSlug(project.name)}`}
                            className='group relative block aspect-[4/5] w-full overflow-hidden'>
                            <Image
                                src={project.image}
                                alt={`${project.name} — landscaping project in ${project.location}`}
                                fill
                                sizes='100vw'
                                className='object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25' />
                            <ArrowBadge />
                            <div className='absolute inset-x-0 bottom-0 p-6'>
                                <div className='mb-3 flex flex-wrap gap-2'>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='border-cream/40 text-cream/90 rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className='font-display text-cream text-3xl leading-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]'>
                                    {project.name}
                                </h3>
                                <p className='text-cream/85 mt-3 text-sm leading-relaxed font-light'>
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default FeaturedProjects;
