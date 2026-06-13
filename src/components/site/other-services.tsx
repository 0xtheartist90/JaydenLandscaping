import Link from 'next/link';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { BrickWall, Fence, PencilRuler, Shovel, Sprout, Waves, type LucideIcon } from 'lucide-react';

const SERVICE_ICONS: Record<string, LucideIcon> = {
    'landscape-design': PencilRuler,
    hardscaping: BrickWall,
    'outdoor-structures': Fence,
    'water-features': Waves,
    softscaping: Sprout,
    'property-maintenance': Shovel
};

// USP-style banner that links to the other services (everything except the current one).
const OtherServices = ({ currentSlug }: { currentSlug: string }) => {
    const others = SERVICE_CATEGORIES.filter((category) => category.slug !== currentSlug);

    return (
        <section className='bg-forest px-6 py-7 lg:px-10 lg:py-8'>
            <div className='mx-auto grid max-w-7xl gap-x-10 gap-y-6 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between lg:gap-0'>
                {others.map((category, index) => {
                    const Icon = SERVICE_ICONS[category.slug];

                    return (
                        <Link
                            key={category.slug}
                            href={`/services/${category.slug}`}
                            className={`group flex items-center gap-3 lg:border-cream/15 lg:border-l lg:px-6 ${
                                index === 0 ? 'lg:border-l-0 lg:pl-0' : ''
                            }`}>
                            <Icon
                                className='text-beige group-hover:text-cream h-5 w-5 shrink-0 transition-colors duration-300'
                                strokeWidth={1}
                            />
                            <h3 className='font-display text-cream/85 group-hover:text-cream text-sm leading-snug tracking-wide transition-colors duration-300'>
                                {category.title}
                            </h3>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default OtherServices;
