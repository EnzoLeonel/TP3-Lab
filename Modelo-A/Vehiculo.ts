import { HojaRuta } from "./HojaRuta";
export class Vehiculo{
    patente: string;
    marca: string;
    modelo: string;
    hojasRuta = Array<HojaRuta>();

    constructor(patente:string, marca:string, modelo:string){
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
    }

    addHojaRuta(hojaRuta: HojaRuta){
        this.hojasRuta.push(hojaRuta);
    }

    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date): number{
        return ;
    }
}