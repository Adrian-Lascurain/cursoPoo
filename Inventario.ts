import { Producto } from "./Producto";

// Esta clase la generé para manejar las operaciones básicas del inventario incluyendo sentencias de validación 
export class Inventario{
    // Atributos
    private listaProductos: Producto[] = [];

    // Métodos
    agregarProducto(producto: Producto):void{
        let prod: Producto | undefined = this.listaProductos.find(productoLista => productoLista.id === producto.id);
        if(prod){
            console.log(`Ya existe un producto con el id[${prod.id}] por lo que no se ha agregado al inventario`)
        }else{
            this.listaProductos.push(producto);
            console.log(`El ${producto.toString()}. Se ha agregado al inventario`)
        }
    }

    eliminarProducto(id: number): void{
        let prod: Producto | undefined = this.listaProductos.find(producto => producto.id === id);
        if(prod){
            let indice: number = this.listaProductos.indexOf(prod);
            this.listaProductos.splice(indice,1);
            console.log(`Se ha eliminado del inventario el ${prod.toString()}`);
        }else{
            console.log(`El Producto con el id[${id}] no existe en el inventario por lo que no ha sido eliminado`);
        }
    }

    consultarProducto(id: number): Producto | undefined{
        let prod = this.listaProductos.find(producto => producto.id === id);
        if(prod){
            console.log(`Consulta: ${prod.toString()}`);
        }else{
            console.log(`El producto con el id[${id}] no existe`);
        }
        return prod;
    }

    consultarInventario(): Producto[]{
        console.log("--Inventario:")
        this.listaProductos.forEach(producto => console.log(producto.toString()))
        return this.listaProductos
    }

    actualizarCantidad(id: number, cantidad: number){
        let prod: Producto | undefined = this.listaProductos.find(productoLista => productoLista.id === id);
        if(prod){
            let indice: number = this.listaProductos.indexOf(prod);
            this.listaProductos[indice].cantidad = cantidad;
        }
    }

}

