import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import QuoteButton from '@/components/site/quote-button';
import Reveal from '@/components/site/reveal';

import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: "Service Areas — GTA & York Region | Jayden's Landscaping",
    description:
        'Based in Markham and serving the Greater Toronto Area & York Region — Markham, Vaughan, North York, Richmond Hill, Newmarket, Aurora and beyond.'
};

const CITIES = [
    {
        name: 'Markham',
        href: '/landscaping-markham',
        blurb: 'Our home turf — countless interlocking driveways, front-yard makeovers and full backyard transformations. Our nursery, Z Force Farm, is right here too, meaning faster turnarounds and fresher, locally grown plants.'
    },
    {
        name: 'Vaughan',
        href: '/landscaping-vaughan',
        blurb: 'Custom landscaping, sweeping interlocking driveways, retaining walls and layered garden design — from grand front-yard statements to private backyard retreats.'
    },
    {
        name: 'North York',
        href: '/landscaping-north-york',
        blurb: 'Driveways, walkways, planting and complete property transformations. We make the most of city-lot dimensions, turning compact spaces into polished outdoor areas.'
    },
    {
        name: 'Richmond Hill',
        href: '/landscaping-richmond-hill',
        blurb: 'Premium hardscaping, natural stone pool surrounds, patios and garden design for a resort feel at home — durable materials, clean lines and thoughtful detailing.'
    },
    {
        name: 'Newmarket',
        href: '/landscaping-newmarket',
        blurb: 'Backyard renovations, decks, fencing and new lawn installation that make the most of your property — whether a full overhaul or a single standout feature.'
    },
    {
        name: 'Aurora',
        href: '/landscaping-aurora',
        blurb: 'Landscape design, planting, lawn care and year-round maintenance — as comfortable building something new as keeping an established property at its best.'
    }
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

const REASONS = [
    'Over 10 years of local experience in these neighbourhoods',
    'We grow our own plants at our Markham nursery, Z Force Farm',
    '3D design so you can see your space before we build it',
    'One team, start to finish — design, build, plant and maintain'
];

const ServiceAreasPage = () => {
    return (
        <>
            {/* Hero */}
            <section className='relative flex min-h-[60svh] items-center justify-center overflow-hidden'>
                <Image
                    src='/images/hardscaping.webp'
                    alt=''
                    aria-hidden
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' />
                <div className='relative z-10 mx-auto max-w-3xl px-6 pt-24 text-center'>
                    <p className='text-beige mb-5 text-[11px] font-medium tracking-[0.35em] uppercase'>Service Areas</p>
                    <h1 className='font-display text-cream text-4xl leading-[1.12] sm:text-5xl lg:text-6xl'>
                        Landscaping Services Across the GTA & York Region
                    </h1>
                    <p className='text-cream/85 mx-auto mt-7 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                        Based in Markham and proudly serving homeowners and businesses throughout the Greater Toronto
                        Area — the same team, the same standards, in every neighbourhood.
                    </p>
                    <QuoteButton className='bg-beige text-forest hover:bg-beige/85 mt-9 inline-block px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                        Get A Free Quote
                    </QuoteButton>
                </div>
            </section>

            {/* Introduction */}
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
                    <div className='text-ink/75 space-y-5 text-[15px] leading-relaxed font-light sm:text-base'>
                        <p>
                            From our home base in Markham, Jayden&apos;s Landscaping serves communities right across the
                            GTA and York Region. We&apos;ve spent more than a decade working in these neighbourhoods, and
                            that local knowledge matters — we understand how Ontario&apos;s freeze-and-thaw winters
                            affect interlocking and stonework, which plants actually thrive here, and how to build
                            outdoor spaces that look just as good in their tenth year as they did on day one.
                        </p>
                        <p>
                            Wherever you are, you get the same experienced crew, the same quality materials, and the
                            same hands-on care from start to finish. We don&apos;t subcontract your project out to
                            whoever happens to be available; the people who design your space are the people who build
                            it. That continuity is a big part of why so much of our work comes from repeat clients and
                            neighbour-to-neighbour referrals.
                        </p>
                        <p>
                            Find your city below to learn more about the services we offer in your area, or reach out for
                            a free quote anytime. If your community isn&apos;t listed, don&apos;t worry — we cover much
                            of the wider GTA, and we&apos;re always happy to confirm whether we can reach you.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* Areas We Serve */}
            <section className='bg-cream px-6 py-20 lg:px-10 lg:py-28'>
                <div className='mx-auto max-w-7xl'>
                    <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Areas We Serve</p>
                    <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl'>
                        Communities Across the GTA & York Region
                    </h2>
                    <div className='mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
                        {CITIES.map((city, index) => (
                            <Reveal key={city.name} delay={(index % 3) * 0.1}>
                                <Link href={city.href} className='group block border-sand/70 border-t pt-6'>
                                    <div className='flex items-center gap-2.5'>
                                        <MapPin className='text-moss h-4 w-4 shrink-0' strokeWidth={1.5} />
                                        <h3 className='font-display text-forest group-hover:text-moss text-2xl transition-colors'>
                                            {city.name}
                                        </h3>
                                    </div>
                                    <p className='text-ink/70 mt-4 text-sm leading-relaxed'>{city.blurb}</p>
                                    <span className='text-moss group-hover:text-forest mt-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors'>
                                        Landscaping in {city.name}
                                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services available everywhere */}
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
                        Available In Every Area
                    </p>
                    <h2 className='font-display text-cream mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl'>
                        The full range, in every community we serve
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

            {/* Don't see your area + Why choose us */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20'>
                    <Reveal>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>
                            Don&apos;t See Your Area?
                        </p>
                        <h2 className='font-display text-forest mt-3 text-2xl leading-snug sm:text-3xl'>
                            Chances are, we can still help
                        </h2>
                        <p className='text-ink/70 mt-5 text-[15px] leading-relaxed font-light sm:text-base'>
                            We serve much of the Greater Toronto Area beyond the cities listed here — including Oakville,
                            Thornhill, Ajax and surrounding communities. Our service area keeps growing as more
                            homeowners find us, so even if your neighbourhood isn&apos;t named above, there&apos;s a good
                            chance we can help. If you&apos;re not sure whether we cover your area, just ask — a quick
                            call or message is all it takes.
                        </p>
                        <Link
                            href='/contact'
                            className='text-forest hover:text-moss relative mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                            Contact Us
                            <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                        </Link>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Why Choose Us</p>
                        <h2 className='font-display text-forest mt-3 text-2xl leading-snug sm:text-3xl'>
                            Why homeowners across the GTA choose us
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
                            href='/about'
                            className='text-forest hover:text-moss relative mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                            Learn More About Us
                            <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                        </Link>
                    </Reveal>
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
                        Let&apos;s Transform Your Property
                    </h2>
                    <p className='text-cream/80 mx-auto mt-5 max-w-xl text-sm leading-relaxed font-light sm:text-base'>
                        Wherever you are in the GTA, we&apos;d love to help. Tell us a little about your space and what
                        you&apos;re hoping to achieve, and we&apos;ll get back to you with a free, no-obligation quote —
                        no pressure, just honest advice.
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

export default ServiceAreasPage;
