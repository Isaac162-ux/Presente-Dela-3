# 💕 Site Dia dos Namorados 💕

Um website lindo e interativo para celebrar o Dia dos Namorados com features modernas e animações sofisticadas!

## ✨ Features

- 🎨 **Design Responsivo e Moderno** - Funciona perfeito em desktop, tablet e mobile
- 💫 **Animações Sofisticadas** - Efeitos visuais elegantes em toda a página
- 🌙 **Dark Mode** - Tema escuro para melhor experiência noturna
- ⏱️ **Contador Regressivo** - Acompanhe quantos dias faltam para o dia especial
- 🖼️ **Galeria Interativa** - Showcase de imagens especiais
- 💌 **Sistema de Mensagens** - Deixe mensagens que são armazenadas localmente
- 🎁 **Ideias de Presentes** - Sugestões criativas para presentear
- 📱 **Mobile First** - Totalmente otimizado para dispositivos móveis
- 🎵 **Efeitos Interativos** - Corações flutuantes ao clicar
- ⚡ **Performance** - Carregamento rápido e smooth scrolling

## 🚀 Como Rodar

### Pré-requisitos
- Node.js instalado (download em https://nodejs.org)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Isaac162-ux/Isaac162-ux-site-namorados.git
   cd Isaac162-ux-site-namorados
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor**
   ```bash
   npm start
   ```

4. **Pronto!** 🎉
   - O navegador abrirá automaticamente em `http://localhost:3000`
   - Se não abrir, acesse manualmente no seu navegador

### Parar o Servidor
Pressione `Ctrl + C` no terminal

## 📁 Estrutura do Projeto

```
Isaac162-ux-site-namorados/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # JavaScript e interatividades
├── server.js           # Servidor Express
├── package.json        # Dependências do projeto
└── README.md           # Este arquivo
```

## 🎨 Seções do Site

1. **Hero Section** - Introdução com animações flutuantes
2. **Contador Regressivo** - Dias, horas, minutos e segundos faltando
3. **Galeria** - Imagens e ícones especiais
4. **Mensagens** - Deixe sua mensagem especial
5. **Ideias de Presentes** - 6 ideias criativas de presentes
6. **Dark Mode** - Tema claro/escuro

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Animações, gradientes e layout responsivo
- **JavaScript Vanilla** - Interatividades sem dependências externas
- **Express.js** - Servidor web leve
- **LocalStorage** - Armazenamento de mensagens no navegador

## 🌟 Personalizações

### Mudar Data Alvo
No arquivo `js/script.js`, altere a linha:
```javascript
const dataAlvo = new Date('February 14, 2026 00:00:00').getTime();
```

### Adicionar Imagens Reais
Edite o `index.html` e substitua os ícones por URLs de imagens reais nas seções da galeria.

### Personalizar Cores
No arquivo `css/style.css`, modifique as variáveis CSS:
```css
:root {
    --primary-color: #ff1744;
    --secondary-color: #ff4081;
    --accent-color: #f50057;
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (abaixo de 768px)

## 🚫 Troubleshooting

**Erro: "npm: command not found"**
- Instale o Node.js a partir de https://nodejs.org

**Porta 3000 já está em uso**
- Edite o `server.js` e altere a variável `PORT`

**Navegador não abre automaticamente**
- Acesse `http://localhost:3000` manualmente

## 📝 Licença

MIT License - Sinta-se livre para usar este projeto!

## 💝 Créditos

Criado com ❤️ para celebrar o Dia dos Namorados

---

**Divirta-se criando seu site especial!** 💕✨