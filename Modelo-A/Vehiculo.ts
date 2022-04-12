export class Vehiculo{
    patente: string;
    marca: string;
    modelo: string;

    constructor(patente:string, marca:string, modelo:string){
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
    }
}