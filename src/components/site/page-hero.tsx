import Image from 'next/image';

type PageHeroProps = {
    eyebrow: string;
    title: string;
    description?: string;
    image: string;
    imageAlt?: string;
};

const PageHero = ({ eyebrow, title, description, image, imageAlt = '' }: PageHeroProps) => {
    return (
        <section className='relative flex min-h-[55svh] items-center justify-center overflow-hidden'>
            <Image src={image} alt={imageAlt} fill priority sizes='100vw' className='object-cover' />
            <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55' />
            <div className='relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center'>
                <p className='text-beige mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>{eyebrow}</p>
                <h1 className='font-display text-cream text-4xl leading-[1.15] sm:text-5xl lg:text-6xl'>{title}</h1>
                {description && (
                    <p className='text-cream/85 mx-auto mt-8 max-w-2xl text-base leading-relaxed font-light sm:text-lg'>
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
