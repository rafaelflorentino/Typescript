/**
 * Objetivo: Criar variáveis, objetos, funções e imprimir na tela.
 * Entrada: Sem Entrada.
 * Saida: Valores impressos na tela.
 * Autor: Rafael Florentino.
 */

// Tipos de Variáveis
console.log('\n------ Variaveis -----');
// Unknown
console.log('\nUnknown');
let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! tudo bem?';
console.log(valorVariavel);
//console.log(valorVariavel.toFixed());// da erro string na pode usar o metodo toFixed so number, precisa tratar, como abaixo.
if (typeof valorVariavel === 'number'){
    console.log(valorVariavel.toFixed()); // Unknown verifica o tipo antes de realizar a função e fala se vai dar erro.
}

// Any
const a: any = 777; // Aby não verifica se o tipo pode ser usado pela função, pode dar erro.
const b: any =['perigo'];
const c: any= a+ b;
console.log('\nAny');
console.log(c); // Concatena, sai como texto.
console.log(typeof(c));
let frase; // Se não definir nada tipo fica Any.
console.log(typeof(frase)); // undefined.
frase = "frase"; // depois de recer texto, Mudou tipo para string.
console.log(typeof(frase));

const formulario: { [campoFormulario: string]: any } = {
    nome: 'Marisa',
    sobrenome: 'Lima',
    idade : 39,
};
console.log(formulario);

// Void
console.log('\nVoid');
ola(); // Função tipo void não retorna dados.
const olaProfissao = () => { // variavel recebe uma função tipo void.
    console.log('Olá, Designer');
};
olaProfissao();
let variavelTest: void = undefined;
//variavelTest = 1; // da erro, não pode.
//variavelTest = null; // aceita se tiver abilitado a opsil 'strictNullChecks'.
console.log(typeof(variavelTest));

// Strings
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
let num: number = -10; // inteiro.
let num2: number = 15.5; // ponto flutuante.
let num3: number = 0x37CF; // Hexadecimal.
let num4: number = 0o377; // octal.
let num5: number = 0b111001; // Binário.
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
idiomas.push('Mandarim'); // Adiciona no final da lista e retorna o novo tamanho.
console.log(idiomas);
idiomas.push('Italiano'); // Adiciona no final da lista e retorna o novo tamanho.
console.log(idiomas);
console.log('Tamanho do Array Idiomas: ',idiomas.length); // retorna o tamnaho da array, (quantidade de elementos).
let listaNumeros =[0, 1, 2, 3, 4, 5];
listaNumeros =[...listaNumeros, 6, 7, 8, 9, 10]; // Spread operator.
console.log(listaNumeros);
for(let i = 0; i < idiomas.length; i++){
    console.log(idiomas[i]);
}
// Tupla
let pessoas: [string, string, number];
pessoas = ['Astolfo da Silva','Programador', 100]; // tem que passar os valores na ordem certa, cada tipo na sua posição.
let pessoas2: [string, string, number] = ['Claudia Barros Pereira','Gerente de Projetos', 44]; // Outra forma de declarar.
console.log("\nTuplas");
console.log("Pessoas: ",pessoas);
console.log("Pessoas 2: ",pessoas2);
// Tupla Homogênea
let frutas: [string, ...string[]]= ['Maça','Pera','Uva','Banana','Manga']; // Usa o Spread pra não repetir.
console.log("Tupla Homogênea, Frutas: ",...frutas); // Imprimi os elementos da tupla(fora do colchete).
// Tupla Heterogênea
let listaFrutas: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log("Tupla Heterogênea, Frutas: ",...listaFrutas);
// Tupla com Labeled
type Nome =
    | [primeiroNome: string, sobrenome: string] // Pode receber só 1 sobrenome.
    | [primeiroNome: string, nomeMeio:string, sobrenome: string] // Ou pode receber 2 sobrenomes.
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

// Void
function ola(): void{
    console.log('Olá, Programador')
};
function logError(errorMessage: string): void {
    console.log('Erro:',errorMessage);
};
logError('Falha de conexão');

const erro = (errorMessage: string): void => {
    console.log('Erro:',errorMessage);
}
erro('Servidor não encontrado');



