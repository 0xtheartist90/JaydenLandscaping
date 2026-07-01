import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Carousel from '@/components/site/carousel';
import PageHero from '@/components/site/page-hero';
import { SERVICE_CATEGORIES } from '@/lib/services';

import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Landscaping Services Toronto & GTA | Jayden's Landscaping",
    description:
        'Landscape design, interlocking driveways, tree & shrub planting, lawn maintenance and snow removal — premium landscaping services throughout Toronto and the Greater Toronto Area.',
    keywords: [
        'landscaping services Toronto',
        'landscaping GTA',
        'landscape design Toronto',
        'interlocking driveways Toronto',
        'lawn maintenance Toronto',
        'snow removal Toronto'
    ]
};

const ServicesPage = () => {
    return (
        <>
            <PageHero
                eyebrow='What We Do'
                title='Our Services'
                image='/images/services/landscape-design.webp'
                imageAlt='A landscaped property in the Greater Toronto Area'
            />

            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-16 lg:px-10 lg:py-32'>
                <Image
                    src='/images/brand/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <Carousel
                        theme='dark'
                        desktop='sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible lg:grid-cols-3'
                        dotsHide='sm:hidden'>
                        {SERVICE_CATEGORIES.map((category) => (
                            <Link key={category.slug} href={`/services/${category.slug}`} className='group block'>
                                <div className='relative aspect-[4/3] overflow-hidden'>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                        className='object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'
                                    />
                                </div>
                                <h2 className='font-display text-forest mt-5 text-xl'>{category.title}</h2>
                                <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{category.shortDescription}</p>
                                <span className='text-moss group-hover:text-forest mt-4 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300'>
                                    Learn More
                                    <ArrowRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1' />
                                </span>
                            </Link>
                        ))}
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
