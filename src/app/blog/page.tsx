import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/site/page-hero';
import Reveal from '@/components/site/reveal';
import { BLOG_POSTS } from '@/lib/blog';

import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Landscaping Tips & Ideas | Jayden's Landscaping",
    description:
        'Practical landscaping tips, seasonal advice and design ideas for homeowners across the Greater Toronto Area.'
};

const BlogPage = () => {
    const [featured, ...rest] = BLOG_POSTS;

    return (
        <>
            <PageHero eyebrow='Blog' title='Landscaping Tips & Ideas' image='/images/softscaping.webp' video={false} />

            <section className='relative overflow-hidden bg-[#F1E9D6] px-6 py-20 lg:px-10 lg:py-28'>
                <Image
                    src='/images/BGbeige.webp'
                    alt=''
                    aria-hidden
                    fill
                    sizes='100vw'
                    className='pointer-events-none object-cover opacity-[0.03]'
                />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <Reveal blur className='max-w-2xl'>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>From The Team</p>
                        <h2 className='font-display text-forest mt-3 text-3xl leading-tight sm:text-4xl'>
                            Advice, Ideas & Seasonal Know-How
                        </h2>
                        <p className='text-ink/70 mt-5 text-base leading-relaxed font-light'>
                            Practical guidance from a decade of building and caring for landscapes across the GTA.
                        </p>
                    </Reveal>

                    {/* Featured post */}
                    {featured && (
                        <Reveal blur className='mt-14'>
                            <Link
                                href={`/blog/${featured.slug}`}
                                className='group grid items-center gap-8 lg:grid-cols-2 lg:gap-14'>
                                <div className='relative aspect-[4/3] overflow-hidden'>
                                    <Image
                                        src={featured.image}
                                        alt={featured.title}
                                        fill
                                        priority
                                        sizes='(max-width: 1024px) 100vw, 50vw'
                                        className='object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'
                                    />
                                </div>
                                <div>
                                    <p className='text-moss text-[11px] font-medium tracking-[0.25em] uppercase'>
                                        Featured · {featured.date} · {featured.readTime}
                                    </p>
                                    <h3 className='font-display text-forest group-hover:text-moss mt-3 text-2xl leading-snug transition-colors sm:text-3xl lg:text-4xl'>
                                        {featured.title}
                                    </h3>
                                    <p className='text-ink/70 mt-5 text-base leading-relaxed font-light'>
                                        {featured.excerpt}
                                    </p>
                                    <span className='text-moss group-hover:text-forest mt-6 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors'>
                                        Read Article
                                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    )}

                    {/* Remaining posts */}
                    {rest.length > 0 && (
                        <div className='border-forest/15 mt-16 grid gap-x-8 gap-y-14 border-t pt-16 sm:grid-cols-2 lg:grid-cols-3'>
                            {rest.map((post, index) => (
                                <Reveal key={post.slug} blur delay={(index % 3) * 0.1}>
                                    <Link href={`/blog/${post.slug}`} className='group block'>
                                        <div className='relative aspect-[4/3] overflow-hidden'>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                                className='object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'
                                            />
                                        </div>
                                        <p className='text-moss mt-5 text-[11px] tracking-[0.2em] uppercase'>
                                            {post.date} · {post.readTime}
                                        </p>
                                        <h3 className='font-display text-forest group-hover:text-moss mt-2 text-xl leading-snug transition-colors'>
                                            {post.title}
                                        </h3>
                                        <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{post.excerpt}</p>
                                        <span className='text-moss group-hover:text-forest mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors'>
                                            Read More
                                            <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                        </span>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlogPage;
