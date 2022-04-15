"use strict";
exports.__esModule = true;
var Articulo_1 = require("./Articulo");
var Cliente_1 = require("./Cliente");
var DetalleFactura_1 = require("./DetalleFactura");
var Factura_1 = require("./Factura");
var cliente1 = new Cliente_1.Cliente(1, "Garcia Armenteros", 20402719738);
var articulo1 = new Articulo_1.Articulo(100, "Chocolate barra", 150, "50 gr");
var articulo2 = new Articulo_1.Articulo(101, "Papas Lays", 130, "80 gr");
var articulo3 = new Articulo_1.Articulo(102, "Cerveza Quilmes", 140, "750 ml");
var articulo4 = new Articulo_1.Articulo(103, "Encendedor Bic", 170, "5 cm");
var articulo5 = new Articulo_1.Articulo(104, "Cigarrillos Philips", 260, "20 uni");
var articulo6 = new Articulo_1.Articulo(105, "Pan", 300, "1 kg");
var factura1 = new Factura_1.Factura("B", 405512, new Date(2021, 3, 21));
var factura2 = new Factura_1.Factura("A", 1000023, new Date(2021, 5, 10));
var factura3 = new Factura_1.Factura("B", 405513, new Date(2021, 9, 2));
var detalle1 = new DetalleFactura_1.DetalleFactura(2, articulo1);
var detalle2 = new DetalleFactura_1.DetalleFactura(2, articulo2);
var detalle3 = new DetalleFactura_1.DetalleFactura(3, articulo3);
var detalle4 = new DetalleFactura_1.DetalleFactura(1, articulo4);
var detalle5 = new DetalleFactura_1.DetalleFactura(2, articulo5);
var detalle6 = new DetalleFactura_1.DetalleFactura(1, articulo6);
factura1.addDetalleFactura(detalle1);
factura1.addDetalleFactura(detalle2);
factura2.addDetalleFactura(detalle3);
factura2.addDetalleFactura(detalle4);
factura3.addDetalleFactura(detalle5);
factura3.addDetalleFactura(detalle6);
cliente1.addFactura(factura1);
cliente1.addFactura(factura2);
cliente1.addFactura(factura3);
console.log("\nCliente: ".concat(cliente1.razonSocial, "\n"));
cliente1.facturas.forEach(function (factura) {
    console.log("Factura numero: ".concat(factura.numero));
    factura.detalles.forEach(function (detalle) {
        console.log("\tArticulo: ".concat(detalle.articulo.denominacion, " -- Precio: ").concat(detalle.articulo.precio, " -- Subtotal: ").concat(detalle.getSubtotal()));
    });
});
console.log("\nEl total es de: ".concat(cliente1.totalFacturadoXTipoPago('')));
console.log("\nEl total pagando con Tarjeta de Credito es de: ".concat(cliente1.totalFacturadoXTipoPago('TC'), "\n"));