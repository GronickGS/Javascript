// Importar el módulo readline
var readline = require('readline');
// Crear una interfaz de lectura para la entrada estándar
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función que pide un número positivo y repite hasta que sea válido
function pedirNumeroPositivo() {
    rl.question("Por favor, ingresa un número positivo: ", function (numero) {
        // Convertir la entrada a número
        numero = parseInt(numero);
        // Usar un bucle while para asegurarnos de que el número sea positivo
        if (numero <= 0 || isNaN(numero)) {
            console.log("¡Número no válido! Debe ser un número positivo.");
            pedirNumeroPositivo(); // Volver a pedir el número si no es válido
        }
        else {
            console.log("\u00A1Gracias! Has ingresado el n\u00FAmero positivo ".concat(numero, "."));
            rl.close(); // Cerrar la interfaz después de obtener un número válido
        }
    });
}
// Llamar a la función para iniciar el proceso
pedirNumeroPositivo();
