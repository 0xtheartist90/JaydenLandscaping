export type Project = {
    name: string;
    location: string;
    tags: string[];
    description: string;
    image: string;
    // Additional gallery images (up to ~8 per project). The main image + these become
    // the clickable thumbnail set that swaps the large image on the projects page.
    gallery?: string[];
};

// Stable anchor id for a project — used to deep-link from the homepage to its
// section on the /projects page (e.g. /projects#markham-estate).
export const projectSlug = (name: string) =>
    name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export const PROJECTS: Project[] = [
    {
        name: 'Chiavatti',
        location: 'Greater Toronto Area',
        tags: ['Interlocking Driveway', 'Walkways', 'Stone Estate'],
        description:
            'A grand stone residence wrapped in interlocking — a sweeping driveway, banded walkways and a circular garden forecourt, all laid on an engineered base built to stay flawless for decades.',
        image: '/images/projects/briji.webp',
        gallery: [
            '/images/projects/briji-01.webp',
            '/images/projects/briji-02.webp',
            '/images/projects/briji-03.webp',
            '/images/projects/briji-04.webp',
            '/images/projects/briji-05.webp',
            '/images/projects/briji-06.webp',
            '/images/projects/briji-07.webp'
        ]
    },
    {
        name: 'Newmarket',
        location: 'Newmarket, ON',
        tags: ['Pool Surround', 'Flagstone Patio', 'Cabana'],
        description:
            'A freeform pool wrapped in wide flagstone, with shaded lounging, a cedar pergola cabana and architectural lighting for the evenings.',
        image: '/images/projects/newmarket.webp',
        gallery: [
            '/images/projects/newmarket-01.webp',
            '/images/projects/newmarket-02.webp',
            '/images/projects/newmarket-03.webp',
            '/images/projects/newmarket-04.webp',
            '/images/projects/newmarket-05.webp',
            '/images/projects/newmarket-06.webp',
            '/images/projects/newmarket-07.webp'
        ]
    },
    {
        name: '64',
        location: 'Markham, ON',
        tags: ['Interlocking Driveway', 'Walkways', 'Garden Design'],
        description:
            'A grand stone home framed by a full interlocking driveway, banded walkways and layered garden beds — built on a properly engineered base to stay level for decades.',
        image: '/images/projects/64.webp',
        gallery: [
            '/images/projects/64-01.webp',
            '/images/projects/64-02.webp',
            '/images/projects/64-03.webp',
            '/images/projects/64-04.webp',
            '/images/projects/64-05.webp',
            '/images/projects/64-06.webp',
            '/images/projects/64-07.webp'
        ]
    },
    {
        name: 'Markham Estate',
        location: 'Markham, ON',
        tags: ['Paver Forecourt', 'Landscape Lighting', 'Estate Grounds'],
        description:
            'A flagship estate forecourt in wide-format pavers — a sweeping motor court, hexagon-stone banding and integrated lighting that turns the grounds into a scene after dark.',
        image: '/images/projects/markham.webp',
        gallery: [
            '/images/projects/markham-01.webp',
            '/images/projects/markham-02.webp',
            '/images/projects/markham-03.webp',
            '/images/projects/markham-04.webp',
            '/images/projects/markham-05.webp',
            '/images/projects/markham-06.webp',
            '/images/projects/markham-07.webp'
        ]
    },
    {
        name: 'Woolbridge',
        location: 'Woodbridge, ON',
        tags: ['Pool & Patio', 'Pergola', 'Outdoor Living'],
        description:
            'A complete backyard build around a freeform pool — generous paver decking, a cedar pergola and flagstone walkways that turn the whole yard into living space.',
        image: '/images/projects/woolbridge.webp',
        gallery: [
            '/images/projects/woolbridge-01.webp',
            '/images/projects/woolbridge-02.webp',
            '/images/projects/woolbridge-03.webp',
            '/images/projects/woolbridge-04.webp',
            '/images/projects/woolbridge-05.webp',
            '/images/projects/woolbridge-06.webp',
            '/images/projects/woolbridge-07.webp'
        ]
    },
    {
        name: 'Richmond Hill',
        location: 'Richmond Hill, ON',
        tags: ['Interlocking Driveway', 'Banded Walkways', 'Hexagon Accents'],
        description:
            'A full front-yard transformation in interlocking — a wide banded driveway, sculpted walkways and hexagon-stone accents that frame the home with crisp, custom detailing.',
        image: '/images/projects/richmondhill.webp',
        gallery: [
            '/images/projects/richmondhill-01.webp',
            '/images/projects/richmondhill-02.webp',
            '/images/projects/richmondhill-03.webp',
            '/images/projects/richmondhill-04.webp',
            '/images/projects/richmondhill-05.webp',
            '/images/projects/richmondhill-06.webp',
            '/images/projects/richmondhill-07.webp'
        ]
    },
    {
        name: 'Scarborough',
        location: 'Scarborough, ON',
        tags: ['Paver Driveway', 'Hexagon Patio', 'Pergola'],
        description:
            'A full property in interlocking and natural stone — a crisp paver driveway out front, hexagon-stone patios, a cedar pergola and a tucked-away garden pond.',
        image: '/images/projects/scarborough.webp',
        gallery: [
            '/images/projects/scarborough-01.webp',
            '/images/projects/scarborough-02.webp',
            '/images/projects/scarborough-03.webp',
            '/images/projects/scarborough-04.webp',
            '/images/projects/scarborough-05.webp',
            '/images/projects/scarborough-06.webp',
            '/images/projects/scarborough-07.webp'
        ]
    },
    {
        name: 'Oakville',
        location: 'Oakville, ON',
        tags: ['Composite Decking', 'Garden Design', 'Pool'],
        description:
            'A modern composite-deck retreat with gabion-stone planters, banks of white hydrangea and a pool — clean lines softened by lush, layered planting.',
        image: '/images/projects/oakville.webp',
        gallery: [
            '/images/projects/oakville-01.webp',
            '/images/projects/oakville-02.webp',
            '/images/projects/oakville-03.webp',
            '/images/projects/oakville-04.webp',
            '/images/projects/oakville-05.webp',
            '/images/projects/oakville-06.webp',
            '/images/projects/oakville-07.webp'
        ]
    },
    {
        name: 'The Showroom',
        location: 'Z Force Farm, Markham',
        tags: ['Paver Showroom', 'Design Display', 'Z Force Farm'],
        description:
            'Our own display grounds at Z Force Farm — full-size paver layouts, borders and patterns laid out so you can walk the materials and see exactly how they will look at home.',
        image: '/images/projects/showroom.webp',
        gallery: [
            '/images/projects/showroom-01.webp',
            '/images/projects/showroom-02.webp',
            '/images/projects/showroom-03.webp',
            '/images/projects/showroom-04.webp',
            '/images/projects/showroom-05.webp',
            '/images/projects/showroom-06.webp',
            '/images/projects/showroom-07.webp'
        ]
    }
];
