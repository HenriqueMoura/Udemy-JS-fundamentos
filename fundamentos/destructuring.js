// novo recurso do ES2015]

const pessoa ={
    nome:'Henrique',
    idade:17,
    endereço:{
        lagradouro:'Rua Jose Luiz',
        numero:1000,
    }
}
const { nome,idade} = pessoa
console.log (nome,idade)

const{nome: n,idade: i} = pessoa
console.log(n,i)

const{sobrenome,bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada)

const{endereço :{lagradouro,numero}} = pessoa
console.log(lagradouro,numero)

