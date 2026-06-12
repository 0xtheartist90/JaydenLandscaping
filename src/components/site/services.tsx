import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';
import SectionHeading from '@/components/site/section-heading';

const SERVICES = [
    {
        title: 'Landscape Design',
        description: 'Complete outdoor visions, drawn with architectural precision.',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Interlocking',
        description: 'Driveways, walkways and patios laid to last generations.',
        image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Natural Stone',
        description: 'Flagstone, armour stone and masonry with timeless character.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Decks & Fencing',
        description: 'Outdoor structures in premium wood and composite.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Pools & Ponds',
        description: 'Water features that turn a backyard into a retreat.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Lawn & Garden Care',
        description: 'Seasonal maintenance that protects your investment.',
        image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200&auto=format&fit=crop'
    }
];

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
                    {SERVICES.map((service, index) => (
                        <Reveal key={service.title} delay={(index % 3) * 0.1}>
                            <Link href='#contact' className='group block'>
                                <div className='relative aspect-[4/5] overflow-hidden'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                        className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-colors duration-500 group-hover:from-black/80' />
                                    <div className='absolute inset-x-0 bottom-0 p-7 lg:p-8'>
                                        <h3 className='font-display text-cream text-xl'>{service.title}</h3>
                                        <p className='text-cream/80 mt-2 max-w-xs text-sm leading-relaxed font-light opacity-0 transition-all duration-500 group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0'>
                                            {service.description}
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
