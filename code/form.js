//añado a los elementos que son interactivos las funciones asociadas
//esto es lo mismo que #btnComprobar en css
let btnComprobar = document.getElementById("btnComprobar");
//para añadirle una función utilizo el método addEventListener que le dice
//qué función se ejecuta cuando sucede un evento concreto
btnComprobar.addEventListener("click", comprobarRespuestas);
let divRespuestas = document.getElementById("divRespuestas");
//definimos la función comprobarRespuestas
function comprobarRespuestas(){
    // al utilizar el = machaco todo lo que pueda haber dentro del div
    divRespuestas.innerHTML = "<p>Estas son tus respuestas: </p>"
    //almaceno en una variable los elementos radio con namelist
    let respuestasList = document.getElementsByName("list");
    // a partir de aquí añado texto con +=
    //compruebo qué elemento radio ha marcado el usuario
    if (respuestasList[0].checked){
        divRespuestas.innerHTML += "<p>Gracias por susbscribirte.</p>"
    }
    else if(respuestasList[1].checked){
        divRespuestas.innerHTML += "<p>¿Estás seguro?.</p>"
    }
    else{
        divRespuestas.innerHTML += "<p>Venga anímate que es gratis.</p>"
    }
    //variable donde almaceno las respuestas 
    let rLMs = document.getElementsByName("lenguajes");
    if (rLMs[1, 2].checked && !rLMs[0].checked && !rLMs[3].checked){
        divRespuestas.innerHTML += "<p>Respuesta correcta</p>";
    }else{
        divRespuestas.innerHTML += "<p>Respuesta INcorrecta</p>";
    }
    
}
