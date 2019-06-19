const alunos = [
    {nome: 'João', nota:7.3 ,bolsista:false},
    {nome: 'Maria', nota:9.2 , bolsista:true},
    {nome: 'Pedro', nota:9.8, bolsista:true},
    {nome: 'Ana', nota:8.7 , bolsista:false},
  
]

//desafio 1 : todos alunos sao bolsistas ?
const todosBolsistas= (resultado,bolsista) =>
resultado && todosBolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado,bolsista)=> resultado || bolsista
console.log (alunos.map(a => a.bolsista).reduce(algumBolsista))