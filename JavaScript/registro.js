const prompt = require("prompt-sync")(); // Permite leer datos del usuario

let personas = [];

while (true) {
    let nombre = prompt("Ingrese el nombre: ");
    let apellido = prompt("Ingrese el apellido: ");
    let dni = prompt("Ingrese el DNI: ");

    // Pide un solo número de teléfono
    let telefono = prompt("Ingrese un teléfono: ");

    // Almacena la persona con su teléfono
    personas.push([nombre, apellido, dni, [telefono]]);

    // Después de registrar una persona, pregunta si desea agregar otra
    let continuarIngreso = prompt("¿Desea agregar otra persona? (si/no): ");
    if (continuarIngreso.toLowerCase() === "no") {
        break; // Si responde "no", termina el ciclo de ingreso de personas
    }
}

console.log("\nLista de personas registradas:");
console.log(personas);  // Muestra la lista de personas y sus teléfonos
