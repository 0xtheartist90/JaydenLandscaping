import type { Metadata } from 'next';

import About from '@/components/site/about';
import CtaBanner from '@/components/site/cta-banner';
import ImageBanner from '@/components/site/image-banner';
import Marquee from '@/components/site/marquee';
import PageHero from '@/components/site/page-hero';
import Process from '@/components/site/process';
import Values from '@/components/site/values';

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
                image='/images/brand/about-hero.webp'
                video={false}
                imagePosition='object-top'
                imageAlt='A custom home with landscaped grounds at sunset'
            />
            <About />
            <Marquee />
            <Process />
            <ImageBanner />
            <Values />
            <CtaBanner />
        </>
    );
};

export default AboutPage;
