"use strict";
/* 16 - Crie uma classe Carro que tem marca, modelo e velocidade,
e crie três métodos: acelerar, frear e indicarVelocidade. Perceba que
isso é abstração porque você está implementando funções do carro sem
precisar se preocupar com o funcionamento interno dele.
*/
class Carro1 {
    constructor(_marca, _modelo, _velocidade) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.velocidade = _velocidade;
    }
    acelerar() {
        return console.log("O carro " + this.modelo + " tem a função de acelerar");
    }
    frear() {
        return console.log("freou");
    }
    indicarVelocidade() {
        return console.log("A velocidade da marca " + this.marca + " é " + this.velocidade + " Km/h");
    }
}
const ford = new Carro1("dominar", "amarelinho", 50);
ford.acelerar();
ford.frear();
ford.indicarVelocidade();
