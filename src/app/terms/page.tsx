import type { Metadata } from 'next';

import LegalLayout from '@/components/site/legal-layout';

export const metadata: Metadata = {
    title: "Terms & Conditions | Jayden's Landscaping",
    description: "The terms that govern the use of Jayden's Landscaping's website and services."
};

const TermsPage = () => {
    return (
        <LegalLayout title='Terms & Conditions' updated='June 2026'>
            <p>
                These terms govern your use of the Jayden&apos;s Landscaping website and the services we provide. By
                using our website or engaging our services, you agree to these terms.
            </p>

            <h2>Estimates & Proposals</h2>
            <p>
                Estimates are provided in good faith and are not binding until confirmed in a written proposal or
                contract. The scope, materials, timeline and price of your project will be set out in that proposal.
                Conditions discovered during work that could not reasonably be foreseen may affect scope and cost, and
                will be discussed with you before proceeding.
            </p>

            <h2>Payments</h2>
            <p>
                Payment terms, including any deposit and schedule, are specified in your proposal. Deposits secure your
                place in our schedule and may be non-refundable once materials are ordered or work has begun.
            </p>

            <h2>Workmanship & Materials</h2>
            <p>
                We stand behind our workmanship. Any warranty on installed work is described in your proposal. Plant
                material, natural stone and other living or natural products are subject to the manufacturer&apos;s or
                grower&apos;s terms and to proper ongoing care, which is the client&apos;s responsibility unless a
                maintenance agreement is in place.
            </p>

            <h2>Scheduling & Weather</h2>
            <p>
                Landscaping work is weather dependent. We will make reasonable efforts to keep to agreed timelines, but
                schedules may shift due to weather, ground conditions or material availability.
            </p>

            <h2>Cancellations</h2>
            <p>
                If you need to cancel or reschedule, please give us as much notice as possible. Costs already incurred,
                including ordered materials and mobilisation, may be charged.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
                To the extent permitted by law, our liability is limited to the value of the services provided. We are
                not liable for indirect or consequential losses.
            </p>

            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of the Province of Ontario, Canada.</p>

            <h2>Contact Us</h2>
            <p>
                Questions about these terms? Contact us at{' '}
                <a href='mailto:jaydenlandscaping@yahoo.com'>jaydenlandscaping@yahoo.com</a> or{' '}
                <a href='tel:+16476214219'>+1 647-621-4219</a>.
            </p>
        </LegalLayout>
    );
};

export default TermsPage;
