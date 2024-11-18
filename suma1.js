// Importar el módulo readline
const readline = require("readline");

// Crear una interfaz de lectura para la entrada estándar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedir al usuario que ingrese el primer número
rl.question("Ingresa el primer número: ", (num1) => {
  // Pedir al usuario que ingrese el segundo número
  rl.question("Ingresa el segundo número: ", (num2) => {
    // Convertir los valores ingresados a números enteros
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Sumar los números
    let suma = num1 + num2;

    // Mostrar el resultado
    console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);

    // Cerrar la interfaz readline
    rl.close();
  });
});
