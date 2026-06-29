// Seleciona os elementos da página

let botaoTema = document.getElementById("tema");
let formulario = document.getElementById("formContato");

// Alternar entre tema claro e escuro

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        botaoTema.innerHTML = "☀️";

    } else {

        botaoTema.innerHTML = "🌙";

    }

});

// Validação do formulário

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos.");
        return;

    }

    // Verifica se o e-mail possui um formato válido

    let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validarEmail.test(email)) {

        alert("Digite um e-mail válido.");
        return;

    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});