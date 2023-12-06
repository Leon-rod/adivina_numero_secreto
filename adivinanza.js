function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 100) + 1;
};

function verificarAdivinanza(numeroSecreto,numeroAdivinado) {
    if (numeroSecreto == numeroAdivinado) {
        console.log('Felicitaciones! Adivinaste el numero secreto');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El numero secreto es MENOR que el propuesto');
    } else {
        console.log('El numero secreto es MAYOR que el propuesto')
    }
};

module.exports = {generarNumeroAleatorio,verificarAdivinanza};