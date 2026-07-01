'use client';

import { Children, useRef, useState, type ReactNode } from 'react';

type CarouselProps = {
    children: ReactNode;
    className?: string;
    /** Dot colour theme — 'dark' for light sections, 'light' for forest sections. */
    theme?: 'dark' | 'light';
    /**
     * Optional desktop grid classes applied to the track so it becomes a grid above a breakpoint,
     * e.g. 'sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible lg:grid-cols-3'. Pair with `dotsHide`.
     */
    desktop?: string;
    /** Breakpoint at which the dots hide (matches the `desktop` breakpoint). Defaults to 'md:hidden'. */
    dotsHide?: string;
};

/**
 * Swipeable slider on mobile — one full-width, centred slide per view with pagination dots.
 * Pass `desktop` grid classes to have the same markup lay out as a grid on larger screens.
 */
const Carousel = ({ children, className, theme = 'dark', desktop, dotsHide = 'md:hidden' }: CarouselProps) => {
    const slides = Children.toArray(children);
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    const handleScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        setActive(Math.round(track.scrollLeft / track.clientWidth));
    };

    const goTo = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
    };

    const dotIdle = theme === 'light' ? 'bg-cream/30' : 'bg-forest/25';
    const dotActive = theme === 'light' ? 'bg-cream' : 'bg-forest';

    return (
        <div className={className}>
            <div
                ref={trackRef}
                onScroll={handleScroll}
                className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${desktop ?? ''}`}>
                {slides.map((slide, index) => (
                    <div key={index} className='w-full shrink-0 snap-center'>
                        {slide}
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <div className={`mt-7 flex items-center justify-center gap-2 ${dotsHide}`}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type='button'
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={active === index}
                            onClick={() => goTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                active === index ? `w-6 ${dotActive}` : `w-1.5 ${dotIdle}`
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
