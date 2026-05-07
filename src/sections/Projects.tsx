import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Trophy, BarChart3, Users, Sparkles, Compass, ChevronRight, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { assetUrl } from '@/lib/utils';

interface FeaturedProject {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  description: string;
  achievements: string[];
  tags: string[];
  color: string;
  bgColor: string;
  markClass: string;
  icon: React.ElementType;
  previewImage?: string;
  detailImages?: string[];
  link?: string;
  githubLink?: string;
}

interface CompetitionProject {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  description: string;
  achievements: string[];
  tags: string[];
  color: string;
  icon: React.ElementType;
}

type Project = FeaturedProject | CompetitionProject;

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: '群面模拟器',
    subtitle: 'AI产品设计 | 0-1产品负责人',
    time: '2026.12 - 至今',
    description:
      '基于真实群面场景的 AI 模拟练习平台。从零规划搭建产品框架，还原无领导小组讨论全流程——覆盖互联网/金融/咨询等行业 500+ 真实题库，AI 扮演多风格面试者，与用户实时对话互动。练习后从发言时机、结构化贡献、团队协作等多维度提供智能评估反馈。',
    achievements: [
      '小红书单篇帖子浏览量破1000+',
      '产品内测社群吸引30+人加入',
      '覆盖500+真实企业群面题库',
      '支持多风格AI角色扮演与智能评估反馈',
      'Vercel + 阿里云域名部署上线',
    ],
    tags: ['AI产品', 'Vibe Coding', 'Vercel', '独立开发'],
    color: '#FF6B9D',
    bgColor: '#FFB6C1',
    markClass: 'mark-pink',
    icon: Users,
    previewImage: assetUrl('/interview-landing.webp'),
    detailImages: [assetUrl('/interview-app.webp')],
    link: 'https://www.groupinterview.online/',
    githubLink: 'https://github.com/llingqi77-tech/interview-second',
  },
  {
    id: 2,
    title: '旅游智能体',
    subtitle: '智能旅行规划助手 agent - 产品负责人',
    time: '2025.03 - 2025.04',
    description:
      '洞察与产品定义：在调研了市面上各 OTA 平台的 AI 助手后，发现天气信息不准确、前后语义识别不精确等问题，自主搭建了旅游智能体 agent。主导从 0 到 1 的产品设计，利用 Coze 辅助完成设计与开发，加入多个查询天气的插件，确保能识别用户输入的完整信息。',
    achievements: [
      '调研 OTA AI 助手痛点',
      '0-1 产品设计',
      'Coze + 天气插件',
      '角色设定与回答限制',
    ],
    tags: ['Coze', 'AI Agent', '旅行规划', '0-1产品'],
    color: '#4A90E2',
    bgColor: '#87CEEB',
    markClass: 'mark-blue',
    icon: Compass,
    previewImage: assetUrl('/travel.webp'),
    link: 'https://www.coze.cn/s/baXCo8B2eYQ/',
  },
];

const competitionProjects: CompetitionProject[] = [
  {
    id: 3,
    title: '福特全国创新挑战赛',
    subtitle: '全国季军',
    time: '2025.08',
    description: '运用同理-定义-构思-原型-测试全流程，设计产品解决长途自驾车队信息沟通不便痛点。',
    achievements: ['荣获全国季军', '用户满意度提升20%', '满足90%以上用户核心诉求'],
    tags: ['产品设计', '用户调研', '创新挑战'],
    color: '#66BB6A',
    icon: Trophy,
  },
  {
    id: 4,
    title: '长三角城市迁徙网络分析',
    subtitle: '社会网络分析 | 项目负责人',
    time: '2024.05 - 2024.06',
    description: '基于高德迁徙数据，针对长三角12城人口流动，构建动态迁徙矩阵，精准识别3大核心枢纽城市。',
    achievements: ['构建动态迁徙矩阵', 'UCINET完成NetDraw可视化', '精准识别3大核心枢纽城市'],
    tags: ['数据分析', '社会网络', '可视化'],
    color: '#4A90E2',
    icon: BarChart3,
  },
  {
    id: 5,
    title: 'CMAU市场研究与商业策划大赛',
    subtitle: '国家级特等奖',
    time: '2024.03 - 2024.06',
    description: '运用八爪鱼爬取社交平台早康枸杞视频及图文，获取超1000条数据，做情感与LDA主题模型分析。',
    achievements: ['荣获国家级特等奖', '爬取超1000条社交数据', '情感与LDA主题模型分析'],
    tags: ['市场研究', '数据爬取', 'A/B测试'],
    color: '#FF6B9D',
    icon: Sparkles,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const allProjects = [...featuredProjects, ...competitionProjects];
  const selectedFull = allProjects.find((p) => p.id === selectedProject?.id) || null;

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden bg-white grid-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 lg:py-32">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#FF6B9D] text-sm font-bold uppercase tracking-wider">项目经历</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mt-2 tracking-tight">
            从<span className="mark-pink">0到1</span>创造
          </h2>
        </div>
      </div>

      {/* ===== Featured Projects: 全宽左右交替大图区块（铺满浏览器） ===== */}
      <div className="space-y-0">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`py-20 md:py-28 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: project.bgColor, transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold mb-4 shadow-sm" style={{ color: project.color }}>
                    {project.subtitle}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#1A3C34] mb-4 leading-tight">
                    <span className={project.markClass}>{project.title}</span>
                  </h3>

                  <p className="text-[#1A3C34]/70 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {project.achievements.slice(0, 3).map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 text-[#1A3C34]/80">
                        <ChevronRight size={18} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                        <span className="text-[15px] leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white text-[#1A3C34]/70 font-medium shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1A3C34] text-white rounded-full font-bold transition-all hover:bg-[#FF6B9D] shadow-lg"
                    >
                      <span>查看详情</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A3C34] rounded-full font-bold border-2 border-[#1A3C34] hover:bg-[#1A3C34] hover:text-white transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        访问产品
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A3C34] rounded-full font-bold border-2 border-[#1A3C34] hover:bg-[#1A3C34] hover:text-white transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 lg:py-32">
        {/* ===== Competition Projects: 三列紧凑 Icon 卡片 ===== */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-2xl font-bold text-[#1A3C34] mb-8 text-center">
            竞赛与<span className="mark-yellow">研究</span>项目
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {competitionProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div
                  className="relative bg-white rounded-3xl overflow-hidden border-2 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  style={{ borderColor: `${project.color}30` }}
                  onClick={() => setSelectedProject(project as Project)}
                >
                  {/* 彩色顶部条 */}
                  <div className="h-2" style={{ backgroundColor: project.color }} />

                  {/* Icon */}
                  <div className="p-6 pb-2">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <project.icon size={28} style={{ color: project.color }} />
                    </div>

                    <h4 className="text-xl font-bold text-[#1A3C34] mb-1">{project.title}</h4>
                    <p className="text-sm font-bold mb-3" style={{ color: project.color }}>
                      {project.subtitle}
                    </p>

                    <p className="text-[#1A3C34]/60 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {project.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#1A3C34]/70">
                          <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-[#FAF7F2] text-[#1A3C34]/60 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedFull} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-white border-2 border-[#F4A4A4]/20 text-[#1A3C34] max-h-[90vh] overflow-y-auto shadow-lg rounded-3xl">
          {selectedFull && (
            <>
              <DialogHeader>
                {'previewImage' in selectedFull && typeof selectedFull.previewImage === 'string' && (
                  <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-3xl">
                    <img src={selectedFull.previewImage} alt={selectedFull.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FAF7F2] border-2 border-[#F4A4A4]/20" style={{ color: selectedFull.color as string }}>
                    {selectedFull.icon && <selectedFull.icon size={20} />}
                  </div>
                  <DialogTitle className="text-xl font-bold text-[#1A3C34]">{selectedFull.title}</DialogTitle>
                </div>
              </DialogHeader>

              <div className="mt-4">
                <p className="text-[#1A3C34]/70 leading-relaxed mb-6 text-[15px]">{selectedFull.description}</p>

                <h4 className="text-lg font-bold text-[#1A3C34] mb-3">项目成果</h4>
                <div className="space-y-2 mb-6">
                  {selectedFull.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#1A3C34]/70">
                      <ChevronRight size={16} className="mt-1 flex-shrink-0" style={{ color: selectedFull.color as string }} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedFull.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#FAF7F2] border border-[#F4A4A4]/20 text-[#1A3C34]/70 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {'link' in selectedFull && typeof selectedFull.link === 'string' && (
                  <a
                    href={selectedFull.link}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3C34] text-white hover:bg-[#F4A4A4] font-bold rounded-full transition-colors"
                  >
                    <ExternalLink size={18} /> 访问产品
                  </a>
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
