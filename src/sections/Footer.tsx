import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-[#e5e5e5] dark:border-[#262626]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 rounded"
            >
              关于
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 rounded"
            >
              经历
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 rounded"
            >
              项目
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 rounded"
            >
              联系
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-[#e5e5e5] dark:bg-[#171717] rounded-lg text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] hover:bg-[#d4d4d4] dark:hover:bg-[#262626] border border-[#e5e5e5] dark:border-[#262626] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2"
          >
            <span className="text-sm font-medium">返回顶部</span>
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
