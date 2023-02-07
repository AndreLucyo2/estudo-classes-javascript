import { Entity } from "./Entity.js";

export class Brand extends Entity {
    constructor({ shopcode, uid, nome } = {}) {
        super();
        this.uid = uid || null;
        this.shopcode = shopcode || null;
        this.nome = nome || null;
    }

    toJSON() {
        return {
            nome: this.nome,
            shopcode: this.shopcode,
            uid: this.uid
        };
    }

    toString() {
        return `Brand:\n uid:${this.uid},\n shopcode:${this.shopcode},\n Nome:${this.nome}`;
    }
}