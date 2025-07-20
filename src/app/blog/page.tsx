import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
          개발 로그
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          개발 과정에서 배운 것들과 새로운 기술에 대한 학습 내용을 기록합니다. 
          개인적인 경험과 인사이트를 공유하여 함께 성장하고자 합니다.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            아직 작성된 포스트가 없습니다
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            곧 새로운 개발 경험과 학습 내용을 공유할 예정입니다.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center p-8 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">더 많은 내용을 보고 싶으신가요?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          프로젝트 경험이나 기술적 인사이트에 대해 더 자세히 알아보세요!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  )
} 