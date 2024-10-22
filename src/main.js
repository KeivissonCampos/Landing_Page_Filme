document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');
    const gameButtons = document.querySelectorAll('.button_game');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocutaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    // Seção de atrações. Programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            // Esconde todas as abas antes de mostrar a aba alvo
            escondeTodasAbas();

            // Mostra a aba alvo
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

    // Seção FAQ. Accordions
    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', abreOuFechaResposta);
    }

    // Seção de escolha de cenas. Lógica de jogo
    const sceneButtons = document.querySelectorAll('.button');
    const coupon = document.getElementById('coupon');

    // Adiciona eventos de clique aos botões de cena
    for (let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].addEventListener('click', function (event) {
            const isCorrect = event.target.dataset.correct === "true"; // Verifica se é a cena correta
            checkScene(isCorrect, event.target); // Passa o botão clicado
        });
    }

    function checkScene(isCorrect, button) {
        // Altera a cor dos botões após o primeiro clique
        changeButtonColors();

        if (isCorrect) {
            alert("Parabéns! Você escolheu a cena correta. Seu código de desconto é: DESCONTO10");
            coupon.classList.remove('hidden'); // Exibe o cupom
        } else {
            alert('Ops! Cena errada. Você precisa assistir mais filmes, clique em ASSISTIR AGORA.');
        }
    }

    function changeButtonColors() {
        // Altera a cor apenas dos botões 'button_game'
        for (let i = 0; i < gameButtons.length; i++) {
            gameButtons[i].style.visibility = 'hidden';
        }
    }

});

function ocutaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContent = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('shows__list--is-active');
    }
}
