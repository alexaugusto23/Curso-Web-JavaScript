// Calcular o valor da área da circunferencia usando o raio e PI ex:  PI * raio * raio

const PI = Math.PI //3.14159265359
console.log('PI usado:' + `${PI}`);
let raio = 10;
let areaCirc = PI * (raio**2)

console.log('O valor da área é: ' + `${areaCirc.toFixed(2)}` + ' m2.')