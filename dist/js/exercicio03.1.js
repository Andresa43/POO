"use strict";
class Retangulo {
    constructor(_largura, _altura) {
        this.largura = _largura;
        this.altura = _altura;
    }
    areaRetangulo() {
        return this.largura * this.altura;
    }
}
let retangulo = new Retangulo(10, 5);
console.log(retangulo.areaRetangulo() + " m²");
