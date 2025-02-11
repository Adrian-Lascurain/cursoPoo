"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
// Esta clase la generé para llevar un control de las ventas, cada una estará asociada a un inventario y a un producto.
class Venta {
    // Constructor
    constructor(inventario, idProducto, nombreProducto, cantidadVendida) {
        this.isVentaConcluida = false;
        this._inventario = inventario;
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._cantidadPorVender = cantidadVendida;
    }
    // Getters y setters
    set inventario(inventario) {
        this._inventario = inventario;
    }
    get inventario() {
        return this._inventario;
    }
    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }
    get idProducto() {
        return this._idProducto;
    }
    set nombreProducto(nombreProducto) {
        this._nombreProducto = nombreProducto;
    }
    get nombreProducto() {
        return this._nombreProducto;
    }
    set cantidadPorVender(cantidadPorVender) {
        this._cantidadPorVender = cantidadPorVender;
    }
    get cantidadPorVender() {
        return this._cantidadPorVender;
    }
    // Métodos
    realizarVenta() {
        let prod = this._inventario.consultarProducto(this._idProducto);
        // Validar producto y disponibilidad
        if ((prod === null || prod === void 0 ? void 0 : prod.id) === this._idProducto && (prod === null || prod === void 0 ? void 0 : prod.nombre) === this._nombreProducto && this._cantidadPorVender <= (prod === null || prod === void 0 ? void 0 : prod.cantidad)) {
            let productoRestante = prod.cantidad - this._cantidadPorVender;
            this._inventario.actualizarCantidad(prod.id, productoRestante);
            console.log(`Se ha realizado la venta de ${this._cantidadPorVender} unidades del producto: ${prod.nombre}`);
            this.isVentaConcluida = true;
        }
        else {
            console.log(`No se ha podido realizar la venta`);
        }
    }
}
exports.Venta = Venta;
