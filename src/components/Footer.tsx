import React from 'react';
import { Github, Linkedin, Mail, MapPin, Building2 } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';
import { socialLinks } from '../data/social';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Iago Vilela Ventura</h3>
            <p className="text-secondary-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex items-center text-secondary-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>São Paulo - Brasil</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.energon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Energon"
                className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
              >
                <Building2 className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Email"
                className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-300">
          <p>&copy; {currentYear} Iago Vilela. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
