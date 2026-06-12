import Reveal from '@/components/site/reveal';
import SectionHeading from '@/components/site/section-heading';

import { Gem, PencilRuler, Ruler, Trees } from 'lucide-react';

const VALUES = [
    {
        icon: Trees,
        title: '10+ Years Experience',
        description:
            'A decade of designing and building outdoor spaces across the GTA, from intimate gardens to complete estate landscapes.'
    },
    {
        icon: PencilRuler,
        title: 'Design & Build Expertise',
        description:
            'One team carries your project from first sketch to final stone — no handoffs, no surprises, no compromises.'
    },
    {
        icon: Gem,
        title: 'Premium Materials',
        description:
            'Natural stone, premium hardwoods and architectural-grade pavers, sourced for beauty and built for Canadian seasons.'
    },
    {
        icon: Ruler,
        title: 'Detail-Driven Craftsmanship',
        description:
            'Every edge, joint and grade is finished with precision. The details you barely notice are the ones we obsess over.'
    }
];

const ValueProps = () => {
    return (
        <section className='bg-cream px-6 py-24 lg:px-10 lg:py-32'>
            <div className='mx-auto max-w-7xl'>
                <SectionHeading
                    eyebrow="Why Jayden's"
                    title='Where Craftsmanship Meets Design'
                    description='We build landscapes the way they should be built — thoughtfully designed, precisely constructed, and made to be enjoyed for decades.'
                />

                <div className='mt-16 grid gap-px bg-sand/70 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
                    {VALUES.map((value, index) => (
                        <Reveal key={value.title} delay={index * 0.1} className='bg-cream'>
                            <div className='group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-forest lg:p-10'>
                                <value.icon
                                    className='text-moss group-hover:text-beige h-7 w-7 transition-colors duration-500'
                                    strokeWidth={1.25}
                                />
                                <h3 className='font-display text-forest group-hover:text-cream mt-6 text-lg transition-colors duration-500'>
                                    {value.title}
                                </h3>
                                <p className='text-ink/65 group-hover:text-cream/75 mt-4 text-sm leading-relaxed transition-colors duration-500'>
                                    {value.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
