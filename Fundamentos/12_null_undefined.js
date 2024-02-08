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

