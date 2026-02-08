import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Trophy, BarChart3, Users, Sparkles, Compass, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const FILTER_CATEGORIES = ['全部', 'AI产品', '产品设计', '数据分析', '市场研究'] as const;
const CATEGORY_TAG_MAP: Record<string, string[]> = {
  'AI产品': ['AI产品', 'AI Agent', 'Coze', '0-1产品', 'Vibe Coding', '独立开发'],
  '产品设计': ['产品设计', '用户调研', '创新挑战'],
  '数据分析': ['数据分析', '社会网络', '可视化'],
  '市场研究': ['市场研究', '数据爬取', 'A/B测试'],
};

const projects = [
  {
    id: 1,
    title: '群面模拟器',
    subtitle: 'AI产品设计 | 0-1产品负责人',
    time: '2026.12 - 至今',
    description:
      '从非技术背景出发，洞察群面痛点，运用vibe coding工具，从零规划搭建"群面模拟器"产品框架。设计领导、总结等常见性格人设，遵循群面4阶段，实现与用户真实对话，模拟群面场景。',
    achievements: [
      '小红书单篇帖子浏览量破1000+',
      '产品内测社群吸引30+人加入',
      '运用vibe coding独立完成开发',
      'Vercel + 阿里云域名部署上线',
    ],
    tags: ['AI产品', 'Vibe Coding', 'Vercel', '独立开发'],
    color: '#0071e3',
    icon: Users,
    featured: true,
    previewImage: '/interview1.png',
    link: 'https://www.groupinterview.online/',
    githubLink: 'https://github.com/llingqi77-tech/interview-second',
    hasVideo: true,
  },
  {
    id: 2,
    title: '旅游智能体',
    subtitle: '智能旅行规划助手 agent - 产品负责人',
    time: '2025.03 - 2025.04',
    description:
      '洞察与产品定义：在调研了市面上各 OTA 平台的 AI 助手后，发现天气信息不准确、前后语义识别不精确等问题，自主搭建了旅游智能体 agent。技术实现与价值验证：主导从 0 到 1 的产品设计，利用 Coze 辅助完成设计与开发，加入多个查询天气的插件，并对 agent 的回答做了角色设定与限制，确保能识别用户输入的完整信息，提供更个性化的交互。',
    achievements: [
      '调研 OTA AI 助手痛点',
      '0-1 产品设计',
      'Coze + 天气插件',
      '角色设定与回答限制',
    ],
    tags: ['Coze', 'AI Agent', '旅行规划', '0-1产品'],
    color: '#ff9500',
    icon: Compass,
    featured: false,
    showImageLayout: true,
    previewImage: '/travel.png',
    link: 'https://www.coze.cn/s/baXCo8B2eYQ/',
    image: '/travel.png',
  },
  {
    id: 3,
    title: '福特全国创新挑战赛',
    subtitle: '全国季军',
    time: '2025.08',
    description:
      '运用同理-定义-构思-原型-测试全流程，设计产品解决长途自驾车队信息沟通不便痛点。深度调研对讲机、微信语音等现有方案，创新设计集成三网通信等功能的设备。',
    achievements: [
      '荣获全国季军',
      '用户满意度提升20%',
      '满足90%以上用户核心诉求',
      '解决山区等复杂环境网络不通问题',
    ],
    tags: ['产品设计', '用户调研', '创新挑战'],
    color: '#34c759',
    icon: Trophy,
    featured: false,
  },
  {
    id: 4,
    title: '长三角城市迁徙网络分析',
    subtitle: '社会网络分析 | 项目负责人',
    time: '2024.05 - 2024.06',
    description:
      '基于高德迁徙数据，针对长三角12城人口流动，编号建矩阵，量化关联，覆盖超千万流动数据。运用矩阵计算6项网络指标，通过中心性分析精准识别3大核心枢纽城市。',
    achievements: [
      '构建动态迁徙矩阵',
      '运用UCINET完成NetDraw可视化',
      '精准识别3大核心枢纽城市',
      '覆盖超千万流动数据',
    ],
    tags: ['数据分析', '社会网络', '可视化'],
    color: '#5e5ce6',
    icon: BarChart3,
    featured: false,
  },
  {
    id: 5,
    title: 'CMAU市场研究与商业策划大赛',
    subtitle: '国家级特等奖',
    time: '2024.03 - 2024.06',
    description:
      '运用八爪鱼爬取社交平台早康枸杞视频及图文，获取超1000条数据。对爬取数据做情感与LDA主题模型分析，精准定位产品市场反馈及潜在问题。',
    achievements: [
      '荣获国家级特等奖',
      '爬取超1000条社交数据',
      '情感与LDA主题模型分析',
      'A/B实验测试抖音视频流量',
    ],
    tags: ['市场研究', '数据爬取', 'A/B测试'],
    color: '#30d158',
    icon: Sparkles,
    featured: false,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<(typeof FILTER_CATEGORIES)[number]>('全部');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === '全部'
    ? projects
    : projects.filter((p) =>
        p.tags.some((tag) => CATEGORY_TAG_MAP[activeFilter]?.includes(tag))
      );

  const featuredFiltered = filteredProjects.filter((p) => p.featured || p.title === '旅游智能体');
  const restFiltered = filteredProjects.filter((p) => !p.featured && p.title !== '旅游智能体');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#737373] dark:text-[#a3a3a3] text-sm font-medium uppercase tracking-wider">
            项目经历
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#171717] dark:text-[#fafafa] mt-2 tracking-tight">
            从0到1创造
          </h2>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-[#737373] dark:text-[#a3a3a3] text-center py-12">暂无匹配项目</p>
        )}

        {featuredFiltered.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {featuredFiltered.map((project, index) => {
            const previewImg = 'previewImage' in project ? project.previewImage : '/interview.png';
            const isTravelAgent = project.title === '旅游智能体';
            const imageFirst = isTravelAgent;
            return (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } md:col-span-2`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div
                  className="relative bg-white dark:bg-[#171717] rounded-2xl overflow-hidden border border-[#e5e5e5] dark:border-[#262626] hover:border-[#404040] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-[#262626] dark:bg-[#404040] text-[#fafafa] text-xs font-medium rounded-full">
                      重点项目
                    </div>
                  )}

                  <div className={`grid gap-0 ${imageFirst ? 'lg:grid-cols-[1.2fr,1fr]' : 'lg:grid-cols-[1fr,1.2fr]'}`}>
                    {imageFirst && (
                      <div className="relative min-h-[270px] flex items-center justify-center overflow-hidden order-1">
                        <img src={previewImg} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className={`p-6 md:p-8 flex flex-col ${imageFirst ? 'order-2' : 'order-1'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#e5e5e5] dark:bg-[#171717]"
                          style={{ color: project.color }}
                        >
                          <project.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#171717] dark:text-[#fafafa]">{project.title}</h3>
                          <p className="text-sm font-medium text-[#737373] dark:text-[#a3a3a3]" style={{ color: project.color }}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-[#737373] dark:text-[#a3a3a3] text-sm mb-4">{project.time}</p>
                      <p className="text-[#737373] dark:text-[#a3a3a3] text-[15px] leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {project.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-[#737373] dark:text-[#a3a3a3]">
                            <ChevronRight size={14} style={{ color: project.color }} />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-[#e5e5e5] dark:bg-[#171717] text-[#737373] dark:text-[#a3a3a3]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-6 flex flex-col items-end gap-2 text-right">
                        {(project.link || ('githubLink' in project && project.githubLink)) && (
                          <div className="flex gap-3 justify-end flex-wrap">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] dark:bg-white text-white dark:text-black hover:bg-[#262626] dark:hover:bg-[#e5e5e5] text-sm font-medium rounded-xl transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={14} />
                                访问产品
                              </a>
                            )}
                            {'githubLink' in project && project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] dark:bg-white text-white dark:text-black hover:bg-[#262626] dark:hover:bg-[#e5e5e5] text-sm font-medium rounded-xl transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                GitHub
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {!imageFirst && (
                      <div className="relative min-h-[270px] flex items-center justify-center overflow-hidden order-2">
                        <img src={previewImg} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}

          {/* 竞赛经验积累 */}
          {restFiltered.length > 0 && (
          <div className="md:col-span-2 mt-4">
            <div
              className={`mb-14 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="text-[#737373] dark:text-[#a3a3a3] text-sm font-medium uppercase tracking-wider">
                项目经历
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#171717] dark:text-[#fafafa] mt-2 tracking-tight">
                竞赛经验积累
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restFiltered.map((project, index) => (
                <div
                  key={project.id}
                  className={`group transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${480 + index * 80}ms` }}
                >
                  <div
                    className="relative bg-white dark:bg-[#171717] rounded-2xl overflow-hidden border border-[#e5e5e5] dark:border-[#262626] hover:border-[#404040] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer h-full flex flex-col"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="grid grid-cols-1 gap-0">
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#e5e5e5] dark:bg-[#171717]"
                            style={{ color: project.color }}
                          >
                            <project.icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[#171717] dark:text-[#fafafa]">{project.title}</h3>
                            <p className="text-sm font-medium text-[#737373] dark:text-[#a3a3a3]" style={{ color: project.color }}>
                              {project.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-[#737373] dark:text-[#a3a3a3] text-sm mb-4">{project.time}</p>
                        <p className="text-[#737373] dark:text-[#a3a3a3] text-[15px] leading-relaxed mb-6 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {project.achievements.slice(0, 3).map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-[#737373] dark:text-[#a3a3a3]">
                              <ChevronRight size={14} style={{ color: project.color }} />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-[#e5e5e5] dark:bg-[#171717] text-[#737373] dark:text-[#a3a3a3]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="h-1 bg-white dark:bg-[#171717]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl bg-white dark:bg-[#171717] border-[#e5e5e5] dark:border-[#262626] text-[#171717] dark:text-[#fafafa] max-h-[90vh] overflow-y-auto shadow-lg rounded-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#e5e5e5] dark:bg-[#171717]"
                    style={{ color: selectedProject.color }}
                  >
                    <selectedProject.icon size={20} />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-semibold text-[#171717] dark:text-[#fafafa]">
                      {selectedProject.title}
                    </DialogTitle>
                    <p className="text-sm text-[#737373] dark:text-[#a3a3a3]" style={{ color: selectedProject.color }}>
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>
                <DialogDescription className="text-[#737373] dark:text-[#a3a3a3]">
                  {selectedProject.time}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <p className="text-[#737373] dark:text-[#a3a3a3] leading-relaxed mb-6 text-[15px]">
                  {selectedProject.description}
                </p>

                <h4 className="text-lg font-semibold text-[#171717] dark:text-[#fafafa] mb-3">项目成果</h4>
                <div className="space-y-2 mb-6">
                  {selectedProject.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#737373] dark:text-[#a3a3a3]">
                      <ChevronRight
                        size={16}
                        className="mt-1 flex-shrink-0"
                        style={{ color: selectedProject.color }}
                      />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#e5e5e5] dark:bg-[#171717] text-[#737373] dark:text-[#a3a3a3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(selectedProject.link || selectedProject.githubLink) && (
                  <div className="flex gap-3 flex-wrap">
                    {selectedProject.link && selectedProject.title !== '旅游智能体' && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-black hover:bg-[#262626] dark:hover:bg-[#e5e5e5] font-medium rounded-xl transition-colors"
                      >
                        <ExternalLink size={18} />
                        访问产品
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-black hover:bg-[#262626] dark:hover:bg-[#e5e5e5] font-medium rounded-xl transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
