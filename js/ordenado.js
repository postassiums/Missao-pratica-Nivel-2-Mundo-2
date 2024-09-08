// a) Função swap
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// b) Função shuffle
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let idx1 = Math.floor(Math.random() * arr.length);
        let idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

// c) Função bubble_sort
const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

// d) Função selection_sort
const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
};

// e) Função quick_sort
const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    return arr;
};

// f) Função particionamento
const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};


function add() {
    // a) Capturar o campo de entrada
    const valorInput = document.getElementById('valor');
    const valor = valorInput.value;

    // b) Capturar a lista de valores
    const lista = document.getElementById('valores');

    // c) Criar o elemento li
    const node = document.createElement('li');

    // d) Definir o nó de texto com o valor do campo de entrada
    const texto = document.createTextNode(valor);
    node.appendChild(texto);

    // e) Adicionar o elemento node à lista de valores
    lista.appendChild(node);

    // Limpar o campo de entrada após adicionar o valor
    valorInput.value = '';
}

// Função para ordenar a lista de valores
function ordenar() {
    // a) Capturar a lista de valores e a seleção
    const lista = document.getElementById('valores');
    const algoritmo = document.getElementById('algoritmo');

    // b) Obter os valores da lista e colocar em um vetor
    const itens = Array.from(lista.children).map(item => parseInt(item.innerHTML));

    // c) Escolher o algoritmo com base na seleção
    const algoritmoSelecionado = algoritmo.selectedIndex;
    switch (algoritmoSelecionado) {
        case 0: // Bubble Sort
            bubble_sort(itens);
            break;
        case 1: // Selection Sort
            selection_sort(itens);
            break;
        case 2: // Quick Sort
            quick_sort(itens, 0, itens.length - 1);
            break;
    }

    // d) Substituir o conteúdo da lista com os valores ordenados
    lista.innerHTML = itens.map(item => `<li>${item}</li>`).reduce((acc, li) => acc + li, '');
}

// Função para misturar a lista de valores
function misturar() {
    // a) Capturar a lista de valores
    const lista = document.getElementById('valores');

    // b) Obter os valores da lista e colocar em um vetor
    const itens = Array.from(lista.children).map(item => parseInt(item.innerHTML));

    // c) Aplicar a função shuffle para embaralhar
    shuffle(itens, itens.length);

    // d) Substituir o conteúdo da lista com os valores embaralhados
    lista.innerHTML = itens.map(item => `<li>${item}</li>`).reduce((acc, li) => acc + li, '');
}


let addButton=document.getElementById('addButton')
let orderButton=document.getElementById('orderButton')
let mixButton=document.getElementById('mixButton')

addButton.addEventListener('click',add)
orderButton.addEventListener('click',ordenar)
mixButton.addEventListener('click',misturar)