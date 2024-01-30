"use strict";
/*
Crie uma classe vendedor, com um atributo salário e um outro bônus, e um método
que calcula o total (salário mais bônus).
*/
class Vendedor {
    constructor(_salario, _bonus) {
        this.salario = _salario;
        this.bonus = _bonus;
    }
    total() {
        return this.salario + this.bonus;
    }
}
let vendedor01 = new Vendedor(1300, 200);
console.log("Salário + Bônus = R$" + vendedor01.total());
