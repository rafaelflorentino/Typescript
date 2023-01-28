/**
 * Objetivo: Criar variáveis, objetos, funções e imprimir na tela.
 * Entrada: Sem Entrada.
 * Saida: Valores impressos na tela.
 * Autor: Rafael Florentino.
 */

// Tipos de Variáveis

// String
console.log('\n------ Variaveis -----');
let nome: string= "Rafael";
let nome2: string= 'Daniel';
let nome3: string= 'Mateus'
console.log('\nStrings');
console.log('String Aspas Duplas " :',nome);
console.log('String Aspas Simples \' : ',nome2);
console.log(`String Usando \`\${nome}\` Back-Ticks  + Cifrão + Colchetes + Variável : ${nome3}`);

// Boolean
let verdadeiro: boolean = true;
let falso: boolean = false;
let logica: boolean = 1 > 2;
console.log('\nBoolean');
console.log('Verdadeiro: ',verdadeiro);
console.log('Falso: ',falso);
console.log('O numero 1 e maior que 2: %s', falso ? 'Verdade' : 'Mentira');
if(!verdadeiro){console.log('if(!falso) : Não falso = Verdadeiro ');}else{console.log('if(!verdade) : Não verdadeiro = Falso ');}

// Number
let num: number = -10; // inteiro
let num2: number = 15.5; // ponto flutuante
let num3: number = 0x37CF; // Hexadecimal
let num4: number = 0o377; // octal
let num5: number = 0b111001; // Binário
console.log('\nNumber Inteiro:',num);
console.log('Number - Ponto Flutuante:',num2);
console.log('Number - Hexadecimal:',num3);
console.log('Number - Octal:',num4);
console.log('Number - Binário:',num5);

// Bigint
let numBig: bigint = 900719925470991n;
let numBig2: bigint = 0b1000000000000000000000000000000000000000000000000000000000000000011n;
let numBig3: bigint = 0x20000000000003n;
console.log('\nBigint: ',numBig);
console.log('Bigint - Binário: ',numBig2);
console.log('Bigint - Hexadecimal: ',numBig3);
console.log('Tipo - typeof(numBig) =',typeof(numBig));

// Arrays
let animail: string[] = ['Elefante', 'Cachorro','Gato', 'Panda', 'Girafa'];
console.log('\nArray: ',animail);

// Arrays Object
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês']
console.log('\nArray Object(let idiomas: Array<string>): ',idiomas[1]);
console.log(idiomas);
idiomas.push('Mandarim'); // Adiciona no final da lista e retorna o novo tamanho
console.log(idiomas);
idiomas.push('Italiano'); // Adiciona no final da lista e retorna o novo tamanho
console.log(idiomas);
console.log('Tamanho do Array Idiomas: ',idiomas.length); // retorna o tamnaho da array, (quantidade de elementos)
let listaNumeros =[0, 1, 2, 3, 4, 5];
listaNumeros =[...listaNumeros, 6, 7, 8, 9, 10]; // Spread operator
console.log(listaNumeros);
for(let i = 0; i < idiomas.length; i++){
    console.log(idiomas[i]);
}
// Tupla
let pessoas: [string, string, number];
pessoas = ['Astolfo da Silva','Programador', 100]; // tem que passar os valores na ordem certa, cada tipo na sua posição
let pessoas2: [string, string, number] = ['Claudia Barros Pereira','Gerente de Projetos', 44]; // Outra forma de declarar
console.log("\nTuplas");
console.log("Pessoas: ",pessoas);
console.log("Pessoas 2: ",pessoas2);
// Tupla Homogênea
let frutas: [string, ...string[]]= ['Maça','Pera','Uva','Banana','Manga']; // Usa o Spread pra não repetir, 
console.log("Tupla Homogênea, Frutas: ",...frutas); // Imprimi os elementos da tupla(fora do colchete)
// Tupla Heterogênea
let listaFrutas: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log("Tupla Heterogênea, Frutas: ",...listaFrutas);
// Tupla com Labeled
type Nome =
    | [primeiroNome: string, sobrenome: string] // Pode receber só 1 sobrenome
    | [primeiroNome: string, nomeMeio:string, sobrenome: string] // Ou pode receber 2 sobrenomes
function criarPessoa(...nome: Nome){
    return[...nome];
}
console.log(criarPessoa('Maria','Madalena'));
console.log(criarPessoa('Marcio','Moreira','Santana'));

// Objetos
let carro:{
    nome: string;
    ano: number;
    preco: number
};
carro = {nome: 'Ferrari X', ano: 2019, preco:1800000}
console.log('\nObjeto: ',carro);

// Funções 
console.log('---- Funções ---- ');
function somar(num1: number, num2: number){
    return num1 + num2;
}
console.log('Soma: ',somar(4,5));

function multiplicar(num1: number, num2: number){
    return num1 * num2;
}
console.log('Multiplicacao: ',multiplicar(1.5,5.2));
function listarTupla(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}
console.log(listarTupla(['Ana','Joao'],[35,39]));
