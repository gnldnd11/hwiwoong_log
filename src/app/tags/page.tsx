import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export default function TagsPage() {
  const posts = getPosts()
  
  // 모든 태그 수집
  const allTags = new Map<string, string[]>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!allTags.has(tag)) {
        allTags.set(tag, [])
      }
      allTags.get(tag)!.push(post.slug)
    })
  })

  const sortedTags = Array.from(allTags.entries()).sort((a, b) => b[1].length - a[1].length)

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
          태그
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          포스트를 주제별로 분류한 태그들을 확인하세요. 
          관심 있는 주제의 포스트를 쉽게 찾을 수 있습니다.
        </p>
      </div>

      {/* Tags Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">모든 태그</h2>
        {sortedTags.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedTags.map(([tag, postSlugs]) => (
              <div key={tag} className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {tag}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    {postSlugs.length}개 포스트
                  </span>
                </div>
                <div className="space-y-2">
                  {posts
                    .filter(post => postSlugs.includes(post.slug))
                    .slice(0, 3)
                    .map(post => (
                      <Link
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        className="block text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 line-clamp-1"
                      >
                        {post.title}
                      </Link>
                    ))}
                  {postSlugs.length > 3 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      +{postSlugs.length - 3}개 더 보기
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏷️</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              아직 태그가 없습니다
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              포스트를 작성하면 자동으로 태그가 생성됩니다.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
            >
              블로그 보기
            </Link>
          </div>
        )}
      </div>

      {/* Popular Tags */}
      {sortedTags.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">인기 태그</h2>
          <div className="flex flex-wrap gap-3">
            {sortedTags.slice(0, 10).map(([tag, postSlugs]) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200 dark:hover:bg-primary-800 transition-colors"
              >
                {tag}
                <span className="ml-2 inline-flex items-center rounded-full bg-primary-200 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-700 dark:text-primary-200">
                  {postSlugs.length}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center p-8 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">더 많은 내용을 보고 싶으신가요?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          특정 주제에 대한 포스트를 찾고 계신가요?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            모든 포스트 보기
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            프로젝트 보기
          </Link>
        </div>
      </div>
    </div>
  )
} 