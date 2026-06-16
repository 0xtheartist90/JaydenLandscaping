import Image from 'next/image';

import QuoteButton from '@/components/site/quote-button';
import Reveal from '@/components/site/reveal';

import { ArrowUpRight } from 'lucide-react';

const CtaBanner = () => {
    return (
        <section className='relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24'>
            <Image
                src='https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2400&auto=format&fit=crop'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='object-cover'
            />
            <div className='bg-forest/80 absolute inset-0' />

            <Reveal className='relative z-10 mx-auto max-w-2xl text-center'>
                <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Get Started</p>
                <h2 className='font-display text-cream mt-4 text-2xl leading-snug sm:text-3xl lg:text-4xl'>
                    Ready To Transform Your Outdoor Space?
                </h2>
                <p className='text-cream/80 mx-auto mt-5 max-w-lg text-sm leading-relaxed font-light'>
                    Tell us about your project and we&apos;ll walk your property with you — no pressure, no obligation.
                </p>
                <QuoteButton className='text-cream hover:text-cream/80 relative mt-8 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                    Request A Free Estimate
                    <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                </QuoteButton>
            </Reveal>
        </section>
    );
};

export default CtaBanner;
