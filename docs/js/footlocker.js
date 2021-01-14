document.addEventListener('click', function (evt) {
    if (evt.target.className === 'comprarBoton') {
        ver('divComprar');
    }
    if (evt.target.className === 'comprarBotonArt') {
        ver('divComprar');
    }
}, false);

function ver(where, titulo, id) {
    console.log(id);

    $("#btn1").removeClass("borde");
    $("#btn2").removeClass("borde");
    $("#btn3").removeClass("borde");
    $("#btn4").removeClass("borde");

    $('#' + id).addClass("borde");

    $('#divComprar').hide();
    $('#divPrincipal').hide();
    $('#divSecundario').hide();
    $('#divTodo').hide();
    $('#' + where).show();
    $('#titulo').html(titulo);


}

function move(donde, action) {
    
    var btn = $(event.target);    
    btn.prop('disabled', true);
    setTimeout(function () {
        btn.prop('disabled', false);
    }, 900);

    var p = document.getElementById(donde);

    var style = p.style;

    var margen = (style.marginLeft).replaceAll("vw", "");

    var newMargen = Math.trunc(margen);

    if (action == 'izquierda') {

        console.log('<');
        if (newMargen != 0 || newMargen != -0) {
            $('.' + donde).animate({ 'marginLeft': "+=32vw" });

        }

    } else if (action = 'derecha') {

        console.log('>');
        if (newMargen <= -63) {


        } else {
            $('.' + donde).animate({ 'marginLeft': "-=32vw" });
        }


    }
    console.log(newMargen);
}