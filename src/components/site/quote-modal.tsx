'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';

type QuoteModalContextValue = { open: (service?: string) => void };

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export const useQuoteModal = () => {
    const context = useContext(QuoteModalContext);
    if (!context) throw new Error('useQuoteModal must be used within QuoteModalProvider');

    return context;
};

const inputClasses =
    'w-full border border-sand bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors duration-300 focus:border-moss focus:outline-none';

const QuoteModalPanel = ({ service, onClose }: { service: string; onClose: () => void }) => {
    const reduceMotion = useReducedMotion();
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        // TODO: wire up to a real endpoint (Resend, Formspree or an API route)
        setTimeout(() => {
            onClose();
            router.push('/thank-you');
        }, 700);
    };

    return (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6'>
            {/* Backdrop */}
            <motion.div
                className='absolute inset-0 bg-black/60 backdrop-blur-sm'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
            />

            {/* Panel */}
            <motion.div
                role='dialog'
                aria-modal='true'
                aria-label='Request a free quote'
                className='relative z-10 max-h-[90svh] w-full max-w-lg overflow-y-auto bg-cream shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]'
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}>
                {/* Header band */}
                <div className='bg-forest relative overflow-hidden px-7 py-7 lg:px-9'>
                    <Image
                        src='/images/leafbg.webp'
                        alt=''
                        aria-hidden
                        fill
                        sizes='512px'
                        className='pointer-events-none object-cover opacity-[0.06]'
                    />
                    <div className='relative z-10'>
                        <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Free Quote</p>
                        <h2 className='font-display text-cream mt-2 text-2xl leading-tight sm:text-3xl'>
                            Let&apos;s Plan Your Project
                        </h2>
                        <p className='text-cream/70 mt-2 text-sm leading-relaxed font-light'>
                            Tell us a little about your space — we&apos;ll reply within one business day with honest
                            advice and a no-obligation quote.
                        </p>
                    </div>
                    <button
                        type='button'
                        onClick={onClose}
                        aria-label='Close'
                        className='text-cream/70 hover:bg-cream/10 hover:text-cream absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center transition-colors'>
                        <X className='h-5 w-5' strokeWidth={1.5} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className='grid gap-4 px-7 py-7 sm:grid-cols-2 lg:px-9'>
                    <div>
                        <label htmlFor='q-name' className='sr-only'>
                            Name
                        </label>
                        <input id='q-name' name='name' required placeholder='Name' className={inputClasses} />
                    </div>
                    <div>
                        <label htmlFor='q-phone' className='sr-only'>
                            Phone
                        </label>
                        <input id='q-phone' name='phone' type='tel' placeholder='Phone' className={inputClasses} />
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor='q-email' className='sr-only'>
                            Email
                        </label>
                        <input id='q-email' name='email' type='email' required placeholder='Email' className={inputClasses} />
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor='q-service' className='text-ink/50 mb-1.5 block text-[11px] tracking-[0.2em] uppercase'>
                            Service
                        </label>
                        <select
                            id='q-service'
                            name='service'
                            defaultValue={service || 'landscape-design'}
                            className={inputClasses}>
                            {SERVICE_CATEGORIES.map((category) => (
                                <option key={category.slug} value={category.slug}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor='q-message' className='sr-only'>
                            Project details
                        </label>
                        <textarea
                            id='q-message'
                            name='message'
                            rows={4}
                            placeholder='Tell us about your project — location, scope and timeline.'
                            className={`${inputClasses} resize-none`}
                        />
                    </div>
                    <div className='sm:col-span-2'>
                        <button
                            type='submit'
                            disabled={submitting}
                            className='bg-forest text-cream hover:bg-moss w-full px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300 disabled:opacity-60'>
                            {submitting ? 'Sending…' : 'Request My Free Quote'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [service, setService] = useState('');

    const open = useCallback((preselected?: string) => {
        setService(preselected ?? '');
        setIsOpen(true);
    }, []);

    const close = useCallback(() => setIsOpen(false), []);

    return (
        <QuoteModalContext.Provider value={{ open }}>
            {children}
            <AnimatePresence>{isOpen && <QuoteModalPanel service={service} onClose={close} />}</AnimatePresence>
        </QuoteModalContext.Provider>
    );
};
