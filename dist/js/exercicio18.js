"use strict";
/* 18 - Crie a classe abstrata AnimalDeIsabela com os atributos nome,
idade e os métodos movimentar, emitirSom, comer. Faça uma classe filha
com um animal de Isabela da sua escolha
*/
class AnimalDeIsabela {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
}
class Leao extends AnimalDeIsabela {
    correr() {
        return console.log("Se movimentou");
    }
    emitirSom() {
        return console.log("Emitiu som");
    }
    comer() {
        return console.log("Comeu uma capivara");
    }
}
const leao = new Leao("Simba", 10);
leao.correr();
