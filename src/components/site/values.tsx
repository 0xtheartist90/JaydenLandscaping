import Reveal from '@/components/site/reveal';

import { Handshake, ShieldCheck, Sprout, Users, type LucideIcon } from 'lucide-react';

const VALUES: { title: string; text: string; icon: LucideIcon }[] = [
    {
        title: 'One Team, Start To Finish',
        text: 'Design, build, plant and maintain — all under one roof, so nothing gets lost in the handoff.',
        icon: Users
    },
    {
        title: 'We Grow Our Own',
        text: 'Much of our planting comes from Z Force Farm, our own Markham nursery — fresh and acclimatised to our climate.',
        icon: Sprout
    },
    {
        title: 'Built To Last',
        text: 'Proper foundations and premium materials, so the work looks as good in year ten as it did on day one.',
        icon: ShieldCheck
    },
    {
        title: 'Honest & Hands-On',
        text: 'The people who plan your project are the ones who build it — and they stand behind every detail.',
        icon: Handshake
    }
];

const Values = () => {
    return (
        <section className='bg-cream px-6 py-16 lg:px-10 lg:py-32'>
            <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
                {/* Left: editorial heading block */}
                <Reveal direction='left' blur>
                    <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>What Sets Us Apart</p>
                    <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl'>
                        The Difference Is In How We Work
                    </h2>
                    <p className='text-ink/70 mt-6 max-w-md text-base leading-relaxed font-light'>
                        Ten years in, what keeps clients coming back isn&apos;t any single service — it&apos;s the way we
                        run every project. A few things we never compromise on.
                    </p>
                </Reveal>

                {/* Right: stacked, divided value rows */}
                <div>
                    {VALUES.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <Reveal
                                key={value.title}
                                direction='right'
                                blur
                                delay={index * 0.1}
                                className='border-forest/15 flex gap-6 border-t py-7 first:border-t-0 first:pt-0 last:pb-0'>
                                <span className='bg-forest/5 text-moss flex h-12 w-12 shrink-0 items-center justify-center'>
                                    <Icon className='h-6 w-6' strokeWidth={1.25} />
                                </span>
                                <div>
                                    <h3 className='font-display text-forest text-xl'>{value.title}</h3>
                                    <p className='text-ink/65 mt-2 text-sm leading-relaxed font-light'>{value.text}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;
