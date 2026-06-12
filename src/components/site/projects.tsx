import Image from 'next/image';

import Reveal from '@/components/site/reveal';
import SectionHeading from '@/components/site/section-heading';

const PROJECTS = [
    {
        name: 'The Courtyard Estate',
        location: 'Markham',
        services: 'Landscape Design · Natural Stone · Lighting',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1800&auto=format&fit=crop'
    },
    {
        name: 'Hillside Retreat',
        location: 'Richmond Hill',
        services: 'Interlocking · Decks · Garden Design',
        image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1400&auto=format&fit=crop'
    },
    {
        name: 'The Estate Garden',
        location: 'Vaughan',
        services: 'Design & Build · Fencing · Planting',
        image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1400&auto=format&fit=crop'
    },
    {
        name: 'Lakeside Terrace',
        location: 'Newmarket',
        services: 'Natural Stone · Pools & Ponds',
        image: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=1400&auto=format&fit=crop'
    },
    {
        name: 'The Garden Residence',
        location: 'Oakville',
        services: 'Full Landscape Transformation',
        image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1400&auto=format&fit=crop'
    }
];

const ProjectCard = ({
    project,
    aspect,
    sizes
}: {
    project: (typeof PROJECTS)[number];
    aspect: string;
    sizes: string;
}) => (
    <div className='group cursor-pointer'>
        <div className={`relative overflow-hidden ${aspect}`}>
            <Image
                src={project.image}
                alt={`${project.name} — landscaping project in ${project.location}`}
                fill
                sizes={sizes}
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15' />
        </div>
        <div className='flex items-baseline justify-between gap-4 pt-5'>
            <div>
                <h3 className='font-display text-forest text-lg lg:text-xl'>{project.name}</h3>
                <p className='text-ink/55 mt-1.5 text-xs tracking-[0.14em] uppercase'>{project.services}</p>
            </div>
            <span className='text-moss shrink-0 text-xs font-medium tracking-[0.2em] uppercase'>
                {project.location}
            </span>
        </div>
    </div>
);

const Projects = ({ showHeading = true }: { showHeading?: boolean }) => {
    const [featured, ...rest] = PROJECTS;

    return (
        <section id='projects' className='bg-sand/40 scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32'>
            <div className='mx-auto max-w-7xl'>
                {showHeading && (
                    <SectionHeading
                        eyebrow='Featured Projects'
                        title='Work That Speaks For Itself'
                        description='A selection of recent projects across the Greater Toronto Area — each one designed, built and finished by our team.'
                    />
                )}

                <div className={showHeading ? 'mt-16 lg:mt-20' : ''}>
                    <Reveal>
                        <ProjectCard project={featured} aspect='aspect-[16/9]' sizes='(max-width: 1280px) 100vw, 1280px' />
                    </Reveal>

                    <div className='mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16'>
                        {rest.map((project, index) => (
                            <Reveal key={project.name} delay={(index % 2) * 0.12}>
                                <ProjectCard
                                    project={project}
                                    aspect='aspect-[4/3]'
                                    sizes='(max-width: 640px) 100vw, 50vw'
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
