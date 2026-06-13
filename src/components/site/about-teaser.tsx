import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';

import { ArrowUpRight } from 'lucide-react';

const AboutTeaser = () => {
    return (
        <section className='bg-sand px-6 py-16 lg:px-10 lg:py-20'>
            <div className='mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
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
                    <p className='text-moss mb-4 text-[11px] font-medium tracking-[0.35em] uppercase'>The Story</p>
                    <h2 className='font-display text-forest text-2xl leading-snug sm:text-3xl'>
                        It Started With A Wheelbarrow
                    </h2>
                    <p className='text-ink/75 mt-5 max-w-md text-sm leading-relaxed font-light'>
                        Over ten years ago, Jayden started this business with little more than a wheelbarrow, a used
                        car, and an unshakeable passion for landscaping. Today it&apos;s a respected design &amp; build
                        company serving clients across the GTA — with the same standard it started with.
                    </p>
                    <Link
                        href='/about'
                        className='text-forest hover:text-moss relative mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                        Read Our Story
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default AboutTeaser;
