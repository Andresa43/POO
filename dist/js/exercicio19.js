"use strict";
/* 19 - Crie uma classe abstrata FormaGeometrica com dois atributos
largura altura e dois métodos abstratos: calcularArea() e calcularPerimetro().
Faça uma classe filha Retângulo.
*/
class FormaGeometrica1 {
    constructor(_largura, _altura) {
        this.largura = _largura;
        this.altura = _altura;
    }
}
class Retangulo2 extends FormaGeometrica1 {
    calcularArea() {
        return this.altura * this.largura;
    }
    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
}
const exemploRetangulo = new Retangulo2(10, 5);
console.log(exemploRetangulo.calcularArea());
console.log(exemploRetangulo.calcularPerimetro());
