import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Calculadora Digital',
    description: 'Aplicação que simula uma calculadora digital, com operações matemáticas básicas e interface intuitiva.',
    technologies: ['C#', 'Windows Forms', '.NET Framework'],
    image: '/Images/ProjetoCalculadora.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoCalculadora.mp4'
  },
  {
    id: 2,
    title: 'Plano Cartesiano',
    description: 'Sistema para representação gráfica de pontos e funções em um plano cartesiano com visualização interativa.',
    technologies: ['Java', 'Computação Gráfica', 'Swing'],
    image: '/Images/ProjetoPlanoCartesiano.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoPlanoCartesiano.mp4'
  },
  {
    id: 3,
    title: 'Editor de Imagens Paint',
    description: 'Aplicação que simula um editor gráfico simples, permitindo desenhar e manipular formas com ferramentas básicas.',
    technologies: ['C#', 'Windows Forms', 'GDI+'],
    image: '/Images/ProjetoPaint.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoPaint.mp4'
  }
];
