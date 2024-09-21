// Variables de entrada (sensores)
let PD = true;  // Simulamos que se detecta una Puerta Derecha (True o False)
let PI = false; // Simulamos que no se detecta una Puerta Izquierda

// Función AND
function compuertaAnd(entrada1, entrada2) {
    return entrada1 && entrada2;
}

// Función NOT
function compuertaNot(entrada) {
    return !entrada;
}

// Estado de habilitación de la cinta (para habilitar compuertas)
let habilitarCinta = true;

// Lógica para compuerta derecha
let abrirCompuertaDerecha = compuertaAnd(PD, habilitarCinta);
let abrirCompuertaIzquierda = compuertaAnd(PI, habilitarCinta);

// Resultado en consola
if (abrirCompuertaDerecha) {
    console.log("Abrir compuerta derecha");
} else {
    console.log("Cerrar compuerta derecha");
}

if (abrirCompuertaIzquierda) {
    console.log("Abrir compuerta izquierda");
} else {
    console.log("Cerrar compuerta izquierda");
}

// Cambio en el estado de los sensores
PD = false; // Ahora no hay puerta derecha
PI = true;  // Detectamos una puerta izquierda

// Recalculamos el estado de las compuertas
abrirCompuertaDerecha = compuertaAnd(PD, habilitarCinta);
abrirCompuertaIzquierda = compuertaAnd(PI, habilitarCinta);

// Resultado en consola para el nuevo estado
if (abrirCompuertaDerecha) {
    console.log("Abrir compuerta derecha");
} else {
    console.log("Cerrar compuerta derecha");
}

if (abrirCompuertaIzquierda) {
    console.log("Abrir compuerta izquierda");
} else {
    console.log("Cerrar compuerta izquierda");
}
