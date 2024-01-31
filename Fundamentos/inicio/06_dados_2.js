// var identificador

/*
Definir bons nomes para pastas, arquqivos, 
variáveis que representam o identificador daquele objeto.
*/

console.log('Operação com valores hardcode');
console.log(19.9 * 0.6);

console.log('\nOperação com variaveis');
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1- desconto)
console.log(precoComDesconto);

console.log('\n'+ 'Concatenação de Textos');
let nome = 'Caderno'; // String (Texto) -> sequência de símbolos.
let categoria = 'Papelaria';

console.log(nome + ' | ' + categoria + '\n');

console.log(
'Produto:' + nome + '\n'
+ 'Categoria:' + categoria + '\n'
+ 'Preço:' + preco + '\n'
+ 'Desconto:' + desconto 
);

console.log('soma 1 + 1');
console.log(1 + 1);

console.log('concatenação ´1´ + 1');
console.log('1' + 1);