"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Florentino',
    idade: 29,
    funcao: 'Programador'
};
console.log(pessoa);
// Função que recebe um objeto como parametro
function onboarding01(funcionario) {
    return 'Seja Bem-Vindo ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Daniel Schnidder' }));
;
function onboarding02(pessoa) {
    return 'Seja Bem-Vindo ' + pessoa.nome + '!' + ' Sua Função é: ' + pessoa.funcao;
}
console.log(onboarding02({ nome: 'Maria', funcao: 'Secretária.' }));
function onboarding03(pessoa) {
    return 'Seja Bem-Vindo ' +
        pessoa.nome +
        '!' + ' Sua Função é: ' +
        pessoa.funcao +
        '; Você vai trabalhar com a linguagem: ' + pessoa.linguagem;
}
console.log(onboarding03({ nome: 'Jurema', funcao: 'Programadora', linguagem: "Cobol" }));
function onboarding04(pessoa) {
    return 'Seja Bem-Vindo ' +
        pessoa.nome +
        '!' + ' Sua Função é: ' +
        pessoa.funcao +
        '; Você vai trabalhar com a linguagem: ' + pessoa.linguagem;
}
console.log(onboarding04({ nome: 'Carlos', funcao: 'Contador', linguagem: "Matematica", email: "carlao@gmail.com" }));
function onboarding05(pessoa) {
    return 'Seja Bem-Vindo ' +
        pessoa.nome +
        '!' + ' Sua Função é: ' +
        pessoa.funcao +
        '; Você vai trabalhar com a linguagem: ' + pessoa.linguagem +
        '; Seu email sera: ' + pessoa.email;
}
console.log(onboarding05({
    nome: 'Pablo Escobar',
    funcao: 'Programador',
    linguagem: "PHP",
    email: "pablo.escobar@gmail.com"
}));
const filha = {
    nome: 'Giovanna',
    sobrenome: 'Antonenlly',
    idade: 35
};
console.log(filha);
const usuario = {
    nome: 'Paulo Henrique',
    email: 'algumacoisa@gmail.com'
};
const adm = {
    nome: 'Marcos Amicci',
    email: 'algumacoisa@gmail.com',
    admin: true
};
// Função generica, pode receber usuario ou admin
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(adm));
function acessarSistema2(usuario) {
    return usuario;
}
;
console.log(acessarSistema2(usuario));
