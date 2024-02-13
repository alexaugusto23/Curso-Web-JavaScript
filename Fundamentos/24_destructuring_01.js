// novo recurso do ES2015 destructuring 
//serve para extrair os valores dos atributos de objetos ou arrays.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Extrai os valores do objeto e atribui a uma ou mais variaveis
const {nome, idade} = pessoa;
console.log(nome, idade);

// Extrai os valores do objeto e atribui a uma ou mais variaveis com outro nome.
const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

//Acontece erro quando não existir a propriedade dento do objeto
// const {conta: { ag, num} } = pessoa;
// console.log(ag, num);