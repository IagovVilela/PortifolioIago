import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import LanguageGrid from '../LanguageGrid';
import { useTranslation } from '../../contexts/TranslationContext';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: t('skills.categories.all'), color: 'bg-primary-600' },
    { id: 'frontend', name: t('skills.categories.frontend'), color: 'bg-blue-500' },
    { id: 'backend', name: t('skills.categories.backend'), color: 'bg-green-500' },
    { id: 'database', name: t('skills.categories.database'), color: 'bg-purple-500' },
    { id: 'tools', name: t('skills.categories.tools'), color: 'bg-orange-500' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return '🎨';
      case 'backend':
        return '⚙️';
      case 'database':
        return '🗄️';
      case 'tools':
        return '🛠️';
      default:
        return '💻';
    }
  };

  return (
    <section id="skills" className="section-padding bg-secondary-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-white text-secondary-700 hover:bg-primary-50 border border-secondary-200'
              }`}
            >
              <span className="mr-2">{getCategoryIcon(category.id)}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-secondary-900">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-primary-600">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-secondary-200 rounded-full h-2 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                />
              </div>
              
              {/* Category Badge */}
              <div className="flex items-center">
                <span className="text-sm mr-2">{getCategoryIcon(skill.category)}</span>
                <span className="text-xs text-secondary-500 capitalize">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Language Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              {t('skills.languages.title')}
            </h3>
            <p className="text-secondary-600 max-w-3xl mx-auto">
              {t('skills.languages.description')}
            </p>
          </div>
          <LanguageGrid />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              {t('skills.methodology.title')}
            </h3>
            <p className="text-secondary-600 mb-6">
              {t('skills.methodology.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <h4 className="font-semibold text-secondary-900 mb-1">{t('skills.methodology.study')}</h4>
                <p className="text-sm text-secondary-600">{t('skills.methodology.studyDesc')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-secondary-900 mb-1">{t('skills.methodology.projects')}</h4>
                <p className="text-sm text-secondary-600">{t('skills.methodology.projectsDesc')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold text-secondary-900 mb-1">{t('skills.methodology.community')}</h4>
                <p className="text-sm text-secondary-600">{t('skills.methodology.communityDesc')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
