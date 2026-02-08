import { useEffect, useRef, useState } from 'react';
import { Award, ChevronRight, TrendingUp, Users, Leaf } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
      color: '#0071e3',
      icon: TrendingUp,
      image: '/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_01.png',
      detailImages: [
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_29.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_30.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_31.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_32.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_33.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_34.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_35.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_36.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_37.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_38.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_39.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_40.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_41.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_42.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_43.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_44.png',
        '/zaokang/Enjoy This Moment-早康枸杞原浆大学生市场营销策略研究_45.png',
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
      color: '#34c759',
      icon: Users,
      image: '/世界缤纷果真懂你-副本_01.png',
      detailImages: [
        '/zhenguoli/世界缤纷果真懂你-副本_00.png',
        '/zhenguoli/世界缤纷果真懂你-副本_01.png',
        '/zhenguoli/世界缤纷果真懂你-副本_02.png',
        '/zhenguoli/世界缤纷果真懂你-副本_03.png',
        '/zhenguoli/世界缤纷果真懂你-副本_04.png',
        '/zhenguoli/世界缤纷果真懂你-副本_16.png',
        '/zhenguoli/世界缤纷果真懂你-副本_17.png',
        '/zhenguoli/世界缤纷果真懂你-副本_18.png',
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
      color: '#30d158',
      icon: Leaf,
      image: '/defu/幻灯片32.png',
      detailImages: [
        '/defu/幻灯片4.png',
        '/defu/幻灯片5.png',
        '/defu/幻灯片11.png',
        '/defu/幻灯片14.png',
        '/defu/幻灯片15.png',
        '/defu/幻灯片30.png',
        '/defu/幻灯片31.png',
        '/defu/幻灯片32.png',
      ],
    },
  ];

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#737373] dark:text-[#a3a3a3] text-sm font-medium uppercase tracking-wider">
            商赛作品
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#171717] dark:text-[#fafafa] mt-2 tracking-tight">
            营销策划实战
          </h2>
        </div>

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
                className="relative bg-white dark:bg-[#171717] rounded-2xl overflow-hidden border border-[#e5e5e5] dark:border-[#262626] hover:border-[#404040] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedWork(work)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-[#171717]/95 backdrop-blur rounded-full shadow-sm">
                    <Award size={14} style={{ color: work.color }} />
                    <span className="text-xs font-medium text-[#171717] dark:text-[#fafafa]">{work.award}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#e5e5e5] dark:bg-[#171717]"
                      style={{ color: work.color }}
                    >
                      <work.icon size={16} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#171717] dark:text-[#fafafa] line-clamp-1">
                      {work.title}
                    </h3>
                  </div>

                  <p className="text-[#737373] dark:text-[#a3a3a3] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-[#e5e5e5] dark:bg-[#171717] text-[#737373] dark:text-[#a3a3a3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: work.color }}>
                    <span>查看详情</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedWork}
        onOpenChange={() => setSelectedWork(null)}
      >
        <DialogContent className="max-w-2xl bg-white dark:bg-[#171717] border-[#e5e5e5] dark:border-[#262626] text-[#171717] dark:text-[#fafafa] max-h-[90vh] overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl">
          {selectedWork && (
            <>
              <DialogHeader>
                <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-[#171717]/95 backdrop-blur rounded-full shadow-sm">
                    <Award size={14} style={{ color: selectedWork.color }} />
                    <span className="text-xs font-medium text-[#171717] dark:text-[#fafafa]">
                      {selectedWork.award}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#e5e5e5] dark:bg-[#171717]"
                    style={{ color: selectedWork.color }}
                  >
                    <selectedWork.icon size={20} />
                  </div>
                  <DialogTitle className="text-xl font-semibold text-[#171717] dark:text-[#fafafa]">
                    {selectedWork.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="mt-4">
                <p className="text-[#737373] dark:text-[#a3a3a3] leading-relaxed mb-6 text-[15px]">
                  {selectedWork.description}
                </p>

                <h4 className="text-lg font-semibold text-[#171717] dark:text-[#fafafa] mb-3">方案亮点</h4>
                <div className="space-y-2 mb-6">
                  {selectedWork.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#737373] dark:text-[#a3a3a3]">
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
                    <h4 className="text-lg font-semibold text-[#171717] dark:text-[#fafafa] mb-3">方案展示</h4>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                      {selectedWork.detailImages.map((imgSrc, i) => (
                        <img
                          key={i}
                          src={imgSrc}
                          alt={`${selectedWork.title} - ${i + 1}`}
                          className="w-full rounded-lg border border-[#e5e5e5] dark:border-[#262626] shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {selectedWork.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#e5e5e5] dark:bg-[#171717] text-[#737373] dark:text-[#a3a3a3]"
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
