import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 overflow-hidden bg-[#FAF7F2] border-t-2 border-[#F4A4A4]/20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#1A3C34]/60 hover:text-[#F4A4A4] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded font-medium"
            >
              关于
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#1A3C34]/60 hover:text-[#F4A4A4] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded font-medium"
            >
              经历
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#1A3C34]/60 hover:text-[#F4A4A4] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded font-medium"
            >
              项目
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#1A3C34]/60 hover:text-[#F4A4A4] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded font-medium"
            >
              联系
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#1A3C34]/60 hover:text-[#F4A4A4] hover:bg-[#F4A4A4]/10 border-2 border-[#F4A4A4]/20 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 font-medium"
          >
            <span className="text-sm font-bold">返回顶部</span>
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
