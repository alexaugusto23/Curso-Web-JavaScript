// Valor das variaáveis a = 7 e b = 94 Objetivo é trocar o valor das variáveis ou seja depois da troca a = 94 e b 7

let a = 7;
let b = 94;
let aux = null; // temp

console.log('Var A' , `${a}` ,'e',   'Var B' , `${b}`);

aux = b;
b = a;
a = aux;

/*
temp = a
a = b
b = temp

Outra possível implementação:

[a,b] = [b,a]

*/


console.log('Var A' , `${a}` ,'e',   'Var B' , `${b}`);
