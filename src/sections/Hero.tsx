import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Briefcase, Sparkles, BarChart3, Users, Palette, TrendingUp, Handshake } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
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
      className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#e5e5e5] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Photo Card */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="relative h-full rounded-2xl overflow-hidden bg-[#d4d4d4] dark:bg-[#171717] border border-[#e5e5e5] dark:border-[#262626] shadow-sm">
                <img
                  src="/profile.png"
                  alt="董璐瑶"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="bg-white/95 dark:bg-[#171717]/95 backdrop-blur rounded-xl p-4 border border-[#e5e5e5] dark:border-[#262626]">
                    <p className="text-sm text-[#737373] dark:text-[#a3a3a3] mb-1">产品经理</p>
                    <p className="text-lg font-semibold text-[#171717] dark:text-[#fafafa]">
                      专注AI产品设计与数据驱动
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -top-3 -right-3 bg-white dark:bg-[#171717] rounded-full px-4 py-2 border border-[#e5e5e5] dark:border-[#262626] transition-all duration-700 ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <span className="text-sm font-medium text-[#171717] dark:text-[#fafafa]">3+ 实习经历</span>
              </div>
              <div
                className={`absolute -bottom-3 -left-3 bg-white dark:bg-[#171717] rounded-full px-4 py-2 border border-[#e5e5e5] dark:border-[#262626] transition-all duration-700 ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="text-sm font-medium text-[#171717] dark:text-[#fafafa]">国家级奖项</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <div
              className={`mb-5 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <span className="text-base md:text-lg text-[#525252] dark:text-[#a3a3a3] font-normal tracking-wide">嗨，我是</span>
            </div>
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-4 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '350ms', letterSpacing: '-0.02em' }}
            >
              <span className="text-[#171717] dark:text-[#fafafa]">董璐瑶</span>
            </h1>
            <div
              className={`mb-5 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-lg font-semibold text-[#525252] dark:text-[#a3a3a3]">AI产品经理 · 数据驱动决策者 · 创意问题解决者</p>
            </div>
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '550ms' }}
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
              className={`mb-10 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#171717] dark:text-[#fafafa]">核心技能</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group flex items-center gap-2 px-4 py-2.5 bg-[#e5e5e5] dark:bg-[#171717] rounded-2xl border border-[#d4d4d4] dark:border-[#262626] transition-all duration-300 cursor-default ${
                      loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${650 + index * 60}ms` }}
                  >
                    <skill.icon size={18} className="text-[#737373] dark:text-[#a3a3a3]" />
                    <span className="text-sm text-[#171717] dark:text-[#fafafa] font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="group flex items-center gap-2 px-8 py-4 bg-[#171717] dark:bg-white text-white dark:text-black rounded-lg font-medium transition-all duration-300 text-[17px] hover:bg-[#262626] dark:hover:bg-[#e5e5e5] focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2"
              >
                <Mail size={20} />
                联系我
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="group flex items-center gap-2 px-8 py-4 border border-[#404040] dark:border-[#404040] text-[#171717] dark:text-white rounded-lg font-medium transition-all duration-300 text-[17px] hover:bg-black/5 dark:hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2"
              >
                <Briefcase size={20} />
                查看作品
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-600 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '900ms' }}
      >
        <button
          onClick={() => scrollToSection('#experience')}
          className="flex flex-col items-center gap-2 text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] transition-colors"
        >
          <span className="text-xs font-medium tracking-wider">向下滚动至经历</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
