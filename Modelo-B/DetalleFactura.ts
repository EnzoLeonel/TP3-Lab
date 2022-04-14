import { Articulo } from "./Articulo";

export class DetalleFactura{
    cantitad: number;
    subtotal: number;
    articulo: Articulo;

    constructor(cantidad: number, subtotal: number){
        this.cantitad = cantidad;
        this.subtotal = subtotal;
    }
}