"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log('\n');
// -----------------------------------------------------------------------//
// Sem construtor
class Estudante {
    constructor() {
        this.codigoEstudante = 0;
        this.nomeEstudante = '';
    }
}
// Cria um objeto ou intância
const estudante = new Estudante();
// Inicializar o objeto:
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = "Rafael";
// Acessar Campos
console.log('Codigo do Estudante: ' + estudante.codigoEstudante);
console.log('Nome do Estudante: ' + estudante.nomeEstudante);
// -----------------------------------------------------------------------//
// Com construtor
class Student {
    // Definir Construtor
    constructor(codStudent, nameStudent) {
        this.codStudent = codStudent;
        this.nameStudent = nameStudent;
    }
    // Criar Método
    listarEstudante() {
        console.log('Student Cod:  ' + this.codStudent);
        console.log('Student Name:  ' + this.nameStudent);
    }
}
// Acessar os campos
const student1 = new Student(8564, 'Paul Presley');
console.log('\nLendo os atributos do Student:');
console.log(student1.listarEstudante());
