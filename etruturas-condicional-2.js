function apagarLuzes() {
    let resposta = ("Gostaria de apagar as luzes? (sim ou não)").toLowerCase();

    if (resposta === "sim" || resposta === "s") {
        document.body.style.backgroundColor = "#000000ff";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

function exercicio07() {
    let numero = parseFloat(prompt("Digite um número").replace(",", "."));
    let parImparNeutro; 
    let positivoNegativo; maiorQue10; menorOuIgual50; menorQue-10; maiorOuIgual30; diferenteDe1;

    if (numero === 0) {
        parImparNeutro = console.log("Número neutro")
    } else if(numero % 2 === 0) {
        parImparNeutro = console.log("Número par")
    } else {
        parImparNeutro = console.log("Número impar")
    }


}


// R$ 4,50  