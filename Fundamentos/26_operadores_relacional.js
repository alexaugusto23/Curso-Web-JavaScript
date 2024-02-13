// Que comprar somente o valor ou valor e o tipo pela linguagem ser tipagem fraca.

console.log('compara valor ==: 01)', '1' == 1);
console.log('compara valor e tipo ===:  02)', '1' === 1);
console.log('compara valor !=  03)', '3' !=  3);
console.log('compara valor e tipo !==  04)', '3' !==  3);
console.log('compara valor  <  05)', 3 < 2);
console.log('compara valor  >  06)', 3 > 2);
console.log('compara valor  <=  07)', 3 <= 2);
console.log('compara valor  >=  08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log(d1, d2);
console.log('compara endereço de memória 09)', d1 === d2);
console.log('compara endereço de memória 10)', d1 == d2);

console.log(d1.getTime(), d2.getTime());
console.log('compara number 11)', d1.getTime() === d2.getTime());
console.log('compara number 12)', d1.getTime() == d2.getTime());

console.log('compara igualdade undefined e nulo 13)', undefined == null);
console.log('compara estritamente igual undefined e nulo 14)', undefined === null);