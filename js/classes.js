export class Categoria {
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }

    get valor(){
        return this.#valor;
    }
    get nome(){
        return this.#nome;
    }

    adicionarValor(valor){
        this.#valor += parseFloat(valor);
    }
}