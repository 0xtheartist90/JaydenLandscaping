import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Faq from '@/components/site/faq';
import Marquee from '@/components/site/marquee';
import OtherServices from '@/components/site/other-services';
import QuoteButton from '@/components/site/quote-button';
import Reveal from '@/components/site/reveal';
import { SERVICE_CATEGORIES, getServiceBySlug } from '@/lib/services';

import {
    CalendarDays,
    Check,
    Droplets,
    Flower2,
    Home,
    Layers,
    Leaf,
    PencilRuler,
    Ruler,
    Scissors,
    ShieldCheck,
    Snowflake,
    Sofa,
    Sparkles,
    Sprout,
    Sun,
    TrendingUp,
    Truck,
    Waves,
    Wrench,
    type LucideIcon
} from 'lucide-react';

type ServicePageProps = { params: Promise<{ slug: string }> };

// Benefit icons — keyed by the `icon` string in each service's benefits (falls back to a leaf).
const BENEFIT_ICONS: Record<string, LucideIcon> = {
    shield: ShieldCheck,
    sparkles: Sparkles,
    trending: TrendingUp,
    wrench: Wrench,
    ruler: Ruler,
    droplets: Droplets,
    sun: Sun,
    sprout: Sprout,
    leaf: Leaf,
    pencil: PencilRuler,
    layers: Layers,
    waves: Waves,
    sofa: Sofa,
    home: Home,
    flower: Flower2,
    scissors: Scissors,
    calendar: CalendarDays,
    snowflake: Snowflake,
    truck: Truck
};

export const generateStaticParams = () => SERVICE_CATEGORIES.map((category) => ({ slug: category.slug }));

export const generateMetadata = async ({ params }: ServicePageProps): Promise<Metadata> => {
    const { slug } = await params;
    const category = getServiceBySlug(slug);
    if (!category) return {};

    return {
        title: category.seo.title,
        description: category.seo.description,
        keywords: category.seo.keywords,
        openGraph: {
            title: category.seo.title,
            description: category.seo.description,
            type: 'website',
            locale: 'en_CA',
            images: [{ url: category.image }]
        }
    };
};

const ServicePage = async ({ params }: ServicePageProps) => {
    const { slug } = await params;
    const category = getServiceBySlug(slug);
    if (!category) notFound();

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: category.title,
        description: category.seo.description,
        serviceType: category.title,
        areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Greater Toronto Area, Ontario, Canada'
        },
        provider: {
            '@type': 'LocalBusiness',
            name: "Jayden's Landscaping",
            email: 'jaydenlandscaping@yahoo.com',
            telephone: '+1-647-621-4219',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '5357 19th Ave',
                addressLocality: 'Markham',
                addressRegion: 'ON',
                postalCode: 'L3P 3J3',
                addressCountry: 'CA'
            }
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${category.title} Services`,
            itemListElement: category.subservices.map((subservice) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: subservice }
            }))
        }
    };

    // FAQPage schema — eligible for Google rich snippets.
    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: category.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
    };

    const overviewParagraphs = category.intro ?? [category.description];

    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            {/* Hero */}
            <section className='relative flex min-h-[65svh] items-center justify-center overflow-hidden'>
                <Image src={category.image} alt={category.title} fill priority sizes='100vw' className='object-cover' />
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55' />
                <div className='relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center'>
                    <p className='text-beige mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>
                        Our Services
                    </p>
                    <h1 className='font-display text-cream text-4xl leading-[1.15] sm:text-5xl lg:text-6xl'>
                        {category.title}
                    </h1>
                </div>
            </section>

            <OtherServices currentSlug={category.slug} />

            {/* Overview */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
                <Image
                    src='/images/brand/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                        <Reveal direction='left' blur>
                            <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>Overview</p>
                            <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                                Crafted With Precision, Built To Last
                            </h2>
                            <div className='mt-6 space-y-5'>
                                {overviewParagraphs.map((paragraph, index) => (
                                    <p key={index} className='text-ink/75 text-base leading-relaxed font-light sm:text-lg'>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </Reveal>

                        {category.overviewImage ? (
                            <Reveal direction='right' blur delay={0.1}>
                                <div className='relative aspect-[4/5] overflow-hidden lg:aspect-[4/4.4]'>
                                    <Image
                                        src={category.overviewImage}
                                        alt={`${category.title} by Jayden's Landscaping`}
                                        fill
                                        sizes='(max-width: 1024px) 100vw, 50vw'
                                        className='object-cover'
                                    />
                                </div>
                            </Reveal>
                        ) : (
                            <div className='space-y-6 lg:mt-4'>
                                {category.benefits.map((benefit, index) => {
                                    const Icon = BENEFIT_ICONS[benefit.icon ?? ''] ?? Leaf;

                                    return (
                                        <Reveal key={benefit.title} direction='right' blur delay={index * 0.08}>
                                            <div className='flex items-start gap-4'>
                                                <Icon className='text-moss mt-0.5 h-6 w-6 shrink-0' strokeWidth={1.25} />
                                                <div>
                                                    <h3 className='font-display text-forest text-base'>{benefit.title}</h3>
                                                    <p className='text-ink/65 mt-1.5 text-sm leading-relaxed'>
                                                        {benefit.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* When the overview shows an image, the benefits become a clean icon row beneath it */}
                    {category.overviewImage && (
                        <div className='mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
                            {category.benefits.map((benefit, index) => {
                                const Icon = BENEFIT_ICONS[benefit.icon ?? ''] ?? Leaf;

                                return (
                                    <Reveal
                                        key={benefit.title}
                                        direction='up'
                                        blur
                                        delay={index * 0.1}
                                        className='border-forest/15 border-t pt-6'>
                                        <Icon className='text-moss h-7 w-7' strokeWidth={1.25} />
                                        <h3 className='font-display text-forest mt-4 text-base'>{benefit.title}</h3>
                                        <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{benefit.text}</p>
                                    </Reveal>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Deep dive — compact detail band, shown only when provided */}
            {category.deepDive && (
                <section className='bg-forest relative overflow-hidden px-6 py-16 lg:px-10 lg:py-20'>
                    <Image
                        src='/images/brand/leafbg.webp'
                        alt=''
                        aria-hidden
                        fill
                        sizes='100vw'
                        className='pointer-events-none object-cover opacity-[0.05]'
                    />
                    <div className='relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
                        {category.deepDive.image && (
                            <Reveal
                                blur
                                direction='left'
                                className='relative aspect-[4/3] overflow-hidden lg:aspect-[5/6]'>
                                <Image
                                    src={category.deepDive.image}
                                    alt={`${category.title} — design visual`}
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 50vw'
                                    className='object-cover'
                                />
                            </Reveal>
                        )}

                        <Reveal blur direction='right'>
                            {category.deepDive.eyebrow && (
                                <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>
                                    {category.deepDive.eyebrow}
                                </p>
                            )}
                            <h2 className='font-display text-cream mt-3 text-2xl leading-tight sm:text-3xl'>
                                {category.deepDive.title}
                            </h2>
                            {category.deepDive.lead && (
                                <p className='text-cream/70 mt-4 text-sm leading-relaxed font-light'>
                                    {category.deepDive.lead}
                                </p>
                            )}

                            <div className='mt-8 space-y-7'>
                                {category.deepDive.blocks.map((block, blockIndex) => (
                                    <div key={block.heading ?? blockIndex}>
                                        {block.heading && (
                                            <h3 className='text-beige text-[11px] font-medium tracking-[0.25em] uppercase'>
                                                {block.heading}
                                            </h3>
                                        )}
                                        {block.text && (
                                            <p className='text-cream/75 mt-3 text-sm leading-relaxed font-light'>
                                                {block.text}
                                            </p>
                                        )}
                                        {block.points && (
                                            <div className='grid gap-x-8 gap-y-5 sm:grid-cols-2'>
                                                {block.points.map((point) => (
                                                    <div key={point.title} className='border-cream/15 border-t pt-3'>
                                                        <h4 className='text-cream text-[13px] font-medium'>
                                                            {point.title}
                                                        </h4>
                                                        <p className='text-cream/65 mt-1 text-[13px] leading-snug font-light'>
                                                            {point.text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Gallery */}
            {category.gallery && category.gallery.length > 0 && (
                <section className='bg-cream px-6 py-24 lg:px-10 lg:py-32'>
                    <div className='mx-auto max-w-7xl'>
                        <Reveal blur className='text-center'>
                            <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>
                                {category.galleryEyebrow ?? 'Recent Work'}
                            </p>
                            <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                                {category.galleryTitle ?? 'A Look At What We Build'}
                            </h2>
                        </Reveal>
                        <div className='mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4'>
                            {category.gallery.map((src, index) => (
                                <Reveal key={src} blur delay={index * 0.09}>
                                    <div className='group relative aspect-[4/5] overflow-hidden'>
                                        <Image
                                            src={src}
                                            alt={`${category.title} — example ${index + 1}`}
                                            fill
                                            sizes='(max-width: 1024px) 50vw, 25vw'
                                            className='object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'
                                        />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Statement band — shown in place of the gallery when there are no project photos */}
            {!(category.gallery && category.gallery.length > 0) && category.highlight && (
                <section className='bg-cream px-6 py-24 lg:px-10 lg:py-32'>
                    <Reveal blur className='mx-auto max-w-3xl text-center'>
                        {category.highlight.eyebrow && (
                            <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>
                                {category.highlight.eyebrow}
                            </p>
                        )}
                        <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                            {category.highlight.title}
                        </h2>
                        <p className='text-ink/70 mx-auto mt-6 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                            {category.highlight.text}
                        </p>
                        <QuoteButton
                            service={category.slug}
                            className='bg-forest text-cream hover:bg-moss mt-9 inline-block px-9 py-3.5 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                            Get A Free Quote
                        </QuoteButton>
                    </Reveal>
                </section>
            )}

            {/* Process */}
            {category.process && (
                <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
                    <Image
                        src='/images/brand/BGbeige.webp'
                        alt=''
                        aria-hidden
                        fill
                        sizes='100vw'
                        className='pointer-events-none object-cover opacity-[0.03]'
                    />
                    <div className='relative z-10 mx-auto max-w-7xl'>
                        <Reveal blur className='max-w-3xl'>
                            <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>Our Process</p>
                            <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                                A Result That Lasts Is All About The Base
                            </h2>
                            <p className='text-ink/70 mt-5 text-base leading-relaxed font-light sm:text-lg'>
                                The steps you can&apos;t see — excavation depth, the compacted base, edge restraints — are
                                exactly the ones that decide whether the work lasts five years or thirty.
                            </p>
                        </Reveal>
                        <div className='border-forest/15 mt-14 grid gap-px border sm:grid-cols-2 lg:grid-cols-3'>
                            {category.process.map((step, index) => (
                                <Reveal key={step.title} blur delay={index * 0.07} className='bg-cream p-8'>
                                    <span className='font-display text-moss/50 text-3xl'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className='font-display text-forest mt-4 text-lg'>{step.title}</h3>
                                    <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{step.text}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Marquee images={category.marquee} />

            {/* Included services */}
            <section className='bg-forest relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32'>
                {/* LeafBG texture blended into the green */}
                <Image
                    src='/images/brand/leafbg.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.05]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <Reveal blur className='mx-auto max-w-3xl text-center'>
                        <p className='text-beige mb-5 text-xs font-medium tracking-[0.35em] uppercase'>
                            What&apos;s Included
                        </p>
                        <h2 className='font-display text-cream text-3xl leading-snug sm:text-4xl'>
                            {category.title} Services
                        </h2>
                    </Reveal>
                    <div className='mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {category.subservices.map((subservice, index) => (
                            <Reveal
                                key={subservice}
                                blur
                                delay={index * 0.05}
                                className='border-cream/20 bg-cream/5 flex items-center gap-3 border px-5 py-4'>
                                <Check className='text-beige h-4 w-4 shrink-0' strokeWidth={2} />
                                <span className='text-cream/85 text-sm'>{subservice}</span>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal blur delay={0.15} className='mt-14 text-center'>
                        <p className='text-cream/70 mx-auto mb-7 max-w-xl text-sm leading-relaxed font-light'>
                            Every property is different — the best way to get an accurate price is a free, no-obligation
                            quote.
                        </p>
                        <QuoteButton
                            service={category.slug}
                            className='bg-cream text-forest hover:bg-beige inline-block px-10 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                            Get A Free Quote
                        </QuoteButton>
                    </Reveal>
                </div>
            </section>

            <Faq items={category.faqs} title={`${category.title} — FAQ`} />
        </>
    );
};

export default ServicePage;
