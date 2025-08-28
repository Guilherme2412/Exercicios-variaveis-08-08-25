function comprasComPrecoBR() {
    let indice = 0;
    let total = 3;
    let maiorPreco = 0;
    let produtoMaisCaro = 0;
    let quantidade = 0;
    let produto = "";
    let preco = 0;
    let desejaCadastrar = "";
    //1
    while (desejaCadastrar === "sim") {
        desejaCadastrar = prompt("Deseja cadastrar?")
    }
    {
        let produto = prompt("digite o nome do produto".trim(length >= 2))
        parseFloat((produto === "R$".replace("R$", " ", ". ", ",", ".")))
    }

}

function linhaCSV() {
    let indice = 0;

    while(1){}
    
    //2
}

function frasesContagemPontuacao() {
    let indice = 0;
    let terminaEmPergunta = 0;
    let terminaEmAfirmacao = 0;
    let terminaNeutra = 0;

    while (indice < 6) {
        let frases = prompt("Digite seis frases que termine com ?, ! ou . ");

        let pontuacao = frases.substring(frases.length - 1)

        if (pontuacao === "?") {
            terminaEmPergunta = terminaEmPergunta + 1;
        } else if (pontuacao === "!") {
            terminaEmAfirmacao = terminaEmAfirmacao + 1;
        } else {
            terminaNeutra = terminaNeutra + 1;
        }

        indice = indice + 1;
    }

    alert("Termina em pergunta " + terminaEmPergunta +
        "\nTermina em afimação " + terminaEmAfirmacao +
        "\nTermina neutra " + terminaNeutra)
}

function contagemPorDatas() {
    let indice = 0;
    let dataMaisAntiga = 99999999999;
    let dataMaisRecente = 0;
    let contagemMarco = 0;
    let contagemDezembro = 0;
    let chaveAntiga = 99999999;
    let chaveRecente = 0;

    while (indice < 5) {
        let datasInteiras = prompt("Digite as datas da seguinte forma: dd/mm/aaaa ")

        let dataSeparada = datasInteiras.split("/")

        let dia = dataSeparada[0].padStart(2, "0");
        let mes = dataSeparada[1].padStart(2, "0");
        let ano = dataSeparada[2].padStart(2, "0");
        let chave = ano + mes + dia;
        chave = parseInt(chave);


        if (chave < chaveAntiga) {
            chaveAntiga = chave
            dataMaisAntiga = dia + "/" + mes + "/" + ano;
        }

        if (chave > chaveRecente) {
            chaveRecente = chave
            dataMaisRecente = dia + "/" + mes + "/" + ano;
        }

        if (mes === "03") {
            contagemMarco = contagemMarco + 1;
        } else if (mes === "12") {
            contagemDezembro = contagemDezembro + 1;
        }

        indice = indice + 1;
    }

    console.log("Data mais antiga " + dataMaisAntiga + "\nData mais recente " + dataMaisRecente + "\nContagem de março " + contagemMarco + "\nContagem de dezembro " + contagemDezembro)
}

