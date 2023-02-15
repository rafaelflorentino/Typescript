/**
 * Objetivo: Crie uma classes e metodos que use typeof e instanceof e in para verificar os tipos.
 * Entrada: Sem Entrada.
 * Saida: Data, nome, id, mensagem.
 * Autor: Rafael Florentino.
 */
export{};

// TypeOf (verifica alguns tipos(number, string, etc), outros tipos sai como objeto)
function detalhesFuncionario(funcionario: string | number){
    if(typeof funcionario =='string'){
        return `O nome do funcionário é: ${funcionario}`;
    }else{
        return `O id do funcionário é:${funcionario}`;
    }
}
const func = detalhesFuncionario('René Descartes');
console.log(func);

const func2 = detalhesFuncionario('Antoine Lavoisier');
console.log(func2);
const func3 = detalhesFuncionario(23);
console.log(func3);
console.log('\n');

//Typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    //throw new Error('Aguarmentos Inválidos!, ambos valores devem ser do mesmo tipo: string, ou number');
}
console.log(exibirTipo(10,20));
console.log(exibirTipo('ana','20'));
console.log(exibirTipo('ana',20));
console.log('\n');

//instanceof
class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string){
        this.nome =nome;
        this.marca = marca;
    }
}

class Moto{
    nome: string;
    ano:number;

    constructor(nome: string, ano: number){
        this.nome = nome;
        this.ano = ano;

    }
}

function detalhesVeiculo(veiculo: Carro | Moto){
    if(veiculo instanceof Carro){ // instanceof me permite usar se posso usar as propriedades semelhantes
        return `O nome do Carro é: ${veiculo.nome} e a Marca é: ${veiculo.marca}`;
    }else if(veiculo instanceof Moto){// instanceof me permite usar se posso usar as propriedades semelhantes
        return `O nome da Moto é: ${veiculo.nome} e o Ano é: ${veiculo.ano}`;
    }
}
const carro = new Carro('Golf','Volkswagen');
const moto = new Moto('Harley', 2000);
console.log(detalhesVeiculo(carro));
console.log(detalhesVeiculo(moto));
console.log('\n');


// Instanceof  Verficica se o objeto possui os propriedades semelhantes para clase
const formatoData = (valor: Date | string) =>{
    if( valor instanceof Date){
        return valor.toUTCString();
    }
    return new Date(valor).toUTCString();
};

console.log(formatoData(new Date("2023-01-01")));
console.log(formatoData("2023-02-05"));
console.log('\n');

// In
interface Humano{
    falar: () => void;
}

interface Animal{
    voz: () => void;
}

const dizerAlgo = (som: Humano | Animal) => {
    if('falar' in som){
        return som.falar();
    }
    return som.voz();
}
//console.log(dizerAlgo);
console.log('\n');


// Usando IN
interface Animal2 {
    grupo: string;
}

class Peixe implements Animal2{
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string){
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal2{
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string){
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar(grupo: string){
    console.log(`O ${grupo} está nadando....`)
}
function voar(grupo: string){
    console.log(`O ${grupo} está voando....`)
}

function mover(animal: Animal2){
    if('corPeixe' in animal){ // verificar se contem em animal
        nadar((animal as Peixe).grupo)
    }else if('corPena' in animal){
        voar((animal as Passaro).grupo);
    }
}

mover(new Passaro('Passaro','Vermelho'));
mover(new Peixe('Peixe','Azul'));

