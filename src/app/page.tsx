import type { Metadata } from 'next';

import AboutTeaser from '@/components/site/about-teaser';
import Contact from '@/components/site/contact';
import CtaBanner from '@/components/site/cta-banner';
import FeaturedProjects from '@/components/site/featured-projects';
import FromTheBlog from '@/components/site/from-the-blog';
import Hero from '@/components/site/hero';
import Reviews from '@/components/site/reviews';
import ServiceAreasHome from '@/components/site/service-areas-home';
import Services from '@/components/site/services';
import ValueProps from '@/components/site/value-props';

export const metadata: Metadata = {
    title: "Jayden's Landscaping | Landscape Design, Build & Maintenance in the GTA",
    description:
        'Markham-based landscape design & build serving the Greater Toronto Area — interlocking driveways, complete backyards, planting, lawn care and snow removal. Book a free, no-obligation quote.',
    alternates: { canonical: '/' }
};

const Page = () => {
    return (
        <>
            <Hero />
            <ValueProps />
            <AboutTeaser />
            <Services />
            <FeaturedProjects />
            <Reviews />
            <ServiceAreasHome />
            <FromTheBlog />
            <CtaBanner />
            <Contact />
        </>
    );
};

export default Page;
