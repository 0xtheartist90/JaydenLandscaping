'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion, useReducedMotion } from 'framer-motion';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop';

const Hero = () => {
    const reduceMotion = useReducedMotion();

    const fadeUp = (delay: number) => ({
        initial: reduceMotion ? false : { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className='relative flex min-h-svh items-center justify-center overflow-hidden'>
            <motion.div
                className='absolute inset-0'
                initial={reduceMotion ? false : { scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, ease: 'easeOut' }}>
                <Image
                    src={HERO_IMAGE}
                    alt='A beautifully landscaped backyard with natural stone and lush planting'
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
            </motion.div>
            <div className='absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60' />

            <div className='relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center'>
                <motion.div {...fadeUp(0.1)} className='mb-7 flex justify-center'>
                    <Image
                        src='/images/icon-round.png'
                        alt=''
                        aria-hidden
                        width={176}
                        height={176}
                        priority
                        className='h-32 w-32 drop-shadow-lg sm:h-40 sm:w-40'
                    />
                </motion.div>
                <motion.p
                    {...fadeUp(0.2)}
                    className='text-beige mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>
                    Toronto · Landscape Design &amp; Build
                </motion.p>
                <motion.h1
                    {...fadeUp(0.35)}
                    className='font-display text-cream text-4xl leading-[1.15] sm:text-5xl lg:text-6xl xl:text-7xl'>
                    Exceptional Outdoor Spaces Designed To Last
                </motion.h1>
                <motion.p
                    {...fadeUp(0.5)}
                    className='text-cream/85 mx-auto mt-8 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                    Custom landscape design, construction, and maintenance services throughout the Greater Toronto
                    Area.
                </motion.p>
                <motion.div
                    {...fadeUp(0.65)}
                    className='mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                    <Link
                        href='/contact'
                        className='bg-cream text-forest hover:bg-beige w-full px-10 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300 sm:w-auto'>
                        Get A Free Quote
                    </Link>
                    <Link
                        href='/projects'
                        className='border-cream/70 text-cream hover:bg-cream/10 w-full border px-10 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300 sm:w-auto'>
                        View Projects
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className='absolute bottom-10 left-1/2 z-10 -translate-x-1/2'>
                <div className='bg-cream/60 h-14 w-px animate-pulse' />
            </motion.div>
        </section>
    );
};

export default Hero;
