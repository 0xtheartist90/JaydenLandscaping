import Image from 'next/image';
import Link from 'next/link';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const EXPLORE_LINKS = [
    { href: '/services', label: 'Services' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/location', label: 'Location' },
    { href: '/contact', label: 'Contact' }
];

const SOCIALS = [
    { href: 'https://www.instagram.com/jaydenzhong/', label: 'Instagram', Icon: Instagram },
    { href: 'https://www.facebook.com/jayden.zhong', label: 'Facebook', Icon: Facebook }
];

const LEGAL_LINKS = [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/accessibility', label: 'Accessibility' },
    { href: '/licenses', label: 'Licenses' }
];

const columnHeading = 'text-beige mb-5 text-[11px] font-medium tracking-[0.3em] uppercase';
const columnLink = 'text-cream/65 hover:text-cream text-sm transition-colors';

const SiteFooter = () => {
    return (
        <footer className='bg-forest px-6 py-16 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
                <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-14'>
                    {/* Brand */}
                    <div>
                        <Link href='/' aria-label="Jayden's Landscaping — Home">
                            <Image
                                src='/images/logo-white.webp'
                                alt="Jayden's Landscaping"
                                width={177}
                                height={60}
                                className='h-11 w-auto'
                            />
                        </Link>
                        <p className='text-cream/60 mt-5 max-w-xs text-sm leading-relaxed font-light'>
                            Exceptional outdoor spaces, designed and built throughout the Greater Toronto Area & York
                            Region.
                        </p>
                        <div className='mt-6 flex gap-3'>
                            {SOCIALS.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={label}
                                    className='border-cream/20 text-cream/70 hover:border-cream hover:text-cream flex h-9 w-9 items-center justify-center border transition-colors duration-300'>
                                    <Icon className='h-4 w-4' strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className={columnHeading}>Explore</h3>
                        <ul className='space-y-3'>
                            {EXPLORE_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={columnLink}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={columnHeading}>Services</h3>
                        <ul className='space-y-3'>
                            {SERVICE_CATEGORIES.map((category) => (
                                <li key={category.slug}>
                                    <Link href={`/services/${category.slug}`} className={columnLink}>
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={columnHeading}>Get In Touch</h3>
                        <div className='space-y-3 text-sm'>
                            <a
                                href='tel:+16476214219'
                                className='text-cream/65 hover:text-cream flex items-center gap-2.5 transition-colors'>
                                <Phone className='text-beige h-4 w-4 shrink-0' strokeWidth={1.5} />
                                +1 647-621-4219
                            </a>
                            <a
                                href='mailto:jaydenlandscaping@yahoo.com'
                                className='text-cream/65 hover:text-cream flex items-center gap-2.5 break-all transition-colors'>
                                <Mail className='text-beige h-4 w-4 shrink-0' strokeWidth={1.5} />
                                jaydenlandscaping@yahoo.com
                            </a>
                            <p className='text-cream/65 flex items-start gap-2.5'>
                                <MapPin className='text-beige mt-0.5 h-4 w-4 shrink-0' strokeWidth={1.5} />
                                5357 19th Ave, Markham, ON L3P 3J3
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border-cream/10 mt-14 flex flex-col items-center gap-4 border-t pt-8 text-xs md:flex-row md:justify-between'>
                    <p className='text-cream/40 tracking-wide'>
                        © {new Date().getFullYear()} Jayden&apos;s Landscaping. All rights reserved.
                    </p>
                    <nav className='flex flex-wrap justify-center gap-x-5 gap-y-2' aria-label='Legal'>
                        {LEGAL_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className='text-cream/40 hover:text-cream/75 tracking-wide transition-colors'>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
