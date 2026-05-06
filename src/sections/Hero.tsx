import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Briefcase, Sparkles, BarChart3, Users, Palette, TrendingUp, Handshake } from 'lucide-react';
import { assetUrl } from '@/lib/utils';

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
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4A4A4]/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Photo Card */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0">
              <div className="relative h-full rounded-3xl overflow-hidden bg-[#F4A4A4]/20 border-4 border-[#F4A4A4]/30 shadow-lg">
                <img
                  src={assetUrl("/profile.png")}
                  alt="董璐瑶"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1A3C34]/80 to-transparent">
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-4 border-2 border-[#F4A4A4]/20">
                    <p className="text-sm text-[#1A3C34]/70 mb-1 font-medium">产品经理</p>
                    <p className="text-lg font-bold text-[#1A3C34]">
                      专注AI产品设计与数据驱动
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -top-3 -right-3 bg-[#F4A4A4] text-white rounded-full px-4 py-2 shadow-md transition-all duration-700 ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <span className="text-sm font-bold">3+ 实习经历</span>
              </div>
              <div
                className={`absolute -bottom-3 -left-3 bg-[#1A3C34] text-white rounded-full px-4 py-2 shadow-md transition-all duration-700 ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="text-sm font-bold">国家级奖项</span>
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
              <span className="text-base md:text-lg text-[#F4A4A4] font-bold tracking-wide">嗨，我是</span>
            </div>
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '350ms', letterSpacing: '-0.02em' }}
            >
              <span className="text-[#1A3C34]">董璐瑶</span>
            </h1>
            <div
              className={`mb-5 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-lg font-bold text-[#1A3C34]/70">AI产品经理 · 数据驱动决策者 · 创意问题解决者</p>
            </div>
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <h3 className="text-lg font-bold mb-4 text-[#1A3C34]">教育经历</h3>
              <div className="inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-2xl bg-white border-2 border-[#F4A4A4]/20 shadow-sm">
                <span className="text-base font-bold text-[#1A3C34]">华东理工大学</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A4A4]" />
                <span className="text-base font-medium text-[#1A3C34]/70">市场营销(大数据营销)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A4A4]" />
                <span className="text-base font-bold text-[#F4A4A4]">GPA: 3.7/4.0</span>
              </div>
            </div>

            <div
              className={`mb-10 transition-all duration-700 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="text-lg font-bold mb-4 text-[#1A3C34]">核心技能</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group flex items-center gap-2 px-4 py-2.5 bg-white rounded-2xl border-2 border-[#F4A4A4]/20 hover:border-[#F4A4A4] transition-all duration-300 cursor-default ${
                      loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${650 + index * 60}ms` }}
                  >
                    <skill.icon size={18} className="text-[#F4A4A4]" />
                    <span className="text-sm text-[#1A3C34] font-bold">{skill.name}</span>
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
                className="group flex items-center gap-2 px-8 py-4 bg-[#1A3C34] text-white rounded-full font-bold transition-all duration-300 text-[17px] hover:bg-[#F4A4A4] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#F4A4A4] focus-visible:ring-offset-2 shadow-lg"
              >
                <Mail size={20} />
                联系我
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="group flex items-center gap-2 px-8 py-4 border-2 border-[#1A3C34] text-[#1A3C34] rounded-full font-bold transition-all duration-300 text-[17px] hover:bg-[#1A3C34] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2"
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
          className="flex flex-col items-center gap-2 text-[#F4A4A4] hover:text-[#1A3C34] transition-colors"
        >
          <span className="text-xs font-bold tracking-wider">向下滚动至经历</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
