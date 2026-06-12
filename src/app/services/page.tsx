import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';
import { SERVICE_CATEGORIES } from '@/lib/services';

import { Check } from 'lucide-react';

export const metadata: Metadata = {
    title: "Services | Jayden's Landscaping",
    description:
        'Landscape design, hardscaping, outdoor structures, water features, softscaping and property maintenance — premium landscaping services throughout the Greater Toronto Area.'
};

const ServicesPage = () => {
    return (
        <>
            {/* Page hero */}
            <section className='relative flex min-h-[60svh] items-center justify-center overflow-hidden'>
                <Image
                    src='https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2400&auto=format&fit=crop'
                    alt='A custom-built home with landscaped grounds at sunset'
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55' />
                <div className='relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center'>
                    <p className='text-beige mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>
                        Our Services
                    </p>
                    <h1 className='font-display text-cream text-4xl leading-[1.15] sm:text-5xl lg:text-6xl'>
                        Six Disciplines. One Standard.
                    </h1>
                    <p className='text-cream/85 mx-auto mt-8 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                        From the first design sketch to year-round care, every service is delivered by one team with
                        one obsession — craftsmanship that lasts.
                    </p>
                </div>
            </section>

            {/* Category sections */}
            {SERVICE_CATEGORIES.map((category, index) => (
                <section
                    key={category.slug}
                    id={category.slug}
                    className={`scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32 ${
                        index % 2 === 0 ? 'bg-cream' : 'bg-sand/40'
                    }`}>
                    <div className='mx-auto max-w-7xl'>
                        <div
                            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                            }`}>
                            <Reveal>
                                <div className='relative aspect-[4/3] overflow-hidden'>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        sizes='(max-width: 1024px) 100vw, 50vw'
                                        className='object-cover'
                                    />
                                </div>
                            </Reveal>

                            <Reveal delay={0.15}>
                                <p className='text-moss mb-4 text-xs font-medium tracking-[0.35em] uppercase'>
                                    {String(index + 1).padStart(2, '0')}
                                </p>
                                <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                                    {category.title}
                                </h2>
                                <p className='text-ink/75 mt-6 text-base leading-relaxed font-light sm:text-lg'>
                                    {category.description}
                                </p>

                                <div className='mt-10 space-y-6'>
                                    {category.benefits.map((benefit) => (
                                        <div key={benefit.title} className='border-moss/30 border-l-2 pl-5'>
                                            <h3 className='font-display text-forest text-base'>{benefit.title}</h3>
                                            <p className='text-ink/65 mt-1.5 text-sm leading-relaxed'>
                                                {benefit.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>

                        <Reveal className='mt-14 lg:mt-16'>
                            <div className='bg-forest/[0.04] border-sand border px-8 py-8 lg:px-10'>
                                <p className='text-moss text-xs font-medium tracking-[0.3em] uppercase'>
                                    What&apos;s Included
                                </p>
                                <ul className='mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
                                    {category.subservices.map((subservice) => (
                                        <li key={subservice} className='flex items-center gap-3'>
                                            <Check className='text-moss h-4 w-4 shrink-0' strokeWidth={2} />
                                            <span className='text-ink/80 text-sm'>{subservice}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href='/contact'
                                    className='bg-forest text-cream hover:bg-moss mt-8 inline-block px-8 py-3.5 text-[13px] font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                                    Get A Free Quote
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>
            ))}
        </>
    );
};

export default ServicesPage;
