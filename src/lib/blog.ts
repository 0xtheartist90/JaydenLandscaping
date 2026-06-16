export type BlogSection = {
    heading?: string;
    paragraphs: string[];
};

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    content: BlogSection[];
};

export const getPostBySlug = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);

// Most recent first.
export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'prepare-landscape-for-toronto-winter',
        title: 'How to Prepare Your Landscape for a Toronto Winter',
        excerpt: 'A few simple steps in the fall protect your interlocking, plants and lawn through the freeze-and-thaw months ahead.',
        date: 'June 2026',
        readTime: '4 min read',
        image: '/images/hardscaping.webp',
        content: [
            {
                paragraphs: [
                    'Ontario winters are hard on a landscape. The freeze-and-thaw cycle that defines our climate can heave interlocking, crack stone and damage plants that aren’t ready for it. The good news is that a little preparation in the fall goes a long way — here’s where to focus.'
                ]
            },
            {
                heading: 'Protect Your Hardscaping',
                paragraphs: [
                    'Properly built interlocking and stonework are engineered to handle our winters, but maintenance still matters. Clear debris from joints, make sure water drains away from paved surfaces, and avoid harsh de-icing salts that can pit stone — sand or a gentler ice melt is kinder to your driveway and walkways.'
                ]
            },
            {
                heading: 'Put Your Garden to Bed',
                paragraphs: [
                    'Cut back perennials, mulch garden beds to insulate roots, and wrap vulnerable shrubs and young trees against wind and road salt. A thorough fall cleanup also removes the leaves and debris that smother a lawn over winter.'
                ]
            },
            {
                heading: 'Plan Your Snow Removal',
                paragraphs: [
                    'Don’t wait for the first storm. Arranging a seasonal snow removal contract before winter means your driveway and walkways stay safe and accessible all season — without you having to watch the forecast.'
                ]
            }
        ]
    },
    {
        slug: 'choosing-trees-shrubs-gta-garden',
        title: 'Choosing the Right Trees & Shrubs for a GTA Garden',
        excerpt: 'The secret to a garden that thrives — not just survives — is matching the right plant to the right place.',
        date: 'May 2026',
        readTime: '5 min read',
        image: '/images/softscaping.webp',
        content: [
            {
                paragraphs: [
                    'A beautiful garden is more than a collection of pretty plants — it’s the right plants, in the right places, chosen to thrive in our soil and climate. Here’s how we approach planting for GTA properties.'
                ]
            },
            {
                heading: 'Know Your Conditions',
                paragraphs: [
                    'Sun, soil and hardiness zone determine what will flourish. A spot that bakes in afternoon sun needs very different planting than a shaded, moist corner. We assess your conditions first, then select species that suit them — so your garden establishes quickly and needs less fuss.'
                ]
            },
            {
                heading: 'Design for Four Seasons',
                paragraphs: [
                    'The best gardens have something to offer in every season — spring blossom, summer colour, autumn foliage and winter structure. Layering trees, shrubs and perennials with that rhythm in mind keeps your landscape interesting all year long.'
                ]
            },
            {
                heading: 'Grown Right Here',
                paragraphs: [
                    'Because we grow much of our own stock at our Markham nursery, Z Force Farm, the plants we install are fresh, locally acclimatised and ready for our conditions — which gives them the best possible start.'
                ]
            }
        ]
    },
    {
        slug: 'what-to-expect-landscape-design-process',
        title: 'What to Expect From the Landscape Design Process',
        excerpt: 'From the first walk-through to the final stone, here’s how a great outdoor space comes together.',
        date: 'April 2026',
        readTime: '4 min read',
        image: '/images/landscape-design.webp',
        content: [
            {
                paragraphs: [
                    'A successful landscape starts long before the first shovel hits the ground. Understanding the process helps you plan with confidence — here’s how we take a project from idea to reality.'
                ]
            },
            {
                heading: 'Consultation',
                paragraphs: [
                    'We walk your property with you, listen to how you want to live outdoors, and talk through budget and priorities. This is where the vision takes shape.'
                ]
            },
            {
                heading: 'Design & 3D Visualization',
                paragraphs: [
                    'Your space takes form through detailed plans and 3D illustrations, so you can see and refine your new landscape before any work begins. Material selections happen here too — no surprises once we build.'
                ]
            },
            {
                heading: 'Build & Beyond',
                paragraphs: [
                    'The same team that designed your space builds it, then plants it, and can maintain it. That continuity is why our projects look just as good in their tenth year as on handover day.'
                ]
            }
        ]
    }
];
