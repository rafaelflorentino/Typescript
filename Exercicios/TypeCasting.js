"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Casting as*/
// Mudar o tipo da variável unknown para string, e traz otamanho da string.
const valor = 'Hello word';
console.log(valor.length);
// Mudar o tipo da variável unknown para string e transforma em uppercase;
const nome = 'Rafael Florentino';
console.log(nome);
//console.log(nome.toLocaleUpperCase()); // não pode pois a variável é do tipo unknown
console.log(nome.toLocaleUpperCase());
//const name: unknown = 34;
//console.log((name as string).toLocaleUpperCase()); // não pode, porque valor da string é numérico e número não fica uppercase.
/* Casting <>*/
const carro = 'Corolla';
const tamanho = carro.length;
console.log('O tamanho da string é: ', tamanho);
