import React from 'react';
import { motion } from 'framer-motion';
import LanguageIcon from './LanguageIcon';

const LanguageGrid: React.FC = () => {
  const languages = [
    {
      name: 'C#',
      icon: '🔷',
      description: 'Linguagem principal para desenvolvimento .NET, Web Forms e aplicações desktop',
      level: 90,
      color: '#239120'
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      description: 'Linguagem para desenvolvimento web frontend e backend com Node.js',
      level: 85,
      color: '#F7DF1E'
    },
    {
      name: 'Java',
      icon: '☕',
      description: 'Linguagem para desenvolvimento de aplicações desktop e computação gráfica',
      level: 80,
      color: '#007396'
    },
    {
      name: 'Python',
      icon: '🐍',
      description: 'Linguagem versátil para automação, análise de dados e desenvolvimento web',
      level: 75,
      color: '#3776AB'
    },
    {
      name: 'PHP',
      icon: '🐘',
      description: 'Linguagem para desenvolvimento web backend e sistemas dinâmicos',
      level: 70,
      color: '#777BB4'
    },
    {
      name: 'SQL',
      icon: '🗄️',
      description: 'Linguagem para manipulação de bancos de dados relacionais',
      level: 90,
      color: '#336791'
    },
    {
      name: 'HTML5',
      icon: '🌐',
      description: 'Linguagem de marcação para estruturação de páginas web',
      level: 90,
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      icon: '🎨',
      description: 'Linguagem para estilização e design responsivo de páginas web',
      level: 85,
      color: '#1572B6'
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'Biblioteca JavaScript para construção de interfaces de usuário',
      level: 80,
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'Framework React para aplicações web modernas com SSR e App Router',
      level: 75,
      color: '#000000'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      description: 'Superset tipado do JavaScript para aplicações mais robustas',
      level: 75,
      color: '#3178C6'
    },
    {
      name: 'ASP.NET',
      icon: '🔧',
      description: 'Framework Microsoft para desenvolvimento de aplicações web',
      level: 85,
      color: '#512BD4'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      description: 'Runtime JavaScript para APIs e aplicações backend',
      level: 75,
      color: '#339933'
    },
    {
      name: 'VBA',
      icon: '📊',
      description: 'Linguagem para automação no Microsoft Excel e Office',
      level: 85,
      color: '#217346'
    },
    {
      name: 'Git',
      icon: '📚',
      description: 'Sistema de controle de versão para gerenciamento de código',
      level: 85,
      color: '#F05032'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {languages.map((lang, index) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <LanguageIcon
            name={lang.name}
            icon={lang.icon}
            description={lang.description}
            level={lang.level}
            color={lang.color}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageGrid;
