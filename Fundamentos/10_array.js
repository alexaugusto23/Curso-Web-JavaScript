// array estrutura indexada pelo elemento dentro de sua estrutura que começa pelo índice 0
const valores = [7.7, 8.9, 6.3, 9.2]; 

console.log('\verifica o tamanaho do array: \n');
console.log(`Tamanho do array: ${valores.length} array: ${valores}`);
console.log(`Typeof: ${typeof valores}`);

console.log('\nelementos do array:')
console.log(
    valores[0],
    valores[1],
    valores[2],
    valores[3]
    );

console.log('\nelemento 0:')
console.log(valores[0]);

console.log('\nelemento fora do índice do array no js não gera erro somente um valor vázio: \n');
console.log(valores[4]);

console.log('\nelemento 4 recebe o valor 10 : \n');
valores[4] = 10;
console.log(valores[4]);

console.log('\verifica o tamanaho do array: \n');
console.log(`Tamanho do array: ${valores.length} array: ${valores}`);
console.log(`Typeof: ${typeof valores}`);

console.log('\nPercorrendo um array com o for:');
for (let i = 0; i < valores.length ; i++){
    console.log(`${valores[i]}`);
};

console.log('\npush coloca elementos no array: \n');
valores.push({id:3}, false, null, 'teste')

console.log(`Tamanho do array: ${valores.length} array: ${valores}`);
console.log(`Typeof: ${typeof valores}`);
console.log(valores);

console.log('\npop remove elemento do array: \n');

for (let i = 0; i < 4 ;i++)
valores.pop()

console.log(`Tamanho do array: ${valores.length} array: ${valores}`);
console.log(`Typeof: ${typeof valores}`);
console.log(valores);