import { Articulo } from "./Articulo";

export class DetalleFactura{
    cantidad: number = 0;
    private subtotal: number = 0;
    articulo: Articulo;

    constructor(cantidad: number, subtotal: number){
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }
    calcularSubTotal() {
        this.subtotal = this.cantidad * this.articulo.precio;
    }
    getSubtotal(): number{
        this.calcularSubTotal();
        return this.subtotal;
    }
}