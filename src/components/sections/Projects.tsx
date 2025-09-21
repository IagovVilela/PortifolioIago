import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Play } from 'lucide-react';
import { projects } from '../../data/projects';
import VideoPopup from '../VideoPopup';
import { useTranslation } from '../../contexts/TranslationContext';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    isOpen: boolean;
    videoUrl: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    videoUrl: '',
    title: '',
    description: ''
  });

  const openVideo = (project: any) => {
    setSelectedVideo({
      isOpen: true,
      videoUrl: project.videoUrl,
      title: project.title,
      description: project.description
    });
  };

  const closeVideo = () => {
    setSelectedVideo(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Video/Image */}
              <div 
                className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden cursor-pointer group"
                onClick={() => project.videoUrl && openVideo(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {project.videoUrl ? (
                  <>
                    <video
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 p-4 rounded-full">
                        <Play className="h-8 w-8 text-primary-600" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">💻</div>
                    </div>
                  </>
                )}
                
                {/* Action Buttons Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-2 right-2 flex space-x-2"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/90 text-primary-600 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 text-primary-600 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {t('projects.actions.code')}
                  </a>
                  {project.videoUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openVideo(project);
                      }}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {t('projects.actions.video')}
                    </button>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {t('projects.actions.demo')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('projects.cta.title')}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {t('projects.cta.description')}
            </p>
            <a
              href="https://github.com/iagovilela"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              {t('projects.cta.button')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Popup */}
      <VideoPopup
        isOpen={selectedVideo.isOpen}
        onClose={closeVideo}
        videoUrl={selectedVideo.videoUrl}
        title={selectedVideo.title}
        description={selectedVideo.description}
      />
    </section>
  );
};

export default Projects;
