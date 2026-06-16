import { BLOG_POSTS } from '@/lib/blog';
import { CITIES } from '@/lib/cities';
import { SERVICE_CATEGORIES } from '@/lib/services';

// Update if the production domain differs.
const BASE_URL = 'https://jaydenslandscaping.ca';

export const GET = () => {
    const staticPaths = [
        '',
        '/about',
        '/services',
        '/service-areas',
        '/projects',
        '/blog',
        '/location',
        '/contact',
        '/sitemap',
        '/privacy',
        '/terms',
        '/accessibility',
        '/licenses'
    ];
    const servicePaths = SERVICE_CATEGORIES.map((category) => `/services/${category.slug}`);
    const cityPaths = CITIES.map((city) => `/${city.slug}`);
    const blogPaths = BLOG_POSTS.map((post) => `/blog/${post.slug}`);
    const lastmod = new Date().toISOString();

    const urls = [...staticPaths, ...servicePaths, ...cityPaths, ...blogPaths]
        .map((path) => `  <url><loc>${BASE_URL}${path}</loc><lastmod>${lastmod}</lastmod></url>`)
        .join('\n');

    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

    return new Response(body, {
        headers: { 'Content-Type': 'application/xml' }
    });
};
