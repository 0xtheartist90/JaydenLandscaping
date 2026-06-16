import Link from 'next/link';

const NotFound = () => {
    return (
        <section className='bg-forest flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center'>
            <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Error 404</p>
            <h1 className='font-display text-cream mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl'>
                This Path Leads Nowhere
            </h1>
            <p className='text-cream/70 mt-5 max-w-md text-base leading-relaxed font-light'>
                The page you&apos;re looking for can&apos;t be found — it may have moved, or never existed.
            </p>
            <div className='mt-9 flex flex-wrap items-center justify-center gap-4'>
                <Link
                    href='/'
                    className='bg-beige text-forest hover:bg-beige/85 px-8 py-3 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                    Back Home
                </Link>
                <Link
                    href='/contact'
                    className='border-cream/40 text-cream hover:bg-cream/10 border px-8 py-3 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
