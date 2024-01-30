"use strict";
/*
23 - Crie uma interface "Funcionario" com o método "exercerFuncao". Em seguida,
crie as classes "TechLead", "Backend", "FrontEnd" e desenvolva a implementação
deste método para cada uma delas.
*/
class TechLead {
    exercerFuncao() {
        return console.log("Exerce a função de líder técnico da equipe");
    }
}
class Backend {
    exercerFuncao() {
        return console.log("Exerce a função de desenvolvedor(a) backend");
    }
}
class FrontEnd {
    exercerFuncao() {
        return console.log("Exerce a função de desenvolvedora(o) front-end");
    }
}
const frontEnd = new FrontEnd();
frontEnd.exercerFuncao();
