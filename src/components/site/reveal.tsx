'use client';

import type { ReactNode } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    /** Where the element drifts in from. Defaults to a gentle upward rise. */
    direction?: Direction;
    /** Travel distance in px. */
    distance?: number;
    /** Adds a soft blur-in for a more premium feel. */
    blur?: boolean;
    duration?: number;
};

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: -32 },
    right: { x: 32 },
    none: {}
};

/**
 * Fades content in with a gentle drift (and optional blur) when it scrolls into view.
 * Respects the user's reduced-motion preference. Premium ease-out curve.
 */
const Reveal = ({
    children,
    delay = 0,
    className,
    direction = 'up',
    distance,
    blur = false,
    duration = 0.85
}: RevealProps) => {
    const reduceMotion = useReducedMotion();

    const base = OFFSET[direction];
    const offset = distance !== undefined ? { x: base.x ? Math.sign(base.x) * distance : 0, y: base.y ? Math.sign(base.y) * distance : 0 } : base;

    const initial = reduceMotion
        ? false
        : { opacity: 0, ...offset, ...(blur ? { filter: 'blur(12px)' } : {}) };
    const inView = { opacity: 1, x: 0, y: 0, ...(blur ? { filter: 'blur(0px)' } : {}) };

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={inView}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
};

export default Reveal;
