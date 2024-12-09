import Link from 'next/link'
import {getPosts} from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts(){
    const posts = await getPosts(1)

    return(
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent posts</h2>
                <Posts posts={posts} />
                <Link href='/posts' className='mt-8 inline-flex items-center gap-2 text-muted-foreground'>
                
                <span>All posts</span>
                </Link>
            </div>
        </section>

    )



}