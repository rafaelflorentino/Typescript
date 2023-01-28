export {};
/**
 * Objetivo: Mudar o nome das variáveis, e imprimir as cordenadas de  x e y.
 * Entrada: Sem Entrada.
 * Saida: Cordendas de x e y.
 * Autor: Rafael Florentino.
 */
// Apelidos de Tipo: type
type Ponto = {
    x: number;
    y:number;
}
function printCoord(pt: Ponto){
    console.log('The coordinate´s x value is: '+pt.x);
    console.log('The coordinate´s y value is: '+pt.y);
}
printCoord({ x:100, y:8 });

// Apelidos Usando Interfaces: interface
interface Point{
    a: number;
    b: number;
}
function printCoord2(pnt: Point){
    console.log('The coordinate´s a value is: '+pnt.a);
    console.log('The coordinate´s b value is: '+pnt.b);
}
printCoord2({ a:99, b:77 });

// Tipos literais

let stringMutavel='foo'; // let pode ser alterado
const stringImutavel='foo'; // const nao pode ser alterado