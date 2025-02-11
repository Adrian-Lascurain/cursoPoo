import { Producto } from "./Producto";
import { Inventario } from "./Inventario";
import { Venta } from "./Venta";

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
inventario.consultarProducto(3);

inventario.consultarInventario();

// Probando funcionalidad de venta
const venta1 = new Venta(inventario,producto2.id,producto2.nombre,20);
venta1.realizarVenta()
inventario.consultarInventario()