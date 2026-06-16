import type { MetadataRoute } from 'next';

// Update if the production domain differs (keep in sync with sitemap.xml & metadataBase).
const BASE_URL = 'https://jaydenslandscaping.ca';

const robots = (): MetadataRoute.Robots => ({
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you']
    },
    sitemap: `${BASE_URL}/sitemap.xml`
});

export default robots;
