/**
 * Objetivo: Crie um classe e função absrata, crie um funcionario CLT  e um funcionário PJ, herdar o metodo emitir contraCheque
 * cada tipo de funcinário tem um calculo especifico diferente.
 * Entrada: Sem Entrada.
 * Saida: Nome, sobrenome e salario.
 * Autor: Rafael Florentino.
 */
export { };

abstract class Funcionario { // Classe abstrata
    constructor(private nome: string, private sobrenome: string) { }

    abstract retornarSalario(): number; // Precisa de ter pelo menos um metodo abstrato.
    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salário ${this.retornarSalario()}`;
    }
}
//const funcionario = new Funcionario('Glaucia','Lemos'); // Não e possivel instanicar uma classe abstrata.

class FuncionarioCLT extends Funcionario { //PAra usar uma classe abstrata e necessarioo herdar, usar o extends.
    constructor(nome: string, sobrenome: string, private salario: number){
        super(nome, sobrenome);
    }
    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas:number){
        super(nome, sobrenome);
    }
    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const maria = new FuncionarioCLT('Maria', 'Silva', 18000);
const joao = new FuncionarioPJ('Joao', 'Lemos', 70, 190);

console.log(maria.emitirContraCheque());
console.log(joao.emitirContraCheque());