import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
//location of posts
const rootDirectory = path.join(process.cwd(),'src', 'content', 'Posts')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
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
  
  export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
      //reads all the files from the root directory
    const files = fs.readdirSync(rootDirectory)
  
    const posts = files
      .map((file) => getProjectMetadata(file))
      //sorting based on published date
      //creates new javascript date object for comparison, uses ' '  as a fallback
      .sort((a, b) => {
        if (new Date(a.publishedAt ?? ' ') < new Date(b.publishedAt ?? '')) {
          return 1
        } else {
          return -1
        }
      })
  
      if(limit){
          return posts.slice(0, limit)
      }
  
      return posts
  }
  
  //gets the metadata of the getPosts
  export function getProjectMetadata(filepath: string): ProjectMetadata{
      //grab 
      const slug = filepath.replace(/\.mdx$/, '')
      const filePath = path.join(rootDirectory, filepath)
      const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})
      const {data} = matter(fileContent)
      return {...data, slug}
  }
  