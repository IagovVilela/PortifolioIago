import emailjs from '@emailjs/browser';

// Configurações do EmailJS (substitua pelos seus valores)
const EMAILJS_SERVICE_ID = 'service_portfolio_iago';
const EMAILJS_TEMPLATE_ID = 'template_contact_form';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Função que envia email usando EmailJS
export const sendEmailEmailJS = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validação básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      };
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Por favor, insira um endereço de email válido.'
      };
    }

    // Enviar email usando EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'iagovventura@gmail.com',
        reply_to: data.email
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

// Função que envia email usando Formspree (alternativa)
export const sendEmailFormspree = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validação básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      };
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Por favor, insira um endereço de email válido.'
      };
    }

    // Enviar email usando Formspree
    const response = await fetch('https://formspree.io/f/xwpnggge', {
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

// Função que simula envio de email (para demonstração)
export const sendEmailSimulation = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validação básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      };
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Por favor, insira um endereço de email válido.'
      };
    }

    // Simular envio de email (para demonstração)
    console.log('📧 Email simulado enviado:', {
      to: 'iagovventura@gmail.com',
      from: data.email,
      name: data.name,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString()
    });

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simular sucesso (sempre retorna sucesso para demonstração)
    return {
      success: true,
      message: 'Email enviado com sucesso! Entrarei em contato em breve.'
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente ou entre em contato por email.'
    };
  }
};
