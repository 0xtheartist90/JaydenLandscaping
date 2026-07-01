import Image from 'next/image';
import Link from 'next/link';

import { CITIES } from '@/lib/cities';

import { ArrowUpRight, MapPin } from 'lucide-react';

const ServiceAreasHome = () => {
    return (
        <section className='bg-forest relative overflow-hidden px-6 py-16 lg:px-10 lg:py-28'>
            {/* LeafBG texture */}
            <Image
                src='/images/brand/leafbg.webp'
                alt=''
                aria-hidden
                fill
                sizes='100vw'
                className='pointer-events-none object-cover opacity-[0.05]'
            />

            <div className='relative z-10 mx-auto max-w-7xl'>
                <div className='flex items-end justify-between gap-6'>
                    <div>
                        <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Service Areas</p>
                        <h2 className='font-display text-cream mt-3 text-3xl leading-tight lg:text-4xl'>
                            Serving the GTA & York Region
                        </h2>
                    </div>
                    <Link
                        href='/service-areas'
                        className='text-cream hover:text-beige group relative hidden shrink-0 items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 sm:inline-flex'>
                        View All Areas
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </div>

                <div className='mt-10 grid grid-cols-2 gap-x-6 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-12'>
                    {CITIES.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/${city.slug}`}
                            className='border-cream/15 group flex items-center justify-between gap-4 border-t py-5'>
                            <span className='flex items-center gap-3'>
                                <MapPin
                                    className='text-beige h-4 w-4 shrink-0 transition-colors group-hover:text-cream'
                                    strokeWidth={1.5}
                                />
                                <span className='font-display text-cream/85 group-hover:text-cream text-xl transition-colors'>
                                    {city.name}
                                </span>
                            </span>
                            <ArrowUpRight
                                className='text-cream/30 h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream'
                                strokeWidth={1.5}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreasHome;
