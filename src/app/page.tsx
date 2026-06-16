import AboutTeaser from '@/components/site/about-teaser';
import Contact from '@/components/site/contact';
import CtaBanner from '@/components/site/cta-banner';
import FeaturedProjects from '@/components/site/featured-projects';
import FromTheBlog from '@/components/site/from-the-blog';
import Hero from '@/components/site/hero';
import ServiceAreasHome from '@/components/site/service-areas-home';
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
            <ServiceAreasHome />
            <FromTheBlog />
            <CtaBanner />
            <Contact />
        </>
    );
};

export default Page;
