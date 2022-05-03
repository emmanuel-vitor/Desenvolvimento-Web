function sortear(){
    let nomeDePessoas =  ['Alfa1','Teste','Letras','Virgula','Cap'];

    let numeroDePessoas = nomeDePessoas.length;

    let nomeSorteado = Math.floor(Math.random()*numeroDePessoas);

    document.getElementById('nome_sorteado').innerHTML = nomeDePessoas[nomeSorteado];
}