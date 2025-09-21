import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Database, Smartphone } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-primary-600 font-medium text-lg">{t('home.greeting')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
            >
              {t('home.name')}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-secondary-700 mb-8"
            >
              <span className="text-primary-600 font-semibold">{t('home.title')}</span>
              <br />
              {t('home.subtitle')}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-secondary-600 mb-8 max-w-2xl"
            >
              {t('home.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToAbout}
                className="btn-primary inline-flex items-center justify-center"
              >
                {t('home.knowMore')}
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
              >
                {t('home.seeProjects')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-6 border border-primary-100"
              >
                <Code className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Frontend</h3>
                <p className="text-sm text-secondary-600">React, TypeScript, Tailwind</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute top-20 right-0 bg-white rounded-xl shadow-lg p-6 border border-primary-100"
              >
                <Database className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Backend</h3>
                <p className="text-sm text-secondary-600">Node.js, Python, APIs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-20 left-8 bg-white rounded-xl shadow-lg p-6 border border-primary-100"
              >
                <Smartphone className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Mobile</h3>
                <p className="text-sm text-secondary-600">Responsive Design</p>
              </motion.div>

              {/* Central Circle with Photo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="/Images/FotoPerfil.jpeg" 
                  alt="Iago Vilela Ventura"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback para iniciais se a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-white font-bold text-2xl">IV</span>';
                    }
                  }}
                  onLoad={() => console.log('Foto carregada com sucesso!')}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
