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

// 1️⃣ Troca de palavras
function exercicio01() {
    let frase = prompt("Digite uma frase:");
    let palavraAntiga = prompt("Qual palavra deseja trocar?");
    let palavraNova = prompt("Por qual palavra deseja trocar?");

    if (!frase || !palavraAntiga || !palavraNova) {
        console.log("Por favor, preencha todos os campos.");
        return;
    }

    let fraseModificada = frase.replace(palavraAntiga, palavraNova);
    console.log(`Frase modificada: ${fraseModificada}`);
}

// 2️⃣ Remover todas as ocorrências
function exercicio02() {
    let frase = prompt("Digite uma frase:");
    let palavraRemover = prompt("Digite a palavra que deseja remover:");

    if (!frase || !palavraRemover) {
        console.log("Por favor, preencha todos os campos.");
        return;
    }

    let resultado = frase.replaceAll(palavraRemover, "");
    console.log(`Frase sem a palavra: ${resultado}`);
}

// 3️⃣ Separar nomes
function exercicio03() {
    let nomeCompleto = prompt("Digite seu nome completo:");

    if (!nomeCompleto || !nomeCompleto.includes(" ")) {
        console.log("Digite pelo menos nome e sobrenome.");
        return;
    }

    let partes = nomeCompleto.split(" ");
    let primeiroNome = partes[0];
    let ultimoNome = partes[partes.length - 1];

    console.log(`Primeiro nome: ${primeiroNome}`);
    console.log(`Último nome: ${ultimoNome}`);
}

// 4️⃣ Extrair parte da frase
function exercicio04() {
    let frase = prompt("Digite uma frase:");

    if (!frase) {
        console.log("Por favor, digite uma frase.");
        return;
    }

    // Pegando do caractere 5 até o 15, por exemplo
    let parte = frase.substring(5, 15);
    console.log(`Parte extraída: ${parte}`);
}

// 5️⃣ Remover espaços extras
function exercicio05() {
    let texto = prompt("Digite um texto com espaços no início e no fim:");

    if (!texto) {
        console.log("Por favor, digite um texto.");
        return;
    }

    console.log(`Texto sem espaços extras: "${texto.trim()}"`);
}

// 6️⃣ Remover apenas espaços do início
function exercicio06() {
    let texto = prompt("Digite um texto com espaços no início:");

    if (!texto) {
        console.log("Por favor, digite um texto.");
        return;
    }

    console.log(`Texto sem espaços no início: "${texto.trimStart()}"`);
}

// 7️⃣ Remover apenas espaços do final
function exercicio07() {
    let texto = prompt("Digite um texto com espaços no final:");

    if (!texto) {
        console.log("Por favor, digite um texto.");
        return;
    }

    console.log(`Texto sem espaços no final: "${texto.trimEnd()}"`);
}

// 8️⃣ Preenchendo com caracteres (telefone)
function exercicio08() {
    let telefone = prompt("Digite o número de telefone sem DDD:");

    if (!telefone || isNaN(telefone)) {
        console.log("Por favor, digite apenas números.");
        return;
    }

    let telefoneCompleto = telefone.padStart(11, "0");
    console.log(`Telefone com DDD (simulado): ${telefoneCompleto}`);
}

// 9️⃣ Preenchendo com zeros (conta bancária)
function exercicio09() {
    let conta = prompt("Digite o número da conta:");

    if (!conta) {
        console.log("Por favor, digite um número de conta.");
        return;
    }

    let contaCompleta = conta.padEnd(10, "0");
    console.log(`Conta formatada: ${contaCompleta}`);
}

// 🔟 Preço formatado
function exercicio10() {
    let valor = prompt("Digite um valor decimal:");

    if (isNaN(valor) || valor === "") {
        console.log("Por favor, digite um número válido.");
        return;
    }

    let valorNumerico = parseFloat(valor);
    console.log(`Preço formatado: R$ ${valorNumerico.toFixed(2)}`);
}
