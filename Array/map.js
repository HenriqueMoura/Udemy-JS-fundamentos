const nums = [ 1,2,3,4,5]

//for com proposito 
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)


const soma10 = e => e + 10 
const triplo = e => e * 3
const paraDinnheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinnheiro)
console.log(resultado)
let resultado2 =  nums.map(function(i){
    return i+1
})
console.log(resultado2)
let resultado3 = resultado.map(function(o){
    return o *2
})
console.log(resultado3)