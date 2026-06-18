const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`\n╔════════════════════════════════════════════╗`);
    console.log(`║  💕 SITE NAMORADOS RODANDO COM SUCESSO! 💕║`);
    console.log(`╠════════════════════════════════════════════╣`);
    console.log(`║  🌐 http://localhost:${PORT}                   ║`);
    console.log(`║  📁 Abra seu navegador para começar        ║`);
    console.log(`║  🛑 Pressione Ctrl+C para parar o servidor ║`);
    console.log(`╚════════════════════════════════════════════╝\n`);
    
    // Abrir automaticamente no navegador
    open(`http://localhost:${PORT}`);
});