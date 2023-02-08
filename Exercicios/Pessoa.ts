/**
 * Objetivo: Crie um classe Pessoa, e crie um metodo que imprima na tela o nome completo da pessoa, crie uma classe estudante e
 * imprima na tela o nome e ocodigo do estudante.
 * Entrada: Sem Entrada.
 * Saida: Nome e sobrenome da pessoa, codigo e nome do estudante.
 * Autor: Rafael Florentino.
 */
export {}
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
console.log('\n');

// -----------------------------------------------------------------------//

// Sem construtor
class Estudante {
    codigoEstudante: number=0;
    nomeEstudante: string='';
}

// Cria um objeto ou intância
const estudante = new Estudante(); 

// Inicializar o objeto:
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = "Rafael"

// Acessar Campos
console.log('Codigo do Estudante: '+estudante.codigoEstudante);
console.log('Nome do Estudante: '+estudante.nomeEstudante);


// -----------------------------------------------------------------------//

// Com construtor
class Student{
    codStudent: number;
    nameStudent: string;

    // Definir Construtor
    constructor(codStudent: number,nameStudent:string){
        this.codStudent = codStudent;
        this.nameStudent = nameStudent;
    }

    // Criar Método
    listarEstudante(): void{
        console.log('Student Cod:  '+this.codStudent);    
        console.log('Student Name:  '+this.nameStudent);   
    }
}
// Acessar os campos
const student1 = new Student(8564, 'Paul Presley');
console.log('\nLendo os atributos do Student:'); 
console.log(student1.listarEstudante());