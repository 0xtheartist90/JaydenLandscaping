import type { Metadata } from 'next';

import LegalLayout from '@/components/site/legal-layout';

export const metadata: Metadata = {
    title: "Accessibility Statement | Jayden's Landscaping",
    description: "Jayden's Landscaping's commitment to an accessible website for all visitors."
};

const AccessibilityPage = () => {
    return (
        <LegalLayout title='Accessibility Statement' updated='June 2026'>
            <p>
                Jayden&apos;s Landscaping is committed to making our website accessible to everyone, including people
                with disabilities, in line with the Accessibility for Ontarians with Disabilities Act (AODA) and the
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>

            <h2>What We Do</h2>
            <ul>
                <li>Use clear, readable typography and sufficient colour contrast</li>
                <li>Provide descriptive text for meaningful images</li>
                <li>Support keyboard navigation and visible focus states</li>
                <li>Respect &ldquo;reduced motion&rdquo; preferences for animations</li>
                <li>Structure pages with proper headings and semantic markup</li>
            </ul>

            <h2>Ongoing Effort</h2>
            <p>
                Accessibility is an ongoing process. We continue to review and improve the site, and some older content
                or third-party elements may not yet fully meet our standards.
            </p>

            <h2>Need Help or Found an Issue?</h2>
            <p>
                If you experience any difficulty using this website, or have suggestions to improve its accessibility,
                please let us know at <a href='mailto:jaydenlandscaping@yahoo.com'>jaydenlandscaping@yahoo.com</a> or{' '}
                <a href='tel:+16476214219'>+1 647-621-4219</a>. We will do our best to provide the information you need
                in an accessible format.
            </p>
        </LegalLayout>
    );
};

export default AccessibilityPage;
