'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { ChevronDown } from 'lucide-react';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services', dropdown: true },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
];

const SiteHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const solid = scrolled || menuOpen;

    const closeAll = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    // Animated underline shared by every desktop link
    const underline =
        'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100';

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                solid ? 'bg-cream/85 border-sand/50 border-b backdrop-blur-md' : 'border-b border-transparent bg-transparent'
            }`}>
            <div
                className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
                    solid ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
                }`}>
                <Link href='/' aria-label="Jayden's Landscaping — Home" onClick={closeAll}>
                    <Image
                        src={solid ? '/images/logo-dark.webp' : '/images/logo-white.webp'}
                        alt="Jayden's Landscaping"
                        width={177}
                        height={60}
                        priority
                        className={`w-auto transition-all duration-500 ${solid ? 'h-7 lg:h-8' : 'h-8 lg:h-9'}`}
                    />
                </Link>

                <nav className='hidden items-center gap-9 lg:flex' aria-label='Main navigation'>
                    {NAV_LINKS.map((link) =>
                        link.dropdown ? (
                            <div
                                key={link.href}
                                className='relative'
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}>
                                <Link
                                    href={link.href}
                                    aria-expanded={servicesOpen}
                                    className={`relative flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${underline} ${
                                        solid ? 'text-ink/80 hover:text-ink' : 'text-cream/85 hover:text-cream'
                                    }`}>
                                    {link.label}
                                    <ChevronDown
                                        className={`h-3 w-3 transition-transform duration-300 ${
                                            servicesOpen ? 'rotate-180' : ''
                                        }`}
                                        strokeWidth={1.5}
                                    />
                                </Link>
                                <div
                                    className={`absolute top-full left-1/2 w-60 -translate-x-1/2 pt-4 transition-all duration-300 ${
                                        servicesOpen
                                            ? 'pointer-events-auto translate-y-0 opacity-100'
                                            : 'pointer-events-none -translate-y-2 opacity-0'
                                    }`}>
                                    <div className='bg-cream/95 border-sand/70 border shadow-[0_18px_40px_-12px_rgba(32,37,26,0.22)] backdrop-blur-md'>
                                        {SERVICE_CATEGORIES.map((category) => (
                                            <Link
                                                key={category.slug}
                                                href={`/services/${category.slug}`}
                                                onClick={() => setServicesOpen(false)}
                                                className='text-ink/75 hover:bg-forest hover:text-cream block px-5 py-3 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors duration-200'>
                                                {category.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${underline} ${
                                    solid ? 'text-ink/80 hover:text-ink' : 'text-cream/85 hover:text-cream'
                                }`}>
                                {link.label}
                            </Link>
                        )
                    )}
                    <Link
                        href='/contact'
                        className='bg-beige text-forest hover:bg-beige/85 ml-2 px-5 py-2.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300'>
                        Get A Free Quote
                    </Link>
                </nav>

                <button
                    type='button'
                    className='flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden'
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMenuOpen((open) => !open)}>
                    <span
                        className={`h-px w-5 transition-all duration-300 ${solid ? 'bg-ink' : 'bg-cream'} ${
                            menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
                        }`}
                    />
                    <span
                        className={`h-px w-5 transition-all duration-300 ${solid ? 'bg-ink' : 'bg-cream'} ${
                            menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                        }`}
                    />
                </button>
            </div>

            {menuOpen && (
                <nav
                    className='bg-cream/95 border-sand max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t backdrop-blur-md lg:hidden'
                    aria-label='Mobile navigation'>
                    <div className='flex flex-col px-6 py-5'>
                        <Link
                            href='/'
                            onClick={closeAll}
                            className='text-ink hover:text-moss border-sand/50 border-b py-3.5 text-[13px] font-medium tracking-[0.2em] uppercase'>
                            Home
                        </Link>
                        <Link
                            href='/about'
                            onClick={closeAll}
                            className='text-ink hover:text-moss border-sand/50 border-b py-3.5 text-[13px] font-medium tracking-[0.2em] uppercase'>
                            About
                        </Link>
                        <div className='border-sand/50 border-b py-3.5'>
                            <Link
                                href='/services'
                                onClick={closeAll}
                                className='text-ink hover:text-moss text-[13px] font-medium tracking-[0.2em] uppercase'>
                                Services
                            </Link>
                            <div className='mt-2 flex flex-col'>
                                {SERVICE_CATEGORIES.map((category) => (
                                    <Link
                                        key={category.slug}
                                        href={`/services/${category.slug}`}
                                        onClick={closeAll}
                                        className='text-ink/60 hover:text-moss py-2 pl-4 text-[11px] font-medium tracking-[0.16em] uppercase'>
                                        {category.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {NAV_LINKS.filter(
                            (link) => !link.dropdown && link.href !== '/' && link.href !== '/about'
                        ).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeAll}
                                className='text-ink hover:text-moss border-sand/50 border-b py-3.5 text-[13px] font-medium tracking-[0.2em] uppercase last:border-0'>
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href='/contact'
                            onClick={closeAll}
                            className='bg-beige text-forest hover:bg-beige/85 mt-4 px-6 py-3.5 text-center text-[13px] font-medium tracking-[0.2em] uppercase transition-colors duration-300'>
                            Get A Free Quote
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default SiteHeader;
