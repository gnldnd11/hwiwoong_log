export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
  readingTime?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readingTime?: string
}

export interface PostCardProps {
  post: BlogPostMeta
}

export interface HeaderProps {
  title?: string
  description?: string
}

export interface FooterProps {
  className?: string
}

export interface MDXRendererProps {
  content: string
  className?: string
} 