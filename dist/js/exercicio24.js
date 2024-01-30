"use strict";
/*24 - Crie uma classe genérica Personagem com o método conectar()
e duas classes que derivam dela: Humano e pássaro. O Humano se conceta ao
link e o pássaro se concecta a natureza selvagem de Pandora. Implemente os
métodos de cada tipo de forma diferente. Crie um vetor de Personagens
com alguns personagens dentro, tanto pássaro quanto humanos, e chame o método
conectar() para eles.
*/
class Personagem {
    conectar() {
        return console.log("Conexão com a natureza");
    }
}
class Humano1 extends Personagem {
    conectar() {
        return console.log("Conexão com outro humano");
    }
}
class Passaro extends Personagem {
    conectar() {
        return console.log("conexão com a flora");
    }
}
const humano1 = new Humano1();
const passaro = new Passaro();
const personagens = [humano1, passaro];
personagens.map(animal => animal.conectar());
