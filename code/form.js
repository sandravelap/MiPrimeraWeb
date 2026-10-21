//añado a los elementos que son interactivos las funciones asociadas
//esto es lo mismo que #btnComprobar en css
let btnComprobar = document.getElementById("btnComprobar");
//para añadirle una función utilizo el método addEventListener que le dice
//qué función se ejecuta cuando sucede un evento concreto
btnComprobar.addEventListener("click", comprobarRespuestas);
let divRespuestas = document.getElementById("divRespuestas");
//definimos la función comprobarRespuestas
function comprobarRespuestas(){
    divRespuestas.innerHTML = "<p>Estas son tus respuestas.</p>"
}
