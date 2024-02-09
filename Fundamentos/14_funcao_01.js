// Funcao sem retorno
function imprimaSoma(a,b){
    console.log(a+b);
};

// Flexibilidade da linguagem permite: 

imprimaSoma(2,3);
// Passar o parâmetro a menor do que declarado, sem reclamar ou apresentar erro.
imprimaSoma(2);
// Passar o parâmetro a maior do que declarado, sem reclamar ou apresentar erro.
imprimaSoma(2,10,5,6,7,8);
// Passar o parâmetro vazio, sem reclamar ou apresentar erro.
imprimaSoma();

// Funcao com retorno
function imprimaSoma(a=0,b=0){
    return a+b;
};

console.log(imprimaSoma(2,3));
// Passar o parâmetro a menor do que declarado, sem reclamar ou apresentar erro.
console.log(imprimaSoma(2));
// Passar o parâmetro a maior do que declarado, sem reclamar ou apresentar erro.
console.log(imprimaSoma(2,10,5,6,7,8));
// Passar o parâmetro vazio, sem reclamar ou apresentar erro.
console.log(imprimaSoma());
