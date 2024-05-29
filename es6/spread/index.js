//quebra um conjunto de elementos e devolver elemento a elemento
let dan = {
    caralho: 'danesinho',
    cu: 22,
    pinto: 'm'
}
const dan2 = {
    nome: 'danesinho',
    idade: 22,
    sexo: 'm'
}
const dan4 = {
    nome: 'danesinho',
    idade:  22,
    sexo: ' m',
    ...dan
}


console.log(`dan1:  ${dan2.nome}   ${dan2.idade}   ${dan2.sexo}`);
console.log(`dan4: ${JSON.stringify(dan4, null, 2)}`);
console.log(`dan2: ${JSON.stringify(dan2)}`);