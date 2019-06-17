class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
//Pai e avo tera herança do avo
class Pai extends Avo{
    constructor(sobrenome,profissao ='programador'){
        //super para chamar a herança que no caso e avo 
        super(sobrenome)
        this.profissao = profissao

    }
}
class Filho extends Pai {
    constructor(){
        super('Silva')

    }
}
// Basicamento se o filho tem o nome silvao logo pai e o avo tera tambem
// sendoa assim herdando tambem profissao 
const filho = new Filho 
console.log (filho)