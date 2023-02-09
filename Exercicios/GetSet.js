"use strict";
/**
 * Objetivo: Crie uma classe que utilize get e set.
 * Entrada: Sem Entrada.
 * Saida: Nome, data de nascimento, codigo.
 * Autor: Rafael Florentino.
 */
//Usando o Get
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
// Usando o Set
class Pessoa {
    constructor() {
        this.nome = '';
    }
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Zaratustra');
console.log('Meu nome é:', pessoa.nome);
// Usando get
class Estudante {
    constructor() {
        this._nome = 'Benjamin Franklin';
        this._semestre = 0;
        this._curso = ' ';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);
class Estudante2 {
    constructor(nomeEstudante, semestre, cursoEstudante) {
        this.nome = 'Benjamin Franklin';
        this.semestre = 0;
        this.curso = ' ';
        this.nome = nomeEstudante;
        this.semestre = semestre;
        this.curso = cursoEstudante;
    }
    get cursos() {
        return this.curso;
    }
    set cursos(setCurso) {
        this.curso = setCurso;
    }
}
const estudante2 = new Estudante2('Ivete Sangalo', 5, 'Dança Artistica');
console.log(estudante2);
console.log('\n');
estudante2.curso = 'Canto Proficional';
console.log(estudante2);
