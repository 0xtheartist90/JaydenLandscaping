import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

import Carousel from '@/components/site/carousel';
import CtaBanner from '@/components/site/cta-banner';
import Reveal from '@/components/site/reveal';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';

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

    const related = BLOG_POSTS.filter((entry) => entry.slug !== slug).slice(0, 3);

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
                    src='/images/brand/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-3xl'>
                    {/* Back to all articles — on top */}
                    <Link
                        href='/blog'
                        className='text-moss hover:text-forest mb-12 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors'>
                        <ArrowLeft className='h-3.5 w-3.5' strokeWidth={1.5} />
                        Back To All Articles
                    </Link>

                    <article>
                        {post.content.map((section, index) => (
                            <Fragment key={section.heading ?? section.paragraphs[0].slice(0, 24)}>
                                <div>
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

                                {/* In-article image, after the opening section */}
                                {index === 0 && post.inlineImage && (
                                    <figure className='relative my-10 aspect-[16/10] overflow-hidden'>
                                        <Image
                                            src={post.inlineImage}
                                            alt={post.title}
                                            fill
                                            sizes='(max-width: 1024px) 100vw, 768px'
                                            className='object-cover'
                                        />
                                    </figure>
                                )}
                            </Fragment>
                        ))}
                    </article>
                </div>
            </section>

            {/* Related articles */}
            {related.length > 0 && (
                <section className='bg-cream px-6 py-16 lg:px-10 lg:py-28'>
                    <div className='mx-auto max-w-7xl'>
                        <Reveal blur>
                            <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Keep Reading</p>
                            <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl'>
                                Related Articles
                            </h2>
                        </Reveal>
                        <Carousel
                            className='mt-12'
                            theme='dark'
                            desktop='sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible lg:grid-cols-3'
                            dotsHide='sm:hidden'>
                            {related.map((entry) => (
                                <Link key={entry.slug} href={`/blog/${entry.slug}`} className='group block'>
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={entry.image}
                                            alt={entry.title}
                                            fill
                                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                            className='object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'
                                        />
                                    </div>
                                    <p className='text-moss mt-5 text-[11px] tracking-[0.2em] uppercase'>
                                        {entry.date} · {entry.readTime}
                                    </p>
                                    <h3 className='font-display text-forest group-hover:text-moss mt-2 text-xl leading-snug transition-colors'>
                                        {entry.title}
                                    </h3>
                                    <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{entry.excerpt}</p>
                                    <span className='text-moss group-hover:text-forest mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors'>
                                        Read More
                                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                    </span>
                                </Link>
                            ))}
                        </Carousel>
                    </div>
                </section>
            )}

            <CtaBanner />
        </>
    );
};

export default BlogPostPage;
