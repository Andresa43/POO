/* 17 - Seguindo a mesma ideia do carro, crie a classe televisao com 
os atributos marca, canal, atual, volume atual e os métodos ligar, delisgar
e mudar de canal.
*/ 

class Televisao {
    marca: string;
    canalAtual: number;
    volumeAtual: number;

    constructor(_marca: string, _canalAtual: number, _volumeAtual: number){
        this.marca = _marca;
        this.canalAtual = _canalAtual;
        this.volumeAtual = _volumeAtual    
    }

    ligar(): any{
        return console.log("Ligou a TV");
    }

    desligar(): any{
        return console.log("Desligou a TV");
    }

    set mudarDeCanal(canal: number){
        this.canalAtual = canal;
    }

}

const tv = new Televisao("Samsung", 5, 20);

console.log(tv.canalAtual)
console.log(tv.mudarDeCanal = 11)
tv.ligar()
tv.desligar()




