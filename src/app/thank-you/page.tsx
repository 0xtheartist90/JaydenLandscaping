import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Thank You | Jayden's Landscaping",
    description: "Thanks for reaching out to Jayden's Landscaping — we'll be in touch shortly.",
    robots: { index: false, follow: true }
};

const ThankYouPage = () => {
    return (
        <section className='bg-forest flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center'>
            <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Thank You</p>
            <h1 className='font-display text-cream mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl'>
                We&apos;ll Be In Touch
            </h1>
            <p className='text-cream/70 mt-5 max-w-md text-base leading-relaxed font-light'>
                Thanks for reaching out. A member of our team will get back to you within one business day.
            </p>
            <div className='mt-9 flex flex-wrap items-center justify-center gap-4'>
                <Link
                    href='/'
                    className='bg-beige text-forest hover:bg-beige/85 px-8 py-3 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                    Back Home
                </Link>
                <Link
                    href='/projects'
                    className='border-cream/40 text-cream hover:bg-cream/10 border px-8 py-3 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                    View Our Work
                </Link>
            </div>
        </section>
    );
};

export default ThankYouPage;
