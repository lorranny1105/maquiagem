import { perguntas } from "./perguntas.js";

import { embaralhar } from "./aleatorio.js";


const telaInicial =
    document.querySelector(".tela-inicial");

const iniciarBtn =
    document.querySelector(".iniciar-btn");

const quiz =
    document.querySelector(".quiz");

const caixaPerguntas =
    document.querySelector(".caixa-perguntas");

const caixaAlternativas =
    document.querySelector(".caixa-alternativas");

const caixaResultado =
    document.querySelector(".caixa-resultado");

const textoResultado =
    document.querySelector(".texto-resultado");

const novamenteBtn =
    document.querySelector(".novamente-btn");


let perguntasDoJogo = [];

let perguntaAtual = 0;

let pontos = 0;


/* COMEÇAR */

iniciarBtn.addEventListener(
    "click",
    iniciarQuiz
);


function iniciarQuiz() {

    telaInicial.style.display = "none";

    caixaResultado.style.display = "none";

    quiz.style.display = "block";

    perguntasDoJogo =
        embaralhar([...perguntas]);

    perguntaAtual = 0;

    pontos = 0;

    mostrarPergunta();
}


/* MOSTRAR PERGUNTA */

function mostrarPergunta() {

    if (
        perguntaAtual >=
        perguntasDoJogo.length
    ) {

        mostrarResultado();

        return;
    }


    const pergunta =
        perguntasDoJogo[perguntaAtual];


    caixaPerguntas.textContent =
        pergunta.pergunta;


    caixaAlternativas.innerHTML = "";


    pergunta.alternativas.forEach(
        alternativa => {

            const botao =
                document.createElement("button");


            botao.textContent =
                alternativa;


            botao.addEventListener(
                "click",
                () => responder(alternativa)
            );


            caixaAlternativas.appendChild(
                botao
            );

        }
    );
}


/* RESPONDER */

function responder(alternativa) {

    const pergunta =
        perguntasDoJogo[perguntaAtual];


    if (
        alternativa ===
        pergunta.resposta
    ) {

        pontos++;

    }


    perguntaAtual++;

    mostrarPergunta();
}


/* RESULTADO */

function mostrarResultado() {

    quiz.style.display = "none";

    caixaResultado.style.display = "block";


    const total =
        perguntasDoJogo.length;


    let mensagem;


    if (pontos === total) {

        mensagem =
            "🏆 Perfeito! Você acertou tudo!";

    } else if (pontos >= total * 0.7) {

        mensagem =
            "💄 Muito bem! Você entende bastante de maquiagem!";

    } else if (pontos >= total * 0.5) {

        mensagem =
            "✨ Bom trabalho! Você está aprendendo!";

    } else {

        mensagem =
            "🌸 Continue estudando e tente novamente!";

    }


    textoResultado.innerHTML = `

        ${mensagem}

        <br><br>

        Você acertou

        <strong>
            ${pontos}
        </strong>

        de

        <strong>
            ${total}
        </strong>

        perguntas!

    `;
}


/* JOGAR NOVAMENTE */

novamenteBtn.addEventListener(
    "click",
    iniciarQuiz
);
