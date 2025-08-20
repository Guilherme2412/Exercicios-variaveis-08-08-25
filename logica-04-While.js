function listaDeCompras01 () {
    let indice = 0;
    let somaDeItens = 0;

    while (indice < 4) {
        let preco = parseFloat(prompt("Digite o preço do item").replace(",", "."));
        somaDeItens += preco;
        indice++;
    }

    let mediaDeItens = somaDeItens / 4;

    alert("Total: R$ " + somaDeItens.toFixed(2) + "\nMédia: R$ " + mediaDeItens.toFixed(2));
}
