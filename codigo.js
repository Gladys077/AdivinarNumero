const boton = document.querySelector("#boton"); // Obtiene el elemento del DOM
let numeroSorteado = 0; // Variable para almacenar el número sorteado
const botonX = document.querySelector("button");
botonX.addEventListener("click", mostrarImagen);

// Evento 'input' para el campo de entrada (#dato)
const input = document.querySelector("#dato");
input.addEventListener("click", function () {
  this.value = this.value.replace(/[.,e+\-]/g, ''); // Elimina todo caracter que no sea un nro entero del 1 al 10

  let dato = parseInt(this.value);  // Convertir el valor a un número entero usando parseInt

  if (isNaN(dato) || dato == null || dato < 1 || dato > 10) {  // Verificar si el dato es un número entero válido
    this.value = "";  // Si no es un número entero válido, limpiar el campo de entrada
  }
});

function adivinar() { // Obtiene el n° ingresado y lo compara con el resultado del n° aleatorio
    let input = document.querySelector("#dato");
    let dato = parseInt(input.value);
    let response = document.querySelector("#respuesta");
    let subtitulo = document.querySelector("#subtitulo");
    subtitulo.innerHTML = "";

    if (dato == numeroSorteado) {
        response.innerHTML = "GANASTE!";
        mostrarImagen();
    } else {
        response.innerHTML = "Perdiste";
        setTimeout(()=>{
            limpiarTodo();
        }, 2000);
    }
}
function  limpiarTodo(){
    let input = document.querySelector("#dato");
   // let dato = parseInt(input.value);
    let response = document.querySelector("#respuesta");
    let subtitulo = document.querySelector("#subtitulo");

        response.innerHTML = "Adivina el N° que saldrá"; // Restablece el título
        subtitulo.innerHTML = "(Escriba un número del 1 al 10)";
        input.value = ""; // Limpia el campo de entrada
        let numeros = document.querySelector("#numerosCambiando");
        numeros.innerHTML = ""; //Limpia el nro. sorteado
}; 


function mostrarImagen() {
  let divImagen = document.querySelector("#imagen");
  divImagen.style.display = "block"; //Muestra la imagen

  const botonCerrar = document.querySelector("#cerrarImagen");
  botonCerrar.addEventListener("click", ocultarImagen);
}

function ocultarImagen() {
    let divImagen = document.querySelector("#imagen");
    divImagen.style.display = "none";

    const botonCerrar = document.querySelector("#cerrarImagen");
    botonCerrar.removeEventListener("click", ocultarImagen);

    limpiarTodo();
}

function mostrarNumeros() {
    let numeros = document.querySelector("#numerosCambiando"); // Obtiene el elemento del DOM
    let contador = 1;
    let response = document.querySelector("#respuesta");
    response.innerHTML = "Adivina el N° que saldrá"; // Reinicia el mensaje antes de iniciar una nueva partida

    let intervalo = setInterval(() => { //setInterval() es una función incorporada en JS
        let numeroAleatorio = Math.round(Math.random() * 10); // Muestra un número aleatorio en cada iteración
        numeros.innerHTML = numeroAleatorio;
        contador++;

        if (contador > 10) {
            clearInterval(intervalo);//clearInterval() es una función incorporada en JS, que sirve para detener la función setInterval()
            numeroSorteado = numeroAleatorio; // Almacena el último número sorteado
            setTimeout(() => {
                numeros.innerHTML = numeroSorteado; // Muestra el último número sorteado al finalizar la secuencia
                adivinar(); // Llama a la función después de mostrar el número sorteado
            }, 200); // Espera un momento antes de mostrar el número sorteado y llamar a la función adivinar
        }
    }, 100); // velocidad de la secuencia ajustando este valor
}

boton.addEventListener("click", () => {
    let input = document.querySelector("#dato");
    let dato = parseInt(input.value);

    if (isNaN(dato) || dato < 1 || dato > 10 ){
        alert("Este campo solo acepta números del 1 al 10")
        input.value = ""; // Limpia el campo de entrada
        return;
    }

    mostrarNumeros();
});
