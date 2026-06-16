import type { Metadata } from 'next';

import LegalLayout from '@/components/site/legal-layout';

export const metadata: Metadata = {
    title: "Privacy Policy | Jayden's Landscaping",
    description: "How Jayden's Landscaping collects, uses and protects your personal information."
};

const PrivacyPage = () => {
    return (
        <LegalLayout title='Privacy Policy' updated='June 2026'>
            <p>
                Jayden&apos;s Landscaping (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
                privacy. This policy explains what information we collect when you visit our website or contact us, how
                we use it, and the choices you have.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
                <li>Your name, email address and phone number</li>
                <li>Your property location and details about your project</li>
                <li>Any message or information you share through our contact form, email or phone</li>
            </ul>
            <p>
                We may also collect limited technical information automatically, such as your IP address, browser type
                and pages visited, to help us understand how the site is used.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
                <li>To respond to your enquiries and provide estimates</li>
                <li>To schedule consultations and carry out work you request</li>
                <li>To communicate with you about your project</li>
                <li>To improve our website and services</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
                We do not sell your personal information. We may share it with trusted service providers who help us
                operate our business (for example, scheduling or email tools), or where required by law.
            </p>

            <h2>Data Retention</h2>
            <p>
                We keep your information only for as long as needed to provide our services and meet our legal and
                accounting obligations, after which it is securely deleted.
            </p>

            <h2>Your Choices</h2>
            <p>
                You may ask us to access, correct or delete the personal information we hold about you. To make a
                request, contact us at <a href='mailto:jaydenlandscaping@yahoo.com'>jaydenlandscaping@yahoo.com</a>.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about this policy, please reach out at{' '}
                <a href='mailto:jaydenlandscaping@yahoo.com'>jaydenlandscaping@yahoo.com</a> or{' '}
                <a href='tel:+16476214219'>+1 647-621-4219</a>.
            </p>
        </LegalLayout>
    );
};

export default PrivacyPage;
