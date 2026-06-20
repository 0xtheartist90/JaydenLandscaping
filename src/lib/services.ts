export type ServiceCategory = {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    benefits: { title: string; text: string; icon?: string }[];
    subservices: string[];
    image: string;
    seo: { title: string; description: string; keywords: string[] };
    faqs: { question: string; answer: string }[];
    // Optional rich content — rendered only when present (used to deepen flagship pages).
    heroSubline?: string;
    intro?: string[];
    overviewImage?: string;
    process?: { title: string; text: string }[];
    gallery?: string[];
    // A centered statement band shown in place of the gallery when a service has no project photos.
    highlight?: { eyebrow?: string; title: string; text: string };
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
        intro: [
            'Every great landscape begins on paper. Our design process turns your property and your ambitions into a clear, buildable vision — balancing architecture, planting, materials and budget so there are no surprises once construction begins. Because our designers and build crews are one team, the plan you fall in love with is the plan we actually build.'
        ],
        overviewImage: '/images/woolbridge.webp',
        benefits: [
            {
                title: 'A Vision You Can See',
                text: '3D visualizations let you walk through your new landscape before a single stone is placed.',
                icon: 'pencil'
            },
            {
                title: 'Designed To Be Built',
                text: 'Our designers and build crews are one team, so every plan is practical, priced and permitted.',
                icon: 'layers'
            },
            {
                title: 'Materials That Last',
                text: 'We guide you through material selections that suit your home, your taste and Canadian seasons.',
                icon: 'shield'
            },
            {
                title: 'Built Around You',
                text: 'Every design starts with how you actually want to live outdoors — then we make it real.',
                icon: 'sparkles'
            }
        ],
        process: [
            {
                title: 'Consultation',
                text: 'We walk your property, listen to how you want to use the space, and discuss style, priorities and budget.'
            },
            {
                title: 'Site Assessment',
                text: 'We measure and assess sun, grade, drainage and existing features so the design is grounded in reality.'
            },
            {
                title: 'Concept Design',
                text: 'We translate your goals into a layout — hardscape, planting and focal points composed as one.'
            },
            {
                title: '3D Visualization',
                text: 'You see your landscape in 3D and refine materials, colours and details before anything is built.'
            },
            {
                title: 'Detailed Plan & Quote',
                text: 'A clear, itemised plan and transparent quote so you know exactly what we’ll build and what it costs.'
            },
            {
                title: 'Handover To Build',
                text: 'The same team carries the approved design into construction — nothing lost in translation.'
            }
        ],
        gallery: [
            '/images/newmarket-01.webp',
            '/images/oakville-01.webp',
            '/images/woolbridge-01.webp',
            '/images/64-01.webp'
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
        slug: 'backyard-design',
        title: 'Backyard Design',
        shortDescription: 'Complete backyards — decks, ponds, patios and planting, designed as one.',
        description:
            'Your backyard should feel like an extension of your home. We design and build complete backyards as a single, cohesive space — bringing together decks, ponds and water features, patios and planting into an outdoor retreat made for how you actually live.',
        intro: [
            'Your backyard should feel like an extension of your home. We design and build complete backyards as a single, cohesive space — bringing decks, ponds and water features, patios and planting together into an outdoor retreat made for how you actually live. Designing it all as one means everything works together, instead of looking added on piece by piece.'
        ],
        overviewImage: '/images/64.webp',
        benefits: [
            {
                title: 'Designed As One Space',
                text: 'Decks, water, stone and planting composed together — not piecemeal — for a backyard that feels intentional.',
                icon: 'layers'
            },
            {
                title: 'Water & Atmosphere',
                text: 'Naturalized ponds and water features that bring sound, movement and a sense of calm to your yard.',
                icon: 'waves'
            },
            {
                title: 'Built To Be Lived In',
                text: 'Decks, patios and seating areas engineered for entertaining, relaxing and year-round enjoyment.',
                icon: 'sofa'
            },
            {
                title: 'Privacy & Shelter',
                text: 'Fencing, screening and structure that make your backyard feel like a private retreat.',
                icon: 'home'
            }
        ],
        process: [
            {
                title: 'Consultation',
                text: 'We talk through how you want to use your backyard — entertaining, relaxing, kids, gardening — and your budget.'
            },
            {
                title: 'Concept & 3D Design',
                text: 'We compose decks, water, stone and planting into one cohesive plan and show it to you in 3D.'
            },
            {
                title: 'Site Prep & Excavation',
                text: 'We clear, grade and prepare the site so every element sits on a stable, well-drained base.'
            },
            {
                title: 'Hardscape & Structures',
                text: 'Decks, patios, ponds and retaining elements are built with premium materials and clean detailing.'
            },
            {
                title: 'Planting & Finishing',
                text: 'Layered planting, lighting and finishing touches bring the whole space to life.'
            },
            {
                title: 'Walkthrough',
                text: 'We walk the finished backyard with you and make sure every detail is right.'
            }
        ],
        gallery: [
            '/images/64-02.webp',
            '/images/oakville-02.webp',
            '/images/woolbridge-02.webp',
            '/images/newmarket-02.webp'
        ],
        subservices: [
            'Backyard Design & Build',
            'Decks',
            'Ponds & Water Features',
            'Patios',
            'Privacy & Fencing',
            'Outdoor Living Spaces'
        ],
        image: '/images/water-features.webp',
        seo: {
            title: "Backyard Design & Build Toronto | Jayden's Landscaping",
            description:
                'Complete backyard design and build in Toronto and the GTA — decks, ponds and water features, patios and planting designed as one cohesive outdoor retreat.',
            keywords: [
                'Backyard Design Toronto',
                'Backyard Landscaping GTA',
                'Deck Builder Toronto',
                'Pond Installation Toronto'
            ]
        },
        faqs: [
            {
                question: 'What does a backyard design include?',
                answer: 'Anything that makes your backyard a cohesive retreat — decks, ponds and water features, patios, planting, lighting and privacy — designed together rather than piece by piece.'
            },
            {
                question: 'Do you build decks and ponds?',
                answer: 'Yes. Decks, naturalized ponds and water features are core to our backyard builds, alongside stone, planting and fencing.'
            },
            {
                question: 'Will I see the design before you build?',
                answer: 'Yes — we provide plans and 3D visualizations so you can experience your new backyard and refine it before construction begins.'
            },
            {
                question: 'Can you build it in stages?',
                answer: 'Absolutely. If you’d like to phase the work, we’ll design the whole backyard and build it in stages that suit your budget and timeline.'
            }
        ]
    },
    {
        slug: 'interlocking-driveways',
        title: 'Interlocking Driveways',
        shortDescription: 'Interlocking driveways, walkways and patios in premium stone.',
        heroSubline:
            'Boost your curb appeal and your home’s value with a premium interlocking driveway — expertly designed, properly built, and made to last for decades.',
        description:
            'A new driveway transforms your home’s first impression. We design and install interlocking driveways, walkways and patios on properly engineered bases — so they stay level and beautiful through every freeze and thaw.',
        intro: [
            'Your driveway is one of the largest, most visible surfaces on your property — and a beautifully built interlocking driveway transforms your curb appeal while standing up to Ontario’s freeze-thaw winters far better than poured concrete or asphalt. With more than ten years installing driveways across Markham and the GTA, we build every one on a properly engineered base, because a driveway is only as good as what’s underneath it.'
        ],
        overviewImage: '/images/hardscaping.webp',
        benefits: [
            {
                title: 'Lasting Durability',
                text: 'Pavers flex with freeze-thaw movement instead of cracking like concrete — intact for decades.',
                icon: 'shield'
            },
            {
                title: 'Stunning Curb Appeal',
                text: 'Endless colours, patterns and borders, designed to suit your home’s exact style.',
                icon: 'sparkles'
            },
            {
                title: 'Added Home Value',
                text: 'A visible, lasting upgrade that buyers notice and appraisers reward.',
                icon: 'trending'
            },
            {
                title: 'Easy Repairs',
                text: 'A stained or damaged paver can be lifted and replaced — no need to redo the surface.',
                icon: 'wrench'
            }
        ],
        process: [
            {
                title: 'Design & Consultation',
                text: 'We discuss your style, review paver options, and — for larger projects — create a 3D design so you can see the finished look before we begin.'
            },
            {
                title: 'Excavation',
                text: 'We remove the existing surface and excavate to the proper depth, which is essential for a stable, long-lasting result.'
            },
            {
                title: 'Base Preparation',
                text: 'We install and compact a high-quality granular base in layers — the single most important step in preventing future settling or heaving.'
            },
            {
                title: 'Sand Bedding & Laying',
                text: 'A precise bedding layer is set, then pavers are laid in your chosen pattern with crisp, even lines and clean borders.'
            },
            {
                title: 'Edge Restraints & Jointing',
                text: 'Secure edge restraints lock everything in place, and polymeric sand is swept into the joints to resist weeds and shifting.'
            },
            {
                title: 'Compaction & Finishing',
                text: 'The surface is compacted and finished, leaving you with a driveway that’s level, solid and ready to enjoy.'
            }
        ],
        gallery: ['/images/64.webp', '/images/newmarket.webp', '/images/woolbridge.webp', '/images/oakville.webp'],
        subservices: [
            'Interlocking Driveways',
            'Walkways & Pathways',
            'Patios',
            'Natural Stone Installation',
            'Retaining Walls',
            'Steps & Edging'
        ],
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1800&auto=format&fit=crop',
        seo: {
            title: "Interlocking Driveways Markham & GTA | Jayden's Landscaping",
            description:
                'Premium interlocking driveways in Markham & across the GTA. Built on a properly engineered base to last decades. Get a free, no-obligation quote today.',
            keywords: [
                'interlocking driveways Markham',
                'interlocking driveway GTA',
                'paver driveway installation',
                'interlocking driveway cost',
                'driveway interlocking Vaughan'
            ]
        },
        faqs: [
            {
                question: 'How long does an interlocking driveway last?',
                answer: 'With proper installation and minimal maintenance, an interlocking driveway can last 25 to 30 years or more. The quality of the base preparation is the biggest factor in its lifespan.'
            },
            {
                question: 'How much does an interlocking driveway cost?',
                answer: 'Cost depends on the size of the driveway, the pavers you choose, the complexity of the design, and your site conditions. The best way to get an accurate figure is to request a free quote — we’ll assess your property and give you a clear, honest estimate.'
            },
            {
                question: 'Is interlocking better than concrete or asphalt?',
                answer: 'For Ontario’s climate, many homeowners prefer interlocking because the individual pavers handle freeze-thaw movement without cracking, are easy to repair, and offer far more design flexibility than a poured slab or asphalt.'
            },
            {
                question: 'Does an interlocking driveway need much maintenance?',
                answer: 'Very little. Occasional sweeping, the odd rinse, and re-sanding the joints every few years keeps it looking great. Sealing is optional and can enhance colour and stain resistance.'
            },
            {
                question: 'Which areas do you serve?',
                answer: 'We install interlocking driveways across Markham, Vaughan, North York, Richmond Hill, Newmarket, Aurora and surrounding GTA communities.'
            }
        ]
    },
    {
        slug: 'tree-shrub-planting',
        title: 'Tree & Shrub Planting',
        shortDescription: 'Trees, shrubs, garden beds and four-season planting.',
        description:
            'Planting is what brings a landscape to life. We plant trees, shrubs and perennials and build garden beds composed for your soil, your light and the look you love — chosen to mature gracefully and give colour, texture and structure in every season.',
        intro: [
            'Planting is what brings a landscape to life. We plant trees, shrubs and perennials and build garden beds composed for your soil, your light and the look you love — chosen to mature gracefully and give colour, texture and structure in every season. Much of our stock is grown at our own Markham nursery, so it’s fresh, locally acclimatised and ready for our conditions.'
        ],
        overviewImage: '/images/oakville.webp',
        benefits: [
            {
                title: 'Right Plant, Right Place',
                text: 'Selections matched to sun, soil and hardiness zone, so your garden thrives — not just survives.',
                icon: 'sprout'
            },
            {
                title: 'Four-Season Interest',
                text: 'Planting plans composed for colour, texture and structure throughout the year.',
                icon: 'leaf'
            },
            {
                title: 'A Healthy Start',
                text: 'Proper planting depth, soil amendment and mulching give every plant the best beginning.',
                icon: 'droplets'
            },
            {
                title: 'Grown Locally',
                text: 'Much of our stock is grown at our Markham nursery, fresh and acclimatised to our climate.',
                icon: 'flower'
            }
        ],
        process: [
            {
                title: 'Site & Soil Assessment',
                text: 'We assess your sun, soil and drainage to choose plants that will genuinely thrive.'
            },
            {
                title: 'Planting Plan',
                text: 'We compose trees, shrubs and perennials for four-season colour, texture and structure.'
            },
            {
                title: 'Sourcing',
                text: 'We select healthy, locally grown stock — much of it from our own Markham nursery.'
            },
            {
                title: 'Bed Preparation',
                text: 'We prepare and amend beds with quality soil so roots establish quickly.'
            },
            {
                title: 'Planting',
                text: 'Everything is planted at the proper depth, mulched and watered in for the best start.'
            },
            {
                title: 'Aftercare Guidance',
                text: 'We leave you with simple guidance to keep your new planting healthy as it matures.'
            }
        ],
        gallery: [
            '/images/woolbridge-03.webp',
            '/images/oakville-03.webp',
            '/images/64-03.webp',
            '/images/newmarket-03.webp'
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
        intro: [
            'A landscape is an investment — maintenance protects it. Our crews keep your lawn and gardens looking their best with scheduled mowing, fertilization, aeration and seasonal cleanups, so your property looks the way it did on handover day, all season long. The same people who build landscapes maintain them, on a reliable program you never have to chase.'
        ],
        overviewImage: '/images/softscaping.webp',
        benefits: [
            {
                title: 'One Trusted Team',
                text: 'The people who built your landscape are the ones who care for it.',
                icon: 'shield'
            },
            {
                title: 'Scheduled & Reliable',
                text: 'Consistent visits on a seasonal program — no chasing, no reminders needed.',
                icon: 'calendar'
            },
            {
                title: 'A Healthier Lawn',
                text: 'Mowing, fertilization and aeration that keep your turf thick, green and resilient.',
                icon: 'sprout'
            },
            {
                title: 'Tidy All Season',
                text: 'Spring and fall cleanups keep beds, edges and lawns looking sharp from thaw to freeze.',
                icon: 'scissors'
            }
        ],
        process: [
            {
                title: 'Property Walkthrough',
                text: 'We assess your lawn and gardens and recommend a program suited to your property.'
            },
            {
                title: 'Tailored Schedule',
                text: 'We set a visit schedule and seasonal services that fit your lawn and your budget.'
            },
            {
                title: 'Regular Mowing & Care',
                text: 'Consistent mowing, edging and trimming keep your lawn crisp through the growing season.'
            },
            {
                title: 'Feeding & Aeration',
                text: 'Fertilization, aeration and overseeding build a thicker, healthier, more resilient lawn.'
            },
            {
                title: 'Seasonal Cleanups',
                text: 'Spring and fall cleanups clear debris, tidy beds and prepare your property for the season.'
            },
            {
                title: 'Ongoing Attention',
                text: 'We keep an eye on your property and flag anything that needs attention before it becomes a problem.'
            }
        ],
        gallery: [
            '/images/woolbridge.webp',
            '/images/newmarket.webp',
            '/images/oakville.webp',
            '/images/64.webp'
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
        intro: [
            'When winter arrives, dependable snow removal keeps your property safe and accessible. We provide reliable residential and commercial snow clearing, salting and de-icing on seasonal contracts — we watch the forecast so you don’t have to. Book before the season and you’re on our route when the first storm hits.'
        ],
        overviewImage: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=1600&auto=format&fit=crop',
        highlight: {
            eyebrow: 'Seasonal Contracts',
            title: 'We watch the forecast so you don’t have to',
            text: 'Lock in a seasonal contract before winter and you’re on our route from the first storm to the last — driveways and walkways cleared, salted and safe, without a single phone call.'
        },
        benefits: [
            {
                title: 'Reliable When It Matters',
                text: 'Prompt clearing after every snowfall so your driveway and walkways stay safe.',
                icon: 'snowflake'
            },
            {
                title: 'Salting & De-Icing',
                text: 'Ice management that keeps surfaces safe for family, customers and staff.',
                icon: 'shield'
            },
            {
                title: 'Seasonal Peace Of Mind',
                text: 'Simple seasonal contracts — we monitor the weather and keep you cleared all winter.',
                icon: 'calendar'
            },
            {
                title: 'Residential & Commercial',
                text: 'From single driveways to commercial lots, we keep your property accessible after every storm.',
                icon: 'truck'
            }
        ],
        process: [
            {
                title: 'Seasonal Agreement',
                text: 'We set up a simple seasonal contract covering your driveway, walkways or commercial lot.'
            },
            {
                title: 'Site Plan',
                text: 'We note where to clear, where to pile snow and any priority areas before the first storm.'
            },
            {
                title: 'Forecast Monitoring',
                text: 'We watch the forecast so you don’t have to — you’re on our route when snow is coming.'
            },
            {
                title: 'Prompt Clearing',
                text: 'After each snowfall we clear driveways and walkways promptly so you stay safe and accessible.'
            },
            {
                title: 'Salting & De-Icing',
                text: 'We treat surfaces to manage ice and keep everyone steady underfoot.'
            },
            {
                title: 'All-Winter Coverage',
                text: 'We keep it up storm after storm, right through the season.'
            }
        ],
        subservices: [
            'Residential Snow Removal',
            'Commercial Snow Removal',
            'Driveway & Walkway Clearing',
            'Salting & De-Icing',
            'Seasonal Contracts'
        ],
        image: '/images/snow-removal.webp',
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
