const dan = {
    nome: 'dane',
    empresa: 'dane',
    salario: 3000
}

const danE = {
    nome: 'dand',
    empresa: '3232',
    salario: 1000
}

const dan3 = {
    nome: 'danesinho',
    empresa: '3333',
    salario: 3000
}
const dan4 = {
    nome: 'danesinho',
    empresa: '3333',
    salario: 100
}

const users = [dan, danE, dan3, dan4]


const usuario = users.find((user => user.salario < 1000))

console.log(usuario)