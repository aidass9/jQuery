$(document).ready(function() {
    alert(`Documento cargado`);
    estilosBody();
    titulosH1();
    bordeCuadroTexto();
    elementosDeshabilitados();
    colorBotones();
    colorPrimeraColumna();
    filaUno();
    filaCinco();
    filasPares();
    enlacesTabla();
});

$(function() {
    alert(`¡Bienvenido!`);

});

function estilosBody() {
    $("body").css("width", "50%");
    $("body").css("margin", "0 auto");
   
}

function titulosH1() {
    $("h1:not(:first-child").css("color", "lightblue");
    $("h1:not(:first-child").css("background-color", "yellow")
    
}

function bordeCuadroTexto() {
    $("input[type='text']").css("border", "1px solid red");
}

function elementosDeshabilitados() {
    $("input[type='text']:disabled").css("background-color", "lightgreen");
    $("select[name='continente']:disabled").css("background-color", "lightgreen");
}

function colorBotones() {
    $("input[type='button']").css("background-color", "lightpink");
}

function colorPrimeraColumna() {
    $("td:first-child").css("background-color", "purple");
}

function filaUno() {
    $("tr:first-child").css("background-color", "orange");

}

function filaCinco() {
    $("tr:nth-child(5)").css("background-color", "silver");
}

function filasPares() {
    $("tr:nth-child(even)").css("background-color", "olive")
}

function enlacesTabla() {
    $("a[href]").css("text-decoration", "none");
}

