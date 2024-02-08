const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log('Peso1 ', Number.isInteger(peso1));
console.log('Peso2 ',Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)
console.log('Média: ',media.toFixed(2));
console.log('Média str: ',media.toString());
console.log('Média binária: ',media.toString(2)); // converte em binário

console.log('\nTipo do dado da variável typeof media: ', typeof media);
console.log('Função typeof Number: ', typeof Number);