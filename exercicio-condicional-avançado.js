function exercicio01 (){
    let nota1 = parseFloat(prompt("Digite a primeira nota").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota").replace(",", "."));
    let mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) /10


    if (mediaPonderada >= 7){
        console.log("Aprovado")
        return;
    }

    if (mediaPonderada >= 5 && mediaPonderada < 7) {
        if (mediaPonderada >= 6.8 && mediaPonderada <= 6.99) {
            let trabalhoExtra = prompt("Fez trabalho extra? (sim ou não)").trim().toLowerCase();
        
        if(trabalhoExtra === "sim"){
            mediaPonderada += 0.2; 
            if(mediaPonderada > 10) mediaPonderada = 10;
            console.log("Bônus aplicado. Nova média: " + mediaPonderada.toFixed(2));
        }else {
            console.log("Sem trabalho extra. Média permanece" + mediaPonderada.toFixed(2));
        }
        
    }

    if(mediaPonderada >= 7) {
        console.log("Aprovado");
    } else {
        let exame = parseFloat(prompt("Digite sua nota do Exame").replace(",", "."));
        let mediaPosExame = (mediaPonderada + exame) /2;

        if(mediaPosExame >= 6) {
            console.log("Aprovado em exame");
        }else {
            console.log("Reprovado")
        }
    }
    return;


    console.log("Reprovado" + "Aprovado" + "Reprovado em Exame")
    

    }

}