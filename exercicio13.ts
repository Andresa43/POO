/* Exemplo de uma classe abstrata sendo utilizada nas classes filhas */

abstract class AnimalDePandora{
    nome: string;

    constructor(_nome: string){
        this.nome = _nome
    }

    abstract movimentar(): any;
}

class Tsurak extends AnimalDePandora{
    movimentar(): any {
        console.log(this.nome + " nadou")
    }
}

const payakan = new Tsurak("payakan")

