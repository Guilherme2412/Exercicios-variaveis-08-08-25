function timeDeFutebol() {
    let indice = 0;
    
    let menorPeso = 9999999999999; ///feito
    let maiorPeso = 0;///feito
    let maiorAltura = 0;///feito
    let maiorNome = ""; /// falta fazer
    let menorNome = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; /// falta fazer
    let quantidadeFeminino = 0; ///feito
    let quantidadeMasculino = 0; ///feito
    let maisCartaoVermelho = 0; ///feito
    let maisCartaoAmarelo = 0; /// feito
    let menorCartaoAmarelo = 9999999999999; /// feito
    let menorCartaoVermelho = 9999999999999; /// feito
    let jogadorMenorPeso, jogadorMaisAlto, jogadorMenosAmarelo, jogardorMairPeso, jogadorMaisVermelho, jogadorMaisAmarelo, jogardorMenosVermelho;
    


    while(indice < 22){
        let nomeCompleto = prompt("Digite seu nome completo").trim();
        let idade = parseInt(prompt("Digite sua idade"));
        let peso = parseFloat(prompt("Digite seu peso").replace(",", "."));
        let sexo = prompt("Digite seu sexo (Masculino/Feminino)");
        let altura = parseFloat(prompt("Digite sua altura").replace(",", ".")); 
        let quantidadeGols = parseInt(prompt("Digite a quantidade de gols marcados"));
        let quantidadeCartaoAmarelo = parseInt(prompt("Digite a quantidade de cartões amarelos recebidos"))
        let quantidadeCartoesVermelhos = parseInt(prompt("Digite a quantidade de cartões vermelhos recebidos"))

        if(nomeCompleto.length > maiorNome.length){
            maiorNome = nomeCompleto
        }

        if(nomeCompleto.length < menorNome.length){
            menorNome = nomeCompleto
        }
        
        if(peso < menorPeso){
            menorPeso = peso
            jogadorMenorPeso = nomeCompleto
        }
        
        if(peso > maiorPeso){
            maiorPeso = peso
            jogardorMairPeso = nomeCompleto
        }

        if(altura > maiorAltura){
            maiorAltura = altura
            jogadorMaisAlto = nomeCompleto
        }

        if(sexo.toLowerCase() === "masculino"){
            quantidadeMasculino = quantidadeMasculino + 1
        }

        if (sexo.toLowerCase() === "feminino"){
            quantidadeFeminino = quantidadeFeminino + 1
        }

        if (quantidadeCartoesVermelhos > maisCartaoVermelho){
            maisCartaoVermelho = quantidadeCartoesVermelhos
            jogadorMaisVermelho = nomeCompleto
        }

        if (quantidadeCartoesVermelhos < menorCartaoVermelho){
            menorCartaoVermelho = quantidadeCartoesVermelhos
            jogardorMenosVermelho = nomeCompleto
        }

        if (quantidadeCartaoAmarelo > maisCartaoAmarelo){
            maisCartaoAmarelo = quantidadeCartaoAmarelo
            jogadorMaisAmarelo = nomeCompleto
        }

        if (quantidadeCartaoAmarelo < menorCartaoAmarelo){
            menorCartaoAmarelo = quantidadeCartaoAmarelo
            jogadorMenosAmarelo = nomeCompleto
        }




        indice = indice + 1;
    }

    console.log("Menor peso: " + jogadorMenorPeso + " " + menorPeso + "\nMaior Altura: " + jogadorMaisAlto + " " + maiorAltura + "\nMaior nome: " + maiorNome + "\nQuantidade Feminino: " + quantidadeFeminino + "\nQuantidade Masculino: " + quantidadeMasculino + "\nMenos cartão amarelo recebido: " + jogadorMenosAmarelo + " " + menorCartaoAmarelo + "\nMenor nome: " + menorNome + "\nMaior Peso: " + jogardorMairPeso + " " + maiorPeso + "\nMaior quantidade cartao vermelho recebido: " + jogadorMaisVermelho + " " + maisCartaoVermelho + "\nMais cartões amarelos: " + jogadorMaisAmarelo + " " + maisCartaoAmarelo + "\nMenor quant cartão vermelho" + jogardorMenosVermelho + " " + menorCartaoVermelho)
}