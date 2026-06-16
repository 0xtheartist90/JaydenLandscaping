import type { Metadata } from 'next';

import CityLanding from '@/components/site/city-landing';
import { getCityBySlug } from '@/lib/cities';

const city = getCityBySlug('landscaping-newmarket')!;

export const metadata: Metadata = {
    title: "Landscaping in Newmarket | Jayden's Landscaping",
    description:
        'Landscape design, interlocking driveways, planting, lawn maintenance and snow removal in Newmarket and across the GTA.'
};

const Page = () => <CityLanding city={city} />;

export default Page;
