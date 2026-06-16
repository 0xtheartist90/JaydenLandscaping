import Image from 'next/image';

import Reveal from '@/components/site/reveal';

import { Mail, MapPin, Phone } from 'lucide-react';

const MAP_QUERY = '5357 19th Ave, Markham, ON L3P 3J3, Canada';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}`;

const CONTACT_DETAILS = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 647-621-4219',
        href: 'tel:+16476214219'
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'jaydenlandscaping@yahoo.com',
        href: 'mailto:jaydenlandscaping@yahoo.com'
    },
    {
        icon: MapPin,
        label: 'Address',
        value: '5357 19th Ave, Markham, ON L3P 3J3',
        href: MAP_LINK
    }
];

const Contact = () => {
    return (
        <section id='contact' className='relative scroll-mt-20 overflow-hidden bg-[#F1E9D6] px-6 py-24 lg:px-10 lg:py-32'>
            {/* Subtle BGbeige texture */}
            <Image
                src='/images/BGbeige.webp'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='pointer-events-none object-cover opacity-[0.03]'
            />

            <div className='relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-5 lg:gap-20'>
                <Reveal className='lg:col-span-2'>
                    <p className='text-moss mb-5 text-xs font-medium tracking-[0.35em] uppercase'>Get In Touch</p>
                    <h2 className='font-display text-forest text-3xl leading-snug sm:text-4xl'>
                        Let&apos;s Talk About Your Project
                    </h2>
                    <p className='text-ink/70 mt-6 text-base leading-relaxed font-light'>
                        Whether you&apos;re planning a complete landscape transformation or a single improvement,
                        we&apos;d love to hear about it.
                    </p>

                    <div className='mt-10 space-y-7'>
                        {CONTACT_DETAILS.map((detail) => (
                            <div key={detail.label} className='flex items-start gap-4'>
                                <detail.icon className='text-moss mt-0.5 h-5 w-5 shrink-0' strokeWidth={1.5} />
                                <div>
                                    <p className='text-ink/50 text-xs tracking-[0.2em] uppercase'>{detail.label}</p>
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            className='text-ink hover:text-moss mt-1 block text-sm transition-colors'>
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <p className='text-ink mt-1 text-sm leading-relaxed'>{detail.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15} className='lg:col-span-3'>
                    <div className='border-sand h-full min-h-[360px] overflow-hidden border lg:min-h-[460px]'>
                        <iframe
                            title="Jayden's Landscaping — Markham location"
                            src={MAP_SRC}
                            className='h-full min-h-[360px] w-full border-0 lg:min-h-[460px]'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            allowFullScreen
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
