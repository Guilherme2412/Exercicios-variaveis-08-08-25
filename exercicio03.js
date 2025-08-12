function apagarLuzes() {
    let resposta = prompt("Gostaria de apagar as luzes? (sim ou não)").toLowerCase();

    if (resposta === "sim" || resposta === "s") {
        document.body.style.backgroundColor = "#000000ff"; // Fundo escuro
        document.body.style.color = "white"; // Texto claro
    } else {
        document.body.style.backgroundColor = "white"; // Fundo padrão
        document.body.style.color = "black"; // Texto padrão
    }
}

// 1️⃣ Maioridade
function exercicio01() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
}

// 2️⃣ Par ou ímpar
function exercicio02() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }
}

// 3️⃣ Aprovado ou reprovado
function exercicio03() {
    let nota = parseFloat(prompt("Digite a nota:"));

    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// 4️⃣ Senha correta
function exercicio04() {
    let senha = prompt("Digite a senha:");
    const senhaCorreta = "1234";

    if (senha === senhaCorreta) {
        console.log("Acesso permitido");
    } else {
        console.log("Senha incorreta");
    }
}

// 5️⃣ Promoção de desconto
function exercicio05() {
    let valor = parseFloat(prompt("Digite o valor da compra:"));

    if (valor > 100) {
        console.log("Você ganhou um desconto de 10%");
    } else {
        console.log("Sem desconto disponível");
    }
}

// 6️⃣ Classificação de idade
function exercicio06() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 59) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}

// 7️⃣ Maior de dois números
function exercicio07() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        console.log(`O maior número é ${num1}`);
    } else if (num2 > num1) {
        console.log(`O maior número é ${num2}`);
    } else {
        console.log("Os números são iguais");
    }
}

// 8️⃣ Número positivo, negativo ou zero
function exercicio08() {
    let numero = parseFloat(prompt("Digite um número:"));

    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

// 9️⃣ Aprovado, recuperação ou reprovado
function exercicio09() {
    let media = parseFloat(prompt("Digite a média final:"));

    if (media >= 7) {
        console.log("Aprovado");
    } else if (media >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

// 🔟 Múltiplo de 3 e/ou 5
function exercicio10() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("Múltiplo de 3 e 5");
    } else if (numero % 3 === 0) {
        console.log("Múltiplo de 3");
    } else if (numero % 5 === 0) {
        console.log("Múltiplo de 5");
    } else {
        console.log("Não é múltiplo de 3 nem de 5");
    }
}

// 1️⃣1️⃣ Acesso a evento
function exercicio11() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let ingresso = prompt("Possui ingresso? (sim ou não)").toLowerCase();

    if (idade >= 18 && ingresso === "sim") {
        console.log("Entrada permitida");
    } else {
        console.log("Entrada negada");
    }
}

// 1️⃣2️⃣ Bônus de compra
function exercicio12() {
    let valor = parseFloat(prompt("Digite o valor da compra:"));
    let vip = prompt("Você é cliente VIP? (sim ou não)").toLowerCase();

    if (valor > 200 || vip === "sim") {
        console.log("Você ganhou um brinde!");
    } else {
        console.log("Sem bônus disponível");
    }
}

// 1️⃣3️⃣ Senha e usuário
function exercicio13() {
    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario === "admin" && senha === "1234") {
        console.log("Login bem-sucedido");
    } else {
        console.log("Usuário ou senha inválidos");
    }
}

// 1️⃣4️⃣ Triângulo válido
function exercicio14() {
    let lado1 = parseFloat(prompt("Digite o lado 1:"));
    let lado2 = parseFloat(prompt("Digite o lado 2:"));
    let lado3 = parseFloat(prompt("Digite o lado 3:"));

    if (
        lado1 + lado2 > lado3 &&
        lado1 + lado3 > lado2 &&
        lado2 + lado3 > lado1
    ) {
        console.log("Triângulo válido");
    } else {
        console.log("Triângulo inválido");
    }
}

// 1️⃣5️⃣ Ano bissexto
function exercicio15() {
    let ano = parseInt(prompt("Digite um ano:"));

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log("Ano bissexto");
    } else {
        console.log("Ano comum");
    }
}
