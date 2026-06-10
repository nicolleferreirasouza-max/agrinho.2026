// ============================================
// PROJETO AGRINHO 2026 - CAMPO CONSCIENTE
// FUNCIONALIDADES INTERATIVAS EM JAVASCRIPT
// ============================================

// ===== 1. SISTEMA DE ABAS (FUNCIONALIDADE PRINCIPAL) =====
// Quando o usuário clica em uma aba, o conteúdo correspondente aparece

// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões das abas
    const botoesAba = document.querySelectorAll('.aba-btn');
    // Seleciona todas as seções de conteúdo das abas
    const conteudosAba = document.querySelectorAll('.aba-conteudo');
    
    // Para cada botão, adiciona um evento de clique
    botoesAba.forEach(botao => {
        botao.addEventListener('click', function() {
            // Pega o nome da aba que foi clicada (ex: "inicio", "saude")
            const nomeAba = this.getAttribute('data-aba');
            
            // 1. Remove a classe 'ativo' de todos os botões
            botoesAba.forEach(btn => {
                btn.classList.remove('ativo');
            });
            
            // 2. Adiciona a classe 'ativo' apenas no botão clicado
            this.classList.add('ativo');
            
            // 3. Esconde todas as seções de conteúdo
            conteudosAba.forEach(conteudo => {
                conteudo.classList.remove('ativa');
            });
            
            // 4. Mostra apenas a seção correspondente à aba clicada
            const secaoAtiva = document.getElementById(`aba-${nomeAba}`);
            if (secaoAtiva) {
                secaoAtiva.classList.add('ativa');
            }
        });
    });
    
    // ===== 2. SISTEMA DE ACESSIBILIDADE =====
    
    // Elementos do painel de acessibilidade
    const botaoAcessibilidade = document.getElementById('botaoAcessibilidade');
    const painelAcessibilidade = document.getElementById('painelAcessibilidade');
    const aumentarFonteBtn = document.getElementById('aumentarFonte');
    const diminuirFonteBtn = document.getElementById('diminuirFonte');
    const altoContrasteBtn = document.getElementById('altoContraste');
    const resetarBtn = document.getElementById('resetar');
    
    // Controle de estado do alto contraste
    let altoContrasteAtivo = false;
    
    // Abrir/fechar painel de acessibilidade
    botaoAcessibilidade.addEventListener('click', function() {
        painelAcessibilidade.classList.toggle('aberto');
    });
    
    // Fechar painel se clicar fora (opcional)
    document.addEventListener('click', function(evento) {
        if (!painelAcessibilidade.contains(evento.target) && !botaoAcessibilidade.contains(evento.target)) {
            painelAcessibilidade.classList.remove('aberto');
        }
    });
    
    // AUMENTAR FONTE
    let tamanhoFonteAtual = 16; // tamanho padrão em pixels
    
    function aplicarTamanhoFonte() {
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    }
    
    aumentarFonteBtn.addEventListener('click', function() {
        if (tamanhoFonteAtual < 24) { // limite máximo
            tamanhoFonteAtual += 2;
            aplicarTamanhoFonte();
        }
    });
    
    // DIMINUIR FONTE
    diminuirFonteBtn.addEventListener('click', function() {
        if (tamanhoFonteAtual > 12) { // limite mínimo
            tamanhoFonteAtual -= 2;
            aplicarTamanhoFonte();
        }
    });
    
    // ALTO CONTRASTE
    altoContrasteBtn.addEventListener('click', function() {
        if (!altoContrasteAtivo) {
            document.body.classList.add('alto-contraste');
            altoContrasteAtivo = true;
            altoContrasteBtn.textContent = '🎨 Desativar contraste';
        } else {
            document.body.classList.remove('alto-contraste');
            altoContrasteAtivo = false;
            altoContrasteBtn.textContent = '🎨 Alto contraste';
        }
    });
    
    // RESETAR (volta fonte ao normal e desativa alto contraste)
    resetarBtn.addEventListener('click', function() {
        // Resetar fonte
        tamanhoFonteAtual = 16;
        aplicarTamanhoFonte();
        
        // Desativar alto contraste se estiver ativo
        if (altoContrasteAtivo) {
            document.body.classList.remove('alto-contraste');
            altoContrasteAtivo = false;
            altoContrasteBtn.textContent = '🎨 Alto contraste';
        }
    });
    
    // ===== 3. FUNCIONALIDADE EXTRA: Dicas aleatórias (conteúdo educativo) =====
    // Criando uma função que exibe uma dica diferente a cada 30 segundos
    
    const dicasSustentaveis = [
        "💚 Lave bem frutas e verduras com água corrente e uma colher de bicarbonato para remover resíduos de agrotóxicos.",
        "🌱 Prefira alimentos orgânicos! Eles são livres de agrotóxicos sintéticos.",
        "🐞 Joaninhas são aliadas da natureza: cada uma pode comer até 50 pulgões por dia!",
        "🍃 Cultivar uma horta caseira sem veneno é mais fácil do que você imagina.",
        "💧 Agrotóxicos contaminam a água potável. Proteger os rios é proteger a sua saúde.",
        "🐝 Uma única colher de mel representa o trabalho de 12 abelhas durante toda a vida delas. Proteja as abelhas!",
        "🌽 Milho orgânico não é transgênico e não usa agrotóxicos proibidos na Europa.",
        "📢 Exija alimentos mais saudáveis: o consumidor tem poder de mudar o mercado!"
    ];
    
    let indiceDica = 0;
    
    // Função para mostrar dica no console (para o desenvolvedor)
    function mostrarDicaNoConsole() {
        console.log(`🌿 DICA DO CAMPO CONSCIENTE: ${dicasSustentaveis[indiceDica]}`);
        indiceDica = (indiceDica + 1) % dicasSustentaveis.length;
    }
    
    // Exibe uma dica a cada 30 segundos no console
    setInterval(mostrarDicaNoConsole, 30000);
    
    // Mostra uma dica inicial ao carregar a página
    console.log('🌿 BEM-VINDO AO CAMPO CONSCIENTE! 🌿');
    console.log(`💚 DICA: ${dicasSustentaveis[0]}`);
    
    // ===== 4. FUNCIONALIDADE BÔNUS: Animação suave ao clicar =====
    // Adiciona um pequeno feedback visual ao clicar nos botões
    
    const todosBotoes = document.querySelectorAll('button');
    todosBotoes.forEach(botao => {
        botao.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    console.log('✅ Site Campo Consciente carregado com sucesso!');
    console.log('📌 Funcionalidades: Sistema de abas + Acessibilidade + Dicas educativas');
});
