/**
 * Objetivo: Crie um classe que use varias interfaces e use extends em mais de uma classe.
 * Entrada: Sem Entrada.
 * Saida: Nome, idade, raça, porte, salario, id.
 * Autor: Rafael Florentino.
 */
export{};

// Interface com extends
interface Animal1 {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro1 extends Animal1 {
    raca: string;
}
const cachorro1: Cachorro1 = {
    nome: 'Duque',
    idade: 5,
    porte: 'Médio',
    raca: 'Vira-lata'
};

console.log(cachorro1);

// Interface com 2 extends
interface Gato{
    nome: string;
}

interface Cachorro {
    nome: string;
}

interface Animal extends Cachorro, Gato {
    idade: number;
}

const animal: Animal = {
    nome: 'Haru',
    idade: 4,
};
console.log(animal);

// Usando omit
interface Funcionario{
    id: number; // *Tipo number. // Outra forma caso tipo precise mudar mais a frente id: number | string;
    nome: string;
    salario: number; // Tipo number. // salario: number | string;
}
interface Desenvolvedor extends Omit<Funcionario,'id' | 'salario'>{ // Com Omit posso mudar id: number para id: string sem dar erro.
    id: string; // *Mudei de tipo number para string.
    salario: string; // Mudei de tipo number para string.
    linguagemProgramacao: string;
}
const desenvolvedor: Desenvolvedor = { 
    id: 'js-321',
    nome: 'Mona Lisa',
    salario: '10k',
    linguagemProgramacao: 'Javascript',
}
console.log(desenvolvedor);