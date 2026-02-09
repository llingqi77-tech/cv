import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ChevronRight, Play, Pause } from 'lucide-react';
import { assetUrl } from '@/lib/utils';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const experiences = [
    {
      company: '特赞科技',
      position: 'AI产品经理',
      department: 'Content+AI Team',
      time: '2025.11 - 至今',
      location: '上海',
      hasVideo: true,
      pitchlabImages: [
        { src: assetUrl('/pitchlab/3.jpeg'), label: 'hero页' },
        { src: assetUrl('/pitchlab/2.jpeg'), label: '人设库' },
        { src: assetUrl('/pitchlab/4.jpeg'), label: '3分钟即兴练习' },
        { src: assetUrl('/pitchlab/5.jpeg'), label: '专业演讲训练' },
        { src: assetUrl('/pitchlab/6.jpeg'), label: '对话练习' },
        { src: assetUrl('/pitchlab/7.jpeg'), label: '用户的声音' },
        { src: assetUrl('/pitchlab/1.jpeg'), label: 'FAQ' },
      ],
      points: [
        '负责PitchLab AI表达训练助手产品的0-1设计，运用Google AI Studio进行原型设计',
        '通过Cursor优化产品的UI和UX，设计全流程提示词策略',
        '交付华润三九项目和博雅生物的B端产品合作方案',
        '协助小红书社交媒体内容策划与GEO优化，提升产品曝光度',
      ],
    },
    {
      company: '众安保险',
      position: '用户运营',
      department: '车险事业部',
      time: '2025.06 - 2025.10',
      location: '上海',
      hasVideo: false,
      image: assetUrl('/董璐瑶 实习转正答辩(1)(1)_05.png'),
      pitchlabImages: undefined,
      points: [
        '分析车险投保转化漏斗数据，搭建30余家机构的日保费看板',
        '跟踪保单报价失败原因，推动整体转化率提升0.3%',
        '针对京东导流合作痛点，明确3大核心改进方向',
      ],
    },
    {
      company: '途虎养车',
      position: '品类运营',
      department: '市场传播部',
      time: '2024.09 - 2024.12',
      location: '上海',
      hasVideo: false,
      image: assetUrl('/tuhu.png'),
      pitchlabImages: undefined,
      points: [
        '品牌日数据量化评估，产出10+结案报告',
        '制定标准化SOP流程，覆盖100%推广组需求',
        '高效对接15+合作方，协调排期与资源整合',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#737373] dark:text-[#a3a3a3] text-sm font-medium uppercase tracking-wider">
            实习经历
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#171717] dark:text-[#fafafa] mt-2 tracking-tight">
            实战经验积累
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`group relative transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div
                className={`relative bg-white dark:bg-[#171717] rounded-2xl overflow-hidden transition-all duration-500 border ${
                  activeIndex === index
                    ? 'shadow-sm border-[#404040] dark:border-[#404040] -translate-y-0.5'
                    : 'border-[#e5e5e5] dark:border-[#262626] hover:border-[#404040] hover:-translate-y-0.5'
                }`}
              >
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-0">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#171717] dark:text-[#fafafa] mb-1">{exp.company}</h3>
                        <p className="text-[#737373] dark:text-[#a3a3a3] font-medium">{exp.position}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[#737373] dark:text-[#a3a3a3] mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {exp.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 text-[#737373] dark:text-[#a3a3a3] text-[15px]">
                          <ChevronRight size={16} className="text-[#525252] dark:text-[#737373] mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {exp.hasVideo ? (
                    <div className="relative bg-black aspect-video lg:aspect-auto">
                      <video
                        ref={videoRef}
                        src={assetUrl("/hero.mp4")}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={toggleVideo}
                          className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
                        >
                          {isPlaying ? (
                            <Pause size={28} className="text-[#1A1A1A]" />
                          ) : (
                            <Play size={28} className="text-[#1A1A1A] ml-1" />
                          )}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-[#171717]/90 backdrop-blur rounded-lg px-3 py-2 shadow-sm border border-[#e5e5e5] dark:border-[#262626]">
                        <span className="text-xs font-medium text-[#171717] dark:text-[#fafafa]">
                          PitchLab AI表达训练助手 - 产品介绍
                        </span>
                      </div>
                      <p className="absolute bottom-4 right-4 text-xs text-white/80">
                        本视频使用 Claude Code 的 Remotion Skill 制作
                      </p>
                    </div>
                  ) : 'image' in exp && exp.image ? (
                    <div className="relative bg-[#e5e5e5] dark:bg-[#262626] aspect-video lg:aspect-auto flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-full object-contain bg-white dark:bg-[#171717]"
                      />
                    </div>
                  ) : (
                    <div className="relative bg-[#e5e5e5] dark:bg-[#262626] aspect-video lg:aspect-auto flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white dark:bg-[#171717] border border-[#e5e5e5] dark:border-[#262626] flex items-center justify-center">
                          <span className="text-2xl font-semibold text-[#525252] dark:text-[#a3a3a3]">
                            {exp.company.charAt(0)}
                          </span>
                        </div>
                        <p className="text-[#737373] dark:text-[#a3a3a3] text-sm">{exp.department}</p>
                      </div>
                    </div>
                  )}
                </div>
                {exp.pitchlabImages && exp.pitchlabImages.length > 0 && (
                  <div className="p-4 border-t border-[#e5e5e5] dark:border-[#262626]">
                    <p className="text-sm font-medium text-[#737373] dark:text-[#a3a3a3] mb-3">PitchLab 首页展示</p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {exp.pitchlabImages.map((img, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 w-[280px] rounded-lg overflow-hidden border border-[#e5e5e5] dark:border-[#262626] bg-[#e5e5e5] dark:bg-[#171717]"
                        >
                          <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-[160px] object-contain object-top bg-white dark:bg-[#171717]"
                          />
                          <p className="text-xs text-[#737373] dark:text-[#a3a3a3] py-2 px-3 text-center">{img.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
