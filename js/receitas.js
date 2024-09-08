const receitas = [
    {
        titulo: 'Arroz de Couve-Flor',
        imagem: '../assets/arroz.png',  // Caminho da imagem aqui
        preparo: 'Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.',
        ingredientes: ['Arroz', 'Couve-Flor', 'Cebola Média', 'Azeite']
    },
    {
        titulo: 'Bolo de Café',
        imagem: '../assets/bolo.png',  // Caminho da imagem aqui
        preparo: 'Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.',
        ingredientes: ['Farinha de Trigo', 'Açúcar', 'Café Coado', 'Chocolate em Pó', 'Ovos']
    },
    {
        titulo: 'Coxinha de Brigadeiro',
        imagem: '../assets/morango.png',  // Caminho da imagem aqui
        preparo: 'Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.',
        ingredientes: ['Leite Condensado', 'Chocolate em Pó', 'Manteiga', 'Morango', 'Chocolate Granulado']
    }
];

function getListaIngredientes(receita) {
    return '<ul>' + receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((acc, item) => acc + item, '') + '</ul>';
}

function getCard(receita) {
    return `
        <div style="width: 250px" class="card m-3">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    pnlCatalogo.innerHTML = receitas.map(receita => getCard(receita)).reduce((acc, card) => acc + card, '');
}