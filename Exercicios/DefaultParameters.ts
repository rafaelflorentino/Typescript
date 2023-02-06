/**
 * Objetivo: Crie um função usando Default parameter.
 * Entrada: Sem Entrada.
 * Saida: Mesagem contendo os dados.
 * Autor: Rafael Florentino.
 */
// Função 01
function decontoCompra(preco: number, desconto = 0.08){
    return preco * (1 - desconto)
}
console.log(decontoCompra(100));

// Função 02
function exibirMensagens(mensagem: string, saudar = 'Fala galera!'){
    return saudar + ' '+ mensagem +'!';
}
console.log(exibirMensagens('Bom Dia'));

//Função 03

function exibirNomes(nome: string, sobrenome = 'Florentino'){
    return nome + ' '+ sobrenome +'!';
}
console.log(exibirNomes('Rafael'));
console.log(exibirNomes('Rafael', undefined));
console.log(exibirNomes('Rafael', 'Barbosa'));

