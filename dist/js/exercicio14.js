"use strict";
/*Exemplos de uma interface */
class Toruk {
    constructor(_nome) {
        this.nome = _nome;
    }
    movimentar() {
        return console.log(this.nome + " nadou");
    }
}
const testando = new Toruk("Marcos");
testando.movimentar();
