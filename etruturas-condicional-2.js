function exercicio07() {
    let numero = parseFloat(prompt("Digite um número").replace(",", "."))
    let parImparNeutro, positivoNegativo, maiorQue10, menorOuIgual50, menorQueDezNegativo, maiorOuIgual30, diferenteDe1;

    if (numero === 0) {
        parImparNeutro = "Número neutro"
    } else if (numero % 2 === 0) {
        parImparNeutro = "Número par"
    } else {
        parImparNeutro = "Número impar"
    }

    if (numero > 0) {
        positivoNegativo = "Positivo"
    } else {
        positivoNegativo = "Negativo"
    }

    if (numero > 10) {
        maiorQue10 = "Maior que 10"
    } else if (numero < 10) {
        maiorQue10 = "Menor que 10"
    } else {
        maiorQue10 = "Igual a 10"
    }

    if (numero === 50) {
        menorOuIgual50 = "Igual a 50"
    } else if (numero < 50) {
        menorOuIgual50 = "Menor que 50"
    } else {
        menorOuIgual50 = "Maior que 50"
    }

    if (numero < -10) {
        menorQueDezNegativo = "Menor que dez negativo"
    } else if (numero > -10) {
        menorQueDezNegativo = "Maior que dez negativo"
    } else {
        menorQueDezNegativo = "Igual a dez negativo"
    }

    if (numero > 30) {
        maiorOuIgual30 = "Maior que 30"
    } else if (numero === 30) {
        maiorOuIgual30 = "Igual a 30"
    } else {
        maiorOuIgual30 = "Menor que 30"
    }

    if (numero != 1) {
        diferenteDe1 = "Diferente de 1"
    } else {
        diferenteDe1 = "Igual a 1"
    }

    console.log(parImparNeutro + "\n"
        + positivoNegativo + "\n"
        + maiorQue10 + "\n"
        + menorOuIgual50 + "\n"
        + menorQueDezNegativo + "\n"
        + maiorOuIgual30 + "\n"
        + diferenteDe1)
}

function exercicio09() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado").replace(",", "."));
    let lado2 = parseFloat(prompt("Digite o segundo lado").replace(",", "."));
    let lado3 = parseFloat(prompt("Digite o terceiro lado").replace(",", "."));
    let lado4 = parseFloat(prompt("Digite o quarto lado").replace(",", "."));

    if (lado1 === lado2 && lado3 === lado4 && lado1 === lado3 && lado2 === lado4 && lado1 === lado4 && lado2 === lado3) {
        console.log("quadrado")
    } else {
        console.log("não é um quadrado")
    }
}

function exercicio10() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado").replace(",", "."));
    let lado2 = parseFloat(prompt("Digite o segudo lado").replace(",", "."));
    let lado3 = parseFloat(prompt("Digite o terceiro lado").replace(",", "."));
    let lado4 = parseFloat(prompt("Digite o quarto lado").replace(",", "."));

    if (lado1 === lado2 && lado3 === lado4 && lado1 !== lado3

        || lado1 === lado3 && lado2 === lado4 && lado2 !== lado3

        || lado1 === lado4 && lado2 === lado3 && lado4 !== lado3) {
        console.log("retângulo")
    } else {
        console.log("não é um retângulo")
    }
}

function exercicio14() {
    let numero1 = parseFloat(prompt("Digite o primeiro número").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite o segundo número").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite o terceiro número").replace(",", "."));

    if(numero1 > numero2 && numero2 > numero3) {
        console.log(numero3 + "\n" + numero2 + "\n" + numero1)
    
    } else if (numero3 > numero2 && numero2> numero1) {
        console.log(numero1 + "\n" + numero2 + "\n" + numero3)
    
    } else if (numero1 > numero3 && numero3 > numero2) {
        console.log(numero2 + "\n" + numero3 + "\n" + numero1)
    
    } else if (numero2 > numero3 && numero3 > numero1) {
        console.log(numero1 + "\n" + numero3 + "\n" + numero2)
    
    } else if (numero2 > numero1 && numero1 > numero3) {
        console.log(numero3 + "\n" + numero1 + "\n" + numero2)
    
    } else if(numero3 > numero1 && numero1 > numero2) {
        console.log(numero2 + "\n" + numero1 + "\n" + numero3)
    
    } else if(numero3 > numero1 && numero1 === numero2) {
        console.log(numero2 + "\n" + numero1 + "\n" + numero3)
    
    } else if(numero2 > numero3 && numero3 === numero1) {
        console.log(numero1 + "\n" + numero3 + "\n" + numero2)
    
    } else if(numero1 > numero2 && numero2 === numero3) {
        console.log(numero3 + "\n" + numero2 + "\n" + numero1)
    
    } else if(numero2 === numero3 && numero3 > numero1) {
        console.log(numero1 + "\n" + numero2 + "\n" + numero3)
    }
}