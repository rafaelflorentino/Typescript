"use strict";
/**
 * Objetivo: Crie um classe Pessoa, e crie um metodo que imprima na tela o nome completo da pessoa.
 * Entrada: Sem Entrada.
 * Saida: Nome da pessoa.
 * Autor: Rafael Florentino.
 */
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Rafael', 'Florentino');
console.log(pessoa.nomeCompleto());
