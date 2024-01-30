/*9 - Como eu faria os getters e setters de idade na minha classe Avatar?*/

class Avatar{
    private nome: string;
    private idade: number;

    constructor(_nome: string, _idade: number){
        this.nome = _nome;
        this.idade = _idade;
    }

    public falar(){
        console.log("falou");
    }

    public conectarTranca(){
        console.log("conectou ao avatar");
    }

    public get mostrarNome(): string{
        return this.nome;
    }

    public mostrarIdade(): number{
        return this.idade
    }

    public set mudarNome(_nome: string){
        this.nome = _nome;
    }

    public mudarIdade(_idade: number){
        this.idade = _idade
    }
}

const sully = new Avatar("Andre", 30);

console.log(sully.mostrarNome)
console.log(sully.mudarNome = "Mariana")




