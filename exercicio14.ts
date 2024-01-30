/*Exemplos de uma interface */

interface AnimalDeIsadora {
    nome: string;

    movimentar(): any;
}

class Toruk implements AnimalDeIsadora{
    nome: string;

    constructor(_nome: string){
        this.nome = _nome;
    }

    movimentar() {
        return console.log(this.nome + " nadou")
    }
}

const testando = new Toruk("Marcos")

testando.movimentar()