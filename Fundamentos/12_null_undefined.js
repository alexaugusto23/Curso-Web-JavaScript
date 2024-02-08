// Atribuição por referência (objetos, funções)

const a = {name:'Teste'}
console.log(a);

const b = a // referência do objeto ou seja enderõ na memória (Atribuição por referência)
console.log(b);

b.name = 'Opa'

console.log(a);
console.log(b);

// Atribuição por valor (valor primitivo cópia por valor)
let c = 3
let d = c

d++
console.log(c);
console.log(d);

// não inicializado
let valor 
// console.log(valor);
// não definido
// console.log(valor2);

valor = null // ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {}
console.log(produto.preco); 
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco); // dá falso porque não existe valor e é undefined
// delete produto.preco; // remove atributo
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
console.log(!!produto);


