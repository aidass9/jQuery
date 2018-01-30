$(function() {
    $("#toggle").click(botonToggle);

    $("#effect").click(botonEffect);
    $("#anyadirClase").click(botonAnyadirClase);

})

function botonToggle() {
    $("p").text("Aplicando efecto toggle")
    $(".rectangulo").toggle(2000, "swing", () => $("p").text("Efecto toggle finalizado"));
    

}

function botonEffect() {
    $("p").text("Aplicando efecto Effect")
    if($(".rectangulo").css("display") == "none") {
        $(".rectangulo").toggle(3000, "swing");
    }
    
    $(".rectangulo").animate({"margin-left":'+=50'}, 2000);
    
    $(".rectangulo").animate({"margin-left":'0'}, 2000, () => $("p").text("Efecto effect finalizado"));
    
}

function botonAnyadirClase() {
    $(".divOculto").show();


    $(".divOculto").css("width", "300");
    $(".divOculto").css("height", "300");
    $(".divOculto").toggle(3000, "swing");
}