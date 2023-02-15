"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeOf (verifica alguns tipos(number, string, etc), outros tipos sai como objeto)
function detalhesFuncionario(funcionario) {
    if (typeof funcionario == 'string') {
        return `O nome do funcionário é: ${funcionario}`;
    }
    else {
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
function exibirTipo(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    //throw new Error('Aguarmentos Inválidos!, ambos valores devem ser do mesmo tipo: string, ou number');
}
console.log(exibirTipo(10, 20));
console.log(exibirTipo('ana', '20'));
console.log(exibirTipo('ana', 20));
console.log('\n');
//instanceof
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) { // instanceof me permite usar se posso usar as propriedades semelhantes
        return `O nome do Carro é: ${veiculo.nome} e a Marca é: ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto) { // instanceof me permite usar se posso usar as propriedades semelhantes
        return `O nome da Moto é: ${veiculo.nome} e o Ano é: ${veiculo.ano}`;
    }
}
const carro = new Carro('Golf', 'Volkswagen');
const moto = new Moto('Harley', 2000);
console.log(detalhesVeiculo(carro));
console.log(detalhesVeiculo(moto));
console.log('\n');
// Instanceof  Verficica se o objeto possui os propriedades semelhantes para clase
const formatoData = (valor) => {
    if (valor instanceof Date) {
        return valor.toUTCString();
    }
    return new Date(valor).toUTCString();
};
console.log(formatoData(new Date("2023-01-01")));
console.log(formatoData("2023-02-05"));
console.log('\n');
const dizerAlgo = (som) => {
    if ('falar' in som) {
        return som.falar();
    }
    return som.voz();
};
//console.log(dizerAlgo);
console.log('\n');
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
function nadar(grupo) {
    console.log(`O ${grupo} está nadando....`);
}
function voar(grupo) {
    console.log(`O ${grupo} está voando....`);
}
function mover(animal) {
    if ('corPeixe' in animal) { // verificar se contem em animal
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
mover(new Passaro('Passaro', 'Vermelho'));
mover(new Peixe('Peixe', 'Azul'));
