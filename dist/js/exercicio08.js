"use strict";
/*10 - Crie uma classe "FormaGeometrica" que tem as propriedades altura
e largura e os métodos calcular área e calcular perímetro. Em seguida, crie
as classes "Retangulo" e "Triangulo" que herdam da classe mãe e tem métodos
próprios como "calcular diagonal" e "calcular altura", respectivamente
*/
class FormaGeometrica {
    constructor(_altura, _largura) {
        this.altura = _altura,
            this.largura = _largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
}
class Retangulo1 extends FormaGeometrica {
    constructor(_altura, _largura, _lados) {
        super(_altura, _largura);
        this.lados = _lados;
    }
    calcularDiagonal() {
        return Math.sqrt(this.altura ** 2 + this.largura ** 2);
    }
}
class Triangulo extends FormaGeometrica {
    constructor(_altura, _largura, _vertices) {
        super(_altura, _largura);
        this.vertices = _vertices;
    }
    calcularArea() {
        return (this.altura * this.largura) / 2;
    }
}
const retangulo1 = new Retangulo1(10, 5, 4);
const triangulo = new Triangulo(8, 4, 3);
console.log(retangulo1.calcularDiagonal());
console.log(triangulo.calcularArea());
