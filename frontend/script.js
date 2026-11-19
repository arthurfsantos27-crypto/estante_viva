const apiUrl = 'http://localhost:3000/task';

async function carregarLivros() {
    const containerUsuario = document.getElementById('lista-usuarios');
    const resposta = await fetch('/api/livros');
    const listaDeLivros = await resposta.json();

    if (listaDeLivros.length === 0) {

    } else { 
    alert('erro ao carregar livo: ' + err.message);
    }
}