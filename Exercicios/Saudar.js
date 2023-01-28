"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome = 'Rafael Florentino';
let dia = 4;
let bol = true;
console.log(`Ola ${nome}, hoje e: ${dia}, Afirmativa e: ${bol}`);
// Função Tipo String
let datahoje = new Date();
function saudar(pessoa, data) {
    console.log(`Ola ${pessoa}, hoje e ${data.toDateString()}!`);
}
saudar('Rafael', datahoje);
// Funcao vazia Tipo Number, retorna um número
function numero() {
    return 26;
}
console.log('Funcao Retorna um Number: ' + numero());
// Funcao vazia Tipo Number, retorna um número
function veradade() {
    return true;
}
console.log('Funcao Retorna um Boolean: ' + veradade());
// O any recebe qualquer coisa
function qualquer(dado) {
    console.log('Funcao Recebe um Any: ' + dado + '!!');
}
qualquer(4);
// Funções Anônimas
const nomes = ['Alice', 'Bob', 'Eve'];
//Tipagem cotextual para função
nomes.forEach(function (s) {
    console.log(s);
});
// Tipagem contextual com =>
nomes.forEach((s) => {
    console.log(s);
});
var name;
name = ['Ana', 'Pedro', 'Mariana'];
//console.log(document.body.innerHTML= name[1]);
const frase = 'Hello Word!';
console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());
