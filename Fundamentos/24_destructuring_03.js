// destructuring como parâmetro de uma função

function rand({min = 0, max = 1000} = {}) {
    let num_rand = null;
    num_rand = Math.random()
    const valor = num_rand   * (max - min) + min;
    console.log(`Valor randômico ${num_rand}`);
    console.log(`Valor sem arredondamento ${valor}`);
    return Math.floor(valor)

};

const obj = {max: 50, min: 40};
console.log(rand(obj));
console.log(rand( { min: 955 } ));
console.log(rand( {  } ));
console.log(rand());