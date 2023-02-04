"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função (Named Function)
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
const resultado = somarNumeros(2, 3);
console.log("Resultado da soma é:", resultado);
// Função Anônima (Function Expression)
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá, Programadores!'));
// Função Arrow Function Expression
const saudar_2 = (mensagem) => {
    return mensagem;
};
console.log(saudar_2('Olá, Desenvolvedores!'));
// Função Constructor
const saudar_3 = new Function('mensagem', 'return "Bom Dia, " + mensagem');
console.log(saudar_3('Rafael!'));
// Função com Optional Parameter ?: Parâmetro opcional
// Função 01
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('\nID Funcionario: ', idPessoa, 'Nome: ', nome);
    if (email != undefined)
        console.log('E-mail: ', email);
}
informarDadosPessoa(111, 'Maria da Silva', 'maria@gmail.com');
informarDadosPessoa(222, 'Jose da Silva');
console.log('\n');
// Função 02
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}
mensagemLog('\nAtualizar Página');
mensagemLog('\nUsuário(a) logado(a) com sucesso', 117);
console.log('\n');
let pessoa;
let pessoa2;
pessoa = {
    idFuncionario: 123,
    nome: 'Julio Cesar',
};
pessoa2 = {
    idFuncionario: 124,
    nome: 'Maria Antonieta',
    idade: 35,
    email: 'antonieta@gmail.com'
};
console.log(pessoa);
console.log('\n');
console.log(pessoa2);
