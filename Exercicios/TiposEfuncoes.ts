/**
 * Objetivo: Crie um programa que faça imprima tipos e realize funções.
 * Entrada: Sem Entrada.
 * Saida: Nome e data, outras informações.
 * Autor: Rafael Florentino.
 */
function viverPerigosamente(x?: number | null){ // aceita number ou nullo
    if(x === null){
        console.log('Valor Nulo, Digite outro valor.');
    }else{
        console.log(x!.toFixed());// toFixed, arredonda pra cima, o sinal ! permite realizar o metodo
    }
}
viverPerigosamente(null);
viverPerigosamente(2.9);

function padLeft(padding: number | string, input: string) {
    if (typeof padding === 'number') { //verifica o tipo da variavel
        return new Array(padding + 1).join(' ') + input;
    }
    return padding + input;
}
let qualquer: any; // Tipo any recebe qualquer coisa
qualquer = padLeft(4,'rafa');

console.log(padLeft(1,'rafa'));
console.log(qualquer);

function verificaTexto(y?: number | string){ // aceita number ou String
    if(typeof y === 'number'){
        console.log(y,' E um numero.');
    }else if(typeof y === 'string'){
        console.log(y,' E um Texto');
    }
}
verificaTexto(5)
verificaTexto('agua')
verificaTexto('5')

function saudar(fn: (a: string) => void) {
fn('Olá Mundo!');
}
function printToConsole(s: string) {
console.log(s);
}
saudar(printToConsole); //funcao saudar recebe outra funcao

// funcao generica
function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}
// s é do tipo 'string'
const texto = firstElement(['a', 'b', 'c']);
console.log(texto);

// n é do tipo 'number'
const numero = firstElement([1, 2, 3]);
 console.log(numero);
 
//parametros opcionais

function f(num?: number){
    console.log('funcao chamada',num);
 }
 f(); // aceita undefined
 f(5);
 
 function g(num2=10){//valor padrao e 10, caso nao receba nada
     console.log('funcao chamada',num2);
 }
 g(); //valor padrao e 10, caso nao passe nada
 g(5);
 