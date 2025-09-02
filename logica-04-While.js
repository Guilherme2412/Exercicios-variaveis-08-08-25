function listaDeCompras01() {
    let indice = 0;
    let somaItens = 0;

    while (indice < 4) {
        let preco = parseFloat(prompt("Digite o preço do item").replace(",", "."));

        somaItens = somaItens + preco

        indice = indice + 1;
    }


    let media = somaItens / indice;
    alert("Soma: " + somaItens + "Media: " + media);
}

function contagemPorA() {
    let indice = 0;
    let comecamComA = 0;
    let naoComecamComA = 0;

    while (indice < 5) {
        let palavras = prompt("Digite 5 palavras");

        if (palavras.toLowerCase().trim().startsWith("a")) {
            comecamComA = comecamComA + 1
        } else {
            naoComecamComA = naoComecamComA + 1
        }

        indice = indice + 1;

    }

    alert("começa com a: " + comecamComA + "não começa com a: " + naoComecamComA);
}

function validarIdade() {
    let idade = 0;

    while (idade < 1 || idade > 120) {
        idade = parseInt(prompt("Digite sua idade"));

        if (idade < 1) {
            console.log("idade invalida")
        } else if (idade > 120) {
            console.log("idade invalida")
        } else {
            console.log("idade cadastrada: " + idade)
        }

    }

}

function maiorAltura() {
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 3) {
        let altura = parseFloat(prompt("Digite sua altura").replace(",", "."));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }

    alert("Maior altura: " + maiorAltura);
}

function miniMenu() {
    let menu = ` 
        1 = Saudações
        2 = Par ou Ímpar
        100 = Sair
    `
    let escolha = 0;


    while (escolha !== 100) {
        escolha = parseInt(prompt(menu));

        if (escolha === 1) {
            let nome = prompt("Digite seu nome");
            alert("saudações " + nome.trim())
        } else if (escolha === 2) {
            let numero = parseFloat(prompt("Digite um número inteiro"));
            if (numero % 2 === 0) {
                alert("Número par")
            } else {
                alert("Número ímpar")
            }
        } else if (escolha !== 100) {
            alert("Opção Inválida")
        } else {
            alert("Sessão encerrada")
        }
    }
}

function nomesAteFim() {
    let indice = 0;
    let nome = "";
    let nomesRegistrados = "";


    while (nome.toLowerCase().trim() !== "fim") {
        nome = prompt("Digite seu nome ou 'fim' para encerrar");
        if (nome.toLowerCase().trim() !== "fim") {
            nomesRegistrados = nomesRegistrados + nome + "\n"
            indice = indice + 1;
        }
    }

    alert(nomesRegistrados + indice)
}

function SomarEmBR() {
    let indice = 0;
    let precoItens = 0;

    while (indice < 4) {
        precoItens = parseFloat(prompt("Digite os preços: ").replace("R$", "", ",", "."));


        precoItens = parseFloat(precoItens + indice);

        indice = indice + 1;
    }


    let media = precoItens / indice;
    alert("Soma: " + precoItens + "Media: " + media);
}

function terminamEmPergunta() {
    let indice = 0;
    let terminamEmPergunta = 0;
    let naoTerminamEmPergunta = 0;

    while (indice < 5) {
        let frases = prompt("Digite as frases");

        if (frases.toLowerCase().trim().endsWith("?")) {
            terminamEmPergunta = terminamEmPergunta + 1;
        } else {
            naoTerminamEmPergunta = naoTerminamEmPergunta + 1;
        }

        indice = indice + 1;
    }

    alert("terminam em pergunta: " + terminamEmPergunta + "não terminam em pergunta: " + naoTerminamEmPergunta);
}

function cuponsVIPOuOFF() {
    let indice = 0;
    let cuponsVip = 0;
    let cuponsOff = 0;

    while (indice < 5) {
        let cupons = prompt("Seu cupom é vip?").toLowerCase().trim();

        if (cupons.startsWith("vip")) {
            cuponsVip = cuponsVip + 1;
        } else {
            cupons.endsWith("off")
            cuponsOff = cuponsOff + 1;
        }

        indice = indice + 1;
    }

    alert("Cupons VIP: " + cuponsVip + "Cupons OFF: " + cuponsOff)
}

function primeiroNome() {
    let indice = 0;
    let nomeCompleto = "";
    let nomesRegistrados = "";


    while (indice < 3) {
        nomeCompleto = prompt("Digite seu primeiro nome: ").trim();

        let partesDoNome = nomeCompleto.split(" ");

        let primeiroNome = partesDoNome[0];

        nomesRegistrados = nomesRegistrados + primeiroNome + "\n";

        indice = indice + 1;

    }

    console.log(nomesRegistrados);
}