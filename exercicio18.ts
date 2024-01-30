/* 18 - Crie a classe abstrata AnimalDeIsabela com os atributos nome, 
idade e os métodos movimentar, emitirSom, comer. Faça uma classe filha
com um animal de Isabela da sua escolha
*/

abstract class AnimalDeIsabela{
    nome: string;
    idade: number;

    constructor(_nome: string, _idade: number){
        this.nome = _nome;
        this.idade = _idade
    }

    abstract correr(): any;

    abstract emitirSom(): any;

    abstract comer(): any;
}


class Leao extends AnimalDeIsabela{

    correr(): any {
        return console.log("Se movimentou");
    }

    emitirSom(): any {
        return console.log("Emitiu som");
    }

    comer(): any {
        return console.log("Comeu uma capivara");
    }
}



const leao = new Leao("Simba", 10);
leao.correr();