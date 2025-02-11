"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Producto_1 = require("./Producto");
const Inventario_1 = require("./Inventario");
const Venta_1 = require("./Venta");
// Creación de instancias
const producto1 = new Producto_1.Producto(1, "Cuaderno", 100);
const producto2 = new Producto_1.Producto(2, "Bolígrafo", 200);
const producto3 = new Producto_1.Producto(3, "Goma de borrar", 150);
const inventario = new Inventario_1.Inventario();
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
const venta1 = new Venta_1.Venta(inventario, producto2.id, producto2.nombre, 20);
venta1.realizarVenta();
inventario.consultarInventario();
