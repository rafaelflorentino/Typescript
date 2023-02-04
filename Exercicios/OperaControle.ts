/**
 * Objetivo: Crie um programa que utilize operadores de controle/repetição(if else, switch case, for of, ternário, while, do while).
 * Entrada: Sem Entrada.
 * Saida: Mesagem contendo os dados.
 * Autor: Rafael Florentino.
 */
export { }

// IF
console.log("\nIF");
const numeroMax = 100;
let contador = 100;

if (contador < numeroMax) {
    contador++
}
console.log(contador);

// IF e ELSE
console.log("\n IF e Else");
const permissao: number = 18;
const idade: number = 17;
if (idade >= permissao) {
    console.log('\nVocê já tem idade para a dirigir!');
} else {
    console.log('\nVocê não tem idade suficiente para dirigir!');
}
console.log('Sua idade é:', idade);

// ELSE IF
console.log("\n Else IF");
const valorCompra: number = 30;
let desconto: number = 0;
if (valorCompra > 10 && valorCompra <= 20) {
    desconto = 5;
} else if (valorCompra > 20 && valorCompra <= 50) {
    desconto = 10;
} else {
    desconto = 20;
}
console.log(`Voce recebeu: ${desconto}% de desconto na sua compra`);

// IF TERNÁRIO
console.log("\n Ternário");
let idadeVotacao: number = 18;
console.log(idadeVotacao >= 18 ? 'Voce pode votar, sua idade é: ' : 'voce não pode votar, sua idade é: ', idadeVotacao);

let situacao: string = idadeVotacao >= 18 ? 'Voce pode votar! ' : 'Voce não pode votar.';
console.log(situacao);

// SWITCH CASE
console.log("\n Switch Case");
let flor: string = 'tulipa';
switch (flor) {
    case 'rosa':
        console.log(`são Vermelhas.`);
        break;
    case 'violeta':
        console.log(`são Azuis.`);
        break;
    case 'tulipa':
        console.log(`são Brancas.`);
        break;

    default:
        console.log(`${flor} não identificada. Por favor escolha outra flor.`);
}

let diaUtil = 4;
switch (diaUtil) {
    case 0:
        console.log(`Segunda.`);
        break;
    case 1:
        console.log(`Terça.`);
        break;
    case 2:
        console.log(`Quarta`);
        break;
    case 3:
        console.log(`Quinta`);
        break;
    case 4:
        console.log(`Sexta`);
        break;
    default:
        console.log(`Não é um dia útil.`);
}

// FOR
console.log("\n For ");
for(let i = 0; i< 10; i++){
    console.log(i);
}

// FOR OF
console.log("\n For Of ");
const estacoes =['Inverno','Primavera', 'Verão', 'Outono'];
for(const estacao of estacoes){
    console.log(estacao);
}

// FOR IN
console.log("\n For In ");
const numeros =[1, 2, 3, 4, 0, 7, 5, 6];
for(const numero in numeros){ // oredena os elementos
    console.log(numero);
}
const ordenadoComSort = numeros.sort();
console.log(ordenadoComSort);

// WHILE
console.log("\n While ");
let cont = 0;
while(cont < 5){
    console.log(cont);
    cont++;
}

let num = 1;
while(num <= 20){
    if(num % 5 == 0){
        console.log('O primeiro número múltiplo de 5 na sequenceia é: ',num);
        break;
    }
    num++;
}

let contando = 0;
const usuario: string[] = ['Moises','Eva','Abraão','Jezabel']
while(usuario[contando]){
    console.log('Usuario... : ',usuario[contando]);
    contando++;
}

// DO WHILE
console.log("\nDo While ");
let contador2 = 0;
do{
    console.log("# ",contador2);
    contador2++;
}while(contador2 < 5)
