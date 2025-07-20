import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXContent } from '@/lib/mdx'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy년 M월 d일', { locale: ko })}
          </time>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
          {post.title}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {post.description}
        </p>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900 dark:hover:text-primary-300"
              >
                {tag}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-code:text-gray-900 dark:prose-code:text-white prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
        <MDXContent content={post.content} />
      </div>
    </article>
  )
} 