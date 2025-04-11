'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items
  const navItems = [
    { name: 'Главная', href: '#' },
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Врачи', href: '#doctors' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <div className="relative z-50">
      {/* Main Header */}
      <div 
        ref={headerRef}
        className={`${isScrolled ? 'py-3 bg-white/95 shadow-md' : 'py-5 bg-transparent'} 
          fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#" className="flex items-center">
              <div className="relative w-10 h-10 mr-2">
                <div className="absolute inset-0 bg-teal-500 rounded-full opacity-80"></div>
                <div className="absolute inset-[2px] bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xl">M</span>
                </div>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-teal-600' : 'text-white'}`}>Mak-Med</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-white'} transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Telegram Button */}
              <Link 
                href="https://t.me/makmed_bot" 
                target="_blank" 
                className={`flex items-center px-4 py-2 rounded-full ${isScrolled ? 'bg-teal-500 text-white' : 'bg-white text-teal-600'} font-medium transition-colors`}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.892 8.917c-.141.659-.534.818-1.083.51l-2.995-2.208-1.446 1.394c-.159.16-.294.294-.603.294l.213-3.035 5.529-4.994c.24-.213-.052-.332-.373-.119l-6.826 4.297-2.948-.975c-.638-.213-.652-.638.134-.946l11.514-4.435c.532-.179 1.001.132.776 1.3z"/>
                </svg>
                Телеграм
              </Link>
              
              {/* Phone Button */}
              <Link 
                href="tel:+74951234567" 
                className={`flex items-center font-medium ${isScrolled ? 'text-teal-600' : 'text-white'} transition-colors`}
              >
                <Phone className="w-4 h-4 mr-2" />
                +7 (495) 123-45-67
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 w-full bg-white shadow-lg z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="py-3 border-b border-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col mt-4 space-y-3">
                <Link 
                  href="https://t.me/makmed_bot" 
                  target="_blank" 
                  className="flex items-center justify-center py-3 bg-teal-500 text-white rounded-lg font-medium transition-colors"
                  onClick={toggleMobileMenu}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.892 8.917c-.141.659-.534.818-1.083.51l-2.995-2.208-1.446 1.394c-.159.16-.294.294-.603.294l.213-3.035 5.529-4.994c.24-.213-.052-.332-.373-.119l-6.826 4.297-2.948-.975c-.638-.213-.652-.638.134-.946l11.514-4.435c.532-.179 1.001.132.776 1.3z"/>
                  </svg>
                  Телеграм
                </Link>
                <Link 
                  href="tel:+74951234567" 
                  className="flex items-center justify-center py-3 bg-gray-100 text-teal-600 rounded-lg font-medium transition-colors"
                  onClick={toggleMobileMenu}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (495) 123-45-67
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveHeader;