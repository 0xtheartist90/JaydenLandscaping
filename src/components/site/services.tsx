'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import {
    ArrowUpRight,
    BrickWall,
    ChevronDown,
    PencilRuler,
    Snowflake,
    Sofa,
    Sprout,
    Trees,
    type LucideIcon
} from 'lucide-react';

// Small editorial category labels for the index — presentational, paired by slug.
const CATEGORY_LABELS: Record<string, string> = {
    'landscape-design': 'Vision & Planning',
    'backyard-design': 'Outdoor Living',
    'interlocking-driveways': 'Structure & Stone',
    'tree-shrub-planting': 'Planting & Greenery',
    'lawn-maintenance': 'Care & Upkeep',
    'snow-removal': 'Winter & Safety'
};

// Minimal line icon per service, keyed by slug.
const SERVICE_ICONS: Record<string, LucideIcon> = {
    'landscape-design': PencilRuler,
    'backyard-design': Sofa,
    'interlocking-driveways': BrickWall,
    'tree-shrub-planting': Trees,
    'lawn-maintenance': Sprout,
    'snow-removal': Snowflake
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const Services = () => {
    const total = SERVICE_CATEGORIES.length;
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [active, setActive] = useState(0);

    // Pin the section and drive the active service from scroll progress.
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        const next = Math.max(0, Math.min(total - 1, Math.floor(value * total)));
        setActive((prev) => (prev === next ? prev : next));
    });

    const current = SERVICE_CATEGORIES[active];
    const Icon = SERVICE_ICONS[current.slug];

    // Scroll the window so the chosen panel becomes the active one.
    const goTo = (index: number) => {
        const el = ref.current;
        if (!el) return;
        const start = window.scrollY + el.getBoundingClientRect().top;
        const range = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: start + ((index + 0.5) / total) * range, behavior: 'smooth' });
    };

    return (
        <section
            ref={ref}
            id='services'
            className='bg-forest relative scroll-mt-20'
            style={{ height: `${total * 100}svh` }}>
            <div className='sticky top-0 h-svh overflow-hidden'>
                {/* Cross-fading background images */}
                {SERVICE_CATEGORIES.map((category, index) => (
                    <motion.div
                        key={category.slug}
                        className='absolute inset-0'
                        initial={false}
                        animate={{
                            opacity: active === index ? 1 : 0,
                            scale: reduceMotion ? 1 : active === index ? 1 : 1.06
                        }}
                        transition={{
                            opacity: { duration: 1.1, ease: EASE },
                            scale: { duration: 1.8, ease: 'easeOut' }
                        }}>
                        <Image
                            src={category.image}
                            alt=''
                            aria-hidden
                            fill
                            priority={index === 0}
                            sizes='100vw'
                            className='object-cover'
                        />
                    </motion.div>
                ))}
                <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45' />

                <div className='relative mx-auto flex h-full max-w-7xl flex-col px-6 pt-28 pb-14 lg:px-10 lg:pb-16'>
                    {/* Top: label + index (left) · counter (right) */}
                    <div className='flex items-start justify-between gap-6'>
                        <div>
                            <p className='text-beige text-sm font-medium tracking-[0.35em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] lg:text-base'>
                                What We Do
                            </p>

                            {/* Live chapter index */}
                            <div className='mt-6 hidden flex-col gap-3 lg:flex'>
                                {SERVICE_CATEGORIES.map((category, index) => {
                                    const ItemIcon = SERVICE_ICONS[category.slug];

                                    return (
                                        <button
                                            key={category.slug}
                                            type='button'
                                            onClick={() => goTo(index)}
                                            className='group flex items-center gap-2.5 text-left'>
                                            <ItemIcon
                                                className={`h-4 w-4 shrink-0 transition-colors duration-500 ${
                                                    active === index ? 'text-beige' : 'text-cream/30 group-hover:text-cream/60'
                                                }`}
                                                strokeWidth={1.25}
                                            />
                                            <span
                                                className={`font-display text-sm transition-colors duration-500 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] ${
                                                    active === index ? 'text-cream' : 'text-cream/35 group-hover:text-cream/70'
                                                }`}>
                                                {category.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <p className='font-display text-cream/80 shrink-0 text-xl tracking-[0.2em] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] lg:text-2xl'>
                            {String(active + 1).padStart(2, '0')}
                            <span className='text-cream/40'> / {String(total).padStart(2, '0')}</span>
                        </p>
                    </div>

                    {/* Bottom: active service — cross-fades on change */}
                    <div className='mt-auto ml-auto max-w-2xl text-right'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={current.slug}
                                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                                transition={{ duration: 0.55, ease: EASE }}>
                                <Icon
                                    className='text-cream ml-auto block h-9 w-9 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] lg:h-11 lg:w-11'
                                    strokeWidth={1}
                                />
                                <p className='text-beige mt-5 text-[11px] font-medium tracking-[0.3em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]'>
                                    {CATEGORY_LABELS[current.slug]}
                                </p>
                                <h2 className='font-display text-cream mt-3 text-4xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl'>
                                    {current.title}
                                </h2>
                                <p className='text-cream/85 mt-5 ml-auto max-w-md text-sm leading-relaxed font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] sm:text-base'>
                                    {current.shortDescription}
                                </p>
                                <Link
                                    href={`/services/${current.slug}`}
                                    className='text-cream hover:text-beige relative mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                                    Explore {current.title}
                                    <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Scroll hint — bottom right */}
                    <div className='text-cream/75 pointer-events-none absolute bottom-8 left-6 hidden items-center gap-2.5 lg:left-10 lg:flex'>
                        <span className='text-[10px] tracking-[0.3em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]'>
                            Scroll to explore
                        </span>
                        <ChevronDown className='h-5 w-5 animate-bounce' strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
