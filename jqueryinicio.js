$(document).ready(function(){

    var hombre = $("#hombre");
    var mujer = $("#mujer");
    var pijama = $("#pijama");
    var trajes = $("#trajes");

    var buttonHombre = $("#mostrar-hombre");
    var buttonMujer = $("#mostrar-mujer");
    var buttonPijamas = $("#mostrar-pijamas");
    var buttonTrajes = $("#mostrar-trajes");

    buttonMujer.click(function(){

        hombre.hide();

    });

    buttonPijamas.click(function(){

        hombre.hide();
        trajes.hide();

    });


});