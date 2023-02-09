/**
 * Objetivo: Crie um função static, use metodos static.
 * Entrada: Sem Entrada.
 * Saida: metodos staticos.
 * Autor: Rafael Florentino.
 */
export {};

// Propriedades Estáticas
class Funcionario {
    static contratados = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string){
        Funcionario.contratados++;
    }
}
const funcionario1 = new Funcionario('Marie', 'Curie', 'Física');
const funcionario2 = new Funcionario('Frida', 'Kahlo', 'Pintora');
console.log(Funcionario.contratados);
console.log('\n');

// Metodos Estáticos
class Funcionario2 {
    private static contratados = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string){
        Funcionario2.contratados++;
    }
    public static retornarContratatos(){
        return Funcionario2.contratados;
    }
}
const funcionario3 = new Funcionario2('Marie', 'Curie', 'Física');
const funcionario4 = new Funcionario2('Frida', 'Kahlo', 'Pintora');
const funcionario5 = new Funcionario2('Frida', 'Semkahlo', 'Artista');
console.log(Funcionario2.retornarContratatos());
console.log('\n');

// Propiedades Estáticas
type Raca = 'Pastor Alemão' | 'Buldoggue' | 'Pug' | 'Yorkshire' | 'Poodle' | 'Vira-lata';

class Cachorro{
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static Qnt_Vendidos = 0;

    constructor(nome: string, idade:number, racas: Raca[]){
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        
        Cachorro.Qnt_Vendidos++;
        console.log(Cachorro.Qnt_Vendidos);
    }
    public exibirInformacao(): void {
        console.log(`O cachorro ${this.nome} tem ${this.idade} anos.`);
    }
}
const cachorro1 = new Cachorro('Duque', 7, ['Vira-lata']);
const cachorro2 = new Cachorro('Trovão', 10, ['Pastor Alemão']);
console.log(cachorro1.exibirInformacao());
console.log(cachorro2.exibirInformacao());
console.log('\n');
