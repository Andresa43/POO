"use strict";
/*
2- Crie uma classe "Livro" que tenha os atributos título, autor, editora e ano.
O construtor deve receber os valores para todos esse atributos
*/
class Livro {
    constructor(_titulo, _autor, _editora, _ano) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.editora = _editora;
        this.ano = _ano;
    }
}
const livro1 = new Livro("A metamorfose", "Kans Kafka", "editora", new Date);
console.log(livro1.ano.getFullYear());
