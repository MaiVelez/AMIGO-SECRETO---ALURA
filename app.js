// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombres = [];

const inputNombreAmigo =  document.getElementById('amigo');
const listaAmigos =  document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = inputNombreAmigo.value.trim();
    if (!nombre){
        alert("Agrega un nombre, por favor!"); 
        return;
    }

    if(nombres.includes(nombre)) {
        inputNombreAmigo.value = '';
        alert (`Ya existe un amigo llamado ${nombre}`);
    }

    if(nombres.includes(nombre)) {
        alert("Listo, se adiciono");
        return;
    } else {
        alert("Agrega un nombre, por favor!");
    }

    nombres.push(nombre);
    inputNombreAmigo.value = '';
    actualizarListaAmigos();
}
    
function actualizarListaAmigos() {
    listaAmigos.innerHTML = nombres.map(nombre => `<li>${nombre}</li>`).join("");
}

function sortearAmigo() {
    if(nombres.length == 0) { 
        resultado.innerHTML = "No hay amigos para sortear";
        return;
    } else {

    const indiceAmigoElegido = Math.floor(Math.random() * nombres.length);
    const nombreElegido = nombres[indiceAmigoElegido];
    resultado.innerHTML = `<li> El amigo elegido es ${nombreElegido}</li>`;
    intentos++
     return;
    }
}

function limpiar() {
    listaAmigos.innerHTML = '';
    nombres.length = 0;
    resultado.innerHTML = "LISTO para un Nuevo Juego?";;
    console.log(nombres.length)
    return;
}

