// Importar el módulo readline
const readline = require('readline');

// Crear una interfaz de lectura para la entrada estándar
/* This line of code is creating an interface for reading input from the standard input (keyboard) and
writing output to the standard output (console). It uses the `readline` module in Node.js to create
this interface. The `createInterface` method takes an object with `input` and `output` properties.
In this case, `process.stdin` is used as the input stream (keyboard input) and `process.stdout` is
used as the output stream (console output). This allows the program to interact with the user by
reading input and writing output in the terminal. */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir al usuario que ingrese su nombre
rl.question("¿Cuál es tu nombre? ", (nombre) => {
  // Pedir al usuario que ingrese su edad
  rl.question("¿Cuántos años tienes? ", (edad) => {
    // Convertir la edad a número entero
    edad = parseInt(edad);

    // Mostrar el nombre y la edad
    console.log(`Hola, ${nombre}! Tienes ${edad} años.`);

    // Cerrar la interfaz readline
    rl.close();
  });
});
