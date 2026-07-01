import Image from 'next/image';
import Link from 'next/link';

import CtaBanner from '@/components/site/cta-banner';
import Reveal from '@/components/site/reveal';
import { CITIES, type City } from '@/lib/cities';

import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

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
            {/* Hero — eyebrow + title only, matching the rest of the site */}
            <section className='relative flex min-h-[60svh] items-center justify-center overflow-hidden'>
                <Image
                    src={city.heroImage}
                    alt={`Landscaping in ${city.name}`}
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55' />
                <div className='relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center'>
                    <p className='text-beige mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>
                        Serving {city.name}
                    </p>
                    <h1 className='font-display text-cream text-4xl leading-[1.15] sm:text-5xl lg:text-6xl'>
                        Landscaping in {city.name}
                    </h1>
                </div>
            </section>

            {/* Quick service-area nav — back link + toggle between every area */}
            <section className='bg-cream border-sand/60 border-b px-6 py-4 lg:px-10'>
                <div className='mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <Link
                        href='/service-areas'
                        className='text-moss hover:text-forest inline-flex shrink-0 items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors'>
                        <ArrowLeft className='h-3.5 w-3.5' strokeWidth={1.5} />
                        All Service Areas
                    </Link>
                    <div className='flex flex-wrap gap-2'>
                        {CITIES.map((entry) => {
                            const active = entry.slug === city.slug;

                            return (
                                <Link
                                    key={entry.slug}
                                    href={`/${entry.slug}`}
                                    aria-current={active ? 'page' : undefined}
                                    className={`px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors ${
                                        active
                                            ? 'bg-forest text-cream'
                                            : 'border-forest/20 text-forest/70 hover:bg-forest/10 border'
                                    }`}>
                                    {entry.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-16 lg:px-10 lg:py-28'>
                <Image
                    src='/images/brand/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
                    <Reveal blur direction='left'>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>
                            About {city.name}
                        </p>
                        <h2 className='font-display text-forest mt-3 text-2xl leading-snug sm:text-3xl'>
                            Local landscaping, done properly
                        </h2>
                        <div className='text-ink/75 mt-6 space-y-5 text-[15px] leading-relaxed font-light sm:text-base'>
                            {city.intro.map((paragraph) => (
                                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal
                        blur
                        direction='right'
                        delay={0.1}
                        className='relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]'>
                        <Image
                            src={city.aboutImage}
                            alt={`Landscaping work in ${city.name}`}
                            fill
                            sizes='(max-width: 1024px) 100vw, 50vw'
                            className='object-cover'
                        />
                    </Reveal>
                </div>
            </section>

            {/* Services available */}
            <section className='bg-forest relative overflow-hidden px-6 py-16 lg:px-10 lg:py-28'>
                <Image
                    src='/images/brand/leafbg.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.05]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <Reveal blur>
                        <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>
                            What We Offer in {city.name}
                        </p>
                        <h2 className='font-display text-cream mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl'>
                            Our full range of services
                        </h2>
                    </Reveal>
                    <ul className='mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {AVAILABLE_SERVICES.map((service, index) => (
                            <Reveal
                                key={service}
                                blur
                                delay={(index % 3) * 0.08}
                                className='border-cream/15 flex items-start gap-3 border-t pt-4'>
                                <Check className='text-beige mt-0.5 h-4 w-4 shrink-0' strokeWidth={2} />
                                <span className='text-cream/85 text-sm leading-relaxed'>{service}</span>
                            </Reveal>
                        ))}
                    </ul>
                    <Reveal blur delay={0.1}>
                        <Link
                            href='/services'
                            className='border-cream/40 text-cream hover:bg-cream/10 mt-12 inline-flex items-center gap-2 border px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                            Explore All Services
                            <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Full-width image banner — unique per city */}
            <section className='relative h-[44svh] min-h-[300px] w-full overflow-hidden'>
                <Image
                    src={city.bannerImage}
                    alt={`Recent landscaping in ${city.name}`}
                    fill
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15' />
            </section>

            {/* Why us */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-16 lg:px-10 lg:py-28'>
                <Image
                    src='/images/brand/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-3xl'>
                    <Reveal blur>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Why Choose Us</p>
                        <h2 className='font-display text-forest mt-3 text-2xl leading-snug sm:text-3xl'>
                            Why {city.name} homeowners choose us
                        </h2>
                    </Reveal>
                    <ul className='mt-6 space-y-4'>
                        {REASONS.map((reason, index) => (
                            <Reveal key={reason} blur delay={index * 0.08} className='flex items-start gap-3'>
                                <Check className='text-moss mt-1 h-4 w-4 shrink-0' strokeWidth={2} />
                                <span className='text-ink/75 text-[15px] leading-relaxed font-light sm:text-base'>
                                    {reason}
                                </span>
                            </Reveal>
                        ))}
                    </ul>
                    <Reveal blur delay={0.1}>
                        <Link
                            href='/service-areas'
                            className='text-forest hover:text-moss relative mt-8 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                            View All Service Areas
                            <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <CtaBanner />
        </>
    );
};

export default CityLanding;
