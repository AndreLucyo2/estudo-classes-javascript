export class Entity {
    constructor() { }

    //Obriga as classes filhas a implementar estes metodos
    toJSON() {
        throw new Error("Método toJSON não implementado");
    }

    toString() {
        throw new Error("Método toString não implementado");
    }
}