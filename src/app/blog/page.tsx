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
    return (
        <>
            <PageHero
                eyebrow='Journal'
                title='Landscaping Tips & Ideas'
                image='/images/softscaping.webp'
                video={false}
            />

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
                    <div className='grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3'>
                        {BLOG_POSTS.map((post, index) => (
                            <Reveal key={post.slug} delay={(index % 3) * 0.1}>
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
                                    <h2 className='font-display text-forest group-hover:text-moss mt-2 text-xl leading-snug transition-colors'>
                                        {post.title}
                                    </h2>
                                    <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{post.excerpt}</p>
                                    <span className='text-moss group-hover:text-forest mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors'>
                                        Read More
                                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
