// Hosting em Javascript é o padrão de mover a declaração da variavel par o topo do código.
console.log('a =', a);
var a = 2;
console.log('a =', a);

// isçamento da variável
function teste() {
    console.log('b =', b);
    var b = 2;
    console.log('b =', b);
}

teste();
// console.log('b =', b);

console.log('c =', c);
let c = 2;
console.log('c =', c);