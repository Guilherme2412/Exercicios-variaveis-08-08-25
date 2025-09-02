let pets = [];

function cadastrarPets() {
    let nome = prompt("Digite o nome do seu Pet");
    pets.push(nome)
}

function listarPets() {
    let texto = "Lista de Pets";

    for (let i = 0; i < pets.length; i = i + 1) {
        let pet = pets[i];

        texto = texto + "\n\t" + i + " => " + pet;
    }
    alert(texto);
}


function removerPet() {
    let indiceParaApagar = parseInt(prompt("Digite o nome do Pet que deseja apagar"))
    pets.splice(indiceParaApagar, 1);
    alert("Nome de pert apagado com sucesso.")
}

function alterarPet() {
    let indiceParaAlterar = parseInt(prompt("Digite o nome do Pet que deseja alterar"));
    pets[indiceParaAlterar] = prompt("Digite o novo nome do Pet")
    alert("Nome alterado com sucesso")
}