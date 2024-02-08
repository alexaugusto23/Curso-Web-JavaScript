// js é uma linguagem multi paradigma, procedural. OO Orientdo a objeto, funcional.
// json java script object notation que não é o mesmo de um objeto.
// Notação litera lde objetos.
// Objeto é uma coleção de Chave : Valor.

const prod1 = {} // objeto vazio
// criar atributos dinamicamente:
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['desconto legal'] = 0.40 // evitar atributo com espaço.
console.log(prod1);

// Notação literal de objeto:
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }

    }
}

console.log(prod2);

console.log("\nExemplo de Objeto: {nome: 'Camisa Polo', preco: 79.90}");
console.log(`Exemplo de Json: '{"nome": "Camisa Polo", "preco": 79.90}'`);
