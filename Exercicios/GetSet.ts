/**
 * Objetivo: Crie uma classe que utilize get e set.
 * Entrada: Sem Entrada.
 * Saida: Nome, data de nascimento, codigo.
 * Autor: Rafael Florentino.
 */

//Usando o Get
class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);

// Usando o Set
class Pessoa {
    nome: string = '';

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Zaratustra')
console.log('Meu nome é:', pessoa.nome);

// Usando get
class Estudante {
    private _nome = 'Benjamin Franklin';
    private _semestre: number =0;
    private _curso: string =' ';

    public get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

class Estudante2 {
    nome = 'Benjamin Franklin';
    semestre: number =0;
    curso: string =' ';

    constructor(nomeEstudante: string, semestre: number, cursoEstudante: string) {
        this.nome =nomeEstudante;
        this.semestre= semestre;
        this.curso= cursoEstudante;
    }
    public get cursos(){
        return this.curso;
    }
    public set cursos(setCurso: string){
        this.curso = setCurso;
    }
}

const estudante2 = new Estudante2('Ivete Sangalo',5,'Dança Artistica');
console.log(estudante2);
console.log('\n');

estudante2.curso = 'Canto Proficional';
console.log(estudante2);