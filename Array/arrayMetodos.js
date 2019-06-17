const pilotos = [ 'Vettel', 'Alonso','Raikkonen' ,'Massa']
pilotos.pop()// massa quebrou o carro!Basicamento retira o ultimo elemento
console.log (pilotos)

pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() // remove o primeiro !
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar ou remover elementos


// adicionar
pilotos.splice(2,0 , 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3,1)// massa fracassou novamente 
console.log(pilotos)

//cria um novo array - Slice apartir do [2] elemento
const algunsPilostos1 = pilotos.slice(2) //novo array
console.log(algunsPilostos1)
//cria um novo array - Slice apartir do [1]elemento ate o [4] sendo que o quarto nao sera adicionado 
const algunsPilostos2 = pilotos.slice(1,4)
console.log(algunsPilostos2)