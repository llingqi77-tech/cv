import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
          ? 'bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#F4A4A4]/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`text-xl md:text-2xl font-bold transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded ${
              scrolled ? 'text-[#1A3C34] hover:text-[#F4A4A4]' : 'text-[#1A3C34] hover:text-[#F4A4A4]'
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
                className="text-[15px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded text-[#1A3C34]/70 hover:text-[#F4A4A4]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 text-[#1A3C34] hover:text-[#F4A4A4]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#F4A4A4]/20 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
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
              className="block py-3 text-[#1A3C34]/70 hover:text-[#F4A4A4] transition-colors text-[17px] focus-visible:ring-2 focus-visible:ring-[#1A3C34] focus-visible:ring-offset-2 rounded font-medium"
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
