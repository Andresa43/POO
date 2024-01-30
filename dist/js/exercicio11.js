"use strict";
/* 11 - Crie uma classe Tulkun com os atributos nome e tamanho,
e o método nadar(). Proteja os atributos e crie getters e setters
para eles.
*/
class Tulkun {
    constructor(nome, tamanho) {
        this._nome = nome;
        this._tamanho = tamanho;
    }
    nadar() {
        console.log("Pode nadar");
    }
    get mostrarNome() {
        return this._nome;
    }
    set mudarNome(nome) {
        this._nome = nome;
    }
}
const exemplo = new Tulkun("Jorge", 164);
console.log(exemplo.mostrarNome);
console.log(exemplo.mudarNome = "Carla");
