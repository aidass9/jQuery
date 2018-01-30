var contador = 0;

$(function() {
    animacion();
});

function animacion() {
    contador++;
    $("div").show(1000, function() {cambiarTexto("mostrar el cubo", 10)});
    $("div").animate({left:'+=250'}, 1000,  function() {cambiarTexto("desplazar el cubo a la derecha", 9)});
    $("div").slideToggle(1000,  function() {cambiarTexto("ocultar cubo", 8)});
    $("div").slideToggle(1000,  function() {cambiarTexto("mostrar el cubo", 7)});
    $("div").animate({left:'-=250'}, 1000,  function() {cambiarTexto("desplazar el cubo a la izquierda", 6)});
    $("div").hide(2000,  function() {cambiarTexto("ocualtar el cubo", 4)});
    $("div").show(2000,  function() {cambiarTexto("mostrar el cubo", 2)});
    $("div").slideUp(2000, reiniciar);
}

function cambiarTexto(texto, tiempo) {
    $("p").text(`Esta es la vuelta ${contador} y acaba de hacer: ${texto}. Faltan ${tiempo} segundos.`);
}

function reiniciar() {
    cambiarTexto("ocultar el cubo", 0);
    animacion();
}


// $(() => {

// })