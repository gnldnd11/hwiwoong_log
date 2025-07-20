import Link from 'next/link'

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Zustand'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD', 'Linux'] },
    { category: 'Tools', items: ['VS Code', 'Figma', 'Postman', 'Jest', 'Storybook', 'Webpack'] }
  ]

  const experiences = [
    {
      period: '2023 - 현재',
      company: '테크 스타트업',
      position: '프론트엔드 개발자',
      description: 'React와 TypeScript를 활용한 웹 애플리케이션 개발, 사용자 경험 개선 및 성능 최적화'
    },
    {
      period: '2022 - 2023',
      company: '웹 에이전시',
      position: '풀스택 개발자',
      description: '다양한 클라이언트의 웹사이트 및 웹 애플리케이션 개발, 프로젝트 관리 및 팀 리딩'
    },
    {
      period: '2021 - 2022',
      company: 'IT 컨설팅',
      position: '주니어 개발자',
      description: 'Java Spring과 JavaScript를 활용한 엔터프라이즈 웹 애플리케이션 개발'
    }
  ]

  const education = [
    {
      period: '2017 - 2021',
      degree: '컴퓨터공학 학사',
      school: '한국대학교',
      description: '소프트웨어 공학, 알고리즘, 데이터베이스, 웹 프로그래밍 전공'
    }
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center mb-8">
          <span className="text-5xl font-bold text-white">H</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자 휘웅입니다. 
          깔끔한 코드와 직관적인 사용자 경험을 중시하며, 새로운 기술을 배우는 것을 즐깁니다.
        </p>
      </div>

      {/* Personal Info */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">개인 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">이름</h3>
              <p className="text-gray-600 dark:text-gray-300">휘웅 (Hwiwoong)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">위치</h3>
              <p className="text-gray-600 dark:text-gray-300">서울, 대한민국</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">이메일</h3>
              <a href="mailto:contact@hwiwoong.dev" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                contact@hwiwoong.dev
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
              <a href="https://github.com/gnldnd11" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                github.com/gnldnd11
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
              <a href="https://linkedin.com/in/hwiwoong" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                linkedin.com/in/hwiwoong
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">블로그</h3>
              <Link href="/blog" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                개발 로그 보기
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">경력</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">학력</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.school}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">관심 분야</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="text-2xl mb-4">🎨</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">UI/UX 디자인</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">사용자 경험을 중시하는 인터페이스 설계</p>
          </div>
          <div className="text-center p-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="text-2xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">성능 최적화</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">빠르고 효율적인 웹 애플리케이션 개발</p>
          </div>
          <div className="text-center p-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI/ML</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">인공지능과 머신러닝 기술 활용</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">함께 일하고 싶으신가요?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          새로운 프로젝트나 협업 기회에 관심이 있으시다면 언제든 연락주세요!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            프로젝트 보기
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