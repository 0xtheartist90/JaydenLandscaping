import type { Metadata } from 'next';

import CtaBanner from '@/components/site/cta-banner';
import Projects from '@/components/site/projects';

export const metadata: Metadata = {
    title: "Projects | Jayden's Landscaping",
    description:
        'A portfolio of landscape design and construction projects across Markham, Richmond Hill, Vaughan, Newmarket and Oakville.'
};

const ProjectsPage = () => {
    return (
        <>
            <Projects />
            <CtaBanner />
        </>
    );
};

export default ProjectsPage;
