function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
        " A maquiagem é uma forma de criatividade e expressão pessoal!";
}

function responder(resposta) {
    const resultado = document.getElementById("resultado");

    if (resposta === "batom") {
        resultado.innerHTML = " Parabéns! Você acertou!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = " Quase! A resposta correta é Batom.";
        resultado.style.color = "red";
    }
}
