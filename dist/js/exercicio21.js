"use strict";
/* 21 - Crie uma interface "Animais" com os métodos "emitirSom" e "locomover"
Em seguida, crie as classes concretas "Cavalo" e "Lagarta" que implementam a
interface "Animal". Cada uma das classes deve ter sua própria implementação
dos métodos da inteface.
*/
class Cavalo {
    emitirSom() {
        return console.log("Emitiu som");
    }
    locomover() {
        return console.log("O cavalo correu");
    }
}
class Lagarta {
    emitirSom() {
        return console.log("Emitiu som");
    }
    locomover() {
        return console.log("O lagarto subiu na parede");
    }
}
const cavalo = new Cavalo();
const lagarto = new Lagarta();
cavalo.emitirSom();
lagarto.locomover();
