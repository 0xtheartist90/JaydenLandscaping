'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { AnimatePresence, motion } from 'framer-motion';
import { BrickWall, Fence, PencilRuler, Shovel, Sprout, Waves, type LucideIcon } from 'lucide-react';

// Small editorial category labels for the index — presentational, paired by slug.
const CATEGORY_LABELS: Record<string, string> = {
    'landscape-design': 'Vision & Planning',
    hardscaping: 'Structure & Stone',
    'outdoor-structures': 'Build & Carpentry',
    'water-features': 'Water & Atmosphere',
    softscaping: 'Planting & Greenery',
    'property-maintenance': 'Care & Upkeep'
};

// Minimal line icon per service, keyed by slug.
const SERVICE_ICONS: Record<string, LucideIcon> = {
    'landscape-design': PencilRuler,
    hardscaping: BrickWall,
    'outdoor-structures': Fence,
    'water-features': Waves,
    softscaping: Sprout,
    'property-maintenance': Shovel
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const Services = () => {
    const [active, setActive] = useState(0);

    return (
        <section id='services' className='bg-forest relative scroll-mt-20 overflow-hidden'>
            {/* Background images — crossfade to the hovered service (desktop only) */}
            <div className='absolute inset-0 hidden md:block'>
                {SERVICE_CATEGORIES.map((category, index) => (
                    <motion.div
                        key={category.slug}
                        className='absolute inset-0'
                        initial={false}
                        animate={{ opacity: active === index ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}>
                        <Image
                            src={category.image}
                            alt=''
                            aria-hidden
                            fill
                            sizes='100vw'
                            className='object-cover'
                        />
                    </motion.div>
                ))}
                <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/40' />
            </div>

            <div className='relative flex w-full flex-col gap-12 px-6 py-16 lg:h-svh lg:flex-row lg:items-stretch lg:justify-between lg:gap-16 lg:px-20 lg:py-0 xl:px-28'>
                {/* Heading (top left) */}
                <div className='lg:max-w-md lg:self-start lg:pt-28'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>What We Do</p>
                    <h2 className='font-display text-cream mt-4 text-3xl leading-[1.1] lg:text-4xl'>
                        Six crafts,
                        <br />
                        one landscape.
                    </h2>
                    <p className='text-cream/70 mt-5 max-w-sm text-sm leading-relaxed font-light'>
                        From the first sketch to the final cut of the season, every discipline lives under one roof — and
                        one standard of care.
                    </p>
                </div>

                {/* Service index (bottom right) */}
                <ul className='lg:w-96 lg:self-end lg:pb-16'>
                    {SERVICE_CATEGORIES.map((category, index) => {
                        const isActive = active === index;
                        const Icon = SERVICE_ICONS[category.slug];

                        return (
                            <li key={category.slug}>
                                <Link
                                    href={`/services/${category.slug}`}
                                    onMouseEnter={() => setActive(index)}
                                    onFocus={() => setActive(index)}
                                    className='block py-2.5 transition-colors duration-500 lg:py-3'>
                                    {/* Mobile: inline image (no hover on touch) */}
                                    <div className='relative mb-5 aspect-[16/10] overflow-hidden md:hidden'>
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            sizes='100vw'
                                            className='object-cover'
                                        />
                                        <div className='bg-forest/20 absolute inset-0' />
                                    </div>

                                    <div className='flex items-start justify-between gap-5'>
                                        <div className='min-w-0'>
                                            <p
                                                className={`text-beige text-[11px] font-medium tracking-[0.3em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.4)] transition-colors duration-500 ${
                                                    isActive ? '' : 'md:text-cream/40'
                                                }`}>
                                                {CATEGORY_LABELS[category.slug]}
                                            </p>
                                            <h3
                                                className={`font-display text-cream mt-1 flex items-center gap-2.5 text-[15px] leading-tight [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] transition-colors duration-500 sm:text-base lg:text-lg ${
                                                    isActive ? '' : 'md:text-cream/45'
                                                }`}>
                                                <Icon
                                                    className='h-4 w-4 shrink-0 lg:h-[18px] lg:w-[18px]'
                                                    strokeWidth={1.25}
                                                />
                                                {category.title}
                                            </h3>
                                        </div>
                                        <span
                                            className={`font-display hidden shrink-0 pt-2 text-sm tracking-widest transition-colors duration-500 md:block ${
                                                isActive ? 'text-beige' : 'text-cream/30'
                                            }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Animated line — draws in on the active (hovered) item */}
                                    <span
                                        className={`bg-beige mt-3 hidden h-px origin-left transition-transform duration-500 ease-out md:block ${
                                            isActive ? 'scale-x-100' : 'scale-x-0'
                                        }`}
                                    />

                                    {/* Description — reveals on hover (desktop) */}
                                    <div className='hidden md:block'>
                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    key='desc'
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.4, ease: EASE }}
                                                    className='overflow-hidden'>
                                                    <p className='text-cream/80 mt-3 max-w-md text-[13px] leading-relaxed font-light [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]'>
                                                        {category.shortDescription}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Description — always visible on mobile */}
                                    <p className='text-cream/80 mt-4 max-w-md text-sm leading-relaxed font-light md:hidden'>
                                        {category.shortDescription}
                                    </p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Services;
