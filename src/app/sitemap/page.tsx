import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { BLOG_POSTS } from '@/lib/blog';
import { CITIES } from '@/lib/cities';
import { SERVICE_CATEGORIES } from '@/lib/services';

export const metadata: Metadata = {
    title: "Sitemap | Jayden's Landscaping",
    description: "A complete list of pages on the Jayden's Landscaping website."
};

const GROUPS = [
    {
        heading: 'Explore',
        links: [
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/service-areas', label: 'Service Areas' },
            { href: '/projects', label: 'Projects' },
            { href: '/blog', label: 'Journal' },
            { href: '/location', label: 'Location' },
            { href: '/contact', label: 'Contact' }
        ]
    },
    {
        heading: 'Services',
        links: SERVICE_CATEGORIES.map((category) => ({
            href: `/services/${category.slug}`,
            label: category.title
        }))
    },
    {
        heading: 'Service Areas',
        links: CITIES.map((city) => ({ href: `/${city.slug}`, label: city.name }))
    },
    {
        heading: 'Journal',
        links: BLOG_POSTS.map((post) => ({ href: `/blog/${post.slug}`, label: post.title }))
    },
    {
        heading: 'Legal',
        links: [
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms & Conditions' },
            { href: '/accessibility', label: 'Accessibility Statement' },
            { href: '/licenses', label: 'Licenses & Attributions' }
        ]
    }
];

const SitemapPage = () => {
    return (
        <>
            <section className='bg-forest px-6 pt-32 pb-14 lg:px-10 lg:pt-40 lg:pb-16'>
                <div className='mx-auto max-w-3xl'>
                    <p className='text-beige text-[11px] font-medium tracking-[0.35em] uppercase'>Overview</p>
                    <h1 className='font-display text-cream mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl'>Sitemap</h1>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-16 lg:px-10 lg:py-24'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 lg:grid-cols-3'>
                    {GROUPS.map((group) => (
                        <div key={group.heading}>
                            <p className='text-moss text-[11px] font-medium tracking-[0.3em] uppercase'>
                                {group.heading}
                            </p>
                            <ul className='mt-5 space-y-3'>
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className='font-display text-forest hover:text-moss text-lg transition-colors'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default SitemapPage;
