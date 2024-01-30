/* 15 - Crie a classe Ikran, com um método montar(), 
adotando o conceito de abstração
*/

class Ikran{
    nome: string

    constructor(_nome: string){
        this.nome = _nome
    }
    
    montar() {
        return console.log(this.nome + " montou")
    }
}

const sulivan = new Ikran("Adriano")

sulivan.montar()