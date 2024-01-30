/* 1- Faça a classe humano, com atributos (características) que um humano pode
ter e métodos (funções que ele pode fazer). Crie um construtor para a classe 
humano que você acabou de criar.
 */

class Humano {
    comida: string
    paisOrigem: string
    idade: number
    nome: string

    constructor(
        _comida: string,
        _paisOrigem: string,
        _idade: number,
        _nome: string) {

        this.comida = _comida;
        this.paisOrigem = _paisOrigem;
        this.idade = _idade;
        this.nome = _nome;
    }

    falar(): void {
        console.log(this.nome + "Falou");
    }

    andar(): void {
        console.log(`${this.nome} pode andar na estrada aos ${this.idade} anos`);
    }

    comer(): void {
        console.log(`${this.nome} mora no ${this.paisOrigem} e come ${this.comida}`);
    }
}


let pessoa = new Humano("Feijoada", "Brasil", 22, "Andresa");

pessoa.andar()


