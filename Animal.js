"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, sex, age, weight, color, texture) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    breathe() {
        console.log("Estoy respirando");
    }
    eat(food) {
        console.log(`Estoy comiendo ${food}`);
    }
    run(destination) {
        console.log(`Estoy corriendo hacia ${destination}`);
    }
    sleep(hours) {
        console.log(`Voy a dormir por ${hours} horas`);
    }
    toString() {
        console.log(`nombre: ${this.name}, sexo: ${this.sex}, edad: ${this.age}, peso: ${this.weight}, color: ${this.color},${this.color}`);
    }
}
exports.Animal = Animal;
