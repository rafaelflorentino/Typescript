/**
 * Objetivo: Mude o tipo de uma variável unknow para string, e utilize os metodos length, toLocaleUpperCase.
 * Entrada: Sem etrada.
 * Saida: Tamanho da string é nome.
 * Autor: Rafael Florentino.
 */
export { };

/* Casting as*/

// Mudar o tipo da variável unknown para string, e traz otamanho da string.
const valor: unknown = 'Hello word';
console.log((valor as string).length);


// Mudar o tipo da variável unknown para string e transforma em uppercase;

const nome: unknown = 'Rafael Florentino';
console.log(nome);
//console.log(nome.toLocaleUpperCase()); // não pode pois a variável é do tipo unknown
console.log((nome as string).toLocaleUpperCase());

//const name: unknown = 34;
//console.log((name as string).toLocaleUpperCase()); // não pode, porque valor da string é numérico e número não fica uppercase.


/* Casting <>*/
const carro = 'Corolla';
const tamanho: number = (<string>carro).length;
console.log('O tamanho da string é: ', tamanho);