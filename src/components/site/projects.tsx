'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { PROJECTS } from '@/lib/projects';

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// Each project shows 4 selectable images. Real per-project galleries can replace
// these placeholders later (project.gallery); for now we fall back to the project
// set so the click-to-change-background interaction is demonstrable.
const imagesFor = (name: string, primary: string, gallery?: string[]) => {
    if (gallery && gallery.length) return [primary, ...gallery].slice(0, 4);
    const others = PROJECTS.filter((p) => p.name !== name).map((p) => p.image);

    return [primary, ...others].slice(0, 4);
};

const Projects = () => {
    const total = PROJECTS.length;
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [active, setActive] = useState(0);
    const [selected, setSelected] = useState(0);

    // Pin the section and drive the active project from scroll progress.
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        const next = Math.max(0, Math.min(total - 1, Math.floor(value * total)));
        setActive((prev) => (prev === next ? prev : next));
    });

    // Reset to the first image whenever the active project changes.
    useEffect(() => {
        setSelected(0);
    }, [active]);

    const current = PROJECTS[active];
    const images = imagesFor(current.name, current.image, current.gallery);
    const bgSrc = images[Math.min(selected, images.length - 1)];

    return (
        <section
            ref={ref}
            id='projects'
            className='bg-forest relative scroll-mt-20'
            style={{ height: `${total * 100}svh` }}>
            <div className='sticky top-0 h-svh overflow-hidden'>
                {/* Background — cross-fades when the project OR the selected image changes */}
                <AnimatePresence initial={false}>
                    <motion.div
                        key={bgSrc}
                        className='absolute inset-0'
                        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 0.9, ease: EASE }, scale: { duration: 1.6, ease: 'easeOut' } }}>
                        <Image src={bgSrc} alt='' aria-hidden fill priority sizes='100vw' className='object-cover' />
                    </motion.div>
                </AnimatePresence>
                <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45' />

                <div className='relative mx-auto flex h-full max-w-7xl flex-col px-6 pt-28 pb-14 lg:px-10 lg:pb-16'>
                    {/* Top: label + index (left) · counter (right) */}
                    <div className='flex items-start justify-between gap-6'>
                        <div>
                            <p className='text-beige text-sm font-medium tracking-[0.35em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] lg:text-base'>
                                Selected Work
                            </p>
                            <div className='mt-6 hidden flex-col gap-3 lg:flex'>
                                {PROJECTS.map((project, index) => (
                                    <span
                                        key={project.name}
                                        className={`font-display text-sm transition-colors duration-500 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] ${
                                            active === index ? 'text-cream' : 'text-cream/35'
                                        }`}>
                                        {project.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className='font-display text-cream/80 shrink-0 text-xl tracking-[0.2em] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] lg:text-2xl'>
                            {String(active + 1).padStart(2, '0')}
                            <span className='text-cream/40'> / {String(total).padStart(2, '0')}</span>
                        </p>
                    </div>

                    {/* Bottom right: active project — cross-fades on change */}
                    <div className='mt-auto ml-auto max-w-2xl text-right'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={current.name}
                                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                                transition={{ duration: 0.55, ease: EASE }}>
                                <p className='text-beige text-[11px] font-medium tracking-[0.3em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]'>
                                    {current.location}
                                </p>
                                <h2 className='font-display text-cream mt-3 text-4xl leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl'>
                                    {current.name}
                                </h2>
                                <p className='text-cream/85 mt-5 ml-auto max-w-md text-sm leading-relaxed font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] sm:text-base'>
                                    {current.description}
                                </p>
                                <Link
                                    href='/contact'
                                    className='text-cream hover:text-beige relative mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                                    Start A Project Like This
                                    <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Thumbnails — click to change the background image */}
                    <div className='absolute bottom-24 left-6 hidden gap-2.5 lg:left-10 lg:flex'>
                        {images.map((src, index) => (
                            <button
                                key={`${current.name}-${index}`}
                                type='button'
                                onClick={() => setSelected(index)}
                                aria-label={`Show image ${index + 1} of ${current.name}`}
                                className={`relative h-14 w-20 overflow-hidden transition-all duration-300 ${
                                    selected === index
                                        ? 'ring-beige opacity-100 ring-2'
                                        : 'opacity-55 hover:opacity-90'
                                }`}>
                                <Image src={src} alt='' aria-hidden fill sizes='80px' className='object-cover' />
                            </button>
                        ))}
                    </div>

                    {/* Scroll hint — bottom left */}
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

export default Projects;
