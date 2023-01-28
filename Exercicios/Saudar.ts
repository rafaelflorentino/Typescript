/**
 * Objetivo: Crie um programa que faça imprima o nome da pessoa e a data, e outras informações.
 * Entrada: Sem Entrada.
 * Saida: Nome e data, outras informações.
 * Autor: Rafael Florentino.
 */
export {};
let nome: string  = 'Rafael Florentino'
let dia : number = 4; 
let bol = true; 
console.log(`Ola ${nome}, hoje e: ${dia}, Afirmativa e: ${bol}`);

// Função Tipo String
let datahoje = new Date();
function saudar(pessoa: string, data: Date)
{
    console.log(`Ola ${pessoa}, hoje e ${data.toDateString()}!`);
}
saudar('Rafael', datahoje);

// Funcao vazia Tipo Number, retorna um número
function numero():number{
    return 26;
}
console.log('Funcao Retorna um Number: '+numero());

// Funcao vazia Tipo Number, retorna um número
function veradade():boolean{
    return true;
}
console.log('Funcao Retorna um Boolean: '+veradade());

// O any recebe qualquer coisa
function qualquer(dado: any){
    console.log('Funcao Recebe um Any: '+dado+'!!');
}
qualquer(4);

// Funções Anônimas
const nomes = ['Alice','Bob','Eve'];

//Tipagem cotextual para função
nomes.forEach(function (s) {
    console.log(s);
});

// Tipagem contextual com =>
nomes.forEach((s) => {
    console.log(s);
});

// Função diferente

interface CriaArrayString{
    [indice: number]: string;
}

var name: CriaArrayString;
name = ['Ana','Pedro','Mariana'];
//console.log(document.body.innerHTML= name[1]);

const frase= 'Hello Word!'
console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());




