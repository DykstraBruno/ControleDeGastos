//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
export const valorNegativo = (valor) => valor <= 0 || valor === '';
const formatarMoeda = (valor) => valor.toFixed(2).replace('.', ',');

export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;

    categorias.forEach(({nome, valor}) => {
        const elemento = obterElemento(nome);
        if (elemento) {
            elemento.textContent = `${nome}: R$${formatarMoeda(valor)}`;
        }
    });

    const elementoTotal = obterElemento('Total');
    if (elementoTotal) {
        elementoTotal.textContent = `Total: R$${formatarMoeda(gastosPorCategoria.obterTotal())}`;
    }
};