import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
//location of posts
const rootDirectory = path.join(process.cwd(), 'content', 'Posts')

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    //reads file contents as a string
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })
    //meta data and content, separates them
    const { data, content } = matter(fileContents)
    //spreads metadata over data object, 
    //slugs comes from parameter
    console.log(process.cwd())
    console.log(rootDirectory)
    console.log(slug)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}
