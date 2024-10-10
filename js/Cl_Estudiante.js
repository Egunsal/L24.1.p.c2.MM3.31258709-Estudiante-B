export default class Cl_Estudiante{
    constructor(nombre,notas,materias){
        this.nombre = nombre;
        this.notas= notas;
        this.materias = materias
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(n){
        this._nombre = n;
    }
    get notas(){
        return this._notas;
    }
    set notas(ns){
        this._notas=+ns    
    }
    get materias(){
        return this._materias;
    }
    set materias(m){
           this._materias=+m;
    }
    promedio(){
        return this.notas/this.materias;
    }
}