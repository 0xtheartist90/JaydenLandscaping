'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_VIDEO_WEBM = '/videos/hero.webm';
const HERO_POSTER =
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop';

const Hero = () => {
    const reduceMotion = useReducedMotion();

    const fadeUp = (delay: number) => ({
        initial: reduceMotion ? false : { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className='relative flex min-h-svh flex-col overflow-hidden'>
            {/* Background video */}
            <motion.div
                className='absolute inset-0'
                initial={reduceMotion ? false : { scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, ease: 'easeOut' }}>
                {reduceMotion ? (
                    <Image
                        src={HERO_POSTER}
                        alt='A beautifully landscaped backyard with natural stone and lush planting'
                        fill
                        priority
                        sizes='100vw'
                        className='object-cover'
                    />
                ) : (
                    <video
                        className='h-full w-full object-cover'
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        poster={HERO_POSTER}
                        aria-hidden>
                        <source src={HERO_VIDEO_WEBM} type='video/webm' />
                    </video>
                )}
            </motion.div>

            {/* Light edge gradients — keep the footage visible, only darken edges for legibility */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/35' />
            <div className='absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent' />

            {/* Vertical brand word down the right edge */}
            {/* Right side: brand icon + vertical word, icon aligned to the top of the word */}
            <div className='pointer-events-none absolute top-1/2 right-4 hidden -translate-y-1/2 items-start gap-4 select-none lg:right-6 lg:flex'>
                <div className='flex flex-col items-center'>
                    <motion.div {...fadeUp(0.3)}>
                        <Image
                            src='/images/icon-round.webp'
                            alt="Jayden's Landscaping"
                            width={256}
                            height={256}
                            priority
                            className='h-32 w-32 drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] xl:h-40 xl:w-40'
                        />
                    </motion.div>
                    <motion.span
                        {...fadeUp(0.35)}
                        aria-hidden
                        className='font-display text-cream/85 mt-3 [writing-mode:vertical-rl] text-5xl tracking-[0.12em] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] lg:text-6xl xl:text-7xl'>
                        Jayden&apos;s
                    </motion.span>
                </div>
                <motion.span
                    {...fadeUp(0.4)}
                    aria-hidden
                    className='font-display text-cream/85 [writing-mode:vertical-rl] text-5xl tracking-[0.12em] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] lg:text-6xl xl:text-7xl'>
                    Landscaping
                </motion.span>
            </div>

            {/* Content layer — anchored to the edges, not the center */}
            <div className='relative z-10 flex min-h-svh flex-col px-6 pt-24 pb-10 lg:px-10 lg:pt-28 lg:pb-14'>
                {/* Brand icon — top center on mobile (right-side group takes over on desktop) */}
                <motion.div {...fadeUp(0.25)} className='flex justify-center lg:hidden'>
                    <Image
                        src='/images/icon-round.webp'
                        alt="Jayden's Landscaping"
                        width={256}
                        height={256}
                        priority
                        className='h-36 w-36 drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] sm:h-[10.5rem] sm:w-[10.5rem]'
                    />
                </motion.div>

                <div className='flex-1' />

                {/* Bottom row: tagline + CTAs (left) · scroll cue (right) */}
                <div className='flex flex-col gap-10 md:flex-row md:items-end md:justify-between'>
                    <div className='max-w-xl'>
                        <motion.p
                            {...fadeUp(0.4)}
                            className='text-beige mb-5 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>
                            Toronto · Landscape Design &amp; Build
                        </motion.p>
                        <motion.h1
                            {...fadeUp(0.5)}
                            className='font-display text-cream text-2xl leading-[1.2] [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] sm:text-3xl lg:text-4xl'>
                            Exceptional Outdoor Spaces Designed To Last
                        </motion.h1>
                        <motion.p
                            {...fadeUp(0.6)}
                            className='text-cream/85 mt-5 max-w-md text-sm leading-relaxed font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] sm:text-base'>
                            Custom landscape design, construction &amp; maintenance throughout the Greater Toronto Area.
                        </motion.p>
                        <motion.div
                            {...fadeUp(0.7)}
                            className='mt-9 flex flex-col gap-4 sm:flex-row sm:items-center'>
                            <Link
                                href='/contact'
                                className='bg-forest text-cream hover:bg-moss px-10 py-4 text-center text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                                Get A Free Quote
                            </Link>
                            <Link
                                href='/projects'
                                className='border-cream/70 text-cream hover:bg-cream/10 border px-10 py-4 text-center text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                                View Projects
                            </Link>
                        </motion.div>
                    </div>

                    {/* Scroll cue — bottom right */}
                    <motion.div
                        {...fadeUp(0.85)}
                        className='text-cream/80 hidden items-center gap-3 md:flex'>
                        <span className='text-xs tracking-[0.3em] uppercase [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]'>
                            Scroll to explore
                        </span>
                        <ChevronDown className='h-5 w-5 animate-bounce' strokeWidth={1.5} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
