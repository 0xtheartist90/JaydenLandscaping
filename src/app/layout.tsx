import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Aboreto, Inter } from 'next/font/google';

import '@/app/globals.css';
import SiteFooter from '@/components/site/site-footer';
import SiteHeader from '@/components/site/site-header';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const aboreto = Aboreto({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-aboreto'
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export const metadata: Metadata = {
    title: "Jayden's Landscaping | Custom Landscape Design & Build in the GTA",
    description:
        "Jayden's Landscaping designs, builds and maintains exceptional outdoor spaces throughout the Greater Toronto Area. Landscape design, interlocking, natural stone, decks, pools and garden care.",
    keywords: [
        'landscaping Toronto',
        'landscape design GTA',
        'interlocking',
        'natural stone',
        'outdoor living',
        'landscape construction'
    ],
    openGraph: {
        title: "Jayden's Landscaping | Exceptional Outdoor Spaces Designed To Last",
        description:
            'Custom landscape design, construction and maintenance services throughout the Greater Toronto Area.',
        type: 'website',
        locale: 'en_CA'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${aboreto.variable} ${inter.variable} bg-cream text-ink font-sans antialiased`}>
                <SiteHeader />
                <main>{children}</main>
                <SiteFooter />
                <Toaster />
            </body>
        </html>
    );
};

export default Layout;
