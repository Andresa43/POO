/* 19 - Crie uma classe abstrata FormaGeometrica com dois atributos 
largura altura e dois métodos abstratos: calcularArea() e calcularPerimetro().
Faça uma classe filha Retângulo.
*/

abstract class FormaGeometrica1{
    largura: number;
    altura: number;

    constructor(_largura: number, _altura: number){
        this.largura = _largura;
        this.altura = _altura
    }

    abstract calcularArea(): number;

    abstract calcularPerimetro(): number;

}

class Retangulo2 extends FormaGeometrica1{
    calcularArea(): number {
        return this.altura * this.largura;
    }

    calcularPerimetro(): number {
        return 2*(this.altura + this.largura);
    }
}

const exemploRetangulo = new Retangulo2(10, 5);

console.log(exemploRetangulo.calcularArea())
console.log(exemploRetangulo.calcularPerimetro())