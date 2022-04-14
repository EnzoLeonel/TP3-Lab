import { Factura } from "./Factura";
class Cliente{
    numero: number;
    razonSocial: string;
    cuit: number;
    facturas: Array<Factura>;

    constructor(numero: number, razonSocial: string, cuit: number){
        this.numero = numero;
        this. razonSocial = razonSocial;
        this. cuit = cuit;
    }
}