// string é um conjunto de caracteres no js ou array.
const escola = "Cod3r"

console.log('Caractere individual:');
console.log(escola.charAt(4));

console.log('Caractere individual chamada maior que o índice do array:');
console.log(escola.charAt(5));

console.log('Valor do caracte na tabela asccii (unicode)');
console.log(escola.charCodeAt(3));

console.log('Pega o índice da palavra com o indexOf');
console.log(escola.indexOf('3'));

console.log('Fatiamento com substring a partir da indice 1'); // indice inclusivo
console.log(escola.substring(1));

console.log('Fatiamento com substring a partir da indice 0 a 3'); // exclui o valor do último índice
console.log(escola.substring(0,3));

// literal é o dado sem armazenar na variável ou seja hard code.
console.log('concatenar uma cadeia de string'); 
console.log('Escola'.concat(escola).concat('!1'));
console.log('Escola' + escola + '!1');

console.log('replace um valor'); 
console.log(escola.replace(/\d/, 'e'));
console.log(escola.replace(/\w/g, 'e'));
console.log(escola);


console.log('converter uma string em um array'); 
console.log('Ana,Maria,Pedro'.split());
console.log('Ana,Maria,Pedro'.split(/,/));
console.log('Ana,Maria,Pedro'.split(/./));  // ver no curso da regex



console.log('\nCaracteres com loop:\n');
for (let i = 0; i < escola.length; i++) {
    console.log(escola.charAt(i));
} 

