'use client';

import { useState } from 'react';

import Image from 'next/image';

import Reveal from '@/components/site/reveal';

import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const CONTACT_DETAILS = [
    {
        icon: Phone,
        label: 'Phone',
        value: '(416) 555-0123',
        href: 'tel:+14165550123'
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'info@jaydenslandscaping.ca',
        href: 'mailto:info@jaydenslandscaping.ca'
    },
    {
        icon: MapPin,
        label: 'Service Area',
        value: 'Toronto · Markham · Richmond Hill · Vaughan · Newmarket · Oakville',
        href: undefined
    }
];

const inputClasses =
    'w-full border border-sand bg-white/60 px-5 py-4 text-sm text-ink placeholder:text-ink/40 focus:border-moss focus:outline-none transition-colors duration-300';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);

        // TODO: wire up to a real endpoint (e.g. Resend, Formspree or an API route)
        setTimeout(() => {
            setSubmitting(false);
            (event.target as HTMLFormElement).reset();
            toast.success("Thank you — we'll be in touch within one business day.");
        }, 800);
    };

    return (
        <section id='contact' className='bg-cream relative scroll-mt-20 overflow-hidden px-6 py-24 lg:px-10 lg:py-32'>
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
                    <form onSubmit={handleSubmit} className='grid gap-5 sm:grid-cols-2'>
                        <div>
                            <label htmlFor='name' className='sr-only'>
                                Name
                            </label>
                            <input id='name' name='name' required placeholder='Name' className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor='phone' className='sr-only'>
                                Phone
                            </label>
                            <input id='phone' name='phone' type='tel' placeholder='Phone' className={inputClasses} />
                        </div>
                        <div className='sm:col-span-2'>
                            <label htmlFor='email' className='sr-only'>
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                required
                                placeholder='Email'
                                className={inputClasses}
                            />
                        </div>
                        <div className='sm:col-span-2'>
                            <label htmlFor='message' className='sr-only'>
                                Tell us about your project
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                required
                                rows={6}
                                placeholder='Tell us about your project — property location, scope, and timeline.'
                                className={`${inputClasses} resize-none`}
                            />
                        </div>
                        <div className='sm:col-span-2'>
                            <button
                                type='submit'
                                disabled={submitting}
                                className='bg-forest text-cream hover:bg-moss w-full px-10 py-4 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300 disabled:opacity-60 sm:w-auto'>
                                {submitting ? 'Sending…' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
