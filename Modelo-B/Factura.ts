import { DetalleFactura } from "./DetalleFactura";
type Pago = 'E' | 'TD' | 'TC' | 'CC' | 'TR';

export class Factura{
    letra: string;
    numero: number;
    recargo: number = 0;
    tipoPago: Pago;
    totalItems: number = 0;
    totalFinal: number = 0;
    fecha: Date;
    detalles: Array<DetalleFactura>;

    constructor(letra: string, numero: number, fecha: Date){
        this.letra = letra;
        this.numero = numero;
        this.fecha = fecha;
    }
    addDetalleFactura(detalle: DetalleFactura){
        this.detalles.push(detalle);
    }

    calcularTotalItems(){
        let monto: number = 0;
        this.detalles.forEach(detalle =>{
            monto += detalle.getSubtotal();
        });
        this.totalItems = monto;
    }
    calcularTotalFinal(){
        this.totalFinal = this.totalItems + this.recargo;
    }
}