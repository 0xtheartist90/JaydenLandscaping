import type { Metadata } from 'next';

import CtaBanner from '@/components/site/cta-banner';
import PageHero from '@/components/site/page-hero';
import Projects from '@/components/site/projects';

export const metadata: Metadata = {
    title: "Projects | Jayden's Landscaping",
    description:
        'A portfolio of landscape design and construction projects across Markham, Richmond Hill, Vaughan, Newmarket and Oakville.'
};

const ProjectsPage = () => {
    return (
        <>
            <PageHero
                eyebrow='Our Work'
                title='Work That Speaks For Itself'
                description='A selection of recent projects across the Greater Toronto Area — each one designed, built and finished by our team.'
                image='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2400&auto=format&fit=crop'
                imageAlt='A luxury home with custom pool and landscaped gardens'
            />
            <Projects />
            <CtaBanner />
        </>
    );
};

export default ProjectsPage;
