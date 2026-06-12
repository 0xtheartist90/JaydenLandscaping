import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';
import SectionHeading from '@/components/site/section-heading';
import { SERVICE_CATEGORIES } from '@/lib/services';

const Services = () => {
    return (
        <section id='services' className='bg-cream scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32'>
            <div className='mx-auto max-w-7xl'>
                <SectionHeading
                    eyebrow='What We Do'
                    title='Crafted Outdoor Living, End To End'
                    description='From complete landscape transformations to the finishing details, every service is delivered with the same standard of care.'
                />

                <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8'>
                    {SERVICE_CATEGORIES.map((category, index) => (
                        <Reveal key={category.slug} delay={(index % 3) * 0.1}>
                            <Link href={`/services/${category.slug}`} className='group block'>
                                <div className='relative aspect-[4/5] overflow-hidden'>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                        className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-colors duration-500 group-hover:from-black/80' />
                                    <div className='absolute inset-x-0 bottom-0 p-7 lg:p-8'>
                                        <h3 className='font-display text-cream text-xl'>{category.title}</h3>
                                        <p className='text-cream/80 mt-2 max-w-xs text-sm leading-relaxed font-light opacity-0 transition-all duration-500 group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0'>
                                            {category.shortDescription}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
