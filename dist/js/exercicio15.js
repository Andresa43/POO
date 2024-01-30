"use strict";
/* 15 - Crie a classe Ikran, com um método montar(),
adotando o conceito de abstração
*/
class Ikran {
    constructor(_nome) {
        this.nome = _nome;
    }
    montar() {
        return console.log(this.nome + " montou");
    }
}
const sulivan = new Ikran("Adriano");
sulivan.montar();
