"use strict";
/*8 - Crie a classe "Metkayina que deriva da classe "Navi e dê o atributo
recorde de mergulho e o método mergulhar(). Lembre do construtor.
*/
class Navi {
    constructor(_nome, _idade) {
        this.nome = _nome,
            this.idade = _idade;
    }
    falar() {
        return console.log(this.nome, "pode falar");
    }
    correr() {
        return console.log(this.nome, "pode correr");
    }
    conectarTranca() {
        return console.log(this.nome + " pode conectar trança com " + this.idade + " anos");
    }
}
class Metkayina extends Navi {
    constructor(_nome, _idade, _recordeMergulho) {
        super(_nome, _idade);
        this.recordeMergulho = _recordeMergulho;
    }
    mergulhar() {
        return console.log(this.nome, "pode mergulhar");
    }
}
const kiri = new Metkayina("Ana", 24, 40);
kiri.conectarTranca();
kiri.falar();
kiri.mergulhar();
