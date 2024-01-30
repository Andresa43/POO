"use strict";
/* 12 - Faça uma classe "ContaBancaria" com um atributo privado
saldo e um getter getSaldo(). Além disso, crie os métodos púbicos
depositar(valor) e sacar(valor), onde depositar aumenta o saldo e
sacar diminui. Lembrando que não pode sacar se não tiver dinheiro
suficiente. Envie um console.log("saldo insuficiente") se for o caso.
*/
class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get mostrarSaldo() {
        return this._saldo;
    }
    depositar(valor) {
        return this._saldo = this._saldo + valor;
    }
    sacar(valor) {
        if (this._saldo < valor) {
            return console.log("saldo insuficiente");
        }
        else {
            return this._saldo = this._saldo - valor;
        }
    }
}
const bancoX = new ContaBancaria(400);
console.log(bancoX.depositar(100));
console.log(bancoX.sacar(200));
console.log(bancoX.mostrarSaldo);
