$(function() {
    datePicker();
    tabs();
    accordion();
})

function datePicker() {
    $("#campofecha").datepicker({
        showOn: 'both',
        changeYear: true,
        numberOfMonths: 3,
        onSelect: (textoFecha, objDatepicker) => {
            $("#campofecha").html(`Fecha seleccionada ${textoFecha}`);
        }
    });
}

function tabs() {
    $("#tabs").tabs({ collapsible: true });
}


function accordion() {
    $("#accordion").accordion({ collapsible: true });
}

function botonesDialogos() {
    $("#mostrarDialog").click(() => $("#dialog").dialog("open"));
}
