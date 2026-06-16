import type { Metadata } from 'next';

import CityLanding from '@/components/site/city-landing';
import { getCityBySlug } from '@/lib/cities';

const city = getCityBySlug('landscaping-richmond-hill')!;

export const metadata: Metadata = {
    title: "Landscaping in Richmond Hill | Jayden's Landscaping",
    description:
        'Landscape design, interlocking driveways, planting, lawn maintenance and snow removal in Richmond Hill and across the GTA.'
};

const Page = () => <CityLanding city={city} />;

export default Page;
