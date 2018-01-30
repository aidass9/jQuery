$(function () {
    asignarFunciones();
    crearBoton();
    crearParrafos();
    crearTitulo();
    crearInputText();
    crearSelectRadio();
    crearLinea();
    botonesFinales();

});

function resaltarParrafo() {
    $("p").addClass("parrafo");

}

function noResaltarParrafo() {
    $("p").removeClass("parrafo");
}

function resaltarNoResaltar() {
    $("p").toggleClass("parrafo");
}

function asignarFunciones() {
    $("#resaltarParrafo").click(resaltarParrafo);

    $("#noResaltarParrafo").click(noResaltarParrafo);

    $("#resaltarNoResaltar").click(resaltarNoResaltar);

}

function crearBoton() {

    //     var botonResaltar = '<input type="button" value="hola">';
    //     $("body").append(botonResaltar);

    //     var botonNoResaltar = '<input type="button" value="hola">';
    //     $("body").append(botonNoResaltar);
    //  ``
}

function crearParrafos() {

    var parrafo1 = `<p>
    “HTML es el lenguaje que se emplea para el desarrollo de páginas de Internet. Este lenguaje está constituido por elementos
    que el navegador interpreta desplegándolos en la pantalla de acuerdo a su finalidad.”
    </p>`;

    var parrafo2 = `<p>
    "jQuery es una colección o librería de métodos de JavaScript. En algunas ocasiones también se le denomina framework. A grandes
    rasgos, jQuery pretende proporcionar una serie de métodos abreviados de todo lo que el lenguaje JavaScript puede
    realizar.”
    </p>`;

    $("body").append(parrafo1, parrafo2);
}

function crearTitulo() {
    var titulo = `<h1>Formulario</h1>`;

    $("body").append(titulo);
}

function crearInputText() {
    var inputText1 = `<input type="text" id="txt1">`;
    var inputText2 = `<input type="text" id="txt2">`;

    $("body").append(inputText1, "<br><br>", inputText2, "<br><br>");
}

function crearSelectRadio() {
    var sexo = `<select name="sexo">
                    <option value="hombre"> Hombre
                    <option value="mujer"> Mujer
                </select>`;

    var europa = `<select name="europa">
                    <option value="Ciudadado EU"> Ciudadano EU
                    <option value="Ciudadado EU"> Extracomunitario
                </select>`;

    $("body").append(`Sexo<br>`, sexo);

    $("body").append(`<br><br>¿Perteneciente a la EU?<br>`, europa);
}

function crearLinea() {
    var linea = `<p>Más opciones que podemos realizar con jQuery</p>`;
    $("body").append(linea);

    var imagen = `<div id="imagen"></div>`
    $("body").append(imagen);
}

function botonesFinales() {
    var botones = "";

    botones += `<input type="button" id="boton1" value="Mostrar texto de la linea bajo el formulario">`;
    botones += `<input type="button" id="boton2" value="Mostrar código HTML texto de la linea bajo el formulario">`;

    botones += `<input type="button" id="boton3" value="Mostrar código HTML de todos los párrafos">`;
    botones += `<input type="button" id="boton4" value="Mostrar contenido de las cajas de texto y selects">`;

    botones += `<input type="button" id="boton5" value="Sustituir párrafos superiores por línea">`;
    botones += `<input type="button" id="boton6" value="Anexar líneas en cabecera">`;
    botones += `<input type="button" id="boton7" value="Sustituir cajas de texto por líneas">`;

    botones += `<input type="button" id="boton8" value="Visualizar imagen">`;
    botones += `<input type="button" id="boton9" value="Eliminar imagen">`;
    botones += `<input type="button" id="boton10" value="Visualizar / Eliminar imagen">`;
    botones += `<input type="button" id="boton11" value="Imagen opaca / transparente">`;



    $("body").append(botones);

    $("#boton1").click(mostrarAlert);
    $("#boton2").click(mostrarHTMLAlerta);
    $("#boton3").click(mostrarHTMLParrafos);
    $("#boton4").click(mostrarTextSelects);
    $("#boton5").click(cambiarParrafos);
    $("#boton6").click(anyadirParrafo);
    $("#boton7").click(cambiarContenidoInputText);
    $("#boton8").click(ponerFoto);
    $("#boton9").click(eliminarFoto);
    $("#boton10").click(ponerBorrarFoto);
    $("#boton11").click(opacidadFoto);
}

function mostrarAlert() {
    alert(`Más acciones que podemos realizar con jQuery`);
}

function mostrarHTMLAlerta() {
    alert(`Más acciones que podemos realizar con <strong>jQuery</strong>`);
}

function mostrarHTMLParrafos() {
    alert($("p:lt(2)").text());
}

function mostrarTextSelects() {
    var texto1 = $("#txt1").val();
    var texto2 = $("#txt2").val();

    var sexo = $("select[name='sexo']").val();
    var europa = $("select[name='europa']").val();

    var europa = $("select[name='europa']").val();
    alert(`Caja de texto 1: ${texto1}\nCaja de texto 2: ${texto2}\nSexo: ${sexo}\nPerteneciente a la UE: ${europa}`);

}

function cambiarParrafos() {
    $("p").text("Más acciones que podemos realizar con jQuery");
}

function anyadirParrafo() {
    $("p").append(`<br>Más acciones que podemos realizar con jQuery`);
}

function cambiarContenidoInputText() {
    $("#txt1").val('Más acciones que podemos realizar con jQuery');
    $("#txt2").val('Más acciones que podemos realizar con jQuery');

}

function ponerFoto() {
    var foto = "<img src='./pokemon.jpg'>";
    $("#imagen").append(foto);
    // $("#imagen").attr("<img src='./pokemon.jpg'>");
}

function eliminarFoto() {
    $("#imagen img").remove();
}

function ponerBorrarFoto() {
    if ($("#imagen img").length === 0) {
        ponerFoto();
    }
    else {
        eliminarFoto();
    }
}

function opacidadFoto() {
    if ($("#imagen img").length === 0) {
        ponerFoto();
    }
    else {

        if ($("#imagen img").css("opacity") === "1") {
            $("#imagen img").css("opacity", "0");
        }
        else {
            $("#imagen img").css("opacity", "1");
            
        }
    }
}