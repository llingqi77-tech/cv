import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'betty3079899@163.com',
      href: 'mailto:betty3079899@163.com',
    },
    {
      icon: Phone,
      label: '电话',
      value: '+86 158-6050-6779',
      href: 'tel:+8615860506779',
    },
    {
      icon: MapPin,
      label: '位置',
      value: '上海市',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#737373] dark:text-[#a3a3a3] text-sm font-medium uppercase tracking-wider">
            联系我
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#171717] dark:text-[#fafafa] mt-2 mb-4 tracking-tight">
            有有趣的项目？让我们聊聊
          </h2>
          <p className="text-[#737373] dark:text-[#a3a3a3] max-w-xl mx-auto text-[17px]">
            无论是产品合作、实习机会，还是单纯想交流产品心得，都欢迎联系我
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold text-[#171717] dark:text-[#fafafa] mb-6">联系方式</h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-4 p-4 bg-white dark:bg-[#171717] rounded-xl border border-[#e5e5e5] dark:border-[#262626] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e5e5e5] dark:bg-[#171717] flex items-center justify-center group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors">
                    <item.icon size={20} className="text-[#737373] dark:text-[#a3a3a3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737373] dark:text-[#a3a3a3]">{item.label}</p>
                    <p className="text-[#171717] dark:text-[#fafafa] font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
