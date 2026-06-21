import type { Metadata } from 'next';

import CtaBanner from '@/components/site/cta-banner';
import PageHero from '@/components/site/page-hero';
import Projects from '@/components/site/projects';

export const metadata: Metadata = {
    title: "Projects | Jayden's Landscaping",
    description:
        'A portfolio of landscape design and construction projects across the Greater Toronto Area — Newmarket, Woolbridge, Oakville and beyond.'
};

const ProjectsPage = () => {
    return (
        <>
            <PageHero eyebrow='Our Work' title='Projects' image='/images/projects/newmarket.webp' />
            <Projects />
            <CtaBanner />
        </>
    );
};

export default ProjectsPage;
