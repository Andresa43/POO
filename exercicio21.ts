/* 21 - Crie uma interface "Animais" com os métodos "emitirSom" e "locomover"
Em seguida, crie as classes concretas "Cavalo" e "Lagarta" que implementam a 
interface "Animal". Cada uma das classes deve ter sua própria implementação
dos métodos da inteface.
*/

interface Animais{

    emitirSom(): any

    locomover(): any

}

class Cavalo implements Animais{
    emitirSom(): any {
        return console.log("Emitiu som")
    }
    
    locomover(): any{
        return console.log("O cavalo correu")
    }
}

class Lagarta implements Animais{
    emitirSom(): any {
        return console.log("Emitiu som")
    }
    
    locomover(): any {
        return console.log("O lagarto subiu na parede")
    }
}

const cavalo = new Cavalo()
const lagarto = new Lagarta()

cavalo.emitirSom()
lagarto.locomover()