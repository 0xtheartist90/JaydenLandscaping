import Image from 'next/image';

import Reveal from '@/components/site/reveal';

import { Star } from 'lucide-react';

// TODO: Replace the quote / name / location below with the real Google review text.
// Keep ~3 entries; ratings should reflect the actual stars given.
const REVIEWS = [
    {
        quote: 'Jayden and his team transformed our front yard with a new interlocking driveway and walkway. The crew was professional, on time, and the finish is flawless. Easily the best contractor we have worked with.',
        name: 'Sarah M.',
        location: 'Markham, ON',
        rating: 5
    },
    {
        quote: 'From the 3D design to the final stone, the whole process was smooth and transparent. They rebuilt our entire backyard — patio, pergola and planting — and it looks like something out of a magazine.',
        name: 'David L.',
        location: 'Vaughan, ON',
        rating: 5
    },
    {
        quote: 'Great communication and honest pricing. They did our pool surround and garden beds, and we have used them for seasonal maintenance ever since. Highly recommend to anyone in the GTA.',
        name: 'Priya S.',
        location: 'Richmond Hill, ON',
        rating: 5
    }
];

const AGGREGATE = {
    rating: (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1),
    count: REVIEWS.length
};

const Stars = ({ count }: { count: number }) => (
    <div className='flex gap-0.5' aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={i < count ? 'fill-beige text-beige h-4 w-4' : 'text-beige/40 h-4 w-4'}
                strokeWidth={1.5}
            />
        ))}
    </div>
);

const Reviews = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: "Jayden's Landscaping",
        image: 'https://jaydenslandscaping.ca/images/services/landscape-design.webp',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: AGGREGATE.rating,
            reviewCount: AGGREGATE.count
        },
        review: REVIEWS.map((r) => ({
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
            author: { '@type': 'Person', name: r.name },
            reviewBody: r.quote
        }))
    };

    return (
        <>
            {/* Trusted by Techo-Pro — above the testimonials */}
            <section className='bg-forest relative overflow-hidden px-6 py-14 lg:py-16'>
                <Image
                    src='/images/brand/leafbg.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.05]'
                />
                <Reveal blur className='relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Trusted & Certified</p>
                    <div className='relative h-16 w-48 sm:h-20 sm:w-60'>
                        <Image
                            src='/images/brand/techo-pro.webp'
                            alt='Techo-Pro Certified Installer'
                            fill
                            sizes='240px'
                            className='object-contain'
                        />
                    </div>
                    <p className='text-cream/70 max-w-md text-sm leading-relaxed font-light'>
                        A certified Techo-Pro installer — held to the highest standards in hardscape design and
                        installation.
                    </p>
                </Reveal>
            </section>

            <section className='bg-cream px-6 py-24 lg:px-10 lg:py-32'>
                <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className='mx-auto max-w-7xl'>
                <Reveal blur className='max-w-2xl'>
                    <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>What Our Clients Say</p>
                    <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl'>
                        Trusted by homeowners across the GTA
                    </h2>
                </Reveal>

                <div className='mt-14 grid gap-6 md:grid-cols-3'>
                    {REVIEWS.map((review, index) => (
                        <Reveal
                            key={review.name}
                            blur
                            delay={(index % 3) * 0.1}
                            className='border-forest/15 flex flex-col border bg-white/40 p-7'>
                            <Stars count={review.rating} />
                            <p className='text-ink/75 mt-5 flex-1 text-[15px] leading-relaxed font-light'>
                                “{review.quote}”
                            </p>
                            <div className='border-forest/10 mt-6 flex items-center justify-between border-t pt-5'>
                                <div>
                                    <p className='font-display text-forest text-base'>{review.name}</p>
                                    <p className='text-moss text-xs tracking-[0.1em] uppercase'>{review.location}</p>
                                </div>
                                <span className='text-ink/40 text-[10px] font-medium tracking-[0.18em] uppercase'>
                                    via Google
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
            </section>

            {/* Full-width image under the testimonials */}
            <section className='relative h-[44svh] min-h-[300px] w-full overflow-hidden'>
                <Image
                    src='/images/projects/woodbridge-02.webp'
                    alt='A finished pool landscape in the Greater Toronto Area'
                    fill
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15' />
            </section>
        </>
    );
};

export default Reviews;
