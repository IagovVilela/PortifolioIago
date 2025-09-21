// Configurações de email
export const EMAIL_CONFIG = {
  // Formspree - Serviço gratuito para formulários
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/xpwgqkqr',
  
  // EmailJS - Serviço alternativo (requer configuração)
  EMAILJS: {
    SERVICE_ID: 'service_portfolio',
    TEMPLATE_ID: 'template_contact',
    PUBLIC_KEY: 'your_public_key_here'
  },
  
  // Email de destino
  DESTINATION_EMAIL: 'iagovventura@gmail.com',
  
  // Configurações de validação
  VALIDATION: {
    MIN_NAME_LENGTH: 2,
    MIN_MESSAGE_LENGTH: 10,
    MAX_MESSAGE_LENGTH: 1000
  }
};

// Função para validar dados do formulário
export const validateFormData = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Validar nome
  if (!data.name || data.name.trim().length < EMAIL_CONFIG.VALIDATION.MIN_NAME_LENGTH) {
    errors.push('Nome deve ter pelo menos 2 caracteres');
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Email deve ter um formato válido');
  }

  // Validar assunto
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Assunto deve ter pelo menos 3 caracteres');
  }

  // Validar mensagem
  if (!data.message || data.message.trim().length < EMAIL_CONFIG.VALIDATION.MIN_MESSAGE_LENGTH) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }

  if (data.message && data.message.length > EMAIL_CONFIG.VALIDATION.MAX_MESSAGE_LENGTH) {
    errors.push('Mensagem deve ter no máximo 1000 caracteres');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
