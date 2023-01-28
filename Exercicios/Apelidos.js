"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printCoord(pt) {
    console.log('The coordinate´s x value is: ' + pt.x);
    console.log('The coordinate´s y value is: ' + pt.y);
}
printCoord({ x: 100, y: 8 });
function printCoord2(pnt) {
    console.log('The coordinate´s a value is: ' + pnt.a);
    console.log('The coordinate´s b value is: ' + pnt.b);
}
printCoord2({ a: 99, b: 77 });
// Tipos literais
let stringMutavel = 'foo'; // let pode ser alterado
const stringImutavel = 'foo'; // const nao pode ser alterado
