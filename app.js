const readLineSync = require('./node_modules/readline-sync');
const { generarNumeroAleatorio,verificarAdivinanza } = require("./adivinanza");

function obtenerNumeroUsuario() {
    return readLineSync.question('Ingrese un numero: ');
}


function juegoAdivinanza() {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    console.log('Bienvenido a adivina el numero secreto!');
    console.log('Intenta adivinar el numero secreto entre 1 y 100!');

    while (numeroSecreto != numeroAdivinado) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto,numeroAdivinado);
    }
}

juegoAdivinanza()
