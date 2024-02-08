let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // negação dupla !! verifica o valor boleano

isAtivo = 1;
console.log(!isAtivo);

console.log(!true);
console.log(!false);


console.log('\n os verdadeiro...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(isAtivo = Infinity));
console.log(!!(isAtivo = 33));

console.log('\n os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('\n pra finalizar...');
console.log(!!('' || null || 0 || ' '));
console.log(!!('' || null || 0 || 'epa'));


let = nome = ''
console.log(!!(nome || 'Desconhecido'));
console.log((nome || 'Desconhecido'));