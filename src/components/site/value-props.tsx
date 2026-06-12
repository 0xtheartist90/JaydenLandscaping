import Link from 'next/link';

import Reveal from '@/components/site/reveal';

import { ArrowRight, Gem, PencilRuler, Ruler, Trees } from 'lucide-react';

const VALUES = [
    { icon: Trees, title: '10+ Years Experience' },
    { icon: PencilRuler, title: 'Design & Build Expertise' },
    { icon: Gem, title: 'Premium Materials' },
    { icon: Ruler, title: 'Detail-Driven Craftsmanship' }
];

const ValueProps = () => {
    return (
        <section className='bg-forest px-6 py-14 lg:px-10 lg:py-16'>
            <div className='mx-auto max-w-7xl'>
                <Link href='/about' className='group block'>
                    <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-center lg:gap-8'>
                        {VALUES.map((value, index) => (
                            <Reveal key={value.title} delay={index * 0.08}>
                                <div className='flex items-center gap-4'>
                                    <value.icon className='text-beige h-7 w-7 shrink-0' strokeWidth={1.25} />
                                    <h3 className='font-display text-cream text-sm leading-snug lg:text-base'>
                                        {value.title}
                                    </h3>
                                </div>
                            </Reveal>
                        ))}
                        <Reveal delay={0.35}>
                            <span className='text-beige group-hover:text-cream inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300'>
                                Our Story
                                <ArrowRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1' />
                            </span>
                        </Reveal>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ValueProps;
