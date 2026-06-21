import Image from 'next/image';

type PageHeroProps = {
    eyebrow: string;
    title: string;
    image: string;
    imageAlt?: string;
    video?: boolean;
    imagePosition?: string;
};

const PageHero = ({ eyebrow, title, image, imageAlt = '', video = true, imagePosition = 'object-center' }: PageHeroProps) => {
    return (
        <section className='relative flex min-h-[55svh] items-center justify-center overflow-hidden'>
            {/* Image is the poster / reduced-motion fallback; the hero video (when enabled) plays over it */}
            <Image src={image} alt={imageAlt} fill priority sizes='100vw' className={`object-cover ${imagePosition}`} />
            {video && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    poster={image}
                    aria-hidden
                    className='absolute inset-0 h-full w-full object-cover motion-reduce:hidden'>
                    <source src='/videos/hero.mp4' type='video/mp4' />
                    <source src='/videos/hero.webm' type='video/webm' />
                </video>
            )}
            <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55' />
            <div className='relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center'>
                <p className='text-beige mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm'>{eyebrow}</p>
                <h1 className='font-display text-cream text-4xl leading-[1.15] sm:text-5xl lg:text-6xl'>{title}</h1>
            </div>
        </section>
    );
};

export default PageHero;
