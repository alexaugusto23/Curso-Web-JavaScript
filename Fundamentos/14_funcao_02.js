// Armagenando uma função em uma variável:
const imprimiSoma = function(a,b) {console.log(a+b)};

imprimiSoma(2,3);

// Armazenando uma função arrow em uma variável:
const soma = (a,b) => {return a+b};
console.log(soma(5,5));

// Retorno implícito
// Armazenando uma função arrow em uma variável reduzida:
const subtracao = (a,b) => a-b;
console.log(subtracao(5,5));

const imprime2 = a => console.log(a);
imprime2('Legal!!!');