import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce 플랫폼',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 사용자 인증, 상품 관리, 결제 시스템을 포함한 완전한 온라인 쇼핑몰',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: '실무 프로젝트',
      period: '2023.06 - 2023.12',
      github: 'https://github.com/gnldnd11/ecommerce-platform',
      demo: 'https://demo-ecommerce.hwiwoong.dev',
      featured: true
    },
    {
      id: 2,
      title: 'AI 채팅 애플리케이션',
      description: 'OpenAI API를 활용한 지능형 채팅 애플리케이션. 실시간 대화, 컨텍스트 기억, 다국어 지원 기능 제공',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
      category: '개인 프로젝트',
      period: '2023.03 - 2023.05',
      github: 'https://github.com/gnldnd11/ai-chat-app',
      demo: 'https://ai-chat.hwiwoong.dev',
      featured: true
    },
    {
      id: 3,
      title: '포트폴리오 웹사이트',
      description: '개인 포트폴리오를 위한 반응형 웹사이트. 다크 모드, SEO 최적화, 빠른 로딩 속도를 특징으로 함',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'GitHub Pages'],
      category: '개인 프로젝트',
      period: '2024.01 - 2024.01',
      github: 'https://github.com/gnldnd11/hwiwoong_log',
      demo: 'https://gnldnd11.github.io/hwiwoong_log',
      featured: false
    },
    {
      id: 4,
      title: '실시간 협업 도구',
      description: '팀 협업을 위한 실시간 문서 편집 및 공유 플랫폼. WebSocket을 활용한 실시간 동기화 기능',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
      category: '실무 프로젝트',
      period: '2022.09 - 2023.02',
      github: 'https://github.com/gnldnd11/collaboration-tool',
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: '날씨 정보 앱',
      description: 'OpenWeatherMap API를 활용한 날씨 정보 애플리케이션. 위치 기반 날씨 예보 및 알림 기능',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Expo', 'OpenWeatherMap API', 'AsyncStorage'],
      category: '개인 프로젝트',
      period: '2022.06 - 2022.08',
      github: 'https://github.com/gnldnd11/weather-app',
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: '할일 관리 앱',
      description: '개인 생산성 향상을 위한 할일 관리 애플리케이션. 카테고리 분류, 우선순위 설정, 통계 기능',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Vuex', 'LocalStorage', 'Chart.js', 'Vuetify'],
      category: '개인 프로젝트',
      period: '2022.03 - 2022.05',
      github: 'https://github.com/gnldnd11/todo-app',
      demo: 'https://todo-app.hwiwoong.dev',
      featured: false
    }
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
          프로젝트
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          다양한 기술 스택을 활용하여 개발한 프로젝트들을 소개합니다. 
          실무 프로젝트부터 개인 학습 프로젝트까지 다양한 경험을 담았습니다.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">주요 프로젝트</h2>
        <div className="grid gap-8">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white opacity-20">{project.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                      {project.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      GitHub 보기
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                      >
                        데모 보기
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Projects */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">모든 프로젝트</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white opacity-20">{project.title.charAt(0)}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    {project.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{project.period}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center p-8 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">함께 프로젝트를 진행하고 싶으신가요?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          새로운 아이디어나 협업 기회에 관심이 있으시다면 언제든 연락주세요!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            About Me
          </Link>
          <a
            href="mailto:contact@hwiwoong.dev"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            이메일 보내기
          </a>
        </div>
      </div>
    </div>
  )
} 