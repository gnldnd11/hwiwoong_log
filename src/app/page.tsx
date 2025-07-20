import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export default function Home() {
  const posts = getPosts().slice(0, 3) // 최신 3개 포스트만 표시

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mb-8">
          <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center mb-6">
            <span className="text-4xl font-bold text-white">H</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
            안녕하세요, 휘웅입니다 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            프론트엔드 개발자로서 사용자 경험을 중시하는 웹 애플리케이션을 개발합니다
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
              React
            </span>
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
              TypeScript
            </span>
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
              Node.js
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
            >
              About Me
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

      {/* Quick Stats */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">년 개발 경력</div>
        </div>
        <div className="text-center p-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">완료 프로젝트</div>
        </div>
        <div className="text-center p-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">기술 스택</div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">최신 개발 로그</h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            모두 보기 →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <Link href={`/posts/${post.slug}`} className="block">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {post.description}
                </p>
              </Link>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center p-8 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">함께 일하고 싶으신가요?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          새로운 프로젝트나 협업 기회에 관심이 있으시다면 언제든 연락주세요!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@hwiwoong.dev"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            이메일 보내기
          </a>
          <a
            href="https://github.com/gnldnd11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            GitHub 보기
          </a>
        </div>
      </div>
    </div>
  )
}
