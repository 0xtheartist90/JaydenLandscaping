import type { Metadata } from 'next';

import Contact from '@/components/site/contact';
import PageHero from '@/components/site/page-hero';

export const metadata: Metadata = {
    title: "Contact | Jayden's Landscaping",
    description:
        "Request a free estimate from Jayden's Landscaping — landscape design, construction and maintenance throughout the Greater Toronto Area."
};

const ContactPage = () => {
    return (
        <>
            <PageHero
                eyebrow='Contact'
                title='Ready To Transform Your Outdoor Space?'
                image='https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2400&auto=format&fit=crop'
                imageAlt='A lush garden with layered planting'
            />
            <Contact />
        </>
    );
};

export default ContactPage;
