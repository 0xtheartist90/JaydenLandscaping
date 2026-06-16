export type Project = {
    name: string;
    location: string;
    tags: string[];
    description: string;
    image: string;
    // Additional images for the projects-page gallery (3 per project).
    gallery?: string[];
};

export const PROJECTS: Project[] = [
    {
        name: 'Newmarket',
        location: 'Greater Toronto Area',
        tags: ['Landscape Design', 'Natural Stone', 'Lighting'],
        description: 'A formal courtyard reimagined with natural stone, layered planting and architectural lighting.',
        image: '/images/newmarket.webp',
        gallery: ['/images/newmarket-01.webp', '/images/newmarket-02.webp', '/images/newmarket-03.webp']
    },
    {
        name: '64',
        location: 'Greater Toronto Area',
        tags: ['Interlocking', 'Decks', 'Garden Design'],
        description: 'Terraced interlocking and cedar decks that turn a steep slope into usable living space.',
        image: '/images/64.webp',
        gallery: ['/images/64-01.webp', '/images/64-02.webp', '/images/64-03.webp']
    },
    {
        name: 'Woolbridge',
        location: 'Greater Toronto Area',
        tags: ['Design & Build', 'Fencing', 'Planting'],
        description: 'A full design-build transformation framed by custom fencing and four-season planting.',
        image: '/images/woolbridge.webp',
        gallery: ['/images/woolbridge-01.webp', '/images/woolbridge-02.webp', '/images/woolbridge-03.webp']
    },
    {
        name: 'Oakville',
        location: 'Greater Toronto Area',
        tags: ['Natural Stone', 'Pools & Ponds'],
        description: 'A waterfront terrace of natural stone, with a pond that mirrors the open sky.',
        image: '/images/oakville.webp',
        gallery: ['/images/oakville-01.webp', '/images/oakville-02.webp', '/images/oakville-03.webp']
    }
];
