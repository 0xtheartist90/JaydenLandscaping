import Image from 'next/image';
import Link from 'next/link';

import QuoteButton from '@/components/site/quote-button';
import Reveal from '@/components/site/reveal';
import type { City } from '@/lib/cities';

import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';

const AVAILABLE_SERVICES = [
    'Interlocking driveways, patios & walkways',
    'Landscape design (with 3D illustrations)',
    'Tree, shrub & garden planting',
    'New lawn installation & lawn maintenance',
    'Retaining walls, pools & ponds, decks & fencing',
    'Landscape lighting',
    'Snow removal',
    'Commercial landscaping'
];

const REASONS = [
    'Over 10 years of local experience in these neighbourhoods',
    'We grow our own plants at our Markham nursery, Z Force Farm',
    '3D design so you can see your space before we build it',
    'One team, start to finish — design, build, plant and maintain'
];

const CityLanding = ({ city }: { city: City }) => {
    return (
        <>
            {/* Hero */}
            <section className='relative flex min-h-[60svh] items-center justify-center overflow-hidden'>
                <Image
                    src='/images/landscape-design.webp'
                    alt={`Landscaping in ${city.name}`}
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' />
                <div className='relative z-10 mx-auto max-w-3xl px-6 pt-24 text-center'>
                    <p className='text-beige mb-5 text-[11px] font-medium tracking-[0.35em] uppercase'>
                        Serving {city.name}
                    </p>
                    <h1 className='font-display text-cream text-4xl leading-[1.12] sm:text-5xl lg:text-6xl'>
                        Landscaping in {city.name}
                    </h1>
                    <p className='text-cream/85 mx-auto mt-7 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                        Design, build, planting and maintenance for homes and businesses across {city.name} — the same
                        team, the same standards, from start to finish.
                    </p>
                    <QuoteButton className='bg-beige text-forest hover:bg-beige/85 mt-9 inline-block px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                        Get A Free Quote
                    </QuoteButton>
                </div>
            </section>

            {/* Intro */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <Reveal className='relative z-10 mx-auto max-w-3xl'>
                    <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>About {city.name}</p>
                    <h2 className='font-display text-forest mt-3 text-2xl leading-snug sm:text-3xl'>
                        Local landscaping, done properly
                    </h2>
                    <div className='text-ink/75 mt-6 space-y-5 text-[15px] leading-relaxed font-light sm:text-base'>
                        {city.intro.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Services available */}
            <section className='bg-forest relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/leafbg.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.05]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>
                        What We Offer in {city.name}
                    </p>
                    <h2 className='font-display text-cream mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl'>
                        Our full range of services
                    </h2>
                    <ul className='mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {AVAILABLE_SERVICES.map((service) => (
                            <li key={service} className='border-cream/15 flex items-start gap-3 border-t pt-4'>
                                <Check className='text-beige mt-0.5 h-4 w-4 shrink-0' strokeWidth={2} />
                                <span className='text-cream/85 text-sm leading-relaxed'>{service}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href='/services'
                        className='border-cream/40 text-cream hover:bg-cream/10 mt-12 inline-flex items-center gap-2 border px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                        Explore All Services
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </div>
            </section>

            {/* Why us */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-3xl'>
                    <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Why Choose Us</p>
                    <h2 className='font-display text-forest mt-3 text-2xl leading-snug sm:text-3xl'>
                        Why {city.name} homeowners choose us
                    </h2>
                    <ul className='mt-6 space-y-4'>
                        {REASONS.map((reason) => (
                            <li key={reason} className='flex items-start gap-3'>
                                <Check className='text-moss mt-1 h-4 w-4 shrink-0' strokeWidth={2} />
                                <span className='text-ink/75 text-[15px] leading-relaxed font-light sm:text-base'>
                                    {reason}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href='/service-areas'
                        className='text-forest hover:text-moss relative mt-8 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                        View All Service Areas
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className='relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/softscaping.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='bg-forest/85 absolute inset-0' />
                <div className='relative z-10 mx-auto max-w-2xl text-center'>
                    <h2 className='font-display text-cream text-3xl leading-snug sm:text-4xl'>
                        Let&apos;s Transform Your {city.name} Property
                    </h2>
                    <p className='text-cream/80 mx-auto mt-5 max-w-xl text-sm leading-relaxed font-light sm:text-base'>
                        Tell us a little about your space and what you&apos;re hoping to achieve, and we&apos;ll get back
                        to you with a free, no-obligation quote — no pressure, just honest advice.
                    </p>
                    <div className='text-cream/85 mt-8 flex flex-col items-center gap-3 text-sm'>
                        <a href='tel:+16476214219' className='hover:text-cream flex items-center gap-2.5 transition-colors'>
                            <Phone className='text-beige h-4 w-4' strokeWidth={1.5} />
                            +1 647-621-4219
                        </a>
                        <a
                            href='mailto:jaydenlandscaping@yahoo.com'
                            className='hover:text-cream flex items-center gap-2.5 transition-colors'>
                            <Mail className='text-beige h-4 w-4' strokeWidth={1.5} />
                            jaydenlandscaping@yahoo.com
                        </a>
                        <p className='flex items-center gap-2.5'>
                            <MapPin className='text-beige h-4 w-4' strokeWidth={1.5} />
                            5357 19th Ave, Markham, ON L3P 3J3
                        </p>
                    </div>
                    <QuoteButton className='bg-beige text-forest hover:bg-beige/85 mt-9 inline-block px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                        Get A Free Quote
                    </QuoteButton>
                </div>
            </section>
        </>
    );
};

export default CityLanding;
