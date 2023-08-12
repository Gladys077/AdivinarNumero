var boton = document.querySelector("#boton"); // Obtiene el elemento del DOM
var numeroSorteado = 0; // Variable para almacenar el número sorteado

// Evento 'input' para el campo de entrada (#dato)
const input = document.querySelector("#dato");
input.addEventListener("input", function () {
  this.value = this.value.replace(/[.,e+\-]/g, ''); // Elimina todo caracter que no sea un nro entero del 1 al 10

  let dato = parseInt(this.value);  // Convertir el valor a un número entero usando parseInt

  if (isNaN(dato) || dato < 1 || dato > 10) {  // Verificar si el dato es un número entero válido
    this.value = "";  // Si no es un número entero válido, limpiar el campo de entrada
  }
});

function adivinar() { // Obtiene el n° ingresado y lo compara con el resultado del n° aleatorio
    debugger;
    let input = document.querySelector("#dato");
    let dato = parseInt(input.value);
    let response = document.querySelector("#respuesta");
    let subtitulo = document.querySelector("#subtitulo");
    subtitulo.innerHTML = "";

    if (dato == numeroSorteado) {
        response.innerHTML = "GANASTE!";
    } else {
        response.innerHTML = "Perdiste";
    }

     // Después de 3 segundos, restablece el título y limpia el campo de entrada
     setTimeout(() => {
        response.innerHTML = "Adivina el N° que saldrá"; // Restablece el título
        input.value = ""; // Limpia el campo de entrada
        let numeros = document.querySelector("#numerosCambiando");
        numeros.innerHTML = ""; //Limpia el nro. sorteado
    }, 3000); // 3 segundos en milisegundos
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

    numeroSorteado = Math.round(Math.random() * 10); // Genera el número aleatorio sorteado
    mostrarNumeros();
});

/*
const boton = document.querySelector("#boton");
let numeroSorteado = 0;

// Evento 'input' para el campo de entrada (#dato)
const input = document.querySelector("#dato");
input.addEventListener("input", function () {
  // Eliminar cualquier parte decimal y caracteres no permitidos del valor ingresado
  this.value = this.value.replace(/[.,e+\-]/g, '');

  // Convertir el valor a un número entero usando parseInt
  let dato = parseInt(this.value);

  // Verificar si el dato es un número entero válido
  if (isNaN(dato) || dato < 1 || dato > 10) {
    // Si no es un número entero válido, limpiar el campo de entrada
    this.value = "";
  }
});

function mostrarNumeros() {
  let contador = 1;
  let intervalo = setInterval(() => {
    let numeroAleatorio = Math.round(Math.random() * 10);
    numerosCambiando.innerHTML = numeroAleatorio;
    contador++;

    if (contador > 10) {
      clearInterval(intervalo);
      numeroSorteado = numeroAleatorio;
      setTimeout(() => {
        numerosCambiando.innerHTML = numeroSorteado;
        adivinar(); // Llama a la función después de mostrar el número sorteado
      }, 200);
    }
  }, 100);
}

function adivinar() {
  let input = document.querySelector("#dato");
  let dato = parseInt(input.value);
  let response = document.querySelector("#respuesta");
  let subtitulo = document.querySelector("#subtitulo");
  subtitulo.innerHTML = "";

  if (dato === numeroSorteado) {
    response.innerHTML = "GANASTE!";
    //NUEVO
    var contenedorGif = document.getElementById('contenedorGif');
    var gifCelebracion = document.createElement('img');
    gifCelebracion.src = 'confetti.gif';
    contenedorGif.appendChild(gifCelebracion);
    //Nuevo hasta acá
  } else {
    response.innerHTML = "Perdiste";
  }

  setTimeout(() => {
    response.innerHTML = "Adivina el N° que saldrá";
    input.value = "";
    let numeros = document.querySelector("#numerosCambiando");
    numeros.innerHTML = "";
    subtitulo.innerHTML = "(Escriba un número del 1 al 10)";
  }, 2500);
}

boton.addEventListener("click", () => {
  let input = document.querySelector("#dato");
  let dato = parseInt(input.value);

  if (isNaN(dato) || dato < 1 || dato > 10) {
    alert("Este campo solo acepta números del 1 al 10");
    input.value = "";
    return;
  }

  numeroSorteado = Math.round(Math.random() * 10);
  mostrarNumeros();
});

*/