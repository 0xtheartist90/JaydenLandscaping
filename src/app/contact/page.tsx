import type { Metadata } from 'next';

import Contact from '@/components/site/contact';
import Faq from '@/components/site/faq';
import Marquee from '@/components/site/marquee';
import PageHero from '@/components/site/page-hero';

export const metadata: Metadata = {
    title: "Contact | Jayden's Landscaping",
    description:
        "Request a free estimate from Jayden's Landscaping — landscape design, construction and maintenance throughout the Greater Toronto Area."
};

const SHOWROOM_IMAGES = [
    '/images/projects/showroom.webp',
    '/images/projects/showroom-01.webp',
    '/images/projects/showroom-02.webp',
    '/images/projects/showroom-03.webp',
    '/images/projects/showroom-04.webp',
    '/images/projects/showroom-05.webp',
    '/images/projects/showroom-06.webp',
    '/images/projects/showroom-07.webp'
];

const ContactPage = () => {
    return (
        <>
            <PageHero
                eyebrow='Contact'
                title='Ready To Transform Your Outdoor Space?'
                image='/images/projects/oakville.webp'
                video={false}
                imageAlt='A modern composite-deck backyard with lush planting and a pool'
            />
            <Contact />
            <Marquee images={SHOWROOM_IMAGES} />
            <Faq surface='cream' />
        </>
    );
};

export default ContactPage;
