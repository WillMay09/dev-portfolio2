import Posts from '@/components/posts'
import PostsWithSearch from '@/components/posts-with-search'
import { getPostBySlug, getPosts } from '@/lib/posts'
import React from 'react'

export default async function PostsPage(){
    const posts = await getPosts()
    
    
    
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-3xl'>
                <h1 className='title mb-12'>Posts</h1>
                
            <PostsWithSearch posts={posts} />
            </div>
        </section>
    )

}

// get posts