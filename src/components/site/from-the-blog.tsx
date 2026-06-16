import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';
import { BLOG_POSTS } from '@/lib/blog';

import { ArrowUpRight } from 'lucide-react';

const FromTheBlog = () => {
    const posts = BLOG_POSTS.slice(0, 3);

    return (
        <section className='bg-cream px-6 py-24 lg:px-10 lg:py-28'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex items-end justify-between gap-6'>
                    <div>
                        <p className='text-moss text-[11px] font-medium tracking-[0.35em] uppercase'>Journal</p>
                        <h2 className='font-display text-forest mt-3 text-3xl leading-tight lg:text-4xl'>
                            Landscaping Tips
                        </h2>
                    </div>
                    <Link
                        href='/blog'
                        className='text-forest hover:text-moss group relative inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'>
                        Read The Journal
                        <ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.5} />
                    </Link>
                </div>

                <div className='mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
                    {posts.map((post, index) => (
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
                                <h3 className='font-display text-forest group-hover:text-moss mt-2 text-xl leading-snug transition-colors'>
                                    {post.title}
                                </h3>
                                <p className='text-ink/65 mt-2 text-sm leading-relaxed'>{post.excerpt}</p>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FromTheBlog;
