"use strict";
/* 1- Faça a classe humano, com atributos (características) que um humano pode
ter e métodos (funções que ele pode fazer). Crie um construtor para a classe
humano que você acabou de criar.
 */
class Humano {
    constructor(_comida, _paisOrigem, _idade, _nome) {
        this.comida = _comida;
        this.paisOrigem = _paisOrigem;
        this.idade = _idade;
        this.nome = _nome;
    }
    falar() {
        console.log(this.nome + "Falou");
    }
    andar() {
        console.log(`${this.nome} pode andar na estrada aos ${this.idade} anos`);
    }
    comer() {
        console.log(`${this.nome} mora no ${this.paisOrigem} e come ${this.comida}`);
    }
}
let pessoa = new Humano("Feijoada", "Brasil", 22, "Andresa");
pessoa.andar();
