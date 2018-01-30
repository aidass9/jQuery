var fotos = ["1.jpg", "2.jpg", "3.jpg"];

var fotoActual = 0;

$(function() {
    cambiarImagen();
    setInterval(function() {
        $("img").fadeIn(2000);
        fotoActual++;
        if(fotoActual == fotos.length) {
            fotoActual = 0;
        }

        $("img").fadeOut(2000, cambiarImagen);
    }, 2000)
});


function cambiarImagen() {
    $("img").attr("src", "./img/" + fotos[fotoActual]);
    
}

