import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Energon - Soluções Digitais',
    description: 'Site institucional da minha empresa de tecnologia. Plataforma moderna para apresentar serviços de sistemas e sites sob medida, com portfólio, processo comercial, multilíngue (PT/EN), tema claro/escuro e formulário de orçamento. Desenvolvida com Next.js, Prisma e deploy na Railway.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'NextAuth', 'Framer Motion', 'Railway'],
    image: '/Images/Energon.png',
    githubUrl: 'https://github.com/IagovVilela/Energon-site',
    liveUrl: 'https://energon.up.railway.app',
    translationKey: 'energon'
  },
  {
    id: 2,
    title: 'ReviewWEB - Plataforma de Gestão de Avaliações',
    description: 'Plataforma completa de gestão de avaliações desenvolvida para Ben Sheridan. Permite que empresas gerenciem sua reputação online de forma estratégica, coletando avaliações por meio de páginas públicas personalizadas e aplicando fluxos inteligentes conforme a nota recebida. Inclui dashboard com métricas em tempo real, notificações automáticas, exportação de dados e interface bilíngue com Dark Mode.',
    technologies: ['Laravel 9', 'PHP 8.2+', 'MySQL', 'Blade', 'Tailwind CSS', 'Chart.js', 'Google Maps API'],
    image: '/Images/ReviewWEB.mp4',
    githubUrl: 'https://github.com/IagovVilela/Projeto-reviewWEB',
    videoUrl: '/Images/ReviewWEB.mp4',
    translationKey: 'reviewweb'
  },
  {
    id: 3,
    title: 'RifaFlow - Sistema de Gerenciamento de Rifas',
    description: 'Sistema completo de gerenciamento de rifas desenvolvido para RifaFlow Brasil com funcionalidades avançadas e integração em tempo real. Inclui gestão completa de reservas, controle de status, sistema de busca e filtros avançados, exportação de dados em CSV, sincronização em tempo real e dashboard com estatísticas. Interface responsiva e intuitiva otimizada para mobile e desktop.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
    image: '/Images/RifaFlow.mp4',
    githubUrl: 'https://github.com/IagovVilela/Gerenciador-rifa',
    liveUrl: 'https://gerenciador-rifa.vercel.app',
    videoUrl: '/Images/RifaFlow.mp4',
    translationKey: 'rifaflow'
  },
  {
    id: 4,
    title: 'FinanTech Solutions - Gerenciador de Gastos',
    description: 'Solução moderna e completa para gestão financeira empresarial. Sistema desenvolvido em React com cadastro de transações, gráficos dinâmicos para análise mensal e por categoria, exportação para CSV e PDF, busca inteligente, painel de metas financeiras, histórico de alterações e autenticação. Visual moderno com animações, glassmorphism, responsividade e modo escuro automático.',
    technologies: ['React', 'Tailwind CSS', 'Recharts', 'jsPDF', 'html2canvas', 'React Toastify'],
    image: '/Images/FinanTech Solutions.mp4',
    githubUrl: 'https://github.com/IagovVilela/GerenciadorGastos',
    videoUrl: '/Images/FinanTech Solutions.mp4',
    translationKey: 'finantech'
  },
  {
    id: 5,
    title: 'Editor de Imagens Paint',
    description: 'Aplicação desktop que simula um editor gráfico simples, permitindo desenhar e manipular formas com ferramentas básicas de pintura, seleção e edição.',
    technologies: ['C#', 'Windows Forms', 'GDI+'],
    image: '/Images/ProjetoPaint.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoPaint.mp4',
    translationKey: 'paint'
  },
  {
    id: 6,
    title: 'Calculadora Desktop',
    description: 'Aplicação de calculadora desenvolvida em C# com Windows Forms, com interface intuitiva e operações matemáticas básicas para uso desktop.',
    technologies: ['C#', 'Windows Forms'],
    image: '/Images/ProjetoCalculadora.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoCalculadora.mp4',
    translationKey: 'calculadora'
  },
  {
    id: 7,
    title: 'Plano Cartesiano',
    description: 'Aplicação gráfica em C# para visualização e manipulação de pontos no plano cartesiano, demonstrando conceitos de computação gráfica e matemática aplicada.',
    technologies: ['C#', 'Windows Forms', 'GDI+'],
    image: '/Images/ProjetoPlanoCartesiano.mp4',
    githubUrl: 'https://github.com/IagovVilela',
    videoUrl: '/Images/ProjetoPlanoCartesiano.mp4',
    translationKey: 'planocartesiano'
  }
];
