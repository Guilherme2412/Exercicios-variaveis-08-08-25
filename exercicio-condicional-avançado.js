function exercicio01 (){
    let nota1 = parseFloat(prompt("Digite a primeira nota").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota").replace(",", "."));
    let mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) /10
    let mediaPosExame = (mediaPonderada + exame) /2

    if (mediaPonderada >= 7){
        console.log("Aprovado")
    }else if(mediaPonderada > 5 && mediaPonderada < 6.8){
        console.log("Recuperação")
    }else if(mediaPonderada >= 6.8 && mediaPonderada <= 6.99){
        
        
        let trabalhoExtra = prompt("Fez trabalho extra? 'sim ou não' ")
        if(trabalhoExtra === sim){mediaPonderada + 0.2; 
            console.log("Aprovado")}
            else if(trabalhoExtra === não){
                if()
            }
    }


}