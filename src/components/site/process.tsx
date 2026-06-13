import Reveal from '@/components/site/reveal';
import SectionHeading from '@/components/site/section-heading';

import { DraftingCompass, Hammer, Leaf, MessagesSquare } from 'lucide-react';

const STEPS = [
    {
        number: '01',
        icon: MessagesSquare,
        title: 'Consultation',
        description: 'We walk your property together, listen to how you want to live outdoors, and define the vision.'
    },
    {
        number: '02',
        icon: DraftingCompass,
        title: 'Design & Planning',
        description: 'Your space takes shape through detailed plans, material selections and a transparent proposal.'
    },
    {
        number: '03',
        icon: Hammer,
        title: 'Construction',
        description: 'Our crews build with precision and respect for your home, keeping you informed at every stage.'
    },
    {
        number: '04',
        icon: Leaf,
        title: 'Ongoing Care',
        description: 'Seasonal maintenance keeps your landscape looking the way it did on the day we handed it over.'
    }
];

const Process = () => {
    return (
        <section className='bg-forest px-6 py-24 lg:px-10 lg:py-32'>
            <div className='mx-auto max-w-7xl'>
                <SectionHeading
                    eyebrow='Our Process'
                    title='From First Sketch To Final Stone'
                    tone='dark'
                />

                <div className='mt-16 grid gap-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8'>
                    {STEPS.map((step, index) => (
                        <Reveal key={step.number} delay={index * 0.12}>
                            <div className='relative'>
                                <div className='border-cream/15 border-t pt-8'>
                                    <step.icon className='text-beige h-7 w-7' strokeWidth={1} />
                                    <span className='font-display text-beige/80 mt-6 block text-sm tracking-[0.3em]'>
                                        {step.number}
                                    </span>
                                    <h3 className='font-display text-cream mt-4 text-xl'>{step.title}</h3>
                                    <p className='text-cream/70 mt-4 text-sm leading-relaxed font-light'>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
