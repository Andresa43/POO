"use strict";
/*
22 - Crie uma interface abstrata "Personagem" com o método "conectar"
Em seguida, crie as classes concretas "Humano" e "Navi" que implementam
a interface "Personagem". Cada uma das classes deve ter sua própria
implementação dos métodos da interface.
*/
class SerHumano {
    conectar() {
        return console.log("Conectou com uma pessoa");
    }
}
class SerVivo {
    conectar() {
        return console.log("Conectou com um animal");
    }
}
const serHumano = new SerHumano();
const serVivo = new SerVivo();
serHumano.conectar();
serVivo.conectar();
