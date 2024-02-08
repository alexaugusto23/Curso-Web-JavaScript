const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!'; // interpolar converter a variavel dento da string ou texto.
const template = `
    Olá
    ${nome}!
`; // crase ` ${variável}`

console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

// arrow function:
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);