import Link from 'next/link'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { PostCardProps } from '@/types/blog'

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
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
      
      <Link href={`/posts/${post.slug}`} className="block">
        <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
          {post.title}
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {post.description}
        </p>
      </Link>
      
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900 dark:hover:text-primary-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
      
      <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Link
          href={`/posts/${post.slug}`}
          className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          읽기 →
        </Link>
      </div>
    </article>
  )
} 