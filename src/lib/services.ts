export type ServiceCategory = {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    benefits: { title: string; text: string }[];
    subservices: string[];
    image: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        slug: 'landscape-design',
        title: 'Landscape Design',
        shortDescription: 'Complete outdoor visions, drawn with architectural precision.',
        description:
            'Every great landscape begins on paper. Our design process turns your property and your ambitions into a clear, buildable vision — balancing architecture, planting, materials and budget so there are no surprises once construction begins.',
        benefits: [
            {
                title: 'A Vision You Can See',
                text: '3D visualizations let you walk through your new landscape before a single stone is placed.'
            },
            {
                title: 'Designed To Be Built',
                text: 'Our designers and build crews are one team, so every plan is practical, priced and permitted.'
            },
            {
                title: 'Materials That Last',
                text: 'We guide you through material selections that suit your home, your taste and Canadian seasons.'
            }
        ],
        subservices: [
            'Design Consultation',
            'Site Planning',
            '3D Design Visualization',
            'Material Selection',
            'Project Planning'
        ],
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1800&auto=format&fit=crop'
    },
    {
        slug: 'hardscaping',
        title: 'Hardscaping',
        shortDescription: 'Interlocking, natural stone, driveways and retaining walls.',
        description:
            'Hardscaping is the backbone of every outdoor space. From interlocking driveways to natural stone patios and retaining walls, we build the structures that define your landscape — engineered properly beneath the surface and finished beautifully above it.',
        benefits: [
            {
                title: 'Built On Proper Foundations',
                text: 'Excavation, grading and base preparation done right, so surfaces stay level through freeze and thaw.'
            },
            {
                title: 'Premium Stone & Pavers',
                text: 'Architectural-grade pavers and genuine natural stone, selected to complement your home.'
            },
            {
                title: 'Craftsmanship In The Details',
                text: 'Tight joints, clean cuts and precise edges — the difference you notice for decades.'
            }
        ],
        subservices: [
            'Interlocking',
            'Driveways',
            'Walkways',
            'Patios',
            'Natural Stone Installation',
            'Retaining Walls'
        ],
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1800&auto=format&fit=crop'
    },
    {
        slug: 'outdoor-structures',
        title: 'Outdoor Structures',
        shortDescription: 'Decks, fences and custom structures in premium materials.',
        description:
            'A well-built structure extends your living space outdoors. We design and construct decks, fences and custom structures in premium wood and composite — built to code, anchored to last and finished with the same care as fine carpentry.',
        benefits: [
            {
                title: 'Wood Or Composite',
                text: 'Honest guidance on materials — from classic cedar to low-maintenance composite systems.'
            },
            {
                title: 'Engineered & Permitted',
                text: 'Structures designed to code with proper footings, framing and hardware.'
            },
            {
                title: 'Privacy & Character',
                text: 'Fencing and screens that add seclusion without sacrificing style.'
            }
        ],
        subservices: [
            'Deck Construction',
            'Composite Decks',
            'Wood Decks',
            'Fence Installation',
            'Privacy Fences',
            'Custom Structures'
        ],
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop'
    },
    {
        slug: 'water-features',
        title: 'Water Features',
        shortDescription: 'Ponds, waterfalls and natural stone pools.',
        description:
            'Nothing transforms a backyard like water. From naturalized ponds and waterfalls to natural stone pools, we create water features that turn your property into a retreat — engineered for easy maintenance and year-round beauty.',
        benefits: [
            {
                title: 'Naturalized Design',
                text: 'Features that look like they belong — integrated into stone, planting and grade.'
            },
            {
                title: 'Sound & Movement',
                text: 'Waterfalls and streams designed for the sound and atmosphere you want.'
            },
            {
                title: 'Built For Our Climate',
                text: 'Proper liners, pumps and winterization so your feature thrives season after season.'
            }
        ],
        subservices: ['Ponds', 'Waterfalls', 'Natural Stone Pools', 'Landscape Water Features'],
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop'
    },
    {
        slug: 'softscaping',
        title: 'Softscaping',
        shortDescription: 'Garden beds, planting, sod and seasonal colour.',
        description:
            'Planting is what brings a landscape to life. Our softscaping services layer trees, shrubs, perennials and lawn into compositions that mature gracefully — chosen for your soil, your light and the look you love in every season.',
        benefits: [
            {
                title: 'Right Plant, Right Place',
                text: 'Selections matched to sun, soil and hardiness zone, so your garden thrives — not just survives.'
            },
            {
                title: 'Four-Season Interest',
                text: 'Planting plans composed for colour, texture and structure throughout the year.'
            },
            {
                title: 'Instant Lawns',
                text: 'Premium sod and new lawn installation for an immediate, even, healthy green.'
            }
        ],
        subservices: [
            'Garden Bed Installation',
            'Planting Services',
            'Trees',
            'Shrubs',
            'Perennials',
            'Sod Installation',
            'New Lawn Installation',
            'Seasonal Planting'
        ],
        image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1800&auto=format&fit=crop'
    },
    {
        slug: 'property-maintenance',
        title: 'Property Maintenance',
        shortDescription: 'Lawn care, garden maintenance and snow removal.',
        description:
            'A landscape is an investment — maintenance protects it. Our crews keep your property looking the way it did on handover day, with scheduled lawn care, garden maintenance and reliable snow removal through the winter months.',
        benefits: [
            {
                title: 'One Trusted Team',
                text: 'The people who built your landscape are the ones who care for it.'
            },
            {
                title: 'Scheduled & Reliable',
                text: 'Consistent visits on a seasonal program — no chasing, no reminders needed.'
            },
            {
                title: 'Year-Round Service',
                text: 'From spring cleanups to winter snow removal, your property is covered every month.'
            }
        ],
        subservices: ['Lawn Care', 'Lawn Mowing', 'Garden Maintenance', 'Seasonal Maintenance', 'Snow Removal'],
        image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1800&auto=format&fit=crop'
    }
];
