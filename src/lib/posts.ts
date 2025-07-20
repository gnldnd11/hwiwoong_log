import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogPostMeta } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx?$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      content,
      readingTime: calculateReadingTime(content),
    }
  } catch {
    // Try .md extension if .mdx doesn't exist
    try {
      const fullPath = path.join(postsDirectory, `${slug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        content,
        readingTime: calculateReadingTime(content),
      }
    } catch {
      return null
    }
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => {
      const post = getPostBySlug(slug)
      if (!post) return null
      
      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        description: post.description,
        tags: post.tags,
        readingTime: post.readingTime,
      }
    })
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

// getPosts는 getAllPosts의 별칭
export function getPosts(): BlogPostMeta[] {
  return getAllPosts()
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap(post => post.tags)
  return [...new Set(tags)].sort()
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
} 