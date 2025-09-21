# 🧪 Teste de Mídia - Portfólio Iago

## 🔍 **Como Testar**

### **1. Teste Básico de Arquivos**
Acesse: `http://localhost:3000/test-media.html`

Este arquivo testa se os arquivos de mídia estão sendo servidos corretamente pelo servidor de desenvolvimento.

### **2. Teste no Portfólio Principal**
Acesse: `http://localhost:3000`

- **Foto de Perfil**: Deve aparecer na seção Home (círculo central)
- **Vídeos dos Projetos**: Deve aparecer na seção Projetos
- **Status de Mídia**: Caixa no canto superior direito mostra o status

## 🐛 **Problemas Comuns e Soluções**

### **❌ Arquivos não carregam**
**Causa**: Arquivos não estão na pasta `public/Images/`
**Solução**: 
```bash
# Verificar se os arquivos estão na pasta correta
dir public\Images
```

### **❌ Vídeos não reproduzem**
**Causa**: Formato de vídeo não suportado ou arquivo corrompido
**Solução**: 
- Verificar se os arquivos são MP4 (H.264)
- Testar em navegador diferente
- Verificar tamanho dos arquivos

### **❌ Imagem não aparece**
**Causa**: Caminho incorreto ou arquivo corrompido
**Solução**:
- Verificar se o arquivo existe em `public/Images/FotoPerfil.jpeg`
- Testar acessando diretamente: `http://localhost:3000/Images/FotoPerfil.jpeg`

## 📁 **Estrutura de Arquivos Esperada**

```
public/
├── Images/
│   ├── FotoPerfil.jpeg ✅
│   ├── ProjetoCalculadora.mp4 ✅
│   ├── ProjetoPlanoCartesiano.mp4 ✅
│   ├── ProjetoPaint.mp4 ✅
│   └── Curriculo.jpeg ✅
├── index.html
└── test-media.html
```

## 🔧 **Comandos de Diagnóstico**

### **Verificar Arquivos**
```bash
# Listar arquivos na pasta Images
dir public\Images

# Verificar tamanho dos arquivos
Get-ChildItem public\Images | Select-Object Name, Length
```

### **Testar Acesso Direto**
Abra no navegador:
- `http://localhost:3000/Images/FotoPerfil.jpeg`
- `http://localhost:3000/Images/ProjetoCalculadora.mp4`

### **Verificar Console do Navegador**
1. Abra o DevTools (F12)
2. Vá para a aba Console
3. Procure por mensagens de erro
4. Verifique se há erros 404 (arquivo não encontrado)

## ✅ **Checklist de Teste**

- [ ] Arquivos estão na pasta `public/Images/`
- [ ] Arquivos têm os nomes corretos (case-sensitive)
- [ ] Foto de perfil aparece na seção Home
- [ ] Vídeos aparecem na seção Projetos
- [ ] Vídeos reproduzem ao passar o mouse
- [ ] Botões de play funcionam
- [ ] Seletor de idiomas funciona
- [ ] Site é responsivo em mobile

## 🚨 **Se Nada Funcionar**

1. **Pare o servidor**: Ctrl+C no terminal
2. **Limpe o cache**: `npm run build`
3. **Reinicie**: `npm start`
4. **Teste novamente**

## 📞 **Logs de Debug**

O componente `MediaTest` mostra o status de cada arquivo:
- ✅ Carregado = Arquivo encontrado e carregado
- ❌ Erro = Arquivo não encontrado ou erro de carregamento
- ⏳ Carregando = Ainda tentando carregar

---

**Status**: 🧪 **EM TESTE**  
**Última atualização**: 20/09/2025
