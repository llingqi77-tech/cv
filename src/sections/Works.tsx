import { useEffect, useRef, useState } from 'react';
import { Award, ChevronRight, ArrowRight, TrendingUp, Users, Leaf } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { assetUrl } from '@/lib/utils';

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

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

  const works = [
    {
      id: 1,
      title: '早康枸杞大学生校园推广策划案',
      award: 'CMAU国家级特等奖',
      description:
        '针对目标市场需求，完善商业画布，采用4P营销组合策略。开发枸杞面包、枸杞酸奶等新产品，创新枸杞原浆包装，设计VIS视觉识别系统，构建增长飞轮模型。',
      highlights: [
        '抖音短视频最高点赞率36.6%，远超一般投放标准',
        '推出新玩法+官推短视频，将枸杞原浆新搭配和消费动机结合',
        '以#万物皆可枸杞为话题，结合便宜、美味、新颖等动机',
        '投放总播放量4937，总点赞量509',
      ],
      tags: ['4P营销', '短视频运营', 'VIS设计', '增长飞轮'],
      color: '#FF6B9D',
      bgColor: '#FFB6C1',
      markClass: 'mark-pink',
      icon: TrendingUp,
      image: assetUrl('/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_01.webp'),
      detailImages: [
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_29.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_30.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_31.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_32.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_33.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_34.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_35.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_36.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_37.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_38.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_39.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_40.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_41.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_42.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_43.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_44.webp'),
        assetUrl('/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_45.webp'),
      ],
    },
    {
      id: 2,
      title: '蒙牛x真果粒大学生校园推广策划案',
      award: '全国TOP50',
      description:
        '围绕"世界缤纷果真懂你"主题，针对乳制品市场消费人群细分化、健康意识提升等趋势，结合品牌现状制定多维度营销策略。创新水果版MBTI测试，线上线下联动。',
      highlights: [
        '创新水果版MBTI人格测试，线下展览与线上小程序结合',
        '预计实现经典款销量破20万箱，收益600万元',
        '联名经典动画IP果宝特攻，开展Citydrink创意打卡',
        '设置人格配对、社交活动，增强情感连接',
      ],
      tags: ['MBTI营销', 'IP联名', '线上线下联动', '社交活动'],
      color: '#4A90E2',
      bgColor: '#87CEEB',
      markClass: 'mark-blue',
      icon: Users,
      image: assetUrl('/世界缤纷果真懂你-副本_01.webp'),
      detailImages: [
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_00.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_01.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_02.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_03.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_04.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_16.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_17.webp'),
        assetUrl('/zhenguoli/世界缤纷果真懂你-副本_18.webp'),
      ],
    },
    {
      id: 3,
      title: '德芙可持续包装创新策划案',
      award: 'BAT可持续发展大赛全国TOP10',
      description:
        '提出用香蕉纤维替代金属和塑料包装巧克力、糖果等休闲食品。香蕉纤维以香蕉茎为原料，具有轻质、光泽好、染色性高、吸水性强、抗菌、易降解和高强度等特性。',
      highlights: [
        '香蕉纤维生产过程仅用纯碱，无漂白剂，环保且成本低',
        '解决塑料污染和金属包装高能耗问题',
        '中国香蕉资源丰富，香蕉纤维生产技术成熟',
        '已有国内外企业将香蕉纤维用于制作钱包和编织袋',
      ],
      tags: ['可持续包装', '环保材料', 'ESG', '创新设计'],
      color: '#66BB6A',
      bgColor: '#98FB98',
      markClass: 'mark-green',
      icon: Leaf,
      image: assetUrl('/defu/幻灯片32.webp'),
      detailImages: [
        assetUrl('/defu/幻灯片4.webp'),
        assetUrl('/defu/幻灯片5.webp'),
        assetUrl('/defu/幻灯片11.webp'),
        assetUrl('/defu/幻灯片14.webp'),
        assetUrl('/defu/幻灯片15.webp'),
        assetUrl('/defu/幻灯片30.webp'),
        assetUrl('/defu/幻灯片31.webp'),
        assetUrl('/defu/幻灯片32.webp'),
      ],
    },
  ];

  return (
    <section id="works" ref={sectionRef}>
      {/* Section Header */}
      <div className="py-20 md:py-24 lg:py-32 bg-[#FAF7F2] grid-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#FF6B9D] text-sm font-bold uppercase tracking-wider">
              商赛作品
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mt-2 tracking-tight">
              营销策划<span className="mark-yellow">实战</span>
            </h2>
          </div>
        </div>
      </div>

      {/* 三个作品 - 紧凑卡片布局 */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`group transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className="relative bg-white rounded-3xl overflow-hidden border-2 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  style={{ borderColor: `${work.color}30` }}
                  onClick={() => setSelectedWork(work)}
                >
                  {/* 图片 */}
                  <div className="relative h-48 overflow-hidden bg-[#FAF7F2]">
                    <img
                      src={work.image}
                      alt={`${work.title} 封面图`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* 内容 */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* 奖项标签 */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F2] rounded-full mb-4 w-fit">
                      <Award size={14} style={{ color: work.color }} />
                      <span className="text-xs font-bold text-[#1A3C34]">{work.award}</span>
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-[#1A3C34] mb-2 leading-tight">
                      <span className={work.markClass}>{work.title}</span>
                    </h3>

                    {/* 描述 */}
                    <p className="text-[#1A3C34]/60 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {work.description}
                    </p>

                    {/* 亮点 */}
                    <div className="space-y-2 mb-4">
                      {work.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#1A3C34]/70">
                          <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: work.color }} />
                          <span className="line-clamp-2">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-[#FAF7F2] text-[#1A3C34]/60 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 查看详情按钮 */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedWork(work);
                      }}
                      className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-[#1A3C34] text-white rounded-full text-sm font-bold transition-all hover:bg-[#FF6B9D] shadow-lg mt-auto w-fit"
                    >
                      <span>查看详情</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-2xl bg-white border-2 border-[#F4A4A4]/20 text-[#1A3C34] max-h-[90vh] overflow-y-auto shadow-lg rounded-3xl">
          {selectedWork && (
            <>
              <DialogHeader>
                <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur rounded-full shadow-sm">
                    <Award size={14} style={{ color: selectedWork.color }} />
                    <span className="text-xs font-bold text-[#1A3C34]">
                      {selectedWork.award}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FAF7F2] border-2 border-[#F4A4A4]/20"
                    style={{ color: selectedWork.color }}
                  >
                    <selectedWork.icon size={20} />
                  </div>
                  <DialogTitle className="text-xl font-bold text-[#1A3C34]">
                    {selectedWork.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="mt-4">
                <p className="text-[#1A3C34]/70 leading-relaxed mb-6 text-[15px]">
                  {selectedWork.description}
                </p>

                <h4 className="text-lg font-bold text-[#1A3C34] mb-3">方案亮点</h4>
                <div className="space-y-2 mb-6">
                  {selectedWork.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#1A3C34]/70">
                      <ChevronRight
                        size={16}
                        className="mt-1 flex-shrink-0"
                        style={{ color: selectedWork.color }}
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {selectedWork.detailImages && selectedWork.detailImages.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#1A3C34] mb-3">方案展示</h4>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                      {selectedWork.detailImages.map((imgSrc, i) => (
                        <img
                          key={i}
                          src={imgSrc}
                          alt={`${selectedWork.title} - ${i + 1}`}
                          className="w-full rounded-2xl border-2 border-[#F4A4A4]/10 shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {selectedWork.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#FAF7F2] border border-[#F4A4A4]/20 text-[#1A3C34]/70 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Works;
