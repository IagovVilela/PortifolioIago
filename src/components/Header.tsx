import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Responsivo */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 truncate max-w-[200px] sm:max-w-none">
            Iago Vilela Ventura
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </button>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary-700" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-secondary-200 bg-white/95 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium py-3 px-2 rounded-lg hover:bg-primary-50"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-secondary-200">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
