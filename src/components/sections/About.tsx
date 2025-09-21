import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      year: t('about.experience.aptiv.period'),
      title: t('about.experience.aptiv.title'),
      company: t('about.experience.aptiv.company'),
      description: t('about.experience.aptiv.description')
    },
    {
      year: t('about.experience.gestorpro.period'),
      title: t('about.experience.gestorpro.title'),
      company: t('about.experience.gestorpro.company'),
      description: t('about.experience.gestorpro.description')
    }
  ];

  const achievements = [
    { icon: GraduationCap, title: t('about.achievements.graduation'), description: t('about.achievements.graduationDesc') },
    { icon: Award, title: t('about.achievements.job'), description: t('about.achievements.jobDesc') },
    { icon: Users, title: t('about.achievements.projects'), description: t('about.achievements.projectsDesc') },
    { icon: Briefcase, title: t('about.achievements.experience'), description: t('about.achievements.experienceDesc') }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">{t('about.story.title')}</h3>
            <div className="space-y-4 text-secondary-600">
              <p>
                {t('about.story.p1')}
              </p>
              <p>
                {t('about.story.p2')}
              </p>
              <p>
                {t('about.story.p3')}
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">{t('about.achievements.title')}</h3>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-primary-50 rounded-lg"
                >
                  <achievement.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-secondary-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-secondary-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">{t('about.experience.title')}</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-primary-100">
                      <div className="text-primary-600 font-semibold text-sm mb-2">{exp.year}</div>
                      <h4 className="text-lg font-bold text-secondary-900 mb-2">{exp.title}</h4>
                      <div className="text-primary-600 font-medium mb-3">{exp.company}</div>
                      <p className="text-secondary-600">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
