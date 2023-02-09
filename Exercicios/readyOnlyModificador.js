"use strict";
/**
 * Objetivo: Crie uma classe funcionário com a propriedade data de nascimento como readyonly.
 * Entrada: Sem Entrada.
 * Saida: Nome, data de nascimento, codigo.
 * Autor: Rafael Florentino.
 */
// Jeito 01
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(1986, 10, 24));
console.log(funcionario.dataNascimento);
//funcionario.dataNascimento =new Date(1986, 10, 24); // não pode, só pode ler, ou intancia uma nova classe com data.
// Jeito 02
class Funcionario2 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
const funcionario2 = new Funcionario2(new Date(1999, 22, 14));
console.log(funcionario2.dataNascimento);
// Jeito 03
class Funcionario3 {
    constructor(nome, codigo) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
}
const funcionario3 = new Funcionario3('Thomas', 123);
funcionario3.nome = 'Thomas Edison';
//funcionario3.codigoFuncionario = 456; // Não pode alterar sor ler
console.log('Codigo: ', funcionario3.codigoFuncionario, ' Nome: ', funcionario3.nome);
console.log(funcionario3);
console.log('\n');
const funcionario4 = {
    codigoFuncionario: 506699,
    nomeEmpregado: 'Jurema',
};
console.log(funcionario4);
//funcionario4.codigoFuncionario = 7843548; // Não pode alterar
//funcionario4.nome = 'Silva'; // Não pode alterar
console.log('\n');
const funcionario5 = {
    codigoFuncionario: 944898,
    nomeEmpregado: 'Conceição',
};
console.log(funcionario5);
console.log('\n');
