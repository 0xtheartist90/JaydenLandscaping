'use client';

import type { ReactNode } from 'react';

import { useQuoteModal } from '@/components/site/quote-modal';

type QuoteButtonProps = {
    children: ReactNode;
    className?: string;
    service?: string;
    onClick?: () => void;
};

const QuoteButton = ({ children, className, service, onClick }: QuoteButtonProps) => {
    const { open } = useQuoteModal();

    return (
        <button
            type='button'
            onClick={() => {
                onClick?.();
                open(service);
            }}
            className={className}>
            {children}
        </button>
    );
};

export default QuoteButton;
