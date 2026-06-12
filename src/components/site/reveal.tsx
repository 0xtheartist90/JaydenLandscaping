'use client';

import type { ReactNode } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

/**
 * Fades content in with a gentle upward drift when it scrolls into view.
 * Respects the user's reduced-motion preference.
 */
const Reveal = ({ children, delay = 0, className }: RevealProps) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}>
            {children}
        </motion.div>
    );
};

export default Reveal;
