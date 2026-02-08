import { useEffect, useRef, useState } from 'react';
import { Mail, Briefcase, Sparkles, BarChart3, Users, Palette, TrendingUp, Handshake } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'AI产品设计', icon: Sparkles },
    { name: '数据分析', icon: BarChart3 },
    { name: '用户研究', icon: Users },
    { name: '原型设计', icon: Palette },
    { name: '增长运营', icon: TrendingUp },
    { name: '跨部门协作', icon: Handshake },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="text-[#737373] dark:text-[#a3a3a3] text-sm font-medium uppercase tracking-wider">关于我</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#171717] dark:text-[#fafafa] mt-2 tracking-tight">
            让创意与数据驱动产品增长
          </h2>
        </div>

        {/* Self-introduction with Hero content at top */}
        <div className="max-w-3xl">
          <div
            className={`space-y-5 mb-10 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-[#171717] dark:text-[#fafafa] text-xl font-semibold leading-relaxed">
              嗨，我是董璐瑶
            </p>
            <p className="text-[#737373] dark:text-[#a3a3a3] text-lg leading-relaxed">
              AI产品经理 · 数据驱动决策者 · 创意问题解决者
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-black font-medium rounded-lg transition-all duration-300 hover:bg-[#262626] dark:hover:bg-[#e5e5e5] focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2"
              >
                <Mail size={18} />
                联系我
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#404040] text-[#171717] dark:text-[#fafafa] font-medium rounded-lg transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2"
              >
                <Briefcase size={18} />
                查看作品
              </button>
            </div>
            <p className="text-[#737373] dark:text-[#a3a3a3] leading-relaxed text-[17px] pt-4">
              我是董璐瑶，一位充满热情的产品经理，拥有AI产品设计和数据驱动决策的实战经验。在特赞科技实习期间，我负责
              <span className="text-[#171717] dark:text-[#fafafa] font-medium">PitchLab AI表达训练助手产品的0-1设计</span>
              ，运用Google AI Studio进行原型设计，并通过Cursor优化产品的UI和UX。
            </p>
            <p className="text-[#737373] dark:text-[#a3a3a3] leading-relaxed text-[17px]">
              我擅长运用数据分析工具挖掘用户洞察，结合商业思维设计产品解决方案。从
              <span className="text-[#171717] dark:text-[#fafafa] font-medium">群面模拟器的独立开发</span>
              到
              <span className="text-[#171717] dark:text-[#fafafa] font-medium">国家级商赛特等奖</span>
              ，我始终保持对产品的热爱和对创新的追求。
            </p>
          </div>

          <div
            className={`mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#171717] dark:text-[#fafafa]">教育经历</h3>
            <div className="inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-xl bg-[#e5e5e5] dark:bg-[#171717] border border-[#d4d4d4] dark:border-[#262626]">
              <span className="text-base font-medium text-[#171717] dark:text-[#fafafa]">华东理工大学</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#737373] dark:bg-[#a3a3a3]" />
              <span className="text-base font-medium text-[#525252] dark:text-[#a3a3a3]">市场营销(大数据营销)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#737373] dark:bg-[#a3a3a3]" />
              <span className="text-base font-semibold text-[#171717] dark:text-[#fafafa]">GPA: 3.7/4.0</span>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#171717] dark:text-[#fafafa]">核心技能</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group flex items-center gap-2 px-4 py-2.5 bg-[#e5e5e5] dark:bg-[#171717] rounded-2xl border border-[#d4d4d4] dark:border-[#262626] hover:border-[#404040] transition-all duration-300 cursor-default ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${600 + index * 80}ms` }}
                >
                  <skill.icon size={18} className="text-[#737373] dark:text-[#a3a3a3]" />
                  <span className="text-sm text-[#171717] dark:text-[#fafafa] font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
