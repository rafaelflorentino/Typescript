/**
 * Objetivo: Crie um função usando rest parameter.
 * Entrada: Sem Entrada.
 * Saida: Mesagem contendo os dados.
 * Autor: Rafael Florentino.
 */
// Função com Rest Parameters
function somarNumeros(...numeros: number[]){
    let total= 0;
    numeros.forEach((numero)=> (total += numero));

    return total;
}
console.log(somarNumeros(30,20)); // 50
console.log(somarNumeros(40, 50, 50, 40, 20)); //200
console.log('\n');

// Função com Rest Parameters
function listarFrutas(frase: string, ...frutas: string[]){
    return frase + ' ' + frutas.join(', ');
}
console.log(
    listarFrutas(
    'Rafael voce precisa ir no mercado e comprar: ',
    'Maça', 
    'Pera', 
    'Goiaba', 
    'Banana', 
    ),
 );
 console.log('\n');

 // Função class com Rest Parameters
class Produtos {
    public exibirProdutos(...produtos: string[]): void{
        for(const produto of produtos){
            console.log(produto);
        }
    }
}
const departamentoInformatica: Produtos = new Produtos();
console.log('\nTodos os produtos do departamento de informática disponíveis no estoque:');

departamentoInformatica.exibirProdutos(
    'Teclado',
    'Mouse',
    'Monitor',
    'Roteador',
    'Pendrive',
    'MousePad');