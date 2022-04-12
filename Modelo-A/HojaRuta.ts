import { Detalle } from "./Detalle";

class HojaRuta{
    fecha: Date;
    numero: number;
    detalle: Detalle;

    constructor(fecha:Date, numero:number, detalle: Detalle){
        this.fecha = fecha;
        this.numero = numero;
        this.detalle = detalle;
    }

    calcularTotalKilometros(): number{
        return this.detalle.kmRegreso + this.detalle.horaSalida;
    }
}