import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/components/site/reveal';
import { SERVICE_CATEGORIES, getRelatedServices, getServiceBySlug } from '@/lib/services';

import { ArrowRight, Check } from 'lucide-react';

type ServicePageProps = { params: Promise<{ slug: string }> };

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

    const related = getRelatedServices(slug);

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
            email: 'info@jaydenslandscaping.ca',
            telephone: '+1-647-621-4219',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
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

    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* Hero */}
            <section className='relative flex min-h-[65svh] items-center justify-center overflow-hidden'>
                <Image
                    src={category.image}
                    alt={category.title}
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
                        {category.title}
                    </h1>
                    <p className='text-cream/85 mx-auto mt-8 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                        {category.shortDescription}
                    </p>
                    <Link
                        href='/contact'
                        className='bg-cream text-forest hover:bg-beige mt-10 inline-block px-10 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            {/* Overview */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20'>
                    <Reveal>
                        <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>Overview</p>
                        <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                            Crafted With Precision, Built To Last
                        </h2>
                        <p className='text-ink/75 mt-6 text-base leading-relaxed font-light sm:text-lg'>
                            {category.description}
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className='space-y-6 lg:mt-16'>
                            {category.benefits.map((benefit) => (
                                <div key={benefit.title} className='border-moss/30 border-l-2 pl-5'>
                                    <h3 className='font-display text-forest text-base'>{benefit.title}</h3>
                                    <p className='text-ink/65 mt-1.5 text-sm leading-relaxed'>{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Included services */}
            <section className='bg-forest px-6 py-24 lg:px-10 lg:py-32'>
                <div className='mx-auto max-w-7xl'>
                    <Reveal className='mx-auto max-w-3xl text-center'>
                        <p className='text-beige mb-5 text-xs font-medium tracking-[0.35em] uppercase'>
                            What&apos;s Included
                        </p>
                        <h2 className='font-display text-cream text-3xl leading-snug sm:text-4xl'>
                            {category.title} Services
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15} className='mt-14'>
                        <ul className='mx-auto grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'>
                            {category.subservices.map((subservice) => (
                                <li key={subservice} className='border-cream/20 bg-cream/5 flex items-center gap-3 border px-5 py-4'>
                                    <Check className='text-beige h-4 w-4 shrink-0' strokeWidth={2} />
                                    <span className='text-cream/85 text-sm'>{subservice}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={0.25} className='mt-14 text-center'>
                        <Link
                            href='/contact'
                            className='bg-cream text-forest hover:bg-beige inline-block px-10 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                            Get A Free Quote
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Related services */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <Reveal className='mx-auto max-w-3xl text-center'>
                        <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>
                            Explore More
                        </p>
                        <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                            Related Services
                        </h2>
                    </Reveal>
                    <div className='mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
                        {related.map((service, index) => (
                            <Reveal key={service.slug} delay={index * 0.1}>
                                <Link href={`/services/${service.slug}`} className='group block'>
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                            className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15' />
                                    </div>
                                    <h3 className='font-display text-forest mt-5 text-lg'>{service.title}</h3>
                                    <p className='text-ink/65 mt-2 text-sm leading-relaxed'>
                                        {service.shortDescription}
                                    </p>
                                    <span className='text-moss group-hover:text-forest mt-4 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300'>
                                        Learn More
                                        <ArrowRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1' />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePage;
