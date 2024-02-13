const [a, b, c, d] = [3, 5, 1, 15]

// operador post fix d++ depois do eprando.
// operador pre fix +d vem antes do operando.
// operador in fix op1 + op2.
// operador unário -a
// oeprando binário existe dois perandos op1 + op2

/*

A precedência de operadores em JavaScript é semelhante 
ao ensinado nas aulas de matemática na escola — 
Multiplicação e divisão são realizados primeiro, 
depois a adição e subtração (a soma é sempre 
    realizada da esquerda para a direita).

Se você quiser substituir a precedência do operador, 
poderá colocar parênteses em volta das partes que 
desejar serem explicitamente tratadas primeiro.

*/

const soma = a + b + c + d
const subtracao = a - b - c - d
const multiplicacao = a * b * c * d
const divisao = a / b / c / d
const modulo = a % b % c % d

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);


/*

Nota: Você pode fazer o navegador fazer o 
contrário - incrementar/decrementar a variável 
e depois retornar o valor, colocando o operador 
no início da variável ao invés do final. Tente os 
exemplos acima novamente, mas desta vez use ++num1 e --num2.

*/

console.log('Decremento');
var num1 = 6;
console.log(num1);
num1--
console.log(num1);
--num1
console.log(num1);

console.log('Incremento');
var num2 =5;
console.log(num2);
num2++;
console.log(num2);
++num2
console.log(num2);