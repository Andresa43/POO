/*
4 - Crie uma classe "carro" com os atributos marca, modelo, ano e cor, e 
desenvolva um construtor para a classe. Instancie carros diferentes
*/

class Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor: string

    constructor(_marca: string, _modelo: string, _ano: number, _cor: string){
        this.marca = _marca;
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor
    }
}

let carro1 = new Carro("Ford", "ficticio", 1998, "preto")

console.log(carro1)