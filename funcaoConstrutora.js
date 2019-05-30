function Carro(velocidadeMaxima = 200 , delta = 5 ){
    
    let velocidadeAtual= 0

    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
 }      else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const unodocaradanet = new Carro
unodocaradanet.acelerar()
unodocaradanet.acelerar()
console.log(unodocaradanet.getVelocidadeAtual())

const unodocaradanetcomescada = new Carro (120,20)
unodocaradanetcomescada .acelerar()
unodocaradanetcomescada .acelerar()
unodocaradanetcomescada .acelerar()
console.log(unodocaradanetcomescada.getVelocidadeAtual())
