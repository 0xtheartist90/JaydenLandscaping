import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';

import { ArrowRight } from 'lucide-react';

const AboutTeaser = () => {
    return (
        <section className='bg-cream px-6 py-24 lg:px-10 lg:py-32'>
            <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                <Reveal>
                    <div className='relative aspect-[3/2] overflow-hidden'>
                        <Image
                            src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop'
                            alt='Jayden, founder of Jayden&apos;s Landscaping'
                            fill
                            sizes='(max-width: 1024px) 100vw, 50vw'
                            className='object-cover'
                        />
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>The Story</p>
                    <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                        It Started With A Wheelbarrow
                    </h2>
                    <p className='text-ink/75 mt-6 text-base leading-relaxed font-light sm:text-lg'>
                        Over ten years ago, Jayden started this business with little more than a wheelbarrow, a used
                        car, and an unshakeable passion for landscaping. Today it&apos;s a respected design &amp;
                        build company serving clients across the GTA — with the same standard it started with.
                    </p>
                    <Link
                        href='/about'
                        className='border-forest text-forest hover:bg-forest hover:text-cream mt-9 inline-flex items-center gap-3 border px-8 py-3.5 text-[13px] font-medium tracking-[0.18em] uppercase transition-all duration-300'>
                        Read Our Story
                        <ArrowRight className='h-3.5 w-3.5' />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default AboutTeaser;
