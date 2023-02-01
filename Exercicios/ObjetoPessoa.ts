export { }

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Florentino',
    idade: 29,
    funcao: 'Programador'
};
console.log(pessoa);


// Função que recebe um objeto como parametro
function onboarding01(funcionario: { nome: string }) {
    return 'Seja Bem-Vindo ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Daniel Schnidder' }));


// Objeto Nomeado
interface Pessoa02 {
    nome: string;
    funcao: string;
};
function onboarding02(pessoa: Pessoa02) {
    return 'Seja Bem-Vindo ' + pessoa.nome + '!' + ' Sua Função é: ' + pessoa.funcao;
}
console.log(onboarding02({ nome: 'Maria', funcao: 'Secretária.' }));



// Objeto com Type Alias
type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
}
function onboarding03(pessoa: Pessoa03) {
    return 'Seja Bem-Vindo ' +
        pessoa.nome +
        '!' + ' Sua Função é: ' +
        pessoa.funcao +
        '; Você vai trabalhar com a linguagem: ' + pessoa.linguagem;
}
console.log(onboarding03({ nome: 'Jurema', funcao: 'Programadora', linguagem: "Cobol" }));



// Objeto com Optional no Object
interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}
function onboarding04(pessoa: Pessoa04) {
    return 'Seja Bem-Vindo ' +
        pessoa.nome +
        '!' + ' Sua Função é: ' +
        pessoa.funcao +
        '; Você vai trabalhar com a linguagem: ' + pessoa.linguagem;
}
console.log(onboarding04({ nome: 'Carlos', funcao: 'Contador', linguagem: "Matematica", email: "carlao@gmail.com" }));


// Objeto com Propiedade readonly
interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
}
function onboarding05(pessoa: Pessoa05) {
    return 'Seja Bem-Vindo ' +
        pessoa.nome +
        '!' + ' Sua Função é: ' +
        pessoa.funcao +
        '; Você vai trabalhar com a linguagem: ' + pessoa.linguagem +
        '; Seu email sera: ' + pessoa.email;
}
console.log(onboarding05(
    {
        nome: 'Pablo Escobar',
        funcao: 'Programador',
        linguagem: "PHP",
        email: "pablo.escobar@gmail.com"
    }
));

// Type Object com extensões (Heranças)

interface Mae{
    nome: string;
}
interface Pai{
    sobrenome: string;
}
interface Filha extends Mae, Pai{
    idade: number;
}

const filha: Filha ={
    nome: 'Giovanna',
    sobrenome: 'Antonenlly',
    idade: 35
}
console.log(filha);



// Obejeto com Tipos de interseções
interface Cachorro{
    tipo: string;
}
interface Gato{
    tipo: string;
}
type Animal = Cachorro & Gato;



// Generic Objects
type Usuario = {
    nome: string;
    email: string;
}
type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Paulo Henrique',
    email: 'algumacoisa@gmail.com'
}
const adm: Admin = {
    nome: 'Marcos Amicci',
    email: 'algumacoisa@gmail.com',
    admin: true
}
// Função generica, pode receber usuario ou admin
function acessarSistema<T>(usuario: T): T {
    return usuario;
}
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(adm));


function acessarSistema2(usuario: Usuario): Usuario{
    return usuario;
};
console.log(acessarSistema2(usuario))