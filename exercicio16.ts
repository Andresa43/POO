/* 16 - Crie uma classe Carro que tem marca, modelo e velocidade,
e crie três métodos: acelerar, frear e indicarVelocidade. Perceba que 
isso é abstração porque você está implementando funções do carro sem 
precisar se preocupar com o funcionamento interno dele.
*/

class Carro1 {
    marca: string;
    modelo: string;
    velocidade: number;

    constructor(_marca: string, _modelo: string, _velocidade: number){
        this.marca = _marca;
        this.modelo = _modelo;
        this.velocidade = _velocidade;
    }

    acelerar(): any{
        return console.log("O carro " + this.modelo + " tem a função de acelerar");
    }

    frear(): any{
        return console.log("freou");
    }

    indicarVelocidade(): any{
        return console.log("A velocidade da marca " + this.marca + " é " + this.velocidade + " Km/h");
    }
}

const ford = new Carro1("dominar", "amarelinho", 50);

ford.acelerar();
ford.frear();
ford.indicarVelocidade();
