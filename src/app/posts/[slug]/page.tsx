import { getPostBySlug } from '@/lib/posts'
import { ArrowLeft, ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

//entry point for rendering the blog posts
export default async function Post({ params }: { params: { slug: string } }) {
  //slug identifies the post
  const { slug } = params
  const post = await getPostBySlug(slug)
    //console.log(`this is the slug ${slug}`)
  //if no post is found throw an error, render 404 page
  if (!post) {
    notFound()
  }
  //grab metadata and conent from post
  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata
  return (
    // renders an post when clicked on
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>
        {/* render image */}
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
            <h1 className='title'>{title}</h1>
            <p className='mt-3 text-xs text-muted-foreground'>
                {author}/ {formatDate(publishedAt ?? '')}
            </p>
        </header>
        <main className='prose dark:prose-invert mt-16 '>
            <MDXRemote source={content} />
        </main>

      </div>
      <header></header>
    </section>
  )
}
