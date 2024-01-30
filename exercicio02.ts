/* 
2- Crie uma classe "Livro" que tenha os atributos título, autor, editora e ano.
O construtor deve receber os valores para todos esse atributos 
*/

class Livro {
    titulo: string;
    autor: string;
    editora: string;
    ano: Date;

    constructor(_titulo: string, _autor: string, _editora: string, _ano: Date ){
        this.titulo = _titulo;
        this.autor = _autor;
        this.editora = _editora;
        this.ano = _ano;
    }

}

const livro1 = new Livro("A metamorfose", "Kans Kafka", "editora", new Date)

console.log(livro1.ano.getFullYear())