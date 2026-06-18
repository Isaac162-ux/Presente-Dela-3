// ===========================
// CONFIGURAÇÃO 
// ===========================
const CONFIG = {
    // NOMES - 
    seuNome: "Isaac",
    nomeAmado: "Carol",

    // FOTOS 
    fotos: [
        "fotos.vd/14.jpeg",
        "fotos.vd/11.mp4",
        "fotos.vd/6.jpeg",
        "fotos.vd/8.jpeg",
        "fotos.vd/10.jpeg",
        "fotos.vd/7.jpeg",
        "fotos.vd/13.jpeg",
        "fotos.vd/5.jpeg",
        "fotos.vd/4.jpeg",
        "fotos.vd/3.jpeg",
        "fotos.vd/2.jpeg",
        "fotos.vd/12.mp4",
        "fotos.vd/15.mp4",
        "fotos.vd/1.jpeg",
        "fotos.vd/16.mp4",
        "fotos.vd/17.mp4"
        
    ],

    // LINK DA MÚSICA 
    musicaUrl: "aduiomp3/foi assim (online-audio-converter.com).mp3",
};

// ===========================
// ATUALIZAR NOMES NA PÁGINA
// ===========================
function atualizarNomes() {
    document.querySelectorAll('span.name-left').forEach(el => {
        el.textContent = CONFIG.seuNome;
    });
    document.querySelectorAll('span.name-right').forEach(el => {
        el.textContent = CONFIG.nomeAmado;
    });
    document.querySelectorAll('p.mensagem-nome').forEach(el => {
        el.innerHTML = `${CONFIG.seuNome} ❤️`;
    });
}

// ===========================
// 100 MOTIVOS
// ===========================
const cent_motivos = [
  "Seu sorriso perfeito",
  "A nossa sintonia que se encaixa perfeitamente",
  "Sua lealdade inquestionável",
  "O fato de você sempre estar ao meu lado",
  "A beleza dos seus olhos lindos",
  "Sua inteligência incrível",
  "A gentileza que você tem com todos ao redor",
  "Sua paciência infinita comigo",
  "Sua sinceridade transparente",
  "O toque de suas mãos macias",
  "Sua risada contagiante que ilumina o ambiente",
  "Ver que você sempre acredita em mim",
  "Seu coração puro e generoso",
  "Sua força e determinação",
  "O dom de me inspirar a ser alguém melhor",
  "O seu cheiro único que me acalma",
  "Seus abraços calorosos",
  "O modo como me ouve sempre com toda a atenção",
  "A forma como você me beija",
  "Sua energia positiva",
  "As surpresas que você me faz constantemente",
  "Seus sonhos incríveis",
  "Sua ambição e dedicação",
  "Ser minha melhor amiga e o meu grande amor",
  "Como você me entende só pelo olhar",
  "O silêncio confortável que existe entre nós",
  "Como você me apoia nos meus sonhos",
  "Me fazer sonhar acordado",
  "Seus gestos de amor",
  "Sua autenticidade total",
  "Sua honestidade constante comigo",
  "Seu companheirismo em todos os momentos",
  "Me desafiar a crescer",
  "Nossos momentos especiais",
  "Toda a sua beleza",
  "Seu otimismo",
  "Me fazer sentir o cara mais seguro do mundo",
  "Seus cachos lindos",
  "Sua voz relaxante",
  "Seu apoio em tudo",
  "Nossos planos futuros",
  "Ser meu porto seguro e refúgio",
  "A atenção que você me dá ao me ouvir",
  "Me amar como ninguém",
  "O nosso amor inexplicável",
  "Deixar-me ser eu mesmo",
  "Seus pequenos gestos",
  "Seu espírito livre e alegre",
  "Seu espírito batalhador",
  "Seu esforço para me ver feliz",
  "Me confortar sempre",
  "Ser minha motivação",
  "Seu senso de humor",
  "O privilégio de saber que vamos envelhecer lado a lado",
  "Suas prioridades claras",
  "Me fazer sentir especial",
  "Seus talentos",
  "Seus beijos na testa",
  "Nossos risos juntos",
  "Sua paixão por mim",
  "Nossos passeios sem destino",
  "Seus sonhos grandes",
  "Me fazer feliz",
  "Sua coragem",
  "Nossas conversas profundas",
  "Seus abraços apertados",
  "Sua confiança em mim",
  "Seu amor incondicional",
  "Seus planos conosco",
  "Sua sensibilidade",
  "Seus cuidados",
  "Sua integridade",
  "Amar assistir a filmes e séries juntos contigo",
  "O jeito único que você arruma o cabelo",
  "O estilo de como você se veste",
  "Sua generosidade",
  "Seu lado criança e brincalhão",
  "Defender suas opiniões firmes",
  "Sua compreensão",
  "Seus olhares apaixonados",
  "Ser meu amor verdadeiro",
  "Cada dia contigo",
  "A paz que você me traz",
  "Ser tudo para mim",
  "Me fazer viver de verdade",
  "Nosso forever",
  "Você ser exatamente quem você é, simplesmente por existir",
  "Eu simplesmente te amar",
  "A calmaria que sinto quando seguro sua mão",
  "As nossas piadas de casal que só nós dois achamos graça",
  "O orgulho imenso que sinto de você todos os dias",
  "Sua capacidade de tornar qualquer dia comum em algo inesquecível",
  "O frio na barriga que ainda sinto quando te vejo chegar",
  "Como você cuida de mim quando eu chego cansado",
  "A paz de te ver dormindo tranquila do meu lado",
  "Sua mania de me mandar mensagens do nada só para dizer que me ama",
  "A forma como você comemora as minhas vitórias como se fossem suas",
  "Seu jeitinho tímido quando te elogio muito",
  "A certeza de que meu lugar favorito no mundo é dentro do seu abraço",
  "O brilho no seu olho quando você fala de algo que ama",
  "Ganhar cafuné seu depois de um dia longo",
  "E de saber que meu amor por você é oque me motiva todos os dias, até o fim deles",
];

// ===========================
// DARK MODE
// ===========================
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    if (darkModeBtn) darkModeBtn.textContent = '☀️';
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeBtn.textContent = '🌙';
        }
    });
}

// ===========================
// SISTEMA DE ABAS
// ===========================
function inicializarAbas() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const navTabs = document.querySelector('.nav-tabs');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = document.getElementById(tabId);
            if (targetTab) targetTab.classList.add('active');

            // Fechar o menu mobile ao clicar numa aba
            if (navTabs && window.innerWidth <= 768) {
                navTabs.classList.remove('active');
            }
        });
    });
}

// ===========================
// GALERIA DE FOTOS 
// ===========================
let currentPhotoIndex = 0;

function inicializarGaleria() {
    const galeriaiItens = document.querySelectorAll('.galeria-item');
    const modal = document.getElementById('foto-modal');
    const modalContainer = modal ? modal.querySelector('.modal-content') || modal : null;
    const closeModal = document.querySelector('.close-modal');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');

    // Função auxiliar para verificar se o arquivo é um vídeo
    const eVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.includes('video'));

    // Carregar fotos na galeria principal
    galeriaiItens.forEach((item, index) => {
        if (!CONFIG.fotos[index]) return;

        // Limpa o item para inserirmos dinamicamente (evita problemas se era originalmente apenas <img>)
        item.innerHTML = '';

        if (eVideo(CONFIG.fotos[index])) {
            const video = document.createElement('video');
            video.src = CONFIG.fotos[index];
            video.className = 'galeria-img';
            video.muted = true;
            video.autoplay = false;
            video.style.objectFit = 'cover';
            video.style.width = '100%';
            video.style.height = '100%';
            item.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = CONFIG.fotos[index];
            img.className = 'galeria-img';
            img.onerror = function () {
                this.src = 'https://via.placeholder.com/400x400?text=Erro+ao+carregar';
            };
            item.appendChild(img);
        }

        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentPhotoIndex = index;
            abrirFoto(index);
        });
    });

    function abrirFoto(index) {
        if (!modal || !CONFIG.fotos[index]) return;

        // Procura ou cria o elemento de exibição dentro do modal
        let displayEl = document.getElementById('modal-img-display');

        if (displayEl) {
            const pai = displayEl.parentElement;
            displayEl.remove();

            if (eVideo(CONFIG.fotos[index])) {
                displayEl = document.createElement('video');
                displayEl.controls = true;
                displayEl.autoplay = true;
            } else {
                displayEl = document.createElement('img');
            }
            displayEl.id = 'modal-img-display';
            pai.appendChild(displayEl);
        }

        displayEl.src = CONFIG.fotos[index];
        modal.classList.add('show');
    }

    function fecharFoto() {
        if (modal) {
            modal.classList.remove('show');
            // Pausa o vídeo se o modal fechar
            const displayEl = document.getElementById('modal-img-display');
            if (displayEl && displayEl.tagName === 'VIDEO') {
                displayEl.pause();
            }
        }
    }

    function proximaFoto(e) {
        e.preventDefault();
        currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.fotos.length;
        abrirFoto(currentPhotoIndex);
    }

    function fotoAnterior(e) {
        e.preventDefault();
        currentPhotoIndex = (currentPhotoIndex - 1 + CONFIG.fotos.length) % CONFIG.fotos.length;
        abrirFoto(currentPhotoIndex);
    }

    if (closeModal) closeModal.addEventListener('click', fecharFoto);
    if (modalNext) modalNext.addEventListener('click', proximaFoto);
    if (modalPrev) modalPrev.addEventListener('click', fotoAnterior);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharFoto();
        }
    });

    // Atualizar carrossel dinâmico
    const carrosselWrapper = document.getElementById('carrossel-wrapper');
    if (carrosselWrapper) {
        carrosselWrapper.innerHTML = '';
        CONFIG.fotos.forEach(foto => {
            if (eVideo(foto)) {
                const video = document.createElement('video');
                video.src = foto;
                video.className = 'carrossel-img';
                video.muted = true;
                video.loop = true;
                video.autoplay = true;
                carrosselWrapper.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = foto;
                img.alt = 'Momento';
                img.className = 'carrossel-img';
                img.onerror = function () {
                    this.src = 'https://via.placeholder.com/600x400?text=Foto';
                };
                carrosselWrapper.appendChild(img);
            }
        });
    }
}

// ===========================
// 100 MOTIVOS
// ===========================
function inicializarMotivos() {
    const motivosGrid = document.getElementById('motivos-grid');
    const revealBtn = document.getElementById('reveal-btn');
    let motivosVisiveis = 10;

    if (!motivosGrid) return;

    function renderizarMotivos() {
        motivosGrid.innerHTML = '';
        cent_motivos.slice(0, motivosVisiveis).forEach((motivo, index) => {
            const card = document.createElement('div');
            card.className = 'motivo-card';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="motivo-numero">💕</div>
                <div class="motivo-texto">${motivo}</div>
            `;
            motivosGrid.appendChild(card);
        });
    }

    renderizarMotivos();

    if (revealBtn) {
        revealBtn.addEventListener('click', (e) => {
            e.preventDefault();
            motivosVisiveis += 10;
            if (motivosVisiveis >= cent_motivos.length) {
                revealBtn.style.display = 'none';
            }
            renderizarMotivos();
        });
    }
}

// ===========================
// MÚSICA
// ===========================
function inicializarMusica() {
    const playBtn = document.getElementById('play-btn');
    const audioPlayer = document.getElementById('audio-player');
    const carrossel = document.getElementById('carrossel-wrapper');

    if (!playBtn || !audioPlayer) return;

    if (CONFIG.musicaUrl) {
        audioPlayer.src = CONFIG.musicaUrl;
    }

    // Carrossel começa parado
    if (carrossel) {
        carrossel.style.animationPlayState = 'paused';
    }

    playBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (audioPlayer.paused) {
            audioPlayer.play().catch(error => {
                console.error('Erro ao tocar música:', error);
            });

            playBtn.textContent = '⏸️ Pausar Música';

            if (carrossel) {
                carrossel.style.animationPlayState = 'running';
            }

        } else {
            audioPlayer.pause();

            playBtn.textContent = '▶️ Tocar Música';

            if (carrossel) {
                carrossel.style.animationPlayState = 'paused';
            }
        }
    });

    audioPlayer.addEventListener('ended', () => {
        playBtn.textContent = '▶️ Tocar Música';

        if (carrossel) {
            carrossel.style.animationPlayState = 'paused';
        }
    });
}

// ===========================
// SMOOTH SCROLL (abas)
// ===========================
function scrollParaAba(tabId) {
    const tabBtn = document.querySelector(`[data-tab="${tabId}"]`);
    if (tabBtn) {
        tabBtn.click();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===========================
// HAMBÚRGUER MENU 
// ===========================
function inicializarHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navTabs = document.querySelector('.nav-tabs');

    if (hamburger && navTabs) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            navTabs.classList.toggle('active');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navTabs.classList.contains('active')) {
                navTabs.classList.remove('active');
            }
        });

        // Fechar menu ao redimensionar a janela
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navTabs.classList.remove('active');
            }
        });
    }
}

// ===========================
// CORAÇÕES FLUTUANTES
// ===========================
document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' &&
        e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        const x = e.clientX;
        const y = e.clientY;

        const heart = document.createElement('span');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '30px';
        heart.style.opacity = '1';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';

        document.body.appendChild(heart);

        const duration = 2000;
        const startTime = Date.now();

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                heart.style.transform = `translateY(${-progress * 100}px)`;
                heart.style.opacity = 1 - progress;
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        }

        animate();
    }
});

// ===========================
// PARALLAX EFFECT
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingHearts = document.querySelectorAll('.heart');

    floatingHearts.forEach((heart, index) => {
        heart.style.transform = `translateY(${scrolled * 0.5 * (index + 1)}px)`;
    });
});

// ===========================
// INICIALIZAR TUDO
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    atualizarNomes();
    inicializarAbas();
    inicializarGaleria();
    inicializarMotivos();
    inicializarMusica();
    inicializarHamburger();
});
