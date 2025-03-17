let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();
    
    if (nome === '') {
        alert("Por favor, insira um nome");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    amigos.push(nome);
    exibirListaDeAmigos();
    document.getElementById('amigo').value = '';
    document.getElementById('resultado').innerHTML = ''; // Limpa resultado anterior
}

function exibirListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

let ultimoSorteado = -1;

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione um amigo antes de sortear");
        return;
    }

    let amigoAleatorio;
    do {
        amigoAleatorio = Math.floor(Math.random() * amigos.length);
    } while (amigoAleatorio === ultimoSorteado && amigos.length > 1);

    ultimoSorteado = amigoAleatorio;
    let amigoSorteado = amigos[amigoAleatorio];
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
