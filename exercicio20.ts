/* 20 - Faça uma classe abstrata Pessoa com o método cumprimentar().
Faça duas classes filhas com pessoas de países diferentes e como elas
cumprimentam. 
*/

abstract class Pessoa {
    nome: string;

    constructor(_nome: string){
        this.nome = _nome
    }

    abstract cumprimentar(): any
}

class Brasileiro extends Pessoa{
    cumprimentar() {
        return console.log(this.nome + " cumprimenta da seguinte forma: E aí, galera!")
    }
}

class Americano extends Pessoa{
    cumprimentar() {
        return console.log(this.nome + " cumprimenta da seguinte forma: Hello Guys!")
    }
}

const brasileiro = new Brasileiro("Alessandra");
const americano = new Americano("Anderson");

brasileiro.cumprimentar();
americano.cumprimentar();