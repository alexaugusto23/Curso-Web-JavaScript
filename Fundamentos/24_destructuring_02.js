// array destructuring

const [a] = [10]; 
console.log(a);

const [n1, n3, n5, n6 ] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// a virgula ignora o elemento do array e vai para o próximo na estrutura
const [, [, nota]] = [[, 8,8], [9,6,8]];
console.log(nota);