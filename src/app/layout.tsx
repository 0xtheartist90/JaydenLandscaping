import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Aboreto, Inter } from 'next/font/google';

import '@/app/globals.css';
import { QuoteModalProvider } from '@/components/site/quote-modal';
import SiteFooter from '@/components/site/site-footer';
import SiteHeader from '@/components/site/site-header';

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
    metadataBase: new URL('https://jaydenslandscaping.ca'),
    title: "Jayden's Landscaping | Custom Landscape Design & Build in the GTA",
    description:
        "Jayden's Landscaping designs, builds and maintains exceptional outdoor spaces throughout the Greater Toronto Area. Landscape design, interlocking driveways, planting, lawn maintenance and snow removal.",
    keywords: [
        'landscaping Toronto',
        'landscape design GTA',
        'interlocking driveways',
        'lawn maintenance',
        'snow removal',
        'landscape construction'
    ],
    openGraph: {
        title: "Jayden's Landscaping | Exceptional Outdoor Spaces Designed To Last",
        description:
            'Custom landscape design, construction and maintenance services throughout the Greater Toronto Area.',
        type: 'website',
        locale: 'en_CA',
        images: [{ url: '/images/services/landscape-design.webp', width: 1920, height: 1080 }]
    },
    twitter: {
        card: 'summary_large_image',
        title: "Jayden's Landscaping | Exceptional Outdoor Spaces Designed To Last",
        description:
            'Custom landscape design, construction and maintenance services throughout the Greater Toronto Area.',
        images: ['/images/services/landscape-design.webp']
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${aboreto.variable} ${inter.variable} bg-cream text-ink font-sans antialiased`}>
                <QuoteModalProvider>
                    <SiteHeader />
                    <main>{children}</main>
                    <SiteFooter />
                </QuoteModalProvider>
            </body>
        </html>
    );
};

export default Layout;
