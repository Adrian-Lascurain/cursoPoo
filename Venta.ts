import { Inventario } from "./Inventario"

// Esta clase la generé para llevar un control de las ventas, cada una estará asociada a un inventario y a un producto.
export class Venta{
    // Atributos
    private _inventario: Inventario; 
    private _idProducto: number;
    private _nombreProducto: string;
    private _cantidadPorVender: number;
    isVentaConcluida: boolean = false;

    // Constructor
    constructor(
        inventario: Inventario, 
        idProducto: number,
        nombreProducto: string,
        cantidadVendida: number
    ){
        this._inventario = inventario;
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._cantidadPorVender = cantidadVendida;
    }

    // Getters y setters
    set inventario(inventario: Inventario) {
        this._inventario = inventario;
    }

    get inventario(): Inventario {
        return this._inventario;
    }

    set idProducto(idProducto: number) {
        this._idProducto = idProducto;
    }

    get idProducto(): number {
        return this._idProducto;
    }

    set nombreProducto(nombreProducto: string) {
        this._nombreProducto = nombreProducto;
    }

    get nombreProducto(): string {
        return this._nombreProducto;
    }

    set cantidadPorVender(cantidadPorVender: number) {
        this._cantidadPorVender = cantidadPorVender;
    }

    get cantidadPorVender(): number {
        return this._cantidadPorVender;
    }

    // Métodos
    realizarVenta(){
        let prod = this._inventario.consultarProducto(this._idProducto);
        // Validar producto y disponibilidad
        if(prod?.id === this._idProducto && prod?.nombre === this._nombreProducto && this._cantidadPorVender <= prod?.cantidad){
            let productoRestante = prod.cantidad - this._cantidadPorVender;
            this._inventario.actualizarCantidad(prod.id,productoRestante);
            console.log(`Se ha realizado la venta de ${this._cantidadPorVender} unidades del producto: ${prod.nombre}`);
            this.isVentaConcluida = true;
        }else{
            console.log(`No se ha podido realizar la venta`);
        }
    }

}