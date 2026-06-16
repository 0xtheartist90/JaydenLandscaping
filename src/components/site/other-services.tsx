import Link from 'next/link';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { ArrowUpRight, BrickWall, PencilRuler, Snowflake, Sprout, Trees, type LucideIcon } from 'lucide-react';

const SERVICE_ICONS: Record<string, LucideIcon> = {
    'landscape-design': PencilRuler,
    'interlocking-driveways': BrickWall,
    'tree-shrub-planting': Trees,
    'lawn-maintenance': Sprout,
    'snow-removal': Snowflake
};

// USP-style banner that links to the other services (everything except the current one).
const OtherServices = ({ currentSlug }: { currentSlug: string }) => {
    const others = SERVICE_CATEGORIES.filter((category) => category.slug !== currentSlug);

    return (
        <section className='bg-forest px-6 py-8 lg:px-10 lg:py-9'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex items-center gap-3'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.3em] uppercase'>
                        Explore Other Services
                    </p>
                    <span className='bg-cream/15 h-px flex-1' />
                </div>

                <div className='mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between lg:gap-0'>
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
                                <h3 className='font-display text-cream/85 group-hover:text-cream text-sm leading-snug tracking-wide underline-offset-4 transition-colors duration-300 group-hover:underline'>
                                    {category.title}
                                </h3>
                                <ArrowUpRight
                                    className='text-cream/0 group-hover:text-cream/70 h-3.5 w-3.5 shrink-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0'
                                    strokeWidth={1.5}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OtherServices;
