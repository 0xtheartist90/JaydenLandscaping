import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import QuoteButton from '@/components/site/quote-button';

import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: "Our Location — Markham | Jayden's Landscaping",
    description:
        "Visit Jayden's Landscaping at 5357 19th Ave, Markham, ON. Our home base and Z Force Farm nursery, serving the Greater Toronto Area & York Region."
};

const ADDRESS = '5357 19th Ave, Markham, ON L3P 3J3';
const MAP_QUERY = `${ADDRESS}, Canada`;
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Jayden's Landscaping",
    image: 'https://jaydenslandscaping.ca/images/landscape-design.webp',
    url: 'https://jaydenslandscaping.ca',
    telephone: '+1-647-621-4219',
    email: 'jaydenlandscaping@yahoo.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '5357 19th Ave',
        addressLocality: 'Markham',
        addressRegion: 'ON',
        postalCode: 'L3P 3J3',
        addressCountry: 'CA'
    },
    areaServed: ['Markham', 'Vaughan', 'North York', 'Richmond Hill', 'Newmarket', 'Aurora', 'Greater Toronto Area']
};

const DETAILS = [
    { Icon: MapPin, label: 'Address', value: ADDRESS, href: DIRECTIONS },
    { Icon: Phone, label: 'Phone', value: '+1 647-621-4219', href: 'tel:+16476214219' },
    { Icon: Mail, label: 'Email', value: 'jaydenlandscaping@yahoo.com', href: 'mailto:jaydenlandscaping@yahoo.com' },
    { Icon: Clock, label: 'Hours', value: 'By appointment — call or message anytime', href: undefined }
];

const LocationPage = () => {
    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* Hero */}
            <section className='relative flex min-h-[55svh] items-center justify-center overflow-hidden'>
                <Image
                    src='/images/landscape-design.webp'
                    alt=''
                    aria-hidden
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' />
                <div className='relative z-10 mx-auto max-w-3xl px-6 pt-24 text-center'>
                    <p className='text-beige mb-5 text-[11px] font-medium tracking-[0.35em] uppercase'>Find Us</p>
                    <h1 className='font-display text-cream text-4xl leading-[1.12] sm:text-5xl lg:text-6xl'>
                        Our Markham Home Base
                    </h1>
                    <p className='text-cream/85 mx-auto mt-7 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                        Based in Markham — home to our team and our nursery, Z Force Farm — and serving homeowners and
                        businesses right across the GTA and York Region.
                    </p>
                </div>
            </section>

            {/* Details + map */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-5 lg:gap-20'>
                    <div className='lg:col-span-2'>
                        <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>Visit Us</p>
                        <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                            Where to find us
                        </h2>
                        <p className='text-ink/70 mt-5 text-[15px] leading-relaxed font-light sm:text-base'>
                            Our Markham location keeps everything close to home — design, build crews and a working
                            nursery — which means faster turnarounds and fresher, locally grown plants for your project.
                        </p>

                        <div className='mt-9 space-y-6'>
                            {DETAILS.map((detail) => (
                                <div key={detail.label} className='flex items-start gap-4'>
                                    <detail.Icon className='text-moss mt-0.5 h-5 w-5 shrink-0' strokeWidth={1.5} />
                                    <div>
                                        <p className='text-ink/50 text-xs tracking-[0.2em] uppercase'>{detail.label}</p>
                                        {detail.href ? (
                                            <a
                                                href={detail.href}
                                                className='text-ink hover:text-moss mt-1 block text-sm transition-colors'>
                                                {detail.value}
                                            </a>
                                        ) : (
                                            <p className='text-ink mt-1 text-sm leading-relaxed'>{detail.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-9 flex flex-wrap items-center gap-4'>
                            <QuoteButton className='bg-forest text-cream hover:bg-moss px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                                Get A Free Quote
                            </QuoteButton>
                            <a
                                href={DIRECTIONS}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-forest hover:text-moss inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors'>
                                Get Directions
                                <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <div className='lg:col-span-3'>
                        <div className='border-sand h-full min-h-[360px] overflow-hidden border lg:min-h-[480px]'>
                            <iframe
                                title="Jayden's Landscaping — Markham location"
                                src={MAP_SRC}
                                className='h-full min-h-[360px] w-full border-0 lg:min-h-[480px]'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service areas note */}
            <section className='bg-forest px-6 py-16 lg:px-10 lg:py-20'>
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left'>
                    <div>
                        <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Service Areas</p>
                        <h2 className='font-display text-cream mt-3 text-2xl leading-snug sm:text-3xl'>
                            We come to you, across the GTA & York Region
                        </h2>
                    </div>
                    <Link
                        href='/service-areas'
                        className='border-cream/40 text-cream hover:bg-cream/10 inline-flex shrink-0 items-center gap-2 border px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                        View Service Areas
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default LocationPage;
