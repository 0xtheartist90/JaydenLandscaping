import Image from 'next/image';

const DEFAULT_IMAGES = [
    '/images/brand/caroussel-101.webp',
    '/images/brand/caroussel-102.webp',
    '/images/brand/caroussel-103.webp',
    '/images/brand/caroussel-104.webp',
    '/images/brand/caroussel-105.webp',
    '/images/brand/caroussel-106.webp',
    '/images/brand/caroussel-107.webp'
];

const Marquee = ({ images }: { images?: string[] }) => {
    const source = images && images.length > 0 ? images : DEFAULT_IMAGES;
    // Duplicate the set so the -50% translate loops seamlessly.
    const items = [...source, ...source];

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
