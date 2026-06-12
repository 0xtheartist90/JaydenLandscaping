import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';

const CtaBanner = () => {
    return (
        <section className='relative overflow-hidden px-6 py-28 lg:px-10 lg:py-40'>
            <Image
                src='https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2400&auto=format&fit=crop'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='object-cover'
            />
            <div className='bg-forest/80 absolute inset-0' />

            <Reveal className='relative z-10 mx-auto max-w-3xl text-center'>
                <h2 className='font-display text-cream text-3xl leading-snug sm:text-4xl lg:text-5xl'>
                    Ready To Transform Your Outdoor Space?
                </h2>
                <p className='text-cream/80 mx-auto mt-6 max-w-xl text-base leading-relaxed font-light sm:text-lg'>
                    Tell us about your project and we&apos;ll walk your property with you — no pressure, no
                    obligation.
                </p>
                <Link
                    href='#contact'
                    className='bg-cream text-forest hover:bg-beige mt-10 inline-block px-12 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                    Request A Free Estimate
                </Link>
            </Reveal>
        </section>
    );
};

export default CtaBanner;
