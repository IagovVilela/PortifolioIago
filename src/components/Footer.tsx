import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

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
                href="https://github.com/IagovVilela"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/feed/?trk=sem-ga_campid.12619604099_asid.149519181115_crid.725790844702_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9100218"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:iagovventura@gmail.com"
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
