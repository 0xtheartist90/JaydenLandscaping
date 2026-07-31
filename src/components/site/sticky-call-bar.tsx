/**
 * Slim mobile-only call bar, fixed to the bottom edge. Deliberately subtle:
 * 40px tall, translucent cream with blur, single tel: link (the site-wide
 * click listener in tracking.tsx turns the tap into the phone_click
 * conversion). Right padding leaves room for the Crisp chat bubble. The
 * trailing spacer keeps the footer's last line readable above the bar.
 */
import { Phone } from 'lucide-react';

const StickyCallBar = () => (
    <>
        <a
            href='tel:+16476214219'
            aria-label="Call Jayden's Landscaping"
            className='bg-cream/90 border-sand/70 text-ink fixed inset-x-0 bottom-0 z-40 flex h-10 items-center gap-2.5 border-t px-6 pr-24 backdrop-blur-md lg:hidden'>
            <Phone className='text-moss h-3.5 w-3.5' strokeWidth={1.75} />
            <span className='text-[11px] font-medium tracking-[0.18em] uppercase'>Call Us</span>
            <span className='text-ink/60 ml-auto text-[12px] tracking-wide'>+1 647-621-4219</span>
        </a>
        <div aria-hidden className='h-10 lg:hidden' />
    </>
);

export default StickyCallBar;
