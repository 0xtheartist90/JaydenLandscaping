import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import QuoteButton from '@/components/site/quote-button';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';

import { ArrowLeft } from 'lucide-react';

type BlogPostProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => BLOG_POSTS.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: BlogPostProps): Promise<Metadata> => {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Jayden's Landscaping`,
        description: post.excerpt,
        openGraph: { title: post.title, description: post.excerpt, type: 'article', images: [{ url: post.image }] }
    };
};

const BlogPostPage = async ({ params }: BlogPostProps) => {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <>
            {/* Hero */}
            <section className='relative flex min-h-[55svh] items-center justify-center overflow-hidden'>
                <Image src={post.image} alt={post.title} fill priority sizes='100vw' className='object-cover' />
                <div className='absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65' />
                <div className='relative z-10 mx-auto max-w-3xl px-6 pt-24 text-center'>
                    <p className='text-beige mb-5 text-[11px] font-medium tracking-[0.3em] uppercase'>
                        {post.date} · {post.readTime}
                    </p>
                    <h1 className='font-display text-cream text-3xl leading-tight sm:text-4xl lg:text-5xl'>
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Article */}
            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-16 lg:px-10 lg:py-24'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <article className='relative z-10 mx-auto max-w-3xl'>
                    {post.content.map((section) => (
                        <div key={section.heading ?? section.paragraphs[0].slice(0, 24)}>
                            {section.heading && (
                                <h2 className='font-display text-forest mt-10 mb-3 text-xl first:mt-0'>
                                    {section.heading}
                                </h2>
                            )}
                            {section.paragraphs.map((paragraph) => (
                                <p
                                    key={paragraph.slice(0, 24)}
                                    className='text-ink/75 mb-4 text-[15px] leading-relaxed font-light sm:text-base'>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}

                    <div className='border-forest/15 mt-12 flex flex-col items-start gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between'>
                        <Link
                            href='/blog'
                            className='text-moss hover:text-forest inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors'>
                            <ArrowLeft className='h-3.5 w-3.5' strokeWidth={1.5} />
                            All Articles
                        </Link>
                        <QuoteButton className='bg-forest text-cream hover:bg-moss px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300'>
                            Get A Free Quote
                        </QuoteButton>
                    </div>
                </article>
            </section>
        </>
    );
};

export default BlogPostPage;
