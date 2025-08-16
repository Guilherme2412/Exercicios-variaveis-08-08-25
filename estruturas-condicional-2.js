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

    if (numero1 > numero2 && numero2 > numero3) {
        console.log(numero3 + "\n" + numero2 + "\n" + numero1)

    } else if (numero3 > numero2 && numero2 > numero1) {
        console.log(numero1 + "\n" + numero2 + "\n" + numero3)

    } else if (numero1 > numero3 && numero3 > numero2) {
        console.log(numero2 + "\n" + numero3 + "\n" + numero1)

    } else if (numero2 > numero3 && numero3 > numero1) {
        console.log(numero1 + "\n" + numero3 + "\n" + numero2)

    } else if (numero2 > numero1 && numero1 > numero3) {
        console.log(numero3 + "\n" + numero1 + "\n" + numero2)

    } else if (numero3 > numero1 && numero1 > numero2) {
        console.log(numero2 + "\n" + numero1 + "\n" + numero3)

    } else if (numero3 > numero1 && numero1 === numero2) {
        console.log(numero2 + "\n" + numero1 + "\n" + numero3)

    } else if (numero2 > numero3 && numero3 === numero1) {
        console.log(numero1 + "\n" + numero3 + "\n" + numero2)

    } else if (numero1 > numero2 && numero2 === numero3) {
        console.log(numero3 + "\n" + numero2 + "\n" + numero1)

    } else if (numero2 === numero3 && numero3 > numero1) {
        console.log(numero1 + "\n" + numero2 + "\n" + numero3)
    }
}

function exercicio17() {
    let anoDeNascimento = prompt("Digite seu ano de nascimento").trim();
    let anoPartes = anoDeNascimento.split("");
    let milhar = parseInt(anoPartes[0]);
    let centena = parseInt(anoPartes[1]);
    let dezena = parseInt(anoPartes[2]);
    let periodo = parseInt(anoPartes[3]);

    let mostrarMilhar
    let mostrarCentena
    let mostrarDezena
    let mostrarPeriodo

    if (milhar === 1) {
        mostrarMilhar = "Mil "

    } else if (milhar === 2) {
        mostrarMilhar = "Dois Mil "

    } else if (milhar === 3) {
        mostrarMilhar = "Três Mil "

    } else if (milhar === 4) {
        mostrarMilhar = "Quatro Mil "

    } else if (milhar === 5) {
        mostrarMilhar = "Cinco Mil "

    } else if (milhar === 6) {
        mostrarMilhar = "Seis Mil "

    } else if (milhar === 7) {
        mostrarMilhar = "Sete Mil "

    } else if (milhar === 8) {
        mostrarMilhar = "Oito Mil "

    } else if (milhar === 9) {
        mostrarMilhar = "Nove Mil "

    }

    if (centena === 1 && dezena === 0 && periodo === 0) {
        mostrarCentena = "Cem"

    } else if (centena === 2) {
        mostrarCentena = "Duzentos "

    } else if (centena === 3) {
        mostrarCentena = "Trezentos "

    } else if (centena === 4) {
        mostrarCentena = "Quatrocentos "

    } else if (centena === 5) {
        mostrarCentena = "Quinhentos "

    } else if (centena === 6) {
        mostrarCentena = "Seiscentos "

    } else if (centena === 7) {
        mostrarCentena = "Setecentos "

    } else if (centena === 8) {
        mostrarCentena = "Oitocentos "

    } else if (centena === 9) {
        mostrarCentena = "Novecentos "

    } else if (centena === 1) {
        mostrarCentena = "Cento "

    } else { mostrarCentena = "" }

    if (dezena === 1 && periodo === 0) {
        mostrarDezena = "e Dez"

    } else if (dezena === 1 && periodo === 1) {
        mostrarDezena = "e Onze"

    } else if (dezena === 1 && periodo === 2) {
        mostrarDezena = "e Doze"

    } else if (dezena === 1 && periodo === 3) {
        mostrarDezena = "e Treze"

    } else if (dezena === 1 && periodo === 4) {
        mostrarDezena = "e Quatorze"

    } else if (dezena === 1 && periodo === 5) {
        mostrarDezena = "e Quinze"

    } else if (dezena === 1 && periodo === 6) {
        mostrarDezena = "e Dezesseis"

    } else if (dezena === 1 && periodo === 7) {
        mostrarDezena = "e Dezessete"

    } else if (dezena === 1 && periodo === 8) {
        mostrarDezena = "e Dezoito"

    } else if (dezena === 1 && periodo === 9) {
        mostrarDezena = "e Dezenovo"

    } else if (dezena === 2) {
        mostrarDezena = "e Vinte "

    } else if (dezena === 3) {
        mostrarDezena = "e Trinta "

    } else if (dezena === 4) {
        mostrarDezena = "e Quarenta "

    } else if (dezena === 5) {
        mostrarDezena = "e Cinquenta "

    } else if (dezena === 6) {
        mostrarDezena = "e Sessenta "

    } else if (dezena === 7) {
        mostrarDezena = "e Setenta "

    } else if (dezena === 8) {
        mostrarDezena = "e Oitenta "

    } else if (dezena === 9) {
        mostrarDezena = "e Noventa "

    } else { mostrarDezena = "" }

    if (periodo === 1 && dezena !== 1) {
        mostrarPeriodo = "e um"

    } else if (periodo === 2) {
        mostrarPeriodo = "e dois"

    } else if (periodo === 3) {
        mostrarPeriodo = "e três"

    } else if (periodo === 4) {
        mostrarPeriodo = "e quatro"

    } else if (periodo === 5) {
        mostrarPeriodo = "e cinco"

    } else if (periodo === 6) {
        mostrarPeriodo = "e seis"

    } else if (periodo === 7) {
        mostrarPeriodo = "e sete"

    } else if (periodo === 8) {
        mostrarPeriodo = "e oito"

    } else if (periodo === 9) {
        mostrarPeriodo = "e nove"

    } else { mostrarPeriodo = "" }




    console.log(mostrarMilhar + mostrarCentena + mostrarDezena + mostrarPeriodo);
}

function exercicio18() {
    let horaDeNascimento = prompt("Digite sua hora de nascimento").trim()
    let horaPartes = horaDeNascimento.split(":")
    let hora = parseInt(horaPartes[0])
    let minuto = parseInt(horaPartes[1])
    let segundo = parseInt(horaPartes[2])
    let mostrarHora
    let mostrarMinuto
    let mostrarSegundo

    if (hora === 0){ mostrarHora = "zero hora"

    }else if(hora === 1){mostrarHora = "uma hora "

    }else if(hora === 2){mostrarHora = "duas horas "

    }else if(hora === 3){mostrarHora = "três horas "

    }else if(hora === 4){mostrarHora = "quatro horas "

    }else if(hora === 5){mostrarHora = "cinco horas "

    }else if(hora === 6){mostrarHora = "seis horas "

    }else if(hora === 7){mostrarHora = "sete horas "

    }else if(hora === 8){mostrarHora = "oito horas "

    }else if(hora === 9){mostrarHora = "nove horas "

    }else if(hora === 10){mostrarHora = "dez horas "

    }else if(hora === 11){mostrarHora = "onze horas "

    }else if(hora === 12){mostrarHora = "doze horas "

    }else if (hora === 13){mostrarHora = "treze horas "

    }else if(hora === 14){mostrarHora = "quatorze horas "

    }else if(hora === 15){mostrarHora = "quinze horas "

    }else if(hora === 16){mostrarHora = "dezesseis horas "

    }else if(hora === 17){mostrarHora = "dezessete horas "

    }else if(hora === 18){mostrarHora = "dezeoito horas "

    }else if(hora === 19){mostrarHora = "dezenovo horas "

    }else if(hora === 20){mostrarHora = "vinte horas "

    }else if(hora === 21){mostrarHora = "vinte e uma horas "

    }else if(hora === 22){mostrarHora = "vinte e duas horas "

    }else if(hora === 23){mostrarHora = "vinte e três horas "

    }

    if(minuto === 0) {mostrarMinuto = "zero minutos"

    }else if(minuto ===1){mostrarMinuto = "um minuto "

    }else if(minuto ===2){mostrarMinuto = "dois minutos "

    }else if(minuto ===3){mostrarMinuto = "três minutos "

    }else if(minuto ===4){mostrarMinuto = "quatro minutos "

    }else if(minuto ===5){mostrarMinuto = "cinco minutos "

    }else if(minuto ===6){mostrarMinuto = "seis minutos "

    }else if(minuto === 7){mostrarMinuto = "sete minutos "

    }else if(minuto === 8){mostrarMinuto = "oito minutos "

    }else if(minuto === 9){mostrarMinuto = "nove minutos "

    }else if(minuto === 10){mostrarMinuto = "dez minutos "

    }else if(minuto === 11){mostrarMinuto = "onze minutos "

    }else if(minuto === 12){mostrarMinuto = "doze minutos "

    }else if(minuto === 13){mostrarMinuto = "treze minutos "

    }else if(minuto === 14){mostrarMinuto = "quatorze minutos "

    }else if(minuto === 15){mostrarMinuto = "quinze minutos "

    }else if(minuto === 16){mostrarMinuto = "dezesseis minutos "

    }else if(minuto === 17){mostrarMinuto = "dezessete minutos "

    }else if(minuto === 18){mostrarMinuto = "dezoito minutos "

    }else if(minuto === 19){mostrarMinuto = "dezenove minutos "

    }else if(minuto === 20){mostrarMinuto = "vinte minutos "

    }else if(minuto === 21){mostrarMinuto = "vinte e um minutos "

    }else if(minuto === 22){mostrarMinuto = "vinte e dois minutos "

    }else if(minuto === 23){mostrarMinuto = "vinte e três minutos "

    }else if(minuto === 24){mostrarMinuto = "vinte e quatro minutos "

    }else if(minuto === 25){mostrarMinuto = "vinte e cinco minutos "

    }else if(minuto === 26){mostrarMinuto = "vinte e seis minutos "

    }else if(minuto === 27){mostrarMinuto = "vinte e sete minutos "

    }else if(minuto === 28){mostrarMinuto = "vinte e oito minutos "

    }else if(minuto === 29){mostrarMinuto = "vinte e nove minutos "
        
    }else if(minuto === 30){mostrarMinuto = "trinta minutos "

    }else if(minuto === 31){mostrarMinuto = "trinta e um minutos "

    }else if(minuto === 32){mostrarMinuto = "trinta e dois minutos "

    }else if(minuto === 33){mostrarMinuto = "trinta e três minutos "

    }else if(minuto === 34){mostrarMinuto = "trinta e quatro minutos "

    }else if(minuto === 35){mostrarMinuto = "trinta e cinco minutos "

    }else if(minuto === 36){mostrarMinuto = "trinta e seis minutos "

    }else if(minuto === 37){mostrarMinuto = "trinta e sete minutos "

    }else if(minuto === 38){mostrarMinuto = "trinta e oito minutos "

    }else if(minuto === 39){mostrarMinuto = "trinta e nove minutos "

    }else if(minuto === 40){mostrarMinuto = "quarenta minutos " 
    
    }else if(minuto === 41){mostrarMinuto = "quarenta e um minutos "

    }else if(minuto === 42){mostrarMinuto = "quarenta e dois minutos "

    }else if(minuto === 43){mostrarMinuto = "quarenta e três minutos "

    }else if(minuto === 44){mostrarMinuto = "quarenta e quatro minutos "

    }else if(minuto === 45){mostrarMinuto = "quarenta e cinco minutos "

    }else if(minuto === 46){mostrarMinuto = "quarenta e seis minutos "

    }else if(minuto === 47){mostrarMinuto = "quarenta e sete minutos "

    }else if(minuto === 47){mostrarMinuto = "quarenta e sete minutos "

    }else if(minuto === 48){mostrarMinuto = "quarenta e oito minutos "

    }else if(minuto === 49){mostrarMinuto = "quarenta e nove minutos "

    }else if(minuto === 50){mostrarMinuto = "cinquenta minutos "

    }else if(minuto === 51){mostrarMinuto = "cinquenta e um minutos "

    }else if(minuto === 52){mostrarMinuto = "cinquenta e dois minutos "

    }else if(minuto === 53){mostrarMinuto = "cinquenta e três minutos "

    }else if(minuto === 54){mostrarMinuto = "cinquenta e quatro minutos "

    }else if(minuto === 55){mostrarMinuto = "cinquenta e cinco minutos "

    }else if(minuto === 56){mostrarMinuto = "cinquenta e seis minutos "

    }else if(minuto === 57){mostrarMinuto = "cinquenta e sete minutos "
        
    }else if(minuto === 58){mostrarMinuto = "cinquenta e oito minutos "

    }else if(minuto === 59){mostrarMinuto = "cinquenta e nove minutos "

    }

    if(segundo === 0){mostrarSegundo = "zero segundos "

    }else if(segundo === 1){mostrarSegundo = "um segundo "

    }else if(segundo === 2){mostrarSegundo = "dois segundos "

    }else if(segundo === 3){mostrarSegundo = "três segundos "

    }else if(segundo === 4){mostrarSegundo = "quatro segundos "

    }else if(segundo === 5){mostrarSegundo = "cinco segundos "

    }else if(segundo === 6){mostrarSegundo = "seis segundos "

    }else if(segundo === 7){mostrarSegundo = "sete segundos "

    }else if(segundo === 8){mostrarSegundo = "oito segundos "

    }else if(segundo === 9){mostrarSegundo = "nove segundos "

    }else if(segundo === 10){mostrarSegundo = "dez segundos "

    }else if(segundo === 11){mostrarSegundo = "onze segundos "

    }else if(segundo === 12){mostrarSegundo = "doze segundos "

    }else if(segundo === 13){mostrarSegundo = "treze segundos "

    }else if(segundo === 14){mostrarSegundo = "quatorze segundos "

    }else if(segundo === 15){mostrarSegundo = "quinze segundos "

    }else if(segundo === 16){mostrarSegundo = "dezesseis segundos "

    }else if(segundo === 17){mostrarSegundo = "dezessete segundos "

    }else if(segundo === 18){mostrarSegundo = "dezoito segundos "

    }else if(segundo === 19){mostrarSegundo = "dezenove segundos "

    }else if(segundo === 20){mostrarSegundo = "vinte segundos "

    }else if(segundo === 21){mostrarSegundo = "vinte e um segundos "

    }else if(segundo === 22){mostrarSegundo = "vinte e dois segundos "

    }else if(segundo === 23){mostrarSegundo = "vinte e três segundos "

    }else if(segundo === 24){mostrarSegundo = "vinte e quatro segundos "

    }else if(segundo === 25){mostrarSegundo = "vinte e cinco segundos "

    }else if(segundo === 26){mostrarSegundo = "vinte e seis segundos "

    }else if(segundo === 27){mostrarSegundo = "vinte e sete segundos "

    }else if(segundo === 28){mostrarSegundo = "vinte e oito segundos "

    }else if(segundo === 29){mostrarSegundo = "vinte e nove segundos "

    }else if(segundo === 30){mostrarSegundo = "trinta segundos "

    }else if(segundo === 31){mostrarSegundo = "trinta e um segundos "

    }else if(segundo === 32){mostrarSegundo = "trinta e dois segundos "

    }else if(segundo === 33){mostrarSegundo = "trinta e três segundos "

    }else if(segundo === 34){mostrarSegundo = "trinta e quatro segundos "

    }else if(segundo === 35){mostrarSegundo = "trinta e cinco segundos "

    }else if(segundo === 36){mostrarSegundo = "trinta e seis segundos "

    }else if(segundo === 37){mostrarSegundo = "trinta e sete segundos "

    }else if(segundo === 38){mostrarSegundo = "trinta e oito segundos "

    }else if(segundo === 39){mostrarSegundo = "trinta e nove segundos "

    }else if(segundo === 40){mostrarSegundo = "quarenta segundos "

    }else if(segundo === 41){mostrarSegundo = "quarenta e um segundos "

    }else if(segundo === 42){mostrarSegundo = "quarenta e dois segundos "

    }else if(segundo === 43){mostrarSegundo = "quarenta e três segundos "

    }else if(segundo === 44){mostrarSegundo = "quarenta e quatro segundos "

    }else if(segundo === 45){mostrarSegundo = "quarenta e cinco segundos "

    }else if(segundo === 46){mostrarSegundo = "quarenta e seis segundos "

    }else if(segundo === 47){mostrarSegundo = "quarenta e sete segundos "

    }else if(segundo === 48){mostrarSegundo = "quarenta e oito segundos "

    }else if(segundo === 49){mostrarSegundo = "quarenta e nove segundos "

    }else if(segundo === 50){mostrarSegundo = "cinquenta segundos "

    }else if(segundo === 51){mostrarSegundo = "cinquenta e um segundos "

    }else if(segundo === 52){mostrarSegundo = "cinquenta e dois segundos "

    }else if(segundo === 53){mostrarSegundo = "cinquenta e três segundos "

    }else if(segundo === 54){mostrarSegundo = "cinquenta e quatro segundos "

    }else if(segundo === 55){mostrarSegundo = "cinquenta e cinco segundos "

    }else if(segundo === 56){mostrarSegundo = "cinquenta e seis segundos "

    }else if(segundo === 57){mostrarSegundo = "cinquenta e sete segundos "

    }else if(segundo === 58){mostrarSegundo = "cinquenta e oito segundos "

    }else if(segundo === 59){mostrarSegundo = "cinquenta e nove segundos "

    }
    

    console.log(mostrarHora + mostrarMinuto + mostrarSegundo);
}