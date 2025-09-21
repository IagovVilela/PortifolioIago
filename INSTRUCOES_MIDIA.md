# 📁 Instruções para Adicionar Mídia

## 🎥 Vídeos dos Projetos

Para que os vídeos dos seus projetos funcionem corretamente, você precisa adicionar os seguintes arquivos na pasta `public/Images/`:

### Arquivos necessários:
1. **ProjetoCalculadora.mp4** - Vídeo da calculadora digital
2. **ProjetoPlanoCartesiano.mp4** - Vídeo do plano cartesiano
3. **ProjetoPaint.mp4** - Vídeo do editor de imagens

### 📋 Especificações recomendadas:
- **Formato**: MP4 (H.264)
- **Resolução**: 1280x720 (HD) ou 1920x1080 (Full HD)
- **Duração**: 30-60 segundos por projeto
- **Tamanho**: Máximo 10MB por vídeo
- **Qualidade**: Boa qualidade, mas otimizada para web

### 🎬 Conteúdo dos vídeos:
- **Calculadora**: Demonstre as operações básicas (soma, subtração, multiplicação, divisão)
- **Plano Cartesiano**: Mostre a plotagem de pontos e funções
- **Paint**: Demonstre as ferramentas de desenho e manipulação

## 📸 Imagens

### Arquivos necessários:
1. **FotoPerfil.jpeg** - Sua foto profissional
2. **Curriculo.jpeg** - Seu currículo em PDF convertido para imagem

### 📋 Especificações recomendadas:
- **Formato**: JPEG ou PNG
- **Resolução**: Mínimo 400x400px
- **Tamanho**: Máximo 2MB por imagem
- **Qualidade**: Boa resolução, fundo neutro

## 🚀 Como adicionar os arquivos:

1. **Copie os arquivos** para a pasta `public/Images/`
2. **Verifique os nomes** - devem ser exatamente como especificado acima
3. **Teste o site** - execute `npm start` para verificar se os vídeos carregam

## 🔧 Estrutura de pastas final:
```
public/
├── Images/
│   ├── ProjetoCalculadora.mp4
│   ├── ProjetoPlanoCartesiano.mp4
│   ├── ProjetoPaint.mp4
│   ├── FotoPerfil.jpeg
│   └── Curriculo.jpeg
├── index.html
└── ...
```

## ⚡ Dicas de otimização:

### Para vídeos:
- Use ferramentas como HandBrake para comprimir
- Configure bitrate baixo (1-2 Mbps)
- Use resolução 720p para melhor performance

### Para imagens:
- Use ferramentas como TinyPNG para comprimir
- Converta para WebP se possível (melhor compressão)
- Mantenha proporção quadrada para foto de perfil

## 🎯 Funcionalidades implementadas:

✅ **Vídeos automáticos**: Reproduzem ao passar o mouse
✅ **Botão de play**: Para reproduzir manualmente
✅ **Responsivo**: Funciona em mobile e desktop
✅ **Fallback**: Mostra ícone se vídeo não carregar
✅ **Otimizado**: Carregamento lazy e performance

## 📱 Teste em diferentes dispositivos:

- **Desktop**: Vídeos em hover e clique
- **Mobile**: Botão de play para reproduzir
- **Tablet**: Interface adaptada

---

**Próximo passo**: Adicione os arquivos de mídia e teste o portfólio! 🚀
