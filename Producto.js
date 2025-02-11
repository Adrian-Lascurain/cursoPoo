"use strict";
// Esta clase la generé porque será utilizada dentro del inventario, de tal manera, que esta solo tenga la responsabilidad de albergar la información relacionada a un producto.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    // Método constructor
    constructor(id, nombre, cantidad) {
        this._id = id;
        this._nombre = nombre;
        this._cantidad = cantidad;
    }
    // Getters y setters
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }
    // Métodos
    toString() {
        return `Producto con id: ${this._id}, nombre: ${this._nombre}, cantidad: ${this._cantidad}`;
    }
}
exports.Producto = Producto;
