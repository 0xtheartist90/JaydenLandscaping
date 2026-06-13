import Reveal from '@/components/site/reveal';

import { Gem, PencilRuler, Ruler, Trees } from 'lucide-react';

const VALUES = [
    { icon: Trees, title: '10+ Years Experience' },
    { icon: PencilRuler, title: 'Design & Build Expertise' },
    { icon: Gem, title: 'Premium Materials' },
    { icon: Ruler, title: 'Fine Craftsmanship' }
];

const ValueProps = () => {
    return (
        <section className='bg-forest px-6 py-7 lg:px-10 lg:py-8'>
            <div className='mx-auto grid max-w-7xl gap-y-7 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-0'>
                {VALUES.map((value, index) => (
                    <Reveal key={value.title} delay={index * 0.08}>
                        <div
                            className={`flex items-center gap-3.5 lg:border-cream/15 lg:border-l lg:px-8 ${
                                index === 0 ? 'lg:border-l-0 lg:pl-0' : ''
                            }`}>
                            <value.icon className='text-beige h-5 w-5 shrink-0' strokeWidth={1} />
                            <h3 className='font-display text-cream text-sm leading-snug tracking-wide lg:text-[15px]'>
                                {value.title}
                            </h3>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default ValueProps;
