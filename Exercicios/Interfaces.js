"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirNome(pessoa) {
    return `
    nome: ${pessoa.nome}
    sobrenome: ${pessoa.sobrenome}
    idade: ${pessoa.idade}`;
}
const maria = {
    nome: 'Maria',
    sobrenome: 'Lemos',
    idade: 36,
};
console.log(maria);
console.log(exibirNome(maria));
const livro = {
    titulo: 'O hobbit',
    autor: 'J.R.R Tolkien',
};
console.log(livro);
const carro = {
    modelo: 'Fusca',
    ano: 1969,
};
//carro.modelo = 'Fusca 2.0'; // não pode, so pode ler modelo, não pode alterar valor.
console.log(carro);
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O Gato ${this.nome} está comendo ${tipoComida}`);
    }
}
const gato = new Gato('Haru', 7, true);
console.log(gato);
gato.comer('Ração');
