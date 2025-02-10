"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor() {
        super(...arguments);
        this._isNasty = false;
    }
    meow() {
        console.log(`${this.name}: meow`);
    }
    get isNasty() {
        return this._isNasty;
    }
    set isNasty(isNasty) {
        this._isNasty = isNasty;
    }
}
let oscar = new Cat("Óscar", "macho", 3, 7, "marrón", "rayada");
let luna = new Cat("Luna", "hembra", 2, 5, "gris", "lisa");
oscar.meow();
oscar.breathe();
oscar.run("oxxo");
oscar.sleep(8);
oscar.eat("Cereal con cuchara");
oscar.toString();
console.log("------------------------------------------");
luna.meow();
luna.breathe();
luna.sleep(6);
luna.run("techo");
luna.eat("wiskas");
luna.toString();
