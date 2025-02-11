import { Producto } from "./Producto";

// Esta clase la generé para manejar las operaciones básicas del inventario incluyendo sentencias de validación 
class Inventario{
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
            console.log(`Se ha eliminado el ${prod.toString()}`);
        }else{
            console.log(`El Producto con el id[${id}] no existe en el inventario por lo que no ha sido eliminado`);
        }
    }

    consultarProducto(id: number): Producto | undefined{
        return this.listaProductos.find(producto => producto.id === id)
    }

    consultarInventario(): Producto[]{
        console.log("--Inventario:")
        this.listaProductos.forEach(producto => console.log(producto.toString()))
        return this.listaProductos
    }

}

// Creación de instancias
const producto1 = new Producto(1, "Cuaderno", 100);
const producto2 = new Producto(2, "Bolígrafo", 200);
const producto3 = new Producto(3, "Goma de borrar", 150);
const inventario = new Inventario();

// Probando funcionalidades
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);

inventario.consultarInventario();
inventario.agregarProducto(producto1);

inventario.eliminarProducto(5);
inventario.eliminarProducto(1);
inventario.consultarProducto(1);

inventario.consultarInventario();

 


