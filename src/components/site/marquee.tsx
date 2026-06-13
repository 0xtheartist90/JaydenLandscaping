import Image from 'next/image';

const IMAGES = [
    '/images/caroussel-101.webp',
    '/images/caroussel-102.webp',
    '/images/caroussel-103.webp',
    '/images/caroussel-104.webp',
    '/images/caroussel-105.webp',
    '/images/caroussel-106.webp',
    '/images/caroussel-107.webp'
];

const Marquee = () => {
    // Duplicate the set so the -50% translate loops seamlessly.
    const items = [...IMAGES, ...IMAGES];

    return (
        <section className='bg-forest overflow-hidden py-3 lg:py-4'>
            <div className='flex w-max [animation:marquee_75s_linear_infinite] motion-reduce:[animation:none]'>
                {items.map((src, index) => (
                    <div
                        key={index}
                        className='relative mr-3 h-56 w-80 shrink-0 overflow-hidden lg:mr-4 lg:h-72 lg:w-[28rem]'>
                        <Image
                            src={src}
                            alt=''
                            aria-hidden
                            fill
                            sizes='(max-width: 1024px) 20rem, 28rem'
                            className='object-cover'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Marquee;
