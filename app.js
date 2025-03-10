// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let listaAmigos = [];

//Implementa una función para agregar amigos

//1. Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//2.Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

    function agregarAmigo() {
        let amigoUsuario = document.getElementById('amigo').value;
        
        if (amigoUsuario === '') {
            alert('Por favor, ingrese un nombre válido');
            return;
        } else {
            if(listaAmigos.includes(amigoUsuario)){
            limpiar();
            return; 
        } else{
            agragarAmigo();
            limpiar();
            return;
        }
        }
    }   
        
//3.Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

//Implementa una función para actualizar la lista de amigos

//Implementa una función para actualizar la lista de amigos

let li = (amigoUsuario) => `<li>${amigoUsuario}</li>`

function agragarAmigo() {
    listaAmigos.push(document.getElementById('amigo').value)
    document.getElementById('listaAmigos').innerHTML = listaAmigos.map(amigoUsuario => li(amigoUsuario))
}

//4.Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

function limpiar() {
    document.getElementById('amigo').value = '';

}


//Implementa una función para sortear los amigos

function validarSorteo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    sortearAmigo();
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        validarSorteo();
        return;
    }

    let procesoAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[procesoAleatorio];
    
    listaAmigos.splice(procesoAleatorio, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
    
    sorteado = true;
}








