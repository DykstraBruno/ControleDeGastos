import { Categoria } from './classes.js';

const matrizGastos = [
    new Categoria('Alimentação'),
    new Categoria('Transporte'),
    new Categoria('Moradia'),
    new Categoria('Lazer'),
    new Categoria('Outros'),
]


//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0 ;
const somaValor =(total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formatarMoeda = (valor) => valor.toFixed(2).replace('.', ',');

// Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

// Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

// Atualizar valores da matroz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () =>{

    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$${formatarMoeda(valor)}`;
    });

}

function adicionarGasto() {

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)) {
        alert("Por favor, insira um valor válido para o gasto.");
        return;
    }
    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");

    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}