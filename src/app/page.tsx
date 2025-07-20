import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          최신 포스트
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          MCP, RAG, AI Engineering, Claude Code에 대한 기술적인 생각들을 공유합니다.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            아직 포스트가 없습니다
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            곧 첫 번째 포스트를 작성할 예정입니다.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
