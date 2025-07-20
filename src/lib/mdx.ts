import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
}

export async function MDXContent({ content }: { content: string }) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options,
  })

  return compiledContent
} 