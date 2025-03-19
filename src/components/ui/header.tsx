import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconBolt, IconMenu2, IconX } from '@tabler/icons-react';

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)']
  );

  const headerHeight = useTransform(
    scrollY,
    [0, 50],
    ['4rem', '3.5rem']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const menuItems = ['About', 'Prizes', 'Judges', 'Sponsors'];

  const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://form.typeform.com/to/wf94YwH4', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        height: headerHeight,
        backgroundColor: headerBackground,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={`h-full backdrop-blur-md border-b transition-colors duration-300 ${isScrolled ? 'border-white/10' : 'border-transparent'}`}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <motion.div 
              className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="src/favicon.svg" alt="Bolt Logo" className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <div className="font-black text-xl tracking-tight flex items-center gap-1">
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  BOLT.NEW
                </motion.span>
                <motion.span 
                  className="text-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  //
                </motion.span>
                <motion.span 
                  className="hidden sm:block text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  HACKATHON
                </motion.span>
              </div>
              <motion.div 
                className="text-[10px] text-neutral-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                World's Largest Hackathon
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-6 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.a 
              href="#register"
              onClick={handleRegister}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <button
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              onClick={handleMenuClick}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "100%" }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold text-neutral-200 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="h-0.5 bg-blue-500 origin-left"
        style={{ 
          scaleX: useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1]),
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </motion.header>
  );
}