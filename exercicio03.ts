/*
3 - Crie uma classe círculo com o atributo raio e o método para calcular 
a sua área. Instancie alguns círculos de raios diferentes para testar.
Faça o mesmo para uma classe retângulo com atributos largura e altura.
*/

class Circulo {
    raio: number;

    constructor(_raio: number){
        this.raio = _raio;
    }

    areaCirculo(): string{
        return (Math.PI*this.raio**2).toFixed(2) + " m²"
    }

}

let area = new Circulo(5)
console.log("Área do círculo: " + area.areaCirculo())