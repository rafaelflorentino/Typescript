/**
 * Objetivo: Crie um classe que use Intersection de outras classes.
 * Entrada: Sem Entrada.
 * Saida: Nome, idade, profissao, rua, bairro, profissao, cidado, conta, agencia, banco, email, cpf.
 * Autor: Rafael Florentino.
 */
export{};

interface IEndereco {
    rua: string;
    bairro: string;
    cidade: string;
}

interface IPessoa {
    nome: string;
    idade: number;
    profissao : string;
}

type IEnderecoPessoa = IEndereco & IPessoa; // Usa as variáveis e os Métodos das duas classes nela. 

const enderecoPessoa: IEnderecoPessoa = {
    nome: 'John Venn',
    idade: 65,
    profissao: 'Matematico',
    rua: 'Rua dos Números',
    bairro: 'Bairro dos Inteiros',
    cidade: 'Contagem',
};

console.log(enderecoPessoa);


interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente{
    nome: string;
    email: string;
}

interface DadosPessoaFisica{
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica; // intersection

const dadosCliente: DadosCliente = {
    conta: 123456,
    agencia: 123,
    banco: 'Banco do Brasil',
    nome: 'Antoine Lavoisier',
    email: 'ConservacaoDeMassa@gmail.com',
    cpf: 123456789,
}

console.log(dadosCliente)