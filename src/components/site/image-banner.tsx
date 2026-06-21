import Image from 'next/image';

import Reveal from '@/components/site/reveal';

// Full-width image banner — a calm breather between sections with a single brand statement.
const ImageBanner = () => {
    return (
        <section className='relative flex min-h-[46svh] items-center justify-center overflow-hidden'>
            <Image
                src='/images/projects/markham.webp'
                alt='A landscaped estate at dusk, built by Jayden&apos;s Landscaping'
                fill
                sizes='100vw'
                className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/45 to-forest/60' />
            <Reveal blur className='relative z-10 mx-auto max-w-3xl px-6 text-center'>
                <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Our Promise</p>
                <h2 className='font-display text-cream mt-4 text-2xl leading-snug [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] sm:text-3xl lg:text-4xl'>
                    One team, from the first sketch to the final stone.
                </h2>
            </Reveal>
        </section>
    );
};

export default ImageBanner;
