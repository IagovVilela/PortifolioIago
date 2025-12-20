import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ReviewWEB - Plataforma de Gestão de Avaliações',
    description: 'Plataforma completa de gestão de avaliações desenvolvida para Ben Sheridan. Permite que empresas gerenciem sua reputação online de forma estratégica, coletando avaliações por meio de páginas públicas personalizadas e aplicando fluxos inteligentes conforme a nota recebida. Inclui dashboard com métricas em tempo real, notificações automáticas, exportação de dados e interface bilíngue com Dark Mode.',
    technologies: ['Laravel 9', 'PHP 8.2+', 'MySQL', 'Blade', 'Tailwind CSS', 'Chart.js', 'Google Maps API'],
    image: '/Images/ReviewWEB.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ReviewWEB.mp4',
    translationKey: 'reviewweb'
  },
  {
    id: 2,
    title: 'RifaFlow - Sistema de Gerenciamento de Rifas',
    description: 'Sistema completo de gerenciamento de rifas desenvolvido para RifaFlow Brasil com funcionalidades avançadas e integração em tempo real. Inclui gestão completa de reservas, controle de status, sistema de busca e filtros avançados, exportação de dados em CSV, sincronização em tempo real e dashboard com estatísticas. Interface responsiva e intuitiva otimizada para mobile e desktop.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
    image: '/Images/RifaFlow.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/RifaFlow.mp4',
    translationKey: 'rifaflow'
  },
  {
    id: 3,
    title: 'FinanTech Solutions - Gerenciador de Gastos',
    description: 'Solução moderna e completa para gestão financeira empresarial. Sistema desenvolvido em React com cadastro de transações, gráficos dinâmicos para análise mensal e por categoria, exportação para CSV e PDF, busca inteligente, painel de metas financeiras, histórico de alterações e autenticação. Visual moderno com animações, glassmorphism, responsividade e modo escuro automático.',
    technologies: ['React', 'Tailwind CSS', 'Recharts', 'jsPDF', 'html2canvas', 'React Toastify'],
    image: '/Images/FinanTech Solutions.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/FinanTech Solutions.mp4',
    translationKey: 'finantech'
  },
  {
    id: 4,
    title: 'Editor de Imagens Paint',
    description: 'Aplicação que simula um editor gráfico simples, permitindo desenhar e manipular formas com ferramentas básicas.',
    technologies: ['C#', 'Windows Forms', 'GDI+'],
    image: '/Images/ProjetoPaint.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoPaint.mp4',
    translationKey: 'paint'
  }
];
