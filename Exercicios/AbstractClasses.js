"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.retornarNomeCompleto} - Salário ${this.retornarSalario()}`;
    }
}
//const funcionario = new Funcionario('Glaucia','Lemos'); // Não e possivel instanicar uma classe abstrata.
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const maria = new FuncionarioCLT('Maria', 'Silva', 18000);
const joao = new FuncionarioPJ('Joao', 'Lemos', 70, 190);
console.log(maria.emitirContraCheque());
console.log(joao.emitirContraCheque());
