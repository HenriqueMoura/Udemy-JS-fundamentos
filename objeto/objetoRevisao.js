 const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preço = 220

console.log (produto)

delete produto.preço
delete  produto ['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço:{
            lagraduro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores :[{
        nome:'Junior',
        idade: 19 
    },{
        nome:'Ana',
        idade:19
    }],
    calcularValorSeguro: function(){
        //...
    }
}
carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['lagraduro'] = 'Av gigante'
console.log(carro)
delete carro.condutores
delete carro.endereço
console.log(carro)
console.log(carro.condutores)

//Não entrar em um atributo que não esta definido como na linha abaixo =>

//console.log(carro.condutores.length) <====