/* 11 - Crie uma classe Tulkun com os atributos nome e tamanho, 
e o método nadar(). Proteja os atributos e crie getters e setters 
para eles. 
*/

class Tulkun {
    private _nome: string;
    private _tamanho: number;

    constructor(nome: string, tamanho: number){
        this._nome = nome;
        this._tamanho = tamanho
    }

    public nadar(): any{
        console.log("Pode nadar")
    }

    public get mostrarNome(): string{
        return this._nome
    }

    public set mudarNome(nome: string){
        this._nome = nome
    }

}

const exemplo = new Tulkun("Jorge", 164)

console.log(exemplo.mostrarNome)
console.log(exemplo.mudarNome = "Carla")