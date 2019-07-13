// operador ... rest (juntar)/ spread (espalhar)
// usar rest com parametroe de funcao 

//usar spread com objeto

const funcionario ={ nome: 'Maria',salario:1200.99}

const clone = { ativo:true, ...funcionario}

console.log(clone)

//cusar spread com array 
const grupoA = ['Joao', 'Pedro','Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela']

console.log(grupoFinal)