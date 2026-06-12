import Reveal from '@/components/site/reveal';

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    tone?: 'light' | 'dark';
};

const SectionHeading = ({ eyebrow, title, description, align = 'center', tone = 'light' }: SectionHeadingProps) => {
    const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
    const eyebrowColor = tone === 'light' ? 'text-moss' : 'text-beige';
    const titleColor = tone === 'light' ? 'text-forest' : 'text-cream';
    const descriptionColor = tone === 'light' ? 'text-ink/70' : 'text-cream/75';

    return (
        <Reveal className={`max-w-3xl ${alignment}`}>
            <p className={`mb-5 text-xs font-medium tracking-[0.35em] uppercase ${eyebrowColor}`}>{eyebrow}</p>
            <h2 className={`font-display text-3xl leading-snug sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-6 text-base leading-relaxed font-light sm:text-lg ${descriptionColor}`}>
                    {description}
                </p>
            )}
        </Reveal>
    );
};

export default SectionHeading;
