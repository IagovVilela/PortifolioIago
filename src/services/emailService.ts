import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, validateFormData } from '../config/emailConfig';

// Inicializar EmailJS
emailjs.init(EMAIL_CONFIG.EMAILJS.PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validar dados do formulário
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return {
        success: false,
        message: validation.errors.join('. ')
      };
    }

    // Enviar email usando EmailJS
    const result = await emailjs.send(
      EMAIL_CONFIG.EMAILJS.SERVICE_ID,
      EMAIL_CONFIG.EMAILJS.TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: EMAIL_CONFIG.DESTINATION_EMAIL
      }
    );

    if (result.status === 200) {
      return {
        success: true,
        message: 'Email enviado com sucesso! Entrarei em contato em breve.'
      };
    } else {
      return {
        success: false,
        message: 'Erro ao enviar email. Tente novamente mais tarde.'
      };
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente ou entre em contato por email.'
    };
  }
};

// Função que envia email real usando Formspree
export const sendEmailFormspree = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validar dados do formulário
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return {
        success: false,
        message: validation.errors.join('. ')
      };
    }

    // Enviar email real usando Formspree
    const response = await fetch('https://formspree.io/f/xpwgqkqr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        _replyto: data.email,
        _subject: `[Portfólio Iago] ${data.subject}`,
        _next: window.location.href
      })
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Email enviado com sucesso! Entrarei em contato em breve.'
      };
    } else {
      const errorData = await response.json();
      console.error('Erro do Formspree:', errorData);
      return {
        success: false,
        message: 'Erro ao enviar email. Tente novamente mais tarde.'
      };
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente ou entre em contato por email.'
    };
  }
};
