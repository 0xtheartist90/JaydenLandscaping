'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FEATURED = [
    {
        name: 'New Market',
        location: 'Greater Toronto Area',
        tags: ['Landscape Design', 'Natural Stone', 'Lighting'],
        description: 'A formal courtyard reimagined with natural stone, layered planting and architectural lighting.',
        image: '/images/newmarket.webp'
    },
    {
        name: '64',
        location: 'Greater Toronto Area',
        tags: ['Interlocking', 'Decks', 'Garden Design'],
        description: 'Terraced interlocking and cedar decks that turn a steep slope into usable living space.',
        image: '/images/64.webp'
    },
    {
        name: 'Woolbridge',
        location: 'Greater Toronto Area',
        tags: ['Design & Build', 'Fencing', 'Planting'],
        description: 'A full design-build transformation framed by custom fencing and four-season planting.',
        image: '/images/woolbridge.webp'
    },
    {
        name: 'Oakville',
        location: 'Greater Toronto Area',
        tags: ['Natural Stone', 'Pools & Ponds'],
        description: 'A waterfront terrace of natural stone, with a pond that mirrors the open sky.',
        image: '/images/oakville.webp'
    }
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const ArrowBadge = () => (
    <span className='border-cream/50 text-cream absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300'>
        <ArrowUpRight className='h-4 w-4' strokeWidth={1.5} />
    </span>
);

const FeaturedProjects = () => {
    const [active, setActive] = useState(0);

    return (
        <section id='projects' className='bg-cream relative scroll-mt-20 overflow-hidden px-6 py-24 lg:px-10 lg:py-28'>
            {/* Subtle BGbeige texture */}
            <Image
                src='/images/BGbeige.webp'
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
                                href='/projects'
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                                className={`group relative min-w-[8rem] overflow-hidden transition-all duration-700 ease-out lg:min-w-[11rem] ${
                                    isActive ? 'flex-[5]' : 'flex-[1]'
                                }`}>
                                <Image
                                    src={project.image}
                                    alt={`${project.name} — landscaping project in ${project.location}`}
                                    fill
                                    sizes='(max-width: 1280px) 70vw, 860px'
                                    className='object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25' />

                                <ArrowBadge />

                                {/* Content — bottom left */}
                                <div className='absolute inset-x-0 bottom-0 p-6 lg:p-8'>
                                    {/* Tags — only when expanded */}
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.4, ease: EASE }}
                                                className='mb-4 flex flex-wrap gap-2'>
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className='border-cream/40 text-cream/90 rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.14em] whitespace-nowrap uppercase backdrop-blur-sm'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <h3
                                        className={`font-display text-cream leading-[1.05] whitespace-nowrap [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] transition-all duration-500 ${
                                            isActive ? 'text-4xl lg:text-5xl' : 'text-sm lg:text-base'
                                        }`}>
                                        {project.name}
                                    </h3>

                                    {/* Description + location — only when expanded */}
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: EASE }}
                                                className='overflow-hidden'>
                                                <p className='text-cream/85 mt-4 max-w-md text-sm leading-relaxed font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]'>
                                                    {project.description}
                                                </p>
                                                <p className='text-beige mt-3 text-[11px] font-medium tracking-[0.22em] uppercase'>
                                                    {project.location}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Stacked — mobile */}
                <div className='mt-10 flex flex-col gap-4 md:hidden'>
                    {FEATURED.map((project) => (
                        <Link key={project.name} href='/projects' className='group relative block aspect-[4/5] overflow-hidden'>
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
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
