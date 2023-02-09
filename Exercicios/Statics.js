"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Propriedades Estáticas
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratados++;
    }
}
Funcionario.contratados = 0;
const funcionario1 = new Funcionario('Marie', 'Curie', 'Física');
const funcionario2 = new Funcionario('Frida', 'Kahlo', 'Pintora');
console.log(Funcionario.contratados);
console.log('\n');
// Metodos Estáticos
class Funcionario2 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario2.contratados++;
    }
    static retornarContratatos() {
        return Funcionario2.contratados;
    }
}
Funcionario2.contratados = 0;
const funcionario3 = new Funcionario2('Marie', 'Curie', 'Física');
const funcionario4 = new Funcionario2('Frida', 'Kahlo', 'Pintora');
const funcionario5 = new Funcionario2('Frida', 'Semkahlo', 'Artista');
console.log(Funcionario2.retornarContratatos());
console.log('\n');
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.Qnt_Vendidos++;
        console.log(Cachorro.Qnt_Vendidos);
    }
    exibirInformacao() {
        console.log(`O cachorro ${this.nome} tem ${this.idade} anos.`);
    }
}
Cachorro.Qnt_Vendidos = 0;
const cachorro1 = new Cachorro('Duque', 7, ['Vira-lata']);
const cachorro2 = new Cachorro('Trovão', 10, ['Pastor Alemão']);
console.log(cachorro1.exibirInformacao());
console.log(cachorro2.exibirInformacao());
console.log('\n');
