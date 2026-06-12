import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/site/page-hero';
import Reveal from '@/components/site/reveal';
import { SERVICE_CATEGORIES } from '@/lib/services';

import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Landscaping Services Toronto & GTA | Jayden's Landscaping",
    description:
        'Landscape design, hardscaping, outdoor structures, water features, softscaping and property maintenance — premium landscaping services throughout Toronto and the Greater Toronto Area.',
    keywords: [
        'landscaping services Toronto',
        'landscaping GTA',
        'landscape design Toronto',
        'hardscaping Toronto',
        'property maintenance Toronto'
    ],
    openGraph: {
        title: "Landscaping Services Toronto & GTA | Jayden's Landscaping",
        description:
            'From concept and design to construction and long-term maintenance, we create outdoor spaces built to last.',
        type: 'website',
        locale: 'en_CA'
    }
};

const ServicesPage = () => {
    return (
        <>
            <PageHero
                eyebrow='What We Do'
                title='Our Services'
                description='From concept and design to construction and long-term maintenance, we create outdoor spaces built to last.'
                image='https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2400&auto=format&fit=crop'
                imageAlt='A custom-built home with landscaped grounds at sunset'
            />

            <section className='bg-cream px-6 py-24 lg:px-10 lg:py-32'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                        {SERVICE_CATEGORIES.map((category, index) => (
                            <Reveal key={category.slug} delay={(index % 3) * 0.1}>
                                <Link href={`/services/${category.slug}`} className='group block'>
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                            className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15' />
                                    </div>
                                    <h2 className='font-display text-forest mt-6 text-xl'>{category.title}</h2>
                                    <p className='text-ink/65 mt-3 text-sm leading-relaxed'>
                                        {category.shortDescription}
                                    </p>
                                    <span className='text-moss group-hover:text-forest mt-5 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300'>
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

export default ServicesPage;
