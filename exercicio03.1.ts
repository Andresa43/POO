class Retangulo {
    largura: number;
    altura: number;

    constructor(_largura: number, _altura: number){
        this.largura = _largura;
        this.altura = _altura
    }

    areaRetangulo(): number{
        return this.largura*this.altura
    }

}

let retangulo = new Retangulo(10, 5);

console.log(retangulo.areaRetangulo() + " m²")