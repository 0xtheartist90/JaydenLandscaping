import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
];

const SiteFooter = () => {
    return (
        <footer className='bg-forest px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between'>
                    <div className='text-center md:text-left'>
                        <Link href='/' aria-label="Jayden's Landscaping — Home">
                            <Image
                                src='/images/logo-white.webp'
                                alt="Jayden's Landscaping"
                                width={177}
                                height={60}
                                className='mx-auto h-11 w-auto md:mx-0'
                            />
                        </Link>
                        <p className='text-cream/60 mt-4 max-w-xs text-sm leading-relaxed font-light'>
                            Exceptional outdoor spaces, designed and built throughout the Greater Toronto Area.
                        </p>
                    </div>

                    <nav className='flex flex-wrap justify-center gap-x-10 gap-y-4' aria-label='Footer navigation'>
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className='text-cream/75 hover:text-cream text-xs font-medium tracking-[0.2em] uppercase transition-colors'>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className='text-center text-sm md:text-right'>
                        <a href='tel:+16476214219' className='text-cream/75 hover:text-cream block transition-colors'>
                            +1 647-621-4219
                        </a>
                        <a
                            href='mailto:info@jaydenslandscaping.ca'
                            className='text-cream/75 hover:text-cream mt-2 block transition-colors'>
                            info@jaydenslandscaping.ca
                        </a>
                    </div>
                </div>

                <div className='border-cream/10 text-cream/40 mt-12 border-t pt-8 text-center text-xs tracking-wide'>
                    © {new Date().getFullYear()} Jayden&apos;s Landscaping. All rights reserved. · Toronto, Ontario
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
