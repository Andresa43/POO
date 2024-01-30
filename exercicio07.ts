/*9 - Crie um classe "Animal" com as propriedades nome e idade. Depois, crie
duas subclasses "Cachorro" e "Gato" e dê métodos exclusivos a elas, como latir() 
e miar(), respectivamente.
*/

class Animal{
    nome: string
    idade: number

    constructor(_nome: string, _idade: number){
        this.nome = _nome,
        this.idade = _idade
    }
}

class Cachorro extends Animal{

    constructor(_nome: string, _idade: number){
        super(_nome, _idade)
    }

    latir(){
        return console.log(this.nome, "pode latir")
    }
}

class Gato extends Animal{
    constructor(_nome: string, _idade: number){
        super(_nome, _idade)
    }

    miar(){
        return console.log(`O gato com idade ${this.idade} anos pode miar`)
    }
}

const gato = new Gato("Simba", 4);

const cachorro = new Cachorro("Chocolate", 7);

gato.miar();
cachorro.latir();