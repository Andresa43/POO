/*25- Crie uma classe genérica veículo com o método movientar() 
Crie três classes fihas: avião, carro e barco. Implemente o método
movimentar() para elas e crie um vetor de veículos, chamando o método
movimentar() para seus elementos.
*/

class Veiculo{

    movimentar(){
        return console.log("Veículos se movimentando")
    }
}

class Aviao extends Veiculo{

    movimentar(){
        return console.log("Avião movimentou");
    }
}

class Moto extends Veiculo{

    movimentar(){
        return console.log("Moto movimentou");
    }
}

class Barco extends Veiculo{

    movimentar(){
        return console.log("Barco movimentou");
    }
}

const aviao = new Aviao();
const moto = new Moto();
const barco = new Barco();

const veiculos: Array<Veiculo> = [aviao, moto, barco]

veiculos.map(veiculo => veiculo.movimentar())

