//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value; // Capturando o valor adicionado ao input

    if (nome.trim() == '') { // trim retira os espaços vazios
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        console.log(amigos);
    }
    limparCampo();
    atualizaAmigos();

}

function atualizaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = ''; // Limpa a lista

    amigos.forEach (amigo => { //Percorre o array e cria os elementos <li>
        let item = `<li>${amigo}</li>`; // Cria o elemento
        lista.innerHTML += item; // Adiciona o <li> ao conteúdo da lista
    });

}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length == 0) {
        alert('Não há nomes cadastrados, por favor, adicione');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(amigos[indiceAleatorio]);
        let result = `<li>Nome sorteado: ${amigos[indiceAleatorio]}</li>`;
        resultado.innerHTML += result;
    }

}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}