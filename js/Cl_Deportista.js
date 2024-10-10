import Cl_Estudiante from "./Cl_Estudiante.js";
export default class Cl_Deportista extends Cl_Estudiante{
    constructor(nombre,notas,materias,edad,deporte){
        super(nombre,notas,materias)
        this.edad = edad;
        this.deporte = deporte
    }
    get edad(){
        return this._edad;
    }
    set edad(e){
        this._edad = +e
    }
    admision(){
        if(this.deporte == 1){
            if(super.promedio > 14 && this.edad > 21)
                return "es admitido en besibol"
            else return "no es admitido en beisbol"
        }
        else if(super.promedio > 12 && this.edad > 19){
            return "es admitido en futbol"
        }else return "no es admitido en futbol"
    }
    mostarNombre(){
        return this._nombre;
    }
    mostrarDeporte(){
        if (this.deporte == 1)
            return "beisbol"
        else return "futbol"
    }
    mostrarNotas(){
        return this._notas;
    }
    mostrarEdad(){
        return this._edad;
    }
    mostrarMaterias(){
        return this._materias;
    }
}