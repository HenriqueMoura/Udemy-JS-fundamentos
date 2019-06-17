const pessoa = { nome = 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//freeza o Objeto 'deixa o objeto constante'
Object.freeze(pessoa1)

pessoa1.nome = 'Maria'
pessoa1.end =  'rua abc'
delete pessoa1.nome
console.log(pessoa1.nome)
console.log(pessoa1)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)
