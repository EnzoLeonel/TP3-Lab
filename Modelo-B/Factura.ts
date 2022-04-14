import { DetalleFactura } from "./DetalleFactura";

export class Factura{
    letra: string;
    numero: number;
    recargo: number;
    tipoPago: string;
    totalItems: number;
    totalFinal: number;
    fecha: Date;
    detalles: Array<DetalleFactura>;

    constructor(letra: string, numero: number, fecha: Date){
        this.letra = letra;
        this.numero = numero;
        this.fecha = fecha;
    }
}