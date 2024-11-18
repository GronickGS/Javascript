// Importar el módulo readline
const readline = require('readline');

// Crear una interfaz de lectura para la entrada estándar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir al usuario que ingrese su nombre
rl.question("¿Cuál es tu nombre? ", (nombre) => {
  // Pedir al usuario que ingrese su edad
  rl.question("¿Cuántos años tienes? ", (edad) => {
    // Convertir la edad a un número entero
    edad = parseInt(edad);

    // Validar si la edad ingresada es un número válido
    if (isNaN(edad)) {
      console.log("Por favor, ingresa una edad válida.");
    } else {
      // Condicional para verificar la edad
      if (edad >= 18) {
        console.log(`${nombre}, eres mayor de edad.`);
      } else if (edad > 0 && edad < 18) {
        console.log(`${nombre}, eres menor de edad.`);
      } else {
        console.log("Edad no válida.");
      }
    }

    // Cerrar la interfaz readline
    rl.close();
  });
});
