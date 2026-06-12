import type { Metadata } from 'next';

import About from '@/components/site/about';
import CtaBanner from '@/components/site/cta-banner';
import PageHero from '@/components/site/page-hero';
import Process from '@/components/site/process';

export const metadata: Metadata = {
    title: "About | Jayden's Landscaping",
    description:
        "The story of Jayden's Landscaping — from a wheelbarrow and a used car to a respected design & build landscaping company serving the Greater Toronto Area."
};

const AboutPage = () => {
    return (
        <>
            <PageHero
                eyebrow='About Us'
                title='Built On Dedication & Craftsmanship'
                description='More than ten years of designing and building exceptional outdoor spaces across the GTA.'
                image='https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2400&auto=format&fit=crop'
                imageAlt='A custom home with landscaped grounds at sunset'
            />
            <About />
            <Process />
            <CtaBanner />
        </>
    );
};

export default AboutPage;
