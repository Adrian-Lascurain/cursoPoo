
// Esta clase la generé porque será utilizada dentro del inventario, de tal manera, que esta solo tenga la responsabilidad de albergar la información relacionada a un producto.

class Producto{
    // Atributos
    private _id: number;
    private _nombre: string;
    private _cantidad: number;

    // Método constructor
    constructor(
        id: number,
        nombre: string,
        cantidad: number,
    ){
        this._id = id;
        this._nombre = nombre;
        this._cantidad = cantidad;
    }

    // Getters y setters
    set id(id: number){
        this._id = id;
    }

    get id(): number{
        return this._id;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get nombre(): string{
        return this._nombre;
    }

    set cantidad(cantidad: number){
        this._cantidad = cantidad;
    }

    get cantidad(): number{
        return this._cantidad;
    }

    // Métodos
    toString():void {
        console.log(`Producto con id: ${this._id}, nombre: ${this._nombre}, cantidad: ${this._cantidad}`)
    }

}