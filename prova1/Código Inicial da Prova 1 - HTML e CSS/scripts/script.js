let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionaAoCarrinho(nomeProduto, precoProduto) {
    const produto = { nome: nomeProduto, preco: precoProduto };
    carrinho.push(produto);
    atualizaContagemCarrinho();
    salvarCarrinho();
    alert(`O produto ${nomeProduto} foi adicionado ao seu carrinho.`);
}

function atualizaContagemCarrinho() {
    document.getElementById('carrinho__contagem').textContent = carrinho.length;
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregaCarrinho() {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    atualizaContagemCarrinho();
    mostrarItensCarrinho();
}

function mostrarItensCarrinho() {
    const containerCarrinho = document.getElementById('carrinho__container');
    const totalCarrinho = document.getElementById('carrinho__total');
    containerCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((produto, indice) => {
        const itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('carrinho__item');
        
        itemCarrinho.innerHTML = `
            <img src="img/${produto.nome.toLowerCase()}.jpg" alt="${produto.nome}">
            <div class="carrinho__item__detalhes">
                <h3>${produto.nome}</h3>
                <p>${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <button onclick="removerItemCarrinho(${indice})">Remover</button>
        `;

        containerCarrinho.appendChild(itemCarrinho);
        total += produto.preco;
    });

    totalCarrinho.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function removerItemCarrinho(indice) {
    carrinho.splice(indice, 1);
    atualizaContagemCarrinho();
    salvarCarrinho();
    mostrarItensCarrinho();
}

function limpaCarrinho() {
    carrinho = [];
    atualizaContagemCarrinho();
    salvarCarrinho();
    mostrarItensCarrinho();
}

// Linha para carregar o carrinho ao carregar a página
window.onload = carregaCarrinho;
