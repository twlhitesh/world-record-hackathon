import React, { useEffect, useState, useCallback } from 'react';
import { IconBolt, IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    
    const sections = ['about', 'sponsors', 'prizes', 'judges'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
    
    requestAnimationFrame(() => {
      setIsScrolled(scrolled);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    // Fix for mobile menu scroll lock
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'judges', label: 'Judges' }
  ];

  const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://form.typeform.com/to/wf94YwH4', '_blank', 'noopener,noreferrer');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}
    >
      <nav 
        className={`h-full transition-colors duration-300 border-b ${
          isScrolled || isMenuOpen
            ? 'bg-black/90 backdrop-blur-md border-white/10' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <img 
                src="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg" 
                alt="Bolt Logo" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <div className="font-black text-xl tracking-tight flex items-center gap-1">
                <span className="text-white">BOLT.NEW</span>
                <span className="text-blue-500">🗲</span>
                <span className="hidden sm:block text-white">HACKATHON</span>
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">
                World's Largest Hackathon
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === id ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {label}
                {activeSection === id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#register"
              onClick={handleRegister}
              className="relative px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium"
            >
              Register Now
            </a>
            
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={handleMenuClick}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fixed positioning to prevent scroll issues */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black z-40 md:hidden"
          style={{ top: isScrolled ? '64px' : '80px' }}
        >
          <div className="flex flex-col items-center justify-center h-full pb-20">
            {menuItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-4xl font-black text-neutral-200 hover:text-white py-4"
                onClick={() => {
                  handleMenuClick();
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}