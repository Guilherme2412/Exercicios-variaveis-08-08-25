// 1️⃣ Cadastro simples
function exercicio01() {
    let nome = "Guilherme";
    let idade = 20;
    let altura = 1.78;

    console.log("Olá meu nome é", nome, "minha idade é", idade, "e minha altura é", altura);
}


// 2️⃣ Calculando idade futura
function exercicio02() {
    let idadeAtual = Number(prompt("Digite sua idade atual:"));
    let idadeFutura = idadeAtual + 5;
    console.log("Daqui a 5 anos você terá", idadeFutura, "anos.");
}

// 3️⃣ Conversão de moedas
function exercicio03() {
    let reais = Number(prompt("Digite um valor em reais:"));
    let dolares = reais / 5; // taxa fixa
    console.log("O valor em dólares é US$", dolares.toFixed(2));
}

// 4️⃣ Luz acesa?
function exercicio04() {
    let luzAcesa = false;
    let opcao = prompt("Digite 1 para acender a luz ou 0 para apagar:");

    if (opcao == "1") {
        luzAcesa = true;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        luzAcesa = false;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    console.log(luzAcesa ? "A luz está acesa" : "A luz está apagada");
}


// Função genérica para interpretar números com vírgula, ponto, unidades, etc.
function parseFlexibleNumber(input) {
    if (input === null) return NaN;
    let s = String(input).trim();
    if (s === "") return NaN;

    // mantém apenas dígitos, ponto, vírgula e sinal de menos
    s = s.replace(/[^0-9.,-]/g, "");

    // trata sinal de menos apenas no início
    let sign = "";
    if (s.startsWith("-")) {
        sign = "-";
        s = s.slice(1);
    }
    s = s.replace(/-/g, "");

    const hasDot = s.includes(".");
    const hasComma = s.includes(",");

    if (hasDot && hasComma) {
        if (s.lastIndexOf(",") > s.lastIndexOf(".")) {
            s = s.replace(/\./g, "").replace(/,/g, ".");
        } else {
            s = s.replace(/,/g, "");
        }
    } else if (hasComma) {
        if (s.split(",").length > 2) {
            s = s.replace(/,/g, "");
        } else {
            s = s.replace(",", ".");
        }
    } else if (hasDot) {
        if (s.split(".").length > 2) {
            s = s.replace(/\./g, "");
        }
    }

    const finalStr = sign + s;
    const num = Number(finalStr);
    return isNaN(num) ? NaN : num;
}

// 5️⃣ Cálculo de área de retângulo
function exercicio05() {
    const largura = parseFlexibleNumber(prompt("Digite a largura do retângulo (ex: 40, 40m ou 40 metros):"));
    const altura = parseFlexibleNumber(prompt("Digite a altura do retângulo (ex: 20, 20m ou 20 metros):"));

    if (isNaN(largura) || isNaN(altura)) {
        console.log("Por favor, digite valores válidos.");
    } else {
        const area = largura * altura;
        console.log(`A área do retângulo é ${area} metros quadrados.`);
    }
}

// 6️⃣ Média de notas
function exercicio06() {
    const n1 = parseFlexibleNumber(prompt("Digite a primeira nota (ex: 8.5 ou 8,5):"));
    const n2 = parseFlexibleNumber(prompt("Digite a segunda nota (ex: 7.0 ou 7,0):"));
    const n3 = parseFlexibleNumber(prompt("Digite a terceira nota (ex: 9 ou 9,0):"));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        console.log("Por favor, digite três notas numéricas válidas.");
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    console.log(`A média das notas é ${media.toFixed(2)}`);
}

// 7️⃣ Desconto no produto
function exercicio07() {
    const preco = parseFlexibleNumber(prompt("Digite o preço original do produto (ex: 100, 100.50):"));
    const desconto = parseFlexibleNumber(prompt("Digite a porcentagem de desconto (ex: 10%, -5%):"));

    if (isNaN(preco) || isNaN(desconto)) {
        console.log("Por favor, insira valores válidos.");
        return;
    }

    const valorFinal = preco - (preco * (desconto / 100));
    console.log(`O valor final com desconto é R$ ${valorFinal.toFixed(2)}`);
}

// 8️⃣ Temperatura em Fahrenheit
function exercicio08() {
    const celsius = parseFlexibleNumber(prompt("Digite a temperatura em Celsius (ex: 30, 30°C, -5°C):"));

    if (isNaN(celsius)) {
        console.log("Por favor, insira uma temperatura válida.");
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)}`);
}



// 9️⃣ Soma e multiplicação
function exercicio09() {
    let num1 = Number(prompt("Digite o primeiro número inteiro:"));
    let num2 = Number(prompt("Digite o segundo número inteiro:"));
    console.log("A soma é", num1 + num2);
    console.log("O produto é", num1 * num2);
}

// 🔟 Troca de valores
function exercicio10() {
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    console.log("Antes da troca: valor1 =", valor1, ", valor2 =", valor2);
    let temp = valor1;
    valor1 = valor2;
    valor2 = temp;
    console.log("Depois da troca: valor1 =", valor1, ", valor2 =", valor2);
}
