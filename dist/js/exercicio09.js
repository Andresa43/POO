"use strict";
/*9 - Como eu faria os getters e setters de idade na minha classe Avatar?*/
class Avatar {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    falar() {
        console.log("falou");
    }
    conectarTranca() {
        console.log("conectou ao avatar");
    }
    get mostrarNome() {
        return this.nome;
    }
    mostrarIdade() {
        return this.idade;
    }
    set mudarNome(_nome) {
        this.nome = _nome;
    }
    mudarIdade(_idade) {
        this.idade = _idade;
    }
}
const sully = new Avatar("Andre", 30);
console.log(sully.mostrarNome);
console.log(sully.mudarNome = "Mariana");
