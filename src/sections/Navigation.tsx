import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: '经历', href: '#experience' },
    { name: '项目', href: '#projects' },
    { name: '作品', href: '#works' },
    { name: '联系', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      } ${
        scrolled
          ? 'bg-[#f5f5f5]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#e5e5e5] dark:border-[#262626] shadow-sm'
          : 'bg-transparent dark:bg-black/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`text-xl md:text-2xl font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded ${
              scrolled
                ? 'text-[#171717] dark:text-[#fafafa] hover:text-[#737373] dark:hover:text-[#a3a3a3]'
                : 'text-white hover:text-[#a3a3a3]'
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            董璐瑶
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-[15px] font-normal transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 rounded ${
                  scrolled
                    ? 'text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors text-[#737373] dark:text-[#a3a3a3] hover:bg-[#e5e5e5] dark:hover:bg-[#262626] focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2"
              aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`md:hidden p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 ${scrolled ? 'text-[#171717] dark:text-[#fafafa] hover:text-[#737373] dark:hover:text-[#a3a3a3]' : 'text-white hover:text-white/80'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#fafafa] dark:bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-[#e5e5e5] dark:border-[#262626] transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="block py-3 text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#fafafa] transition-colors text-[17px] focus-visible:ring-2 focus-visible:ring-[#404040] dark:focus-visible:ring-[#525252] focus-visible:ring-offset-2 rounded"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
