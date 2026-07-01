'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import Carousel from '@/components/site/carousel';
import { SERVICE_CATEGORIES } from '@/lib/services';

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import {
    ArrowUpRight,
    BrickWall,
    ChevronDown,
    PencilRuler,
    Shovel,
    Snowflake,
    Sofa,
    Sprout,
    Trees,
    type LucideIcon
} from 'lucide-react';

// Small editorial category labels for the index — presentational, paired by slug.
const CATEGORY_LABELS: Record<string, string> = {
    'landscape-design': 'Vision & Planning',
    'backyard-construction': 'Outdoor Living',
    'interlocking-driveways': 'Structure & Stone',
    'tree-shrub-planting': 'Planting & Greenery',
    'lawn-maintenance': 'Care & Upkeep',
    'snow-removal': 'Winter & Safety',
    'excavation-land-development': 'Site & Groundwork'
};

// Minimal line icon per service, keyed by slug.
const SERVICE_ICONS: Record<string, LucideIcon> = {
    'landscape-design': PencilRuler,
    'backyard-construction': Sofa,
    'interlocking-driveways': BrickWall,
    'tree-shrub-planting': Trees,
    'lawn-maintenance': Sprout,
    'snow-removal': Snowflake,
    'excavation-land-development': Shovel
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
        <div id='services' className='scroll-mt-20'>
            {/* Mobile: compact swipeable carousel of services */}
            <section className='bg-forest relative overflow-hidden px-6 py-16 lg:hidden'>
                <Image
                    src='/images/brand/leafbg.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.05]'
                />
                <div className='relative z-10'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>What We Do</p>
                    <h2 className='font-display text-cream mt-3 text-3xl leading-tight'>Our Services</h2>
                    <Carousel className='mt-8' theme='light'>
                        {SERVICE_CATEGORIES.map((category) => {
                            const CardIcon = SERVICE_ICONS[category.slug];

                            return (
                                <Link key={category.slug} href={`/services/${category.slug}`} className='group block'>
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            sizes='100vw'
                                            className='object-cover'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />
                                        <CardIcon
                                            className='text-cream absolute top-5 left-5 h-7 w-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                                            strokeWidth={1}
                                        />
                                    </div>
                                    <p className='text-beige mt-5 text-[11px] font-medium tracking-[0.3em] uppercase'>
                                        {CATEGORY_LABELS[category.slug]}
                                    </p>
                                    <h3 className='font-display text-cream mt-2 text-2xl leading-snug'>
                                        {category.title}
                                    </h3>
                                    <p className='text-cream/75 mt-3 text-sm leading-relaxed font-light'>
                                        {category.shortDescription}
                                    </p>
                                    <span className='text-beige mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase'>
                                        Explore
                                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                    </span>
                                </Link>
                            );
                        })}
                    </Carousel>
                </div>
            </section>

            {/* Desktop: pinned, scroll-driven experience */}
            <section
                ref={ref}
                className='bg-forest relative hidden lg:block'
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
                                    className='bg-beige text-forest hover:bg-cream mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase shadow-[0_6px_24px_rgba(0,0,0,0.3)] transition-colors duration-300'>
                                    Explore {current.title}
                                    <ArrowUpRight className='h-4 w-4' strokeWidth={1.5} />
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
        </div>
    );
};

export default Services;
