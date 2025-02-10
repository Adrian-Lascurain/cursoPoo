export class Animal {
    name: string;
    sex: string;
    age: number;
    weight: number;
    color: string;
    texture: string;

    constructor(name: string,sex: string,age: number,weight: number,color: string, texture: string) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }

    breathe(): void{
        console.log("Estoy respirando");
    }

    eat(food: string): void{
        console.log(`Estoy comiendo ${food}`);
    }

    run(destination: string): void{
        console.log(`Estoy corriendo hacia ${destination}`);
    }

    sleep(hours: number): void{
        console.log(`Voy a dormir por ${hours} horas`);
    }

    toString(): void{
        console.log(`nombre: ${this.name}, sexo: ${this.sex}, edad: ${this.age}, peso: ${this.weight}, color: ${this.color},${this.color}`);
    }
}