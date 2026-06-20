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

export const PROJECTS: Project[] = [
    {
        name: 'Newmarket',
        location: 'Greater Toronto Area',
        tags: ['Landscape Design', 'Natural Stone', 'Lighting'],
        description: 'A formal courtyard reimagined with natural stone, layered planting and architectural lighting.',
        image: '/images/newmarket.webp',
        // Placeholder: duplicated to 8 thumbnails until real photos are supplied.
        gallery: [
            '/images/newmarket-01.webp',
            '/images/newmarket-02.webp',
            '/images/newmarket-03.webp',
            '/images/newmarket.webp',
            '/images/newmarket-01.webp',
            '/images/newmarket-02.webp',
            '/images/newmarket-03.webp'
        ]
    },
    {
        name: '64',
        location: 'Greater Toronto Area',
        tags: ['Interlocking', 'Decks', 'Garden Design'],
        description: 'Terraced interlocking and cedar decks that turn a steep slope into usable living space.',
        image: '/images/64.webp',
        // Placeholder: duplicated to 8 thumbnails until real photos are supplied.
        gallery: [
            '/images/64-01.webp',
            '/images/64-02.webp',
            '/images/64-03.webp',
            '/images/64.webp',
            '/images/64-01.webp',
            '/images/64-02.webp',
            '/images/64-03.webp'
        ]
    },
    {
        name: 'Woolbridge',
        location: 'Greater Toronto Area',
        tags: ['Design & Build', 'Fencing', 'Planting'],
        description: 'A full design-build transformation framed by custom fencing and four-season planting.',
        image: '/images/woolbridge.webp',
        // Placeholder: duplicated to 8 thumbnails until real photos are supplied.
        gallery: [
            '/images/woolbridge-01.webp',
            '/images/woolbridge-02.webp',
            '/images/woolbridge-03.webp',
            '/images/woolbridge.webp',
            '/images/woolbridge-01.webp',
            '/images/woolbridge-02.webp',
            '/images/woolbridge-03.webp'
        ]
    },
    {
        name: 'Oakville',
        location: 'Greater Toronto Area',
        tags: ['Natural Stone', 'Pools & Ponds'],
        description: 'A waterfront terrace of natural stone, with a pond that mirrors the open sky.',
        image: '/images/oakville.webp',
        // Placeholder: duplicated to 8 thumbnails until real photos are supplied.
        gallery: [
            '/images/oakville-01.webp',
            '/images/oakville-02.webp',
            '/images/oakville-03.webp',
            '/images/oakville.webp',
            '/images/oakville-01.webp',
            '/images/oakville-02.webp',
            '/images/oakville-03.webp'
        ]
    }
];
