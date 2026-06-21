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
    // A second image rendered inside the article body (after the opening section).
    inlineImage?: string;
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
        image: '/images/plants/tree-16.webp',
        inlineImage: '/images/snow/snow-01.webp',
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
        image: '/images/plants/tree-01.webp',
        inlineImage: '/images/plants/tree-10.webp',
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
        image: '/images/plants/tree-08.webp',
        inlineImage: '/images/renders/design-03.webp',
        content: [
            {
                paragraphs: [
                    'A successful landscape starts long before the first shovel hits the ground. Understanding the process helps you plan with confidence — here’s how we take a project from idea to reality.'
                ]
            },
            {
                heading: 'It Begins With a Conversation',
                paragraphs: [
                    'We walk your property, listen to how you want to use the space, and talk through style, priorities and budget. The more we understand about how you actually live outdoors, the better the design fits your life.'
                ]
            },
            {
                heading: 'See It Before You Build It',
                paragraphs: [
                    'We translate your goals into a layout and bring it to life with 3D illustrations, so you can experience your new space and refine materials, colours and details on screen — not in the ground, where changes get expensive.'
                ]
            },
            {
                heading: 'One Team, Start to Finish',
                paragraphs: [
                    'Because our designers and build crews are one team, the plan you fall in love with is the plan we actually build. Nothing gets lost in translation between the drawing and the driveway.'
                ]
            }
        ]
    },
    {
        slug: 'interlocking-vs-concrete-vs-asphalt',
        title: 'Interlocking vs Concrete vs Asphalt: Which Driveway Wins?',
        excerpt: 'Three very different surfaces, three very different lifespans. Here’s how they really compare in our climate.',
        date: 'March 2026',
        readTime: '5 min read',
        image: '/images/projects/64-05.webp',
        inlineImage: '/images/projects/richmondhill-04.webp',
        content: [
            {
                paragraphs: [
                    'Your driveway is one of the largest, most visible surfaces on your property — and the material you choose affects its look, its lifespan and its resale value. Here’s an honest comparison of the three most common options for GTA homes.'
                ]
            },
            {
                heading: 'How They Handle Freeze-Thaw',
                paragraphs: [
                    'Poured concrete and asphalt are solid slabs, so when the ground heaves and settles through our freeze-thaw winters, they crack. Interlocking pavers are individual units laid on a flexible base — they move with the ground instead of fighting it, which is why a well-built paver driveway stays intact for decades.'
                ]
            },
            {
                heading: 'Repairs and Maintenance',
                paragraphs: [
                    'A cracked or stained concrete slab usually means resurfacing the whole thing. With interlocking, a damaged paver can be lifted and replaced in minutes, with no patchwork scar left behind. Asphalt is the cheapest up front but needs regular resealing and has the shortest lifespan of the three.'
                ]
            },
            {
                heading: 'The Bottom Line',
                paragraphs: [
                    'Interlocking costs more than asphalt at installation, but its longevity, repairability and curb appeal make it the better long-term value — and the option buyers and appraisers notice. For most homeowners planning to stay, it pays for itself over time.'
                ]
            }
        ]
    },
    {
        slug: 'caring-for-your-interlocking-driveway',
        title: 'How to Care for Your Interlocking Driveway',
        excerpt: 'Interlocking is built to last — and a little simple upkeep keeps it looking new for years longer.',
        date: 'February 2026',
        readTime: '4 min read',
        image: '/images/projects/richmondhill-01.webp',
        inlineImage: '/images/projects/briji-06.webp',
        content: [
            {
                paragraphs: [
                    'One of the best things about interlocking is how little maintenance it needs. But a few simple habits will keep your driveway, walkways and patio looking sharp — and protect the investment underneath.'
                ]
            },
            {
                heading: 'Keep the Joints Full',
                paragraphs: [
                    'The polymeric sand swept into the joints is what locks pavers together and keeps weeds and ants out. Over the years it can wash out in spots — topping it up every few seasons keeps the surface tight, stable and clean.'
                ]
            },
            {
                heading: 'Clean Gently',
                paragraphs: [
                    'A rinse and the occasional sweep handle most of it. For stains, a mild cleaner and a stiff brush are kinder than an aggressive pressure wash, which can blast out jointing sand. Sealing every few years adds stain resistance and deepens the colour.'
                ]
            },
            {
                heading: 'Mind the Salt',
                paragraphs: [
                    'In winter, reach for sand or a paver-safe ice melt rather than harsh rock salt, which can pit and discolour stone over time. It’s a small swap that keeps your hardscaping looking its best through every season.'
                ]
            }
        ]
    },
    {
        slug: 'designing-a-backyard-for-entertaining',
        title: 'Designing a Backyard Built for Entertaining',
        excerpt: 'A great entertaining yard isn’t about one big feature — it’s about how the whole space flows.',
        date: 'January 2026',
        readTime: '5 min read',
        image: '/images/backyards/backyard-05.webp',
        inlineImage: '/images/projects/woolbridge-04.webp',
        content: [
            {
                paragraphs: [
                    'The best backyards for hosting feel effortless — guests move naturally from one space to the next, and there’s a spot for every kind of gathering. Here’s how we design yards that work as hard as they look good.'
                ]
            },
            {
                heading: 'Think in Zones',
                paragraphs: [
                    'A dining area near the kitchen, a lounge around a fire feature, a quiet corner away from the noise — defining distinct zones makes even a modest yard feel generous, and gives a crowd room to spread out comfortably.'
                ]
            },
            {
                heading: 'Build in Comfort',
                paragraphs: [
                    'Shade from a pergola, soft landscape lighting for the evening, and durable surfaces that handle foot traffic all make a space people actually want to linger in. The details are what turn a patio into a destination.'
                ]
            },
            {
                heading: 'Let It Flow',
                paragraphs: [
                    'Wide, clear pathways and consistent materials tie the zones together so the whole yard reads as one cohesive space — not a collection of add-ons. That sense of flow is what makes entertaining feel easy.'
                ]
            }
        ]
    },
    {
        slug: 'pool-landscaping-ideas-gta',
        title: 'Pool Landscaping Ideas for a GTA Backyard',
        excerpt: 'A pool is only as good as the landscape around it. Here’s how to make yours a true backyard retreat.',
        date: 'December 2025',
        readTime: '5 min read',
        image: '/images/projects/newmarket-01.webp',
        inlineImage: '/images/projects/woolbridge-02.webp',
        content: [
            {
                paragraphs: [
                    'A pool is a showpiece — but it’s the surround that turns it into a resort-style retreat. Thoughtful landscaping makes a pool safer, more private and far more beautiful. Here are the ideas we come back to again and again.'
                ]
            },
            {
                heading: 'Choose the Right Surround',
                paragraphs: [
                    'The decking around a pool has to look incredible and stay cool, slip-resistant and durable underfoot. Natural stone and quality pavers deliver on all counts, and let us shape generous lounging areas with clean, custom borders.'
                ]
            },
            {
                heading: 'Layer in Privacy and Shade',
                paragraphs: [
                    'Evergreen planting, cedar fencing and a pergola or cabana create a sense of seclusion and give you relief from the midday sun — the difference between a pool you use occasionally and one you live in all summer.'
                ]
            },
            {
                heading: 'Don’t Forget the Evenings',
                paragraphs: [
                    'Soft landscape lighting along paths, steps and planting beds extends the day and makes the whole space feel magical after dark — while keeping it safe to move around once the sun goes down.'
                ]
            }
        ]
    },
    {
        slug: 'benefits-of-a-cedar-pergola',
        title: 'Why a Cedar Pergola Is Worth It',
        excerpt: 'Shade, structure and instant character — a pergola does more for a yard than almost any single feature.',
        date: 'November 2025',
        readTime: '4 min read',
        image: '/images/projects/scarborough-03.webp',
        inlineImage: '/images/services/outdoor-structures.webp',
        content: [
            {
                paragraphs: [
                    'If there’s one feature that transforms a flat, open patio into an outdoor room, it’s a pergola. Here’s why cedar is our material of choice — and what a well-built pergola adds to a backyard.'
                ]
            },
            {
                heading: 'Shade Without Walls',
                paragraphs: [
                    'A pergola filters harsh sun while keeping a space open and airy, making your patio usable through the hottest part of the day. Add a canopy or climbing planting and you can dial in exactly how much shade you want.'
                ]
            },
            {
                heading: 'Built to Weather Our Climate',
                paragraphs: [
                    'Cedar is naturally resistant to rot and insects, and it handles Ontario’s temperature swings beautifully. Left to age, it weathers to an elegant silver-grey; sealed, it holds its warm honey tone for years.'
                ]
            },
            {
                heading: 'Instant Architecture',
                paragraphs: [
                    'Beyond the practical, a pergola gives a yard structure and a focal point — a place for the eye to land and for furniture to gather around. It’s one of the most rewarding upgrades you can make to an outdoor space.'
                ]
            }
        ]
    },
    {
        slug: 'retaining-walls-function-and-beauty',
        title: 'Retaining Walls: Where Function Meets Beauty',
        excerpt: 'More than a way to hold back soil — a well-designed retaining wall shapes the whole landscape.',
        date: 'October 2025',
        readTime: '4 min read',
        image: '/images/backyards/backyard-03.webp',
        inlineImage: '/images/projects/oakville-04.webp',
        content: [
            {
                paragraphs: [
                    'Retaining walls solve real problems — but the best ones don’t look like problem-solvers at all. They turn awkward slopes into usable, beautiful space. Here’s what they bring to a property.'
                ]
            },
            {
                heading: 'Tame a Sloped Yard',
                paragraphs: [
                    'A grade that’s too steep to use becomes a series of level terraces — for a patio, a lawn, a garden or all three. Retaining walls are what make a difficult lot livable, carving usable rooms out of a hillside.'
                ]
            },
            {
                heading: 'Control Water and Erosion',
                paragraphs: [
                    'Done right, a retaining wall manages how water moves across your property, protecting your landscape — and your foundation — from erosion and pooling. The engineering behind the wall matters as much as the stone in front of it.'
                ]
            },
            {
                heading: 'A Design Feature in Their Own Right',
                paragraphs: [
                    'In natural stone, gabion or interlocking block, a retaining wall adds texture, height and definition to a landscape. Integrated with planting, lighting and seating, it becomes one of the most striking elements in the yard.'
                ]
            }
        ]
    },
    {
        slug: 'low-maintenance-landscaping-ideas',
        title: 'Low-Maintenance Landscaping That Still Looks High-End',
        excerpt: 'You don’t have to choose between a beautiful yard and your weekends. Here’s how to have both.',
        date: 'September 2025',
        readTime: '5 min read',
        image: '/images/plants/tree-04.webp',
        inlineImage: '/images/plants/tree-17.webp',
        content: [
            {
                paragraphs: [
                    'A polished landscape doesn’t have to mean endless upkeep. With the right choices, you can have a yard that looks designed and cared-for while asking very little of you. Here’s where we start.'
                ]
            },
            {
                heading: 'Let Hardscaping Do the Work',
                paragraphs: [
                    'Patios, walkways and stone features look sharp year-round with almost no maintenance. Increasing the proportion of well-designed hardscape to lawn is the single most effective way to cut down on weekly work.'
                ]
            },
            {
                heading: 'Plant Smart',
                paragraphs: [
                    'Native and drought-tolerant species, generous mulch and densely planted beds that crowd out weeds all reduce watering and fussing. Choose plants suited to each spot and they’ll thrive with minimal intervention.'
                ]
            },
            {
                heading: 'Design Out the Chores',
                paragraphs: [
                    'Clean edging, mowing strips and irrigation built into the design eliminate the little jobs before they start. A bit of thought up front buys you years of easier seasons.'
                ]
            }
        ]
    },
    {
        slug: 'best-time-to-start-landscaping-project',
        title: 'When Is the Best Time to Start a Landscaping Project?',
        excerpt: 'The honest answer surprises most people — and it’s probably earlier than you think.',
        date: 'August 2025',
        readTime: '4 min read',
        image: '/images/projects/markham-02.webp',
        inlineImage: '/images/renders/design-07.webp',
        content: [
            {
                paragraphs: [
                    'Homeowners often assume spring is the only time to begin a landscaping project. In reality, the best time to start is well before you want the work done — and good crews book up fast.'
                ]
            },
            {
                heading: 'Design in the Off-Season',
                paragraphs: [
                    'Fall and winter are ideal for design and planning. With no rush, we can refine the layout, finalise materials and have your project ready to build the moment conditions allow — instead of joining a spring queue.'
                ]
            },
            {
                heading: 'Build Across Three Seasons',
                paragraphs: [
                    'Most hardscaping can be installed from spring right through late fall, and the shoulder seasons are often quieter and easier to schedule. Planting has its own ideal windows in spring and fall, which we plan around.'
                ]
            },
            {
                heading: 'Plan Ahead, Stress Less',
                paragraphs: [
                    'The earlier you start the conversation, the more flexibility you have — on timing, on materials and on getting onto the calendar. If you’re thinking about next year, now is the right time to talk.'
                ]
            }
        ]
    },
    {
        slug: 'landscaping-and-home-value',
        title: 'How Professional Landscaping Adds to Your Home’s Value',
        excerpt: 'Curb appeal isn’t just a nice-to-have — it’s one of the highest-return improvements you can make.',
        date: 'July 2025',
        readTime: '5 min read',
        image: '/images/services/hardscaping.webp',
        inlineImage: '/images/services/softscaping.webp',
        content: [
            {
                paragraphs: [
                    'When people think about adding value to a home, they picture kitchens and bathrooms. But professional landscaping is one of the most reliable returns on investment a homeowner can make — and it starts working the moment a buyer pulls up.'
                ]
            },
            {
                heading: 'First Impressions Are Everything',
                paragraphs: [
                    'A buyer forms an opinion of your home before they ever walk through the door. A well-designed front yard — clean interlocking, healthy planting, considered lighting — sets the tone for everything that follows.'
                ]
            },
            {
                heading: 'Usable Outdoor Living',
                paragraphs: [
                    'A backyard that functions as genuine living space effectively adds square footage. Patios, pergolas and outdoor kitchens are exactly the features today’s buyers are looking for, and they command a premium.'
                ]
            },
            {
                heading: 'Built to Last',
                paragraphs: [
                    'Quality, professionally installed landscaping doesn’t just look good on listing day — it holds up. Durable materials and proper construction mean the value you add stays added, year after year.'
                ]
            }
        ]
    },
    {
        slug: 'spring-landscape-cleanup-checklist',
        title: 'Your Spring Landscape Cleanup Checklist',
        excerpt: 'A little work as the snow melts sets your whole property up to look its best all season.',
        date: 'June 2025',
        readTime: '4 min read',
        image: '/images/plants/tree-09.webp',
        inlineImage: '/images/backyards/backyard-07.webp',
        content: [
            {
                paragraphs: [
                    'After a long Ontario winter, your landscape needs a reset before it can hit its stride. A thorough spring cleanup clears away the damage of the cold months and gives everything a healthy start — here’s what we focus on.'
                ]
            },
            {
                heading: 'Clear and Assess',
                paragraphs: [
                    'We start by removing fallen leaves, branches and winter debris, then look closely for what the season left behind — heaved interlocking, salt-burned edges, or shrubs that need cutting back. Catching these early keeps small problems small.'
                ]
            },
            {
                heading: 'Refresh the Beds',
                paragraphs: [
                    'Cutting back perennials, edging the beds and topping up mulch instantly sharpens a property’s appearance — and the fresh mulch protects roots and locks in moisture for the warmer months ahead.'
                ]
            },
            {
                heading: 'Wake Up the Lawn',
                paragraphs: [
                    'A spring cleanup, aeration and overseeding sets your turf up to come in thick and green. Get it right early and the lawn is far easier to keep looking sharp through the summer.'
                ]
            }
        ]
    },
    {
        slug: 'landscape-lighting-ideas',
        title: 'Landscape Lighting Ideas That Transform a Yard After Dark',
        excerpt: 'The right lighting doubles the hours you can enjoy your yard — and makes it safer and more striking.',
        date: 'May 2025',
        readTime: '4 min read',
        image: '/images/backyards/backyard-06.webp',
        inlineImage: '/images/projects/markham.webp',
        content: [
            {
                paragraphs: [
                    'A landscape you only enjoy in daylight is a landscape you’re only half using. Thoughtful lighting extends the evening, highlights your property’s best features and keeps everyone safe moving around after dark.'
                ]
            },
            {
                heading: 'Light the Path',
                paragraphs: [
                    'Soft lighting along walkways, steps and driveways is the foundation — it makes the property safe to navigate and draws the eye through the space. Done well, you notice the glow, not the fixtures.'
                ]
            },
            {
                heading: 'Highlight the Features',
                paragraphs: [
                    'Up-lighting a specimen tree, grazing a stone wall or washing the front of the house turns ordinary features into focal points. A little drama in the right places makes the whole property feel intentional.'
                ]
            },
            {
                heading: 'Set the Mood',
                paragraphs: [
                    'Warm light around a patio, pergola or water feature makes an outdoor room genuinely usable at night. We plan lighting as part of the design, so it feels built-in rather than added on.'
                ]
            }
        ]
    },
    {
        slug: 'choosing-the-right-pavers',
        title: 'How to Choose the Right Pavers for Your Project',
        excerpt: 'Colour, texture, pattern and size all matter — here’s how to pick pavers you’ll still love in ten years.',
        date: 'April 2025',
        readTime: '5 min read',
        image: '/images/projects/richmondhill-02.webp',
        inlineImage: '/images/projects/scarborough-07.webp',
        content: [
            {
                paragraphs: [
                    'Pavers are the foundation of most hardscaping, and with endless options it’s easy to feel overwhelmed. The good news: a few simple principles narrow the field fast and lead to a result that feels timeless.'
                ]
            },
            {
                heading: 'Start With Your Home',
                paragraphs: [
                    'The best paver choices complement your home’s architecture and colour rather than competing with it. We pull tones from the brick, stone or trim so the new hardscaping looks like it always belonged.'
                ]
            },
            {
                heading: 'Pattern and Scale',
                paragraphs: [
                    'Larger-format pavers feel modern and calm; smaller units and intricate patterns feel traditional and detailed. The right scale depends on the size of the space — and it’s far easier to judge on a 3D design than in a showroom.'
                ]
            },
            {
                heading: 'Think Long Term',
                paragraphs: [
                    'Trends come and go, so we steer clients toward tones and textures that age gracefully. A quality paver in a timeless colour outlasts fashion and keeps your property looking current for decades.'
                ]
            }
        ]
    },
    {
        slug: 'drainage-and-grading-explained',
        title: 'Drainage & Grading: The Invisible Work That Protects Your Yard',
        excerpt: 'The most important part of a landscape is often the part you never see — how it moves water.',
        date: 'March 2025',
        readTime: '5 min read',
        image: '/images/projects/64-04.webp',
        inlineImage: '/images/backyards/backyard-10.webp',
        content: [
            {
                paragraphs: [
                    'A beautiful patio or driveway is only as good as the grading beneath it. Water is the single biggest threat to a landscape — and managing it properly is what separates work that lasts from work that fails.'
                ]
            },
            {
                heading: 'Why Grading Comes First',
                paragraphs: [
                    'Before any stone is laid, we make sure the ground slopes water away from your home and across the property the way it should. Get this wrong and you risk pooling, ice, settling — and water finding its way toward your foundation.'
                ]
            },
            {
                heading: 'Managing Snowmelt and Storms',
                paragraphs: [
                    'Ontario’s freeze-thaw cycles and heavy spring runoff put real demands on a landscape. We plan for where snow gets piled and where meltwater goes, so your hardscaping stays stable season after season.'
                ]
            },
            {
                heading: 'Built In, Not Bolted On',
                paragraphs: [
                    'Drainage solutions work best when they’re designed in from the start — discreetly integrated into the layout rather than added later as an afterthought. It’s unglamorous work, but it’s what keeps everything above it looking perfect.'
                ]
            }
        ]
    },
    {
        slug: 'why-mulch-matters',
        title: 'Mulch Matters: A Small Detail With a Big Payoff',
        excerpt: 'It’s the least glamorous part of a garden and one of the most important — here’s why.',
        date: 'February 2025',
        readTime: '4 min read',
        image: '/images/plants/tree-05.webp',
        inlineImage: '/images/plants/tree-02.webp',
        content: [
            {
                paragraphs: [
                    'Fresh mulch is the finishing touch that makes a garden look cared-for — but its real value is everything it does beneath the surface. A good mulch layer is one of the cheapest, most effective things you can do for your planting.'
                ]
            },
            {
                heading: 'Healthier Soil and Plants',
                paragraphs: [
                    'Mulch locks moisture into the soil, moderates temperature swings and breaks down to feed your plants over time. Beds that are properly mulched need less watering and bounce back faster from heat and cold.'
                ]
            },
            {
                heading: 'Fewer Weeds, Less Work',
                paragraphs: [
                    'A solid mulch layer smothers most weeds before they start, which means far less maintenance through the season. It’s one of the simplest ways to keep a garden low-effort without sacrificing how it looks.'
                ]
            },
            {
                heading: 'The Finishing Touch',
                paragraphs: [
                    'Beyond the practical benefits, fresh mulch gives beds a crisp, unified backdrop that makes your planting pop. A spring top-up is the fastest way to make an established garden look brand new again.'
                ]
            }
        ]
    },
    {
        slug: 'designing-an-outdoor-kitchen',
        title: 'Designing an Outdoor Kitchen for GTA Summers',
        excerpt: 'Done right, an outdoor kitchen becomes the heart of the backyard — here’s how to plan one that works.',
        date: 'January 2025',
        readTime: '5 min read',
        image: '/images/projects/woolbridge-04.webp',
        inlineImage: '/images/projects/oakville-02.webp',
        content: [
            {
                paragraphs: [
                    'There’s a reason outdoor kitchens top so many backyard wish lists. They turn cooking into part of the gathering instead of something that pulls the host indoors — but the good ones are carefully planned, not just a grill on a patio.'
                ]
            },
            {
                heading: 'Plan Around the Cook',
                paragraphs: [
                    'A great outdoor kitchen keeps prep, cooking and serving within easy reach, with counter space where you actually need it. We design the layout around how you’ll really use it, so hosting feels effortless.'
                ]
            },
            {
                heading: 'Build for the Climate',
                paragraphs: [
                    'Materials have to handle sun, rain and freeze-thaw without looking tired in a couple of seasons. Durable stone, quality counters and proper drainage keep the space looking sharp for years.'
                ]
            },
            {
                heading: 'Connect It to the Yard',
                paragraphs: [
                    'The best outdoor kitchens flow naturally into a dining and lounge area, with shade and lighting that make the whole zone usable from afternoon into the evening. Designed as one space, it becomes the backyard’s natural gathering point.'
                ]
            }
        ]
    },
    {
        slug: 'fencing-and-privacy-ideas',
        title: 'Fencing & Privacy: Defining Your Backyard Retreat',
        excerpt: 'A little privacy is what turns a backyard into a retreat — and there’s more than one way to create it.',
        date: 'December 2024',
        readTime: '4 min read',
        image: '/images/projects/scarborough-03.webp',
        inlineImage: '/images/projects/woolbridge-06.webp',
        content: [
            {
                paragraphs: [
                    'The most beautiful backyard still doesn’t feel relaxing if you’re overlooked. Creating a sense of privacy is one of the most transformative things you can do for an outdoor space — and it doesn’t have to mean a tall wall of fence.'
                ]
            },
            {
                heading: 'Fencing Done Well',
                paragraphs: [
                    'A quality fence defines the space, adds security and sets the backdrop for everything else. Cedar weathers beautifully and suits our climate, and the right design frames the yard rather than boxing it in.'
                ]
            },
            {
                heading: 'Soften With Planting',
                paragraphs: [
                    'Layered evergreens, ornamental grasses and trees create privacy that feels natural and changes through the seasons. Combined with fencing, planting screens sightlines while keeping the space green and alive.'
                ]
            },
            {
                heading: 'Structures and Screens',
                paragraphs: [
                    'A pergola, privacy screen or strategically placed structure can carve out a secluded corner exactly where you want it. We plan privacy as part of the design, so it feels intentional rather than defensive.'
                ]
            }
        ]
    }
];
