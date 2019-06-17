class Lancamento {
    constructor(nome = 'Generico', valor =  0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor (mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos (... lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0 
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
        }
    }
const salario = new Lancamento ('Salario', 4500)

const contaDeLuz = new Lancamento('Luz',-220)

const contaInternet = new Lancamento ('Internet', -120)

const contas = new CicloFinanceiro(6,2019)
contas.addLancamentos(salario, contaDeLuz, contaInternet)
console.log(contas.sumario())