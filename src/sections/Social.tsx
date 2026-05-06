import { useEffect, useRef, useState } from 'react';
import { BookOpen, Video, Heart, Eye, Linkedin, Github, Share2 } from 'lucide-react';
import { assetUrl } from '@/lib/utils';

const Social = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [failedPreviewImages, setFailedPreviewImages] = useState<Set<string>>(new Set());

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

  const contentHighlights = [
    {
      title: 'PitchLab产品体验',
      type: '视频',
      views: '600+',
      likes: '20+',
      icon: Video,
      link: assetUrl('/video-求职面试.mp4'),
      previewImage: '',
      isVideo: true,
    },
    {
      title: '群面模拟器开发记录',
      type: '视频',
      views: '1千+',
      likes: '300+',
      icon: Video,
      link: 'http://xhslink.com/o/4QYeO37gxPx',
      previewImage: assetUrl('/interview.png'),
    },
    {
      title: 'AI产品经理入门指南',
      type: '文章',
      views: '1千+',
      likes: '400+',
      icon: BookOpen,
      link: 'http://xhslink.com/o/3cquOHzyFUH',
      previewImage: assetUrl('/learning.png'),
    },
  ];

  return (
    <section
      id="social"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#FAF7F2]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#F4A4A4] text-sm font-bold uppercase tracking-wider">
            社交媒体
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mt-2 tracking-tight">
            内容创作与分享
          </h2>
        </div>

        {/* 个人主页链接 */}
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <h3 className="text-lg font-bold text-[#1A3C34] mb-4">个人主页</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/luyao-dong-7586382a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-[#1A3C34] hover:bg-[#FAF7F2] border-2 border-[#F4A4A4]/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 font-medium"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-[#0A66C2]" />
              LinkedIn
            </a>
            <a
              href="https://xhslink.com/m/6c4JHf9Wfjy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-[#1A3C34] hover:bg-[#FAF7F2] border-2 border-[#F4A4A4]/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 font-medium"
              aria-label="小红书"
            >
              <img src={assetUrl("/xhs.png")} alt="小红书" className="w-5 h-5 object-contain shrink-0" />
              小红书
            </a>
            <a
              href="https://github.com/llingqi77-tech/interview-second"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-[#1A3C34] hover:bg-[#FAF7F2] border-2 border-[#F4A4A4]/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 font-medium"
              aria-label="GitHub"
            >
              <Github size={20} className="text-[#1A3C34]" />
              GitHub
            </a>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-xl font-bold text-[#1A3C34] mb-6">热门内容</h3>
          <div className="grid sm:grid-cols-3 gap-6 items-stretch">
            {contentHighlights.map((content) => {
              const CardWrapper = content.link ? 'a' : 'div';
              const cardProps = content.link
                ? { href: content.link, target: '_blank', rel: 'noopener noreferrer' as const }
                : {};
              return (
                <CardWrapper
                  key={content.title}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-[#1A3C34] text-white border-2 border-[#F4A4A4]/20 hover:-translate-y-0.5 transition-all duration-500 cursor-pointer h-full shadow-sm hover:shadow-lg"
                  {...cardProps}
                >
                  <div className="relative h-[180px] flex-shrink-0 overflow-hidden bg-[#1A3C34]">
                    {'isVideo' in content && content.isVideo && !content.previewImage ? (
                      <video
                        src={content.link}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : content.previewImage && !failedPreviewImages.has(content.previewImage) ? (
                      <img
                        src={content.previewImage}
                        alt={`${content.title} 预览图`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={() => setFailedPreviewImages((s) => new Set(s).add(content.previewImage))}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1A3C34]" />
                    )}
                  </div>
                  <div className="p-6 bg-[#1A3C34]">
                    <h4 className="text-white font-bold mb-2 group-hover:text-white/90 transition-colors line-clamp-2">
                      {content.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-white/70 font-medium">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {content.views}
                      </span>
                      <span className="flex items-center gap-1">
                        {content.title === 'PitchLab产品体验' ? (
                          <Share2 size={14} />
                        ) : (
                          <Heart size={14} />
                        )}
                        {content.likes}
                      </span>
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
