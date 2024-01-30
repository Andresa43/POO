"use strict";
/*
4 - Crie uma classe "carro" com os atributos marca, modelo, ano e cor, e
desenvolva um construtor para a classe. Instancie carros diferentes
*/
class Carro {
    constructor(_marca, _modelo, _ano, _cor) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }
}
let carro1 = new Carro("Ford", "ficticio", 1998, "preto");
console.log(carro1);
