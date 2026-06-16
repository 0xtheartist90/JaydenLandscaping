export type ServiceCategory = {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    benefits: { title: string; text: string }[];
    subservices: string[];
    image: string;
    seo: { title: string; description: string; keywords: string[] };
    faqs: { question: string; answer: string }[];
};

export const getServiceBySlug = (slug: string) => SERVICE_CATEGORIES.find((category) => category.slug === slug);

/** The next three categories in order (wrapping around) — used for related services. */
export const getRelatedServices = (slug: string) => {
    const index = SERVICE_CATEGORIES.findIndex((category) => category.slug === slug);

    return [1, 2, 3].map((offset) => SERVICE_CATEGORIES[(index + offset) % SERVICE_CATEGORIES.length]);
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
        image: '/images/landscape-design.webp',
        seo: {
            title: "Landscape Design Toronto & GTA | Jayden's Landscaping",
            description:
                'Premium landscape design in Toronto and the GTA. Design consultation, site planning, 3D visualization and material selection — one team from concept to construction.',
            keywords: ['Landscape Design Toronto', 'Landscape Design GTA', 'Landscape Planning Toronto']
        },
        faqs: [
            {
                question: 'How does the landscape design process work?',
                answer: 'It starts with a consultation where we walk your property and discuss your goals, then we produce detailed plans and 3D visualizations so you can see and refine the design before construction begins.'
            },
            {
                question: 'Will I see what my landscape looks like before you build it?',
                answer: 'Yes — we provide 3D illustrations so you can experience your new space and make changes on paper, not in the ground.'
            },
            {
                question: 'Do you handle permits?',
                answer: 'Where a project requires permits, we manage that process as part of the build so everything is completed to code.'
            },
            {
                question: 'Can you work within my budget?',
                answer: 'Absolutely. We design to your priorities and budget, and your proposal lays out scope and cost transparently before any work starts.'
            }
        ]
    },
    {
        slug: 'interlocking-driveways',
        title: 'Interlocking Driveways',
        shortDescription: 'Interlocking driveways, walkways and patios in premium stone.',
        description:
            'A new driveway transforms your home’s first impression. We design and install interlocking driveways, walkways and patios on properly prepared bases — engineered beneath the surface so they stay level and beautiful through every freeze and thaw, and finished beautifully above it.',
        benefits: [
            {
                title: 'Built On Proper Foundations',
                text: 'Excavation, grading and base preparation done right, so surfaces stay level through freeze and thaw.'
            },
            {
                title: 'Premium Pavers & Stone',
                text: 'Architectural-grade interlocking pavers and genuine natural stone, selected to complement your home.'
            },
            {
                title: 'Craftsmanship In The Details',
                text: 'Tight joints, clean cuts and precise edges — the difference you notice for decades.'
            }
        ],
        subservices: [
            'Interlocking Driveways',
            'Walkways & Pathways',
            'Patios',
            'Natural Stone Installation',
            'Retaining Walls',
            'Steps & Edging'
        ],
        image: '/images/hardscaping.webp',
        seo: {
            title: "Interlocking Driveways Toronto & GTA | Jayden's Landscaping",
            description:
                'Interlocking driveways, walkways, patios and natural stone in Toronto and the GTA — engineered foundations and craftsman-grade finishing built to last.',
            keywords: [
                'Interlocking Driveways Toronto',
                'Interlocking Toronto',
                'Driveway Pavers GTA',
                'Walkway Installation Toronto'
            ]
        },
        faqs: [
            {
                question: 'How long does an interlocking driveway take to install?',
                answer: 'Most residential driveways take several days to a couple of weeks depending on size, drainage and access — your proposal includes a clear timeline.'
            },
            {
                question: 'Will it stay level through our winters?',
                answer: 'Yes, when it’s built properly. We excavate and prepare the base correctly so the surface resists heaving through freeze and thaw.'
            },
            {
                question: 'Can you match the style of my home?',
                answer: 'We offer a wide range of architectural-grade pavers and natural stone and help you choose colours and patterns that complement your home.'
            },
            {
                question: 'Do you build walkways and patios as well?',
                answer: 'Yes — interlocking driveways, walkways, patios, steps and retaining walls are all part of what we build.'
            }
        ]
    },
    {
        slug: 'tree-shrub-planting',
        title: 'Tree & Shrub Planting',
        shortDescription: 'Trees, shrubs, garden beds and four-season planting.',
        description:
            'Planting is what brings a landscape to life. We plant trees, shrubs and perennials and build garden beds composed for your soil, your light and the look you love — chosen to mature gracefully and give colour, texture and structure in every season.',
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
                title: 'A Healthy Start',
                text: 'Proper planting depth, soil amendment and mulching give every tree and shrub the best beginning.'
            }
        ],
        subservices: [
            'Tree Planting',
            'Shrub Planting',
            'Garden Bed Installation',
            'Perennials',
            'Sod & New Lawns',
            'Seasonal Planting'
        ],
        image: '/images/softscaping.webp',
        seo: {
            title: "Tree & Shrub Planting Toronto | Jayden's Landscaping",
            description:
                'Tree and shrub planting, garden beds and perennials in Toronto and the GTA — composed for four-season beauty and planted to thrive.',
            keywords: [
                'Tree Planting Toronto',
                'Shrub Planting GTA',
                'Garden Bed Installation Toronto',
                'Planting Services Toronto'
            ]
        },
        faqs: [
            {
                question: 'How do you decide which plants to use?',
                answer: 'We match selections to your sun, soil and hardiness zone so plants thrive — and compose them for colour and interest across all four seasons.'
            },
            {
                question: 'When is the best time to plant?',
                answer: 'Spring and fall are ideal for most trees and shrubs, but we plant through much of the year and will advise on the right timing for your project.'
            },
            {
                question: 'Do you grow your own plants?',
                answer: 'Yes — much of our stock is grown at our Markham nursery, Z Force Farm, so plants are fresh, locally acclimatised and ready for our conditions.'
            },
            {
                question: 'Can you install garden beds and sod too?',
                answer: 'Yes, our planting services include garden bed installation, perennials, sod and new lawns.'
            }
        ]
    },
    {
        slug: 'lawn-maintenance',
        title: 'Lawn Maintenance',
        shortDescription: 'Scheduled lawn care, mowing and seasonal cleanups.',
        description:
            'A landscape is an investment — maintenance protects it. Our crews keep your lawn and gardens looking their best with scheduled mowing, fertilization, aeration and seasonal cleanups, so your property looks the way it did on handover day, all season long.',
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
                title: 'A Healthier Lawn',
                text: 'Mowing, fertilization and aeration that keep your turf thick, green and resilient.'
            }
        ],
        subservices: [
            'Lawn Mowing',
            'Fertilization',
            'Aeration & Overseeding',
            'Spring & Fall Cleanups',
            'Garden Maintenance',
            'Seasonal Programs'
        ],
        image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1800&auto=format&fit=crop',
        seo: {
            title: "Lawn Maintenance & Lawn Care Toronto | Jayden's Landscaping",
            description:
                'Scheduled lawn maintenance in Toronto and the GTA — mowing, fertilization, aeration and spring and fall cleanups on reliable seasonal programs.',
            keywords: [
                'Lawn Maintenance Toronto',
                'Lawn Care Toronto',
                'Lawn Mowing GTA',
                'Property Maintenance Toronto'
            ]
        },
        faqs: [
            {
                question: 'Do you offer seasonal maintenance programs?',
                answer: 'Yes — we provide scheduled programs covering mowing, fertilization, aeration and spring and fall cleanups, so your property is cared for all season.'
            },
            {
                question: 'How often will you visit?',
                answer: 'Visit frequency is set by your program — typically weekly or bi-weekly for mowing, with seasonal services scheduled as needed.'
            },
            {
                question: 'Can you maintain a property you didn’t build?',
                answer: 'Of course. We’re happy to take on maintenance for any property and keep it looking its best.'
            },
            {
                question: 'What does a seasonal cleanup include?',
                answer: 'Spring and fall cleanups typically include leaf and debris removal, bed tidying, cutting back perennials, and preparing your lawn and gardens for the season ahead.'
            }
        ]
    },
    {
        slug: 'snow-removal',
        title: 'Snow Removal',
        shortDescription: 'Reliable residential and commercial snow removal.',
        description:
            'When winter arrives, dependable snow removal keeps your property safe and accessible. We provide reliable residential and commercial snow clearing, salting and de-icing on seasonal contracts — we watch the forecast so you don’t have to.',
        benefits: [
            {
                title: 'Reliable When It Matters',
                text: 'Prompt clearing after every snowfall so your driveway and walkways stay safe.'
            },
            {
                title: 'Salting & De-Icing',
                text: 'Ice management that keeps surfaces safe for family, customers and staff.'
            },
            {
                title: 'Seasonal Peace Of Mind',
                text: 'Simple seasonal contracts — we monitor the weather and keep you cleared all winter.'
            }
        ],
        subservices: [
            'Residential Snow Removal',
            'Commercial Snow Removal',
            'Driveway & Walkway Clearing',
            'Salting & De-Icing',
            'Seasonal Contracts'
        ],
        image: 'https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=1800&auto=format&fit=crop',
        seo: {
            title: "Snow Removal Toronto & GTA | Jayden's Landscaping",
            description:
                'Reliable residential and commercial snow removal in Toronto and the GTA — driveway and walkway clearing, salting and de-icing on seasonal contracts.',
            keywords: ['Snow Removal Toronto', 'Snow Removal GTA', 'Commercial Snow Removal Toronto', 'Snow Plowing Toronto']
        },
        faqs: [
            {
                question: 'Do you offer seasonal snow removal contracts?',
                answer: 'Yes — seasonal contracts mean we monitor the forecast and clear your property after every snowfall, with no need for you to call.'
            },
            {
                question: 'Do you serve commercial properties?',
                answer: 'Yes, we provide both residential and commercial snow removal, including driveways, walkways and parking areas.'
            },
            {
                question: 'Do you salt and de-ice?',
                answer: 'Yes — salting and de-icing are part of our service to keep surfaces safe for family, customers and staff.'
            },
            {
                question: 'When should I book snow removal?',
                answer: 'Book before winter. Securing a contract early ensures you’re on our route when the first storm arrives.'
            }
        ]
    }
];
