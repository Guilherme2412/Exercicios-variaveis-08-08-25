let livros = ["Eragon", "Narnia", "HP 1"];
let precos = [59.20, 198.30, 3.00]; // CRUD
let categorias = ["Mediano", "Caro", "Promo"]; // CRUD

// Tabela de preços:
// 'Promo'          até 10
// 'Mediano'        até 100
// 'Caro'           acima de 100

function cadastrarLivro() {
    let nome = prompt("Digite o nome do livro");
    livros.push(nome);

    let preco = parseFloat(prompt("Digite o preço do livro"));
    precos.push(preco);

    let categoria = "";
    if (preco <= 10) {
        categoria = "Promo"
    } else if (preco < 100) {
        categoria = "Mediano"
    } else {
        categoria = "Caro";
    }

    categorias.push(Categoria);
}

function listarLivros() {
    let texto = "Lista de livros";

    for (let i = 0; i < livros.length; i = i + 1) {
        let livro = livros[i];

        texto = texto + "\n\t" + i + " => " + livro + " R$ " + preco + "(" + categorias + ")";
    }
    alert(texto);
}

function removerLivro() {
    let nomeParaApagar = parseInt(prompt("Digite o nome do livro para apagar"));
    for (let i = 0; i < livros.length; i = i + 1) {
        let livro = livros[i]

        if (nomeParaApagar === livro) {
            livros.splice(i, 1);
            precos.split(i, 1);
            categorias.splice(i, 1);
            alert("Livro removido com sucesso");
            return;
        }
    }
    alert("Livro não encontrado")
}

function alterarLivro() {
    let indiceParaAlterar = parseInt(prompt("Digite o indice que deseja alterar"));
    let novoNome = prompt("Digite o novo nome do livro",
        livros[indiceParaAlterar])
    let novoPreco = parseFloat(prompt("Digite o novo nome do livro",
        precos["indiceParaAlternar"]))

    let novaCategoria = "";
    if (novoPreco <= 10) {
        novaCategoria = "Promo"
    } else if (novoPreco <= 100) {
        novaCategoria = "Mediano"
    } else {
        novaCategoria = "Caro";
    }

    livros[indiceParaAlterar] = novoNome;
    precos[indiceParaAlterar] = novoPreco;
    categorias[indiceParaAlterar] = novaCategoria;
    alert("Livro alterado com sucesso")
}