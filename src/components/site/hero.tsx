'use client';

import Image from 'next/image';
import Link from 'next/link';

import QuoteButton from '@/components/site/quote-button';

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// H.264 MP4 first — hardware-decoded on every browser/device, so playback stays smooth
// (Safari/iOS use this). WebM (VP9) is a lighter fallback for browsers that prefer it.
const HERO_VIDEO_MP4 = '/videos/hero.mp4';
const HERO_VIDEO_WEBM = '/videos/hero.webm';
const HERO_POSTER = '/images/brand/hero-poster.webp';

const Hero = () => {
    const reduceMotion = useReducedMotion();

    const fadeUp = (delay: number) => ({
        initial: reduceMotion ? false : { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className='relative flex min-h-svh flex-col overflow-hidden'>
            {/* Background video — no transform animation; scaling a decoding <video> glitches the first seconds */}
            <div className='absolute inset-0'>
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
                        <source src={HERO_VIDEO_MP4} type='video/mp4' />
                        <source src={HERO_VIDEO_WEBM} type='video/webm' />
                    </video>
                )}
            </div>

            {/* Light edge gradients — keep the footage visible, only darken edges for legibility */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/35' />
            <div className='absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent' />

            {/* Vertical brand word down the right edge */}
            {/* Right side: brand icon + vertical word, icon aligned to the top of the word */}
            <div className='pointer-events-none absolute top-1/2 right-4 hidden -translate-y-1/2 items-start gap-4 select-none lg:right-6 lg:flex'>
                <div className='flex flex-col items-center'>
                    <motion.div {...fadeUp(0.3)}>
                        <Image
                            src='/images/brand/icon-round.webp'
                            alt="Jayden's Landscaping"
                            width={256}
                            height={256}
                            priority
                            className='h-24 w-24 drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] xl:h-[7.5rem] xl:w-[7.5rem]'
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
                        src='/images/brand/icon-round.webp'
                        alt="Jayden's Landscaping"
                        width={256}
                        height={256}
                        priority
                        className='h-[6.75rem] w-[6.75rem] drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] sm:h-[7.875rem] sm:w-[7.875rem]'
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
                            <QuoteButton className='bg-beige text-forest hover:bg-beige/85 px-8 py-3 text-center text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                                Get A Free Quote
                            </QuoteButton>
                            <Link
                                href='/projects'
                                className='border-cream/70 text-cream hover:bg-cream/10 border px-8 py-3 text-center text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
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
