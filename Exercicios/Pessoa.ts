/**
 * Objetivo: Crie um classe Pessoa, e crie um metodo que imprima na tela o nome completo da pessoa.
 * Entrada: Sem Entrada.
 * Saida: Nome da pessoa.
 * Autor: Rafael Florentino.
 */

class Pessoa{
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Rafael', 'Florentino');
console.log(pessoa.nomeCompleto());

