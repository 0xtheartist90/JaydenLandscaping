import type { Metadata } from 'next';

import LegalLayout from '@/components/site/legal-layout';

export const metadata: Metadata = {
    title: "Licenses & Attributions | Jayden's Landscaping",
    description: 'Open-source software, fonts and media used to build this website.'
};

const LicensesPage = () => {
    return (
        <LegalLayout title='Licenses & Attributions' updated='June 2026'>
            <p>
                All site content, branding and project photography are &copy; Jayden&apos;s Landscaping unless noted
                below. This website is built with the help of the following open-source projects and resources, with
                gratitude to their creators.
            </p>

            <h2>Software</h2>
            <ul>
                <li>
                    <strong>Next.js</strong> &amp; <strong>React</strong> — MIT License
                </li>
                <li>
                    <strong>Tailwind CSS</strong> — MIT License
                </li>
                <li>
                    <strong>Framer Motion</strong> — MIT License
                </li>
                <li>
                    <strong>shadcn/ui</strong> — MIT License
                </li>
            </ul>

            <h2>Typography</h2>
            <ul>
                <li>
                    <strong>Aboreto</strong> — SIL Open Font License 1.1
                </li>
                <li>
                    <strong>Inter</strong> — SIL Open Font License 1.1
                </li>
            </ul>

            <h2>Icons</h2>
            <ul>
                <li>
                    <strong>Lucide</strong> — ISC License
                </li>
            </ul>

            <h2>Photography</h2>
            <p>
                Project, service and editorial photography is owned by Jayden&apos;s Landscaping. Any remaining
                placeholder imagery is sourced from <a href='https://unsplash.com'>Unsplash</a> under the Unsplash
                License.
            </p>

            <h2>Questions</h2>
            <p>
                For any attribution questions, contact us at{' '}
                <a href='mailto:jaydenlandscaping@yahoo.com'>jaydenlandscaping@yahoo.com</a>.
            </p>
        </LegalLayout>
    );
};

export default LicensesPage;
