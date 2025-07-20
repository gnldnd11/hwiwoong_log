import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hwiwoong Log - 개인 기술 블로그',
  description: 'MCP, RAG, AI Engineering, Claude Code에 대한 기술 블로그',
  keywords: ['MCP', 'RAG', 'AI Engineering', 'Claude Code', 'Cursor AI', '기술 블로그'],
  authors: [{ name: 'Hwiwoong' }],
  creator: 'Hwiwoong',
  openGraph: {
    title: 'Hwiwoong Log - 개인 기술 블로그',
    description: 'MCP, RAG, AI Engineering, Claude Code에 대한 기술 블로그',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hwiwoong Log - 개인 기술 블로그',
    description: 'MCP, RAG, AI Engineering, Claude Code에 대한 기술 블로그',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
