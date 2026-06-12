'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SERVICE_CATEGORIES } from '@/lib/services';

import { ChevronDown } from 'lucide-react';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', dropdown: true },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
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

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                solid ? 'bg-cream/95 shadow-[0_1px_0_0_rgba(56,65,44,0.08)] backdrop-blur-md' : 'bg-transparent'
            }`}>
            <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10'>
                <Link href='/' aria-label="Jayden's Landscaping — Home" onClick={closeAll}>
                    <Image
                        src={solid ? '/images/logo-dark.png' : '/images/logo-white.png'}
                        alt="Jayden's Landscaping"
                        width={177}
                        height={60}
                        priority
                        className='h-10 w-auto lg:h-12'
                    />
                </Link>

                <nav className='hidden items-center gap-10 lg:flex' aria-label='Main navigation'>
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
                                    className={`flex items-center gap-1.5 py-2 text-[13px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                                        solid ? 'text-ink hover:text-moss' : 'text-cream/90 hover:text-cream'
                                    }`}>
                                    {link.label}
                                    <ChevronDown
                                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                                            servicesOpen ? 'rotate-180' : ''
                                        }`}
                                        strokeWidth={2}
                                    />
                                </Link>
                                <div
                                    className={`absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3 transition-all duration-300 ${
                                        servicesOpen
                                            ? 'pointer-events-auto translate-y-0 opacity-100'
                                            : 'pointer-events-none -translate-y-2 opacity-0'
                                    }`}>
                                    <div className='bg-cream border-sand border shadow-[0_18px_40px_-12px_rgba(32,37,26,0.25)]'>
                                        {SERVICE_CATEGORIES.map((category) => (
                                            <Link
                                                key={category.slug}
                                                href={`/services/${category.slug}`}
                                                onClick={() => setServicesOpen(false)}
                                                className='text-ink hover:bg-forest hover:text-cream block px-6 py-3.5 text-[12px] font-medium tracking-[0.16em] uppercase transition-colors duration-200'>
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
                                className={`text-[13px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                                    solid ? 'text-ink hover:text-moss' : 'text-cream/90 hover:text-cream'
                                }`}>
                                {link.label}
                            </Link>
                        )
                    )}
                    <Link
                        href='/contact'
                        className={`border px-6 py-3 text-[13px] font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
                            solid
                                ? 'border-forest bg-forest text-cream hover:bg-transparent hover:text-forest'
                                : 'border-cream/70 text-cream hover:bg-cream hover:text-forest'
                        }`}>
                        Get A Free Quote
                    </Link>
                </nav>

                <button
                    type='button'
                    className='flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden'
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMenuOpen((open) => !open)}>
                    <span
                        className={`h-px w-6 transition-all duration-300 ${solid ? 'bg-ink' : 'bg-cream'} ${
                            menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
                        }`}
                    />
                    <span
                        className={`h-px w-6 transition-all duration-300 ${solid ? 'bg-ink' : 'bg-cream'} ${
                            menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                        }`}
                    />
                </button>
            </div>

            {menuOpen && (
                <nav className='bg-cream border-sand max-h-[calc(100svh-5rem)] overflow-y-auto border-t lg:hidden' aria-label='Mobile navigation'>
                    <div className='flex flex-col px-6 py-6'>
                        <Link
                            href='/'
                            onClick={closeAll}
                            className='text-ink hover:text-moss border-sand/60 border-b py-4 text-sm font-medium tracking-[0.18em] uppercase'>
                            Home
                        </Link>
                        <div className='border-sand/60 border-b py-4'>
                            <Link
                                href='/services'
                                onClick={closeAll}
                                className='text-ink hover:text-moss text-sm font-medium tracking-[0.18em] uppercase'>
                                Services
                            </Link>
                            <div className='mt-3 flex flex-col'>
                                {SERVICE_CATEGORIES.map((category) => (
                                    <Link
                                        key={category.slug}
                                        href={`/services/${category.slug}`}
                                        onClick={closeAll}
                                        className='text-ink/65 hover:text-moss py-2.5 pl-4 text-[12px] font-medium tracking-[0.16em] uppercase'>
                                        {category.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {NAV_LINKS.filter((link) => !link.dropdown && link.href !== '/').map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeAll}
                                className='text-ink hover:text-moss border-sand/60 border-b py-4 text-sm font-medium tracking-[0.18em] uppercase last:border-0'>
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href='/contact'
                            onClick={closeAll}
                            className='bg-forest text-cream mt-4 px-6 py-4 text-center text-sm font-medium tracking-[0.18em] uppercase'>
                            Get A Free Quote
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default SiteHeader;
