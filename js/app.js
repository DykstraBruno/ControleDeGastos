import { Categoria, ListaGastosCategorias } from './classes.js';
import { valorNegativo, atualizarInterface } from './utils.js';

const gastosPorCategoria = new ListaGastosCategorias(
    new Categoria('Alimentação'),
    new Categoria('Transporte'),
    new Categoria('Moradia'),
    new Categoria('Lazer'),
    new Categoria('Outros'),
)
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
        const valorInformado = formulario.elements.valor.value;
        const categoriaInformada = formulario.elements.categoria.value;

    if (valorNegativo(valorInformado)) {
        alert("Por favor, insira um valor válido para o gasto.");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoria(categoriaInformada);
    categoria.adicionarValor(valorInformado);


    atualizarInterface(gastosPorCategoria);
    formulario.reset();
});


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