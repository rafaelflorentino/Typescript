"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Public
class EstudantePublico {
    constructor() {
        this.codigoEstudante = 0;
        this.nomeEstudante = '';
    }
}
const estudante = new EstudantePublico();
estudante.codigoEstudante = 303;
estudante.nomeEstudante = 'Albert Einstein';
console.log('\nCodigo do Estudante Público: ', estudante.codigoEstudante);
console.log('Nome Estudante Público: ', estudante.nomeEstudante);
// Private
class EstudantePrivado {
    constructor(codigoEstudante, nomeEstudante, idade) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }
    retornarDadosEstudante() {
        return `     ------- Metodo do Estudante Privado ------- 
        \tCódigo: ${this.codigoEstudante} 
        \tNome: ${this.nomeEstudante}
        \tIdade: ${this.idade}`;
    }
}
const estudantePrivado = new EstudantePrivado(2342, 'Isaac Newton', 65);
console.log('\nCodigo do Estudante Privado: ', estudantePrivado.codigoEstudante);
console.log('Nome do Estudante Privado: ', estudantePrivado.nomeEstudante);
console.log('Idade do Estudante Privado: Privado');
console.log('\n', estudantePrivado.retornarDadosEstudante());
// Protect
class EstudanteProtegido {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    estudanteProtegidoFalou() {
        return `\n        ------- Metodo do Estudante Protegido ------- 
        \tTambém sou Estudante protegido.`;
    }
}
class Pessoa extends EstudanteProtegido {
    constructor(codigoEstudante, nomeEstudante, curso) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosPessoa() {
        return `\n\t------- Metodo da Pessoa e Extende Estudante Protegido --------
        \tCódigo: ${this.codigoEstudante} (Campo Vem de Estudante Protegido)
        \tNome: ${this.nomeEstudante} (Campo Vem de Estudante Protegido)
        \tCurso: ${this.curso} (Campo Vem de Pessoa)`;
    }
}
const estudanteProtegido = new Pessoa(12233, 'Nikola Tesla', 'Física');
console.log('\n', estudanteProtegido.retornarDadosPessoa());
console.log('\n', estudanteProtegido.estudanteProtegidoFalou());
