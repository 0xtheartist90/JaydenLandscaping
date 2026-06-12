import About from '@/components/site/about';
import Contact from '@/components/site/contact';
import CtaBanner from '@/components/site/cta-banner';
import Hero from '@/components/site/hero';
import Process from '@/components/site/process';
import Projects from '@/components/site/projects';
import Services from '@/components/site/services';
import ValueProps from '@/components/site/value-props';

const Page = () => {
    return (
        <>
            <Hero />
            <ValueProps />
            <Process />
            <Services />
            <Projects />
            <About />
            <CtaBanner />
            <Contact />
        </>
    );
};

export default Page;
