import AboutTeaser from '@/components/site/about-teaser';
import Contact from '@/components/site/contact';
import CtaBanner from '@/components/site/cta-banner';
import FeaturedProjects from '@/components/site/featured-projects';
import Hero from '@/components/site/hero';
import Services from '@/components/site/services';
import ValueProps from '@/components/site/value-props';

const Page = () => {
    return (
        <>
            <Hero />
            <ValueProps />
            <AboutTeaser />
            <Services />
            <FeaturedProjects />
            <CtaBanner />
            <Contact />
        </>
    );
};

export default Page;
