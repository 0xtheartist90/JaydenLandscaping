import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import CtaBanner from '@/components/site/cta-banner';
import Faq from '@/components/site/faq';
import Reveal from '@/components/site/reveal';

import { ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
    title: "Service Areas — GTA & York Region | Jayden's Landscaping",
    description:
        'Based in Markham and serving the Greater Toronto Area & York Region — Markham, Vaughan, North York, Richmond Hill, Newmarket, Aurora and beyond.'
};

const ZOOM = 'object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105';

const CITIES = [
    {
        name: 'Markham',
        href: '/landscaping-markham',
        image: '/images/projects/briji-01.webp',
        blurb: 'Our home turf — interlocking driveways, front-yard makeovers and full backyard builds. Our nursery, Z Force Farm, is here too, for faster turnarounds and fresher plants.'
    },
    {
        name: 'Vaughan',
        href: '/landscaping-vaughan',
        image: '/images/projects/oakville-01.webp',
        blurb: 'Custom landscaping at the scale of the homes it surrounds — sweeping driveways, retaining walls and layered gardens, from front-yard statements to private retreats.'
    },
    {
        name: 'North York',
        href: '/landscaping-north-york',
        image: '/images/services/outdoor-structures.webp',
        blurb: 'Driveways, walkways, planting and complete transformations — making the most of city-lot dimensions and turning compact spaces into polished outdoor rooms.'
    },
    {
        name: 'Richmond Hill',
        href: '/landscaping-richmond-hill',
        image: '/images/plants/tree-28.webp',
        blurb: 'Premium hardscaping for a resort feel at home — natural-stone pool surrounds, patios and gardens with durable materials, clean lines and careful detailing.'
    },
    {
        name: 'Newmarket',
        href: '/landscaping-newmarket',
        image: '/images/projects/newmarket-01.webp',
        blurb: 'Backyard renovations, decks, fencing and new lawns that make the most of your property — whether a full overhaul or a single standout feature.'
    },
    {
        name: 'Aurora',
        href: '/landscaping-aurora',
        image: '/images/projects/aurora.webp',
        blurb: 'Design, planting, lawn care and year-round maintenance — as comfortable building something new as keeping an established property at its very best.'
    }
];

const STATS = [
    { figure: '10+', label: 'Years working across the GTA' },
    { figure: '6+', label: 'Cities, plus surrounding communities' },
    { figure: 'One', label: 'Team — design, build, plant & maintain' }
];

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

const SERVICE_AREA_FAQS = [
    {
        question: 'Which areas do you serve?',
        answer: 'We work throughout the GTA and York Region — Markham, Vaughan, North York, Richmond Hill, Newmarket, Aurora — plus surrounding communities including Oakville, Thornhill and Ajax.'
    },
    {
        question: 'My city isn’t listed — can you still help?',
        answer: 'Very likely, yes. Our service area keeps growing, so even if your neighbourhood isn’t named above there’s a good chance we cover it. A quick call or message is all it takes to confirm.'
    },
    {
        question: 'Do you charge extra to travel to my area?',
        answer: 'Your quote reflects your project, not your postcode. We’ll confirm everything up front — no surprise travel fees once work begins.'
    },
    {
        question: 'Do you take on commercial properties?',
        answer: 'Yes. We handle both residential and commercial work across every area we serve, from single driveways to full commercial grounds and snow contracts.'
    },
    {
        question: 'Is the on-site quote really free?',
        answer: 'Always. Wherever you are in our service area, we’ll visit, walk your property and provide a clear, no-obligation estimate at no cost.'
    }
];

const ArrowBadge = () => (
    <span className='border-cream/50 text-cream group-hover:bg-cream group-hover:text-forest absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300'>
        <ArrowUpRight className='h-4 w-4' strokeWidth={1.5} />
    </span>
);

const ServiceAreasPage = () => {
    return (
        <>
            {/* Hero */}
            <section className='relative flex min-h-[55svh] items-center justify-center overflow-hidden'>
                <Image src='/images/services/hardscaping.webp' alt='' aria-hidden fill priority sizes='100vw' className='object-cover' />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' />
                <div className='relative z-10 mx-auto max-w-3xl px-6 pt-24 text-center'>
                    <p className='text-beige mb-6 text-[11px] font-medium tracking-[0.35em] uppercase sm:text-sm'>
                        Service Areas
                    </p>
                    <h1 className='font-display text-cream text-4xl leading-[1.12] sm:text-5xl lg:text-6xl'>
                        Where We Work
                    </h1>
                </div>
            </section>

            {/* Areas We Serve — directly under the hero */}
            <section className='bg-cream px-6 py-20 lg:px-10 lg:py-28'>
                <div className='mx-auto max-w-7xl'>
                    <Reveal blur className='max-w-2xl'>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Areas We Serve</p>
                        <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl'>
                            Rooted in Markham, at home across the GTA
                        </h2>
                        <p className='text-ink/70 mt-5 text-base leading-relaxed font-light'>
                            The same crew and the same standards in every neighbourhood. Find your city below.
                        </p>
                    </Reveal>

                    <div className='mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
                        {CITIES.map((city, index) => (
                            <Reveal key={city.name} blur delay={(index % 3) * 0.1}>
                                <Link href={city.href} className='group block'>
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={city.image}
                                            alt={`Landscaping in ${city.name}`}
                                            fill
                                            sizes='(max-width: 1024px) 100vw, 33vw'
                                            className={ZOOM}
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20' />
                                        <ArrowBadge />
                                        <h3 className='font-display text-cream absolute bottom-0 left-0 p-6 text-2xl [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]'>
                                            {city.name}
                                        </h3>
                                    </div>
                                    <p className='text-ink/70 mt-5 text-sm leading-relaxed'>{city.blurb}</p>
                                    <span className='text-moss group-hover:text-forest mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors'>
                                        Landscaping in {city.name}
                                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local expertise + stats + image */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/brand/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                    <Reveal direction='left' blur>
                        <p className='text-moss mb-5 text-[11px] font-medium tracking-[0.35em] uppercase'>
                            Local, Through & Through
                        </p>
                        <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                            We Know These Neighbourhoods
                        </h2>
                        <p className='text-ink/75 mt-6 text-base leading-relaxed font-light'>
                            A decade of work in the GTA teaches you things a catalogue can&apos;t — how freeze-and-thaw
                            winters move stone, which plants actually thrive here, and how to build outdoor spaces that
                            look as good in year ten as on day one. Wherever you are, the people who design your space are
                            the people who build it.
                        </p>

                        <div className='border-forest/15 mt-10 grid grid-cols-3 gap-6 border-t pt-8'>
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className='font-display text-forest text-3xl sm:text-4xl'>{stat.figure}</p>
                                    <p className='text-ink/65 mt-2 text-xs leading-relaxed'>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal direction='right' blur delay={0.1}>
                        <div className='relative aspect-[4/5] overflow-hidden lg:aspect-[4/4.6]'>
                            <Image
                                src='/images/services/landscape-design.webp'
                                alt="Jayden's Landscaping work across the GTA"
                                fill
                                sizes='(max-width: 1024px) 100vw, 50vw'
                                className='object-cover'
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* The full range, everywhere */}
            <section className='bg-forest relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28'>
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
                            Available In Every Area
                        </p>
                        <h2 className='font-display text-cream mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl'>
                            The full range, in every community we serve
                        </h2>
                    </Reveal>
                    <ul className='mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {AVAILABLE_SERVICES.map((service, index) => (
                            <Reveal
                                key={service}
                                blur
                                delay={(index % 3) * 0.06}
                                className='border-cream/15 flex items-start gap-3 border-t pt-4'>
                                <Check className='text-beige mt-0.5 h-4 w-4 shrink-0' strokeWidth={2} />
                                <span className='text-cream/85 text-sm leading-relaxed'>{service}</span>
                            </Reveal>
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

            {/* Full-width image break */}
            <section className='relative h-[44svh] min-h-[300px] w-full overflow-hidden'>
                <Image
                    src='/images/projects/briji.webp'
                    alt='A landscaped estate in the Greater Toronto Area'
                    fill
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15' />
            </section>

            <Faq items={SERVICE_AREA_FAQS} eyebrow='Good To Know' title='Service Area Questions' surface='cream' />

            <CtaBanner />
        </>
    );
};

export default ServiceAreasPage;
