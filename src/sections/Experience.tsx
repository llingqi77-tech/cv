import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ChevronRight, Play, Pause, X, ChevronLeft } from 'lucide-react';
import { assetUrl } from '@/lib/utils';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{src: string; label: string}[]>([]);

  const openLightbox = (images: {src: string; label: string}[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

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
        { src: assetUrl('/pitchlab/3.webp'), label: 'hero页' },
        { src: assetUrl('/pitchlab/2.webp'), label: '人设库' },
        { src: assetUrl('/pitchlab/4.webp'), label: '3分钟即兴练习' },
        { src: assetUrl('/pitchlab/5.webp'), label: '专业演讲训练' },
        { src: assetUrl('/pitchlab/6.webp'), label: '对话练习' },
        { src: assetUrl('/pitchlab/7.webp'), label: '用户的声音' },
        { src: assetUrl('/pitchlab/1.webp'), label: 'FAQ' },
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
      image: assetUrl('/董璐瑶 实习转正答辩(1)(1)_05.webp'),
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
      image: assetUrl('/tuhu.webp'),
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
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#FAF7F2] grid-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#FF6B9D] text-sm font-bold uppercase tracking-wider">
            实习经历
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mt-2 tracking-tight">
            实战经验<span className="mark-blue">积累</span>
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
            >
              <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-[#F4A4A4]/10 hover:border-[#F4A4A4]/40 hover:shadow-lg transition-all duration-500">
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-0">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A3C34] mb-1">{exp.company}</h3>
                        <p className="text-[#FF6B9D] font-bold">{exp.position}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[#1A3C34]/60 mb-6 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#F4A4A4]" />
                        {exp.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-[#F4A4A4]" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {exp.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 text-[#1A3C34]/70 text-[15px]">
                          <ChevronRight size={16} className="text-[#F4A4A4] mt-0.5 flex-shrink-0" />
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
                        poster={assetUrl("/pitchlab/3.webp")}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={toggleVideo}
                          className="w-16 h-16 rounded-full bg-[#FF6B9D] hover:bg-[#FF6B9D]/90 flex items-center justify-center transition-all shadow-lg"
                        >
                          {isPlaying ? (
                            <Pause size={28} className="text-white" />
                          ) : (
                            <Play size={28} className="text-white ml-1" />
                          )}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-3 py-2 shadow-sm border-2 border-[#F4A4A4]/20">
                        <span className="text-xs font-bold text-[#1A3C34]">
                          PitchLab AI表达训练助手 - 产品介绍
                        </span>
                      </div>
                    </div>
                  ) : 'image' in exp && exp.image ? (
                    <div className="relative bg-[#FAF7F2] aspect-video lg:aspect-auto flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.image}
                        alt={`${exp.company} 实习相关图片`}
                        className="w-full h-full object-contain bg-white"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="relative bg-[#FAF7F2] aspect-video lg:aspect-auto flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white border-2 border-[#F4A4A4]/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#F4A4A4]">
                            {exp.company.charAt(0)}
                          </span>
                        </div>
                        <p className="text-[#1A3C34]/60 text-sm font-medium">{exp.department}</p>
                      </div>
                    </div>
                  )}
                </div>
                {exp.pitchlabImages && exp.pitchlabImages.length > 0 && (
                  <div className="p-4 border-t-2 border-[#F4A4A4]/10">
                    <p className="text-sm font-bold text-[#1A3C34]/60 mb-3">PitchLab 首页展示</p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                                            {exp.pitchlabImages.map((img, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 w-[280px] rounded-2xl overflow-hidden border-2 border-[#F4A4A4]/10 bg-white cursor-pointer hover:border-[#F4A4A4]/40 transition-all"
                          onClick={() => openLightbox(exp.pitchlabImages || [], i)}
                        >
                          <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-[160px] object-contain object-top bg-white"
                          />
                          <p className="text-xs text-[#1A3C34]/60 py-2 px-3 text-center font-medium">{img.label}</p>
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

      {/* Lightbox 图片放大查看 */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* 关闭按钮 */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X size={24} className="text-white" />
          </button>

          {/* 左箭头 */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          )}

          {/* 右箭头 */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          )}

          {/* 图片容器 */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[lightboxIndex].src}
              alt={lightboxImages[lightboxIndex].label}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <p className="text-white/80 text-sm mt-4 font-medium">
              {lightboxImages[lightboxIndex].label} ({lightboxIndex + 1} / {lightboxImages.length})
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
