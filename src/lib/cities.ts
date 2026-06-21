export type City = {
    slug: string;
    name: string;
    intro: string[];
    // Hero image — matches this city's card on the /service-areas hub for visual continuity.
    heroImage: string;
    // Image beside the "About" intro, and a unique full-width banner under "What We Offer".
    aboutImage: string;
    bannerImage: string;
};

export const getCityBySlug = (slug: string) => CITIES.find((city) => city.slug === slug);

export const CITIES: City[] = [
    {
        slug: 'landscaping-markham',
        name: 'Markham',
        heroImage: '/images/plants/tree-28.webp',
        aboutImage: '/images/projects/64.webp',
        bannerImage: '/images/projects/markham.webp',
        intro: [
            'Markham is our home — and it shows. From our base here we’ve completed countless interlocking driveways, front-yard makeovers and full backyard transformations across the city, and our nursery, Z Force Farm, is right here in Markham too. That means faster turnarounds and fresher, locally grown plants for your project.',
            'Whether you’re refreshing a front entrance, building an entertaining space out back, or maintaining an established property, you get the same experienced crew and the same standards we’ve built our reputation on — design, build, plant and maintain, all under one roof.'
        ]
    },
    {
        slug: 'landscaping-vaughan',
        name: 'Vaughan',
        heroImage: '/images/projects/briji-01.webp',
        aboutImage: '/images/projects/briji.webp',
        bannerImage: '/images/projects/richmondhill.webp',
        intro: [
            'In Vaughan we design and build custom landscapes that match the scale and style of the homes they surround — sweeping interlocking driveways, retaining walls and layered garden design, from grand front-yard statements to private backyard retreats.',
            'Every build is tailored to your property and your priorities, with premium materials and the same hands-on care from the first sketch to the final stone.'
        ]
    },
    {
        slug: 'landscaping-north-york',
        name: 'North York',
        heroImage: '/images/services/outdoor-structures.webp',
        aboutImage: '/images/projects/scarborough.webp',
        bannerImage: '/images/projects/woolbridge.webp',
        intro: [
            'North York’s city lots reward thoughtful design, and that’s exactly where we shine. We install driveways, walkways and planting and carry out complete property transformations that make the most of every square foot — turning compact spaces into polished, functional outdoor areas.',
            'From a crisp new front entrance to a fully reimagined backyard, our team handles the whole project start to finish.'
        ]
    },
    {
        slug: 'landscaping-richmond-hill',
        name: 'Richmond Hill',
        heroImage: '/images/projects/newmarket-01.webp',
        aboutImage: '/images/projects/newmarket.webp',
        bannerImage: '/images/projects/woolbridge-01.webp',
        intro: [
            'Richmond Hill homeowners who want a resort feel at home come to us for premium hardscaping — natural stone pool surrounds, patios and garden design with durable materials, clean lines and thoughtful detailing throughout.',
            'We design outdoor spaces that look as good in their tenth year as they did on day one, built by the same people who plan them.'
        ]
    },
    {
        slug: 'landscaping-newmarket',
        name: 'Newmarket',
        heroImage: '/images/projects/oakville-01.webp',
        aboutImage: '/images/projects/oakville.webp',
        bannerImage: '/images/projects/markham-05.webp',
        intro: [
            'In Newmarket we help homeowners make the most of their properties with backyard renovations, decks, fencing and new lawn installation — whether you’re after a full overhaul or a single standout feature.',
            'We’ll help you prioritise what matters most and deliver it with quality materials and meticulous craftsmanship.'
        ]
    },
    {
        slug: 'landscaping-aurora',
        name: 'Aurora',
        heroImage: '/images/lawn/lawn-result.webp',
        aboutImage: '/images/lawn/lawn-overview.webp',
        bannerImage: '/images/plants/tree-29.webp',
        intro: [
            'For homes and businesses in Aurora we offer landscape design, planting, lawn care and year-round maintenance. We’re as comfortable building something new as we are keeping an established property looking its best, season after season.',
            'Wherever you are in Aurora, you get the same crew, the same materials and the same care from start to finish.'
        ]
    }
];
