import React, { useEffect, useState, useCallback } from 'react';
import { IconBolt, IconMenu2, IconX } from '@tabler/icons-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    const progress = Math.min(
      window.scrollY / (document.documentElement.scrollHeight - window.innerHeight),
      1
    );
    
    requestAnimationFrame(() => {
      setIsScrolled(scrolled);
      setScrollProgress(progress);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const menuItems = ['About', 'Prizes', 'Judges', 'Sponsors'];

  const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://form.typeform.com/to/wf94YwH4', '_blank', 'noopener,noreferrer');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out transform-gpu ${
        isScrolled ? 'h-14' : 'h-16'
      }`}
    >
      <nav className={`h-full backdrop-blur-md border-b transition-colors duration-300 ${
        isScrolled ? 'bg-black/90 border-white/10' : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center transform-gpu">
              <img src="src/favicon.svg" alt="Bolt Logo" className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-black text-xl tracking-tight flex items-center gap-1">
                <span className="text-white">BOLT.NEW</span>
                <span className="text-blue-500">//</span>
                <span className="hidden sm:block text-white">HACKATHON</span>
              </div>
              <div className="text-[10px] text-neutral-500">
                World's Largest Hackathon
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-300 hover:text-white transition-colors duration-300 ease-out relative group transform-gpu"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#register"
              onClick={handleRegister}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden group transform-gpu"
            >
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            </a>
            
            <button
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-300 ease-out transform-gpu"
              onClick={handleMenuClick}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>

        <div 
          className="h-0.5 bg-blue-500 origin-left transition-transform duration-300 ease-out transform-gpu"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden transition-opacity duration-300 ease-out">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold text-neutral-200 hover:text-white transition-colors duration-300 ease-out transform-gpu"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}