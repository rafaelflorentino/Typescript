/**
 * Objetivo: Crie um classe que use interface e type.
 * Entrada: Sem Entrada.
 * Saida: nome, sobrenome, idade, autor, titulo, ano, modelo.
 * Autor: Rafael Florentino.
 */
export{};

// Interface Simples
interface Pessoa{
    nome: string;
    sobrenome: string;
    idade: number;
}
function exibirNome(pessoa: Pessoa){
    return `
    nome: ${pessoa.nome}
    sobrenome: ${pessoa.sobrenome}
    idade: ${pessoa.idade}`;
}

const maria = {
    nome: 'Maria',
    sobrenome: 'Lemos',
    idade: 36,
}
console.log(maria);
console.log(exibirNome(maria));


// Interface Com Opcionais
interface Livro{
    titulo: string;
    autor: string;
    paginas?: number; // Variável opcional.
}
const livro: Livro={
        titulo: 'O hobbit',
        autor: 'J.R.R Tolkien',
}
console.log(livro);


// Interface com somente leitura
interface Carro{
    readonly modelo: string; // Apenas leitura.
    ano: number;
    valor?: number; // opcional
}
const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
}
//carro.modelo = 'Fusca 2.0'; // não pode, so pode ler modelo, não pode alterar valor.
console.log(carro);


// Interface com implements
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}
class Gato implements IAnimal{ // Implementa, variaveis e metodos da classe IAnimal.
    nome: string;
    idade: number;
    estaVivo: boolean;
    
    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida: string){ // Sobre poe o meto comer da interface
        console.log(`O Gato ${this.nome} está comendo ${tipoComida}`);
    }
}
    const gato = new Gato('Haru', 7, true);
    console.log(gato);
    gato.comer('Ração');
    

// Interface vs Alias Type
interface Pessoa2{
    nome: string;
    sobrenome: string;
    idade: number;
}
type Pessoa3 = { // Diferença da interface é que precisa por o sinal de = antes da chave {
    nome: string;
    sobrenome: string;
    idade: number;
}
