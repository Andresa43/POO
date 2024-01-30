"use strict";
/* 17 - Seguindo a mesma ideia do carro, crie a classe televisao com
os atributos marca, canal, atual, volume atual e os métodos ligar, delisgar
e mudar de canal.
*/
class Televisao {
    constructor(_marca, _canalAtual, _volumeAtual) {
        this.marca = _marca;
        this.canalAtual = _canalAtual;
        this.volumeAtual = _volumeAtual;
    }
    ligar() {
        return console.log("Ligou a TV");
    }
    desligar() {
        return console.log("Desligou a TV");
    }
    set mudarDeCanal(canal) {
        this.canalAtual = canal;
    }
}
const tv = new Televisao("Samsung", 5, 20);
console.log(tv.canalAtual);
console.log(tv.mudarDeCanal = 11);
tv.ligar();
tv.desligar();
