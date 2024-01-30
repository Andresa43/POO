"use strict";
/* Exemplo de uma classe abstrata sendo utilizada nas classes filhas */
class AnimalDePandora {
    constructor(_nome) {
        this.nome = _nome;
    }
}
class Tsurak extends AnimalDePandora {
    movimentar() {
        console.log(this.nome + " nadou");
    }
}
const payakan = new Tsurak("payakan");
