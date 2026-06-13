import Image from 'next/image';

import Reveal from '@/components/site/reveal';

const MILESTONES = [
    {
        year: '2014',
        text: 'Jayden starts out with little more than a wheelbarrow, a used car, and a passion for landscaping.'
    },
    {
        year: '2017',
        text: 'Word of mouth grows the business from solo lawn care into full garden design and construction.'
    },
    {
        year: '2020',
        text: 'The team expands into complete design & build projects — interlocking, stonework and outdoor living.'
    },
    {
        year: 'Today',
        text: 'A respected landscaping company trusted by homeowners across the GTA, still built on the same work ethic.'
    }
];

const About = () => {
    return (
        <section id='about' className='relative scroll-mt-20 overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
            <Image
                src='/images/BGbeige.webp'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='pointer-events-none object-cover opacity-[0.03]'
            />
            <div className='relative z-10 mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2 lg:gap-20'>
                <Reveal className='lg:sticky lg:top-32'>
                    <div className='relative aspect-[3/2] overflow-hidden'>
                        <Image
                            src='/images/aboutjayden.webp'
                            alt='Jayden, founder of Jayden&apos;s Landscaping'
                            fill
                            sizes='(max-width: 1024px) 100vw, 50vw'
                            className='object-cover'
                        />
                    </div>
                    <p className='text-ink/50 mt-4 text-xs tracking-[0.2em] uppercase'>
                        Jayden — Founder &amp; Lead Designer
                    </p>
                </Reveal>

                <div>
                    <Reveal>
                        <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>The Story</p>
                        <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl lg:text-[2.75rem]'>
                            It Started With A Wheelbarrow
                        </h2>
                        <div className='text-ink/75 mt-8 space-y-5 text-base leading-relaxed font-light sm:text-lg'>
                            <p>
                                Over ten years ago, Jayden started this business with little more than a wheelbarrow, a
                                used car, and an unshakeable passion for landscaping. No investors, no fleet of trucks
                                — just early mornings, honest work, and a belief that every yard deserved to be
                                treated like his own.
                            </p>
                            <p>
                                Through dedication and craftsmanship, that one-man operation grew into a respected
                                landscaping company serving clients throughout the Greater Toronto Area. The trucks
                                and the team came later. The standard never changed.
                            </p>
                        </div>
                    </Reveal>

                    <div className='mt-12 space-y-0'>
                        {MILESTONES.map((milestone, index) => (
                            <Reveal key={milestone.year} delay={index * 0.08}>
                                <div className='border-sand flex gap-8 border-t py-6'>
                                    <span className='font-display text-moss w-16 shrink-0 text-sm tracking-[0.15em]'>
                                        {milestone.year}
                                    </span>
                                    <p className='text-ink/70 text-sm leading-relaxed'>{milestone.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
