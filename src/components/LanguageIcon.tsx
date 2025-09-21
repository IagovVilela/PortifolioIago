import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/TranslationContext';

interface LanguageIconProps {
  name: string;
  icon: string;
  description: string;
  level: number;
  color: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({
  name,
  icon,
  description,
  level,
  color
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-3xl">{icon}</span>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10"
          >
            <div className="bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-xs">
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">{name}</h4>
                <p className="text-sm text-gray-300 mb-3">{description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${level}%`,
                      backgroundColor: color
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400">{level}% {t('skills.level.proficiency')}</span>
              </div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageIcon;
