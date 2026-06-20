'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ChevronDown } from 'lucide-react';

type FaqItem = { question: string; answer: string };

export const GENERAL_FAQS: FaqItem[] = [
    {
        question: 'Do you offer free consultations and estimates?',
        answer: 'Yes. Every project starts with a no-obligation consultation where we walk your property, talk through your vision, and provide a clear, transparent estimate.'
    },
    {
        question: 'Which areas do you serve?',
        answer: 'We work throughout the Greater Toronto Area and York Region — including Markham, Vaughan, North York, Richmond Hill, Newmarket, Aurora and beyond.'
    },
    {
        question: 'How long does a project take?',
        answer: 'It depends on the scope. A garden refresh may take a few days, while a full design-and-build can run several weeks. You will get a clear timeline in your proposal before we begin.'
    },
    {
        question: 'Are you licensed and insured?',
        answer: 'Yes. We are fully insured, our work is built to code, and we handle the proper permits wherever they are required.'
    },
    {
        question: 'When is the best time to start?',
        answer: 'We build through most of the year. Spring and summer are our busiest seasons, so booking early helps secure your place in the schedule.'
    }
];

type FaqProps = {
    items?: FaqItem[];
    eyebrow?: string;
    title?: string;
    surface?: 'beige' | 'cream';
};

const Faq = ({ items = GENERAL_FAQS, eyebrow = 'Questions', title = 'Frequently Asked', surface = 'beige' }: FaqProps) => {
    const [open, setOpen] = useState<number | null>(0);
    const beige = surface === 'beige';

    return (
        <section
            className={`relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28 ${beige ? 'bg-[#F1E9D6]' : 'bg-cream'}`}>
            {/* Subtle BGbeige texture (beige surface only) */}
            {beige && (
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
            )}

            <div className='relative z-10 mx-auto max-w-3xl'>
                <p className='text-moss mb-4 text-xs font-medium tracking-[0.35em] uppercase'>{eyebrow}</p>
                <h2 className='font-display text-forest text-2xl leading-snug sm:text-3xl'>{title}</h2>

                <div className='border-forest/15 mt-10 border-t'>
                    {items.map((item, index) => {
                        const isOpen = open === index;

                        return (
                            <div key={item.question} className='border-forest/15 border-b'>
                                <button
                                    type='button'
                                    onClick={() => setOpen(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    className='flex w-full items-center justify-between gap-6 py-5 text-left'>
                                    <span className='font-display text-forest text-base sm:text-lg'>{item.question}</span>
                                    <ChevronDown
                                        className={`text-moss h-5 w-5 shrink-0 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                        strokeWidth={1.5}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}>
                                    <div className='overflow-hidden'>
                                        <p className='text-ink/70 max-w-2xl pb-5 text-sm leading-relaxed font-light sm:text-base'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
