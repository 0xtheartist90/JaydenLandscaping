import Image from 'next/image';
import type { ReactNode } from 'react';

type LegalLayoutProps = {
    title: string;
    updated?: string;
    children: ReactNode;
};

const LegalLayout = ({ title, updated, children }: LegalLayoutProps) => {
    return (
        <>
            <section className='bg-forest px-6 pt-32 pb-14 lg:px-10 lg:pt-40 lg:pb-16'>
                <div className='mx-auto max-w-3xl'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Legal</p>
                    <h1 className='font-display text-cream mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl'>
                        {title}
                    </h1>
                    {updated && <p className='text-cream/50 mt-4 text-sm'>Last updated: {updated}</p>}
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-16 lg:px-10 lg:py-24'>
                {/* Subtle BGbeige texture */}
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />

                <article className='text-ink/75 relative z-10 mx-auto max-w-3xl text-[15px] leading-relaxed font-light [&_a:hover]:text-forest [&_a]:text-moss [&_a]:underline [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:first:mt-0 [&_h2]:font-display [&_h2]:text-forest [&_p]:mb-4 [&_strong]:text-forest [&_strong]:font-medium [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5'>
                    {children}
                </article>
            </section>
        </>
    );
};

export default LegalLayout;
