import Cl_Deportista from "./Cl_Deportista.js";

let deportista1 = new Cl_Deportista("Juan",110,10,20,2)
let salida = document.getElementById("salida")

salida.innerHTML = "Nombre del estudiante: "+deportista1.mostarNombre();
salida.innerHTML += "<br>Acumulado de notas: "+deportista1.mostrarNotas();
salida.innerHTML += "<br>Cantidad de materias: "+deportista1.mostrarMaterias();
salida.innerHTML += "<br>Deporte: "+deportista1.mostrarDeporte();
salida.innerHTML += "<br>Edad: "+deportista1.mostrarEdad();
salida.innerHTML += "<br>Nota promedio "+deportista1.promedio()+"<br>";
salida.innerHTML += deportista1.mostarNombre()+ " "+deportista1.admision();