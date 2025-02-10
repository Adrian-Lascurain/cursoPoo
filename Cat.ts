import { Animal } from "./Animal";

class Cat extends Animal{
    private _isNasty: boolean = false;

    meow(): void{
        console.log(`${this.name}: meow`);
    }

    get isNasty(): boolean{
        return this._isNasty;
    }

    set isNasty(isNasty: boolean){
        this._isNasty = isNasty;
    }
}

let oscar: Cat = new Cat("Óscar","macho",3,7,"marrón","rayada");

let luna: Cat = new Cat("Luna","hembra",2,5,"gris","lisa");

oscar.meow();
oscar.breathe();
oscar.run("oxxo");
oscar.sleep(8);
oscar.eat("Cereal con cuchara");

oscar.toString();

console.log("------------------------------------------")
luna.meow();
luna.breathe();
luna.sleep(6);
luna.run("techo");
luna.eat("wiskas");

luna.toString();

