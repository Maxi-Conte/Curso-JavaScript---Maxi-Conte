let anioVehiculo = parseInt(prompt("Ingrese el año del vehiculo:"));
let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();
let antiguedad = anioActual - anioVehiculo;

let seguro = 20000;
let seguro20 = 5000;
let patente = 7500;
let patente20 = 2500;

if (antiguedad > 10) {
    alert("El valor de su seguro es $" + seguro20);
} else {
    alert("El valor de su seguro es $" + seguro);
}

if (antiguedad > 10) {
    alert("El valor total a pagar de tu patente es $" + patente20);
} else {
    alert("El valor total de tu patente es de $" + patente);
}
