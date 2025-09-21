# 📧 Configuração de Email Real - Formspree

## ⚠️ **IMPORTANTE: Configuração Necessária**

O sistema de email agora está configurado para enviar emails **REAIS** usando Formspree, mas você precisa configurar sua conta para receber os emails.

## 🔧 **Passo a Passo para Configurar:**

### **1. Criar Conta no Formspree**
1. Acesse: [https://formspree.io](https://formspree.io)
2. Clique em **"Get Started"** ou **"Sign Up"**
3. Crie uma conta gratuita usando seu email: `iagovventura@gmail.com`

### **2. Criar Novo Formulário**
1. Após fazer login, clique em **"New Form"**
2. Preencha os dados:
   - **Form Name**: `Portfólio Iago`
   - **Email**: `iagovventura@gmail.com`
   - **Website**: `https://seu-dominio.com` (ou deixe em branco)

### **3. Obter o Endpoint**
1. Após criar o formulário, você receberá um endpoint como:
   - `https://formspree.io/f/xpwgqkqr`
2. **Copie este endpoint**

### **4. Atualizar o Código**
1. Abra o arquivo: `src/services/emailService.ts`
2. Encontre a linha 71:
   ```typescript
   const response = await fetch('https://formspree.io/f/xpwgqkqr', {
   ```
3. Substitua `xpwgqkqr` pelo seu endpoint real

### **5. Verificar Configurações**
1. No painel do Formspree, vá em **Settings**
2. Verifique se o email de destino está correto: `iagovventura@gmail.com`
3. Ative as notificações por email

## 🚀 **Teste o Sistema:**

### **1. Teste Local**
```bash
# Execute o projeto
npm start

# Acesse http://localhost:3000
# Vá para a seção Contato
# Preencha o formulário com dados reais
# Clique em "Enviar Mensagem"
```

### **2. Verificar Email**
- **Verifique sua caixa de entrada** em `iagovventura@gmail.com`
- **Verifique a pasta de spam** se não aparecer
- **Confirme o recebimento** do email

## 🔍 **Troubleshooting:**

### **❌ Email não chega**
1. **Verifique o endpoint** do Formspree
2. **Confirme o email** de destino
3. **Verifique a pasta de spam**
4. **Teste com outro email**

### **❌ Erro de CORS**
1. **Use HTTPS** em produção
2. **Configure** o Formspree corretamente
3. **Verifique** as configurações de domínio

### **❌ Erro 422 (Unprocessable Entity)**
1. **Verifique** se todos os campos estão preenchidos
2. **Confirme** o formato do email
3. **Verifique** se o Formspree está ativo

## 📊 **Monitoramento:**

### **Formspree Dashboard**
- **Acesse** sua conta no Formspree
- **Veja** estatísticas de envios
- **Monitore** emails recebidos
- **Configure** notificações

### **Logs do Console**
- **Abra** o DevTools (F12)
- **Vá** para a aba Console
- **Veja** mensagens de erro/sucesso
- **Debug** problemas de envio

## 🎯 **Alternativas (se Formspree não funcionar):**

### **1. EmailJS (Recomendado)**
- Acesse: [https://emailjs.com](https://emailjs.com)
- Configure com Gmail
- Mais confiável para produção

### **2. Netlify Forms (se hospedar no Netlify)**
- Formulário HTML simples
- Integração nativa
- Sem configuração adicional

### **3. SendGrid (Para produção)**
- Serviço profissional
- Mais recursos
- Pago

## 📞 **Suporte:**

- **Formspree**: [https://formspree.io/help](https://formspree.io/help)
- **EmailJS**: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- **Documentação**: Arquivos em `src/services/`

---

**Status**: ⚠️ **PRECISA DE CONFIGURAÇÃO**  
**Última atualização**: 20/09/2025

## 🚨 **AÇÃO IMEDIATA NECESSÁRIA:**

1. **Configure o Formspree** com seu email
2. **Atualize o endpoint** no código
3. **Teste o envio** de emails
4. **Verifique** se os emails chegam

**Sem esta configuração, os emails NÃO serão enviados!**
