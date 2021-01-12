document.addEventListener('click', function (evt) {
    if (evt.target.className === 'comprarBoton') {
        ver('divComprar');
    }
}, false);

function ver(where, titulo) {
    $('#divComprar').hide();
    $('#divPrincipal').hide();
    $('#divSecundario').hide();
    $('#divTodo').hide();
    $('#' + where).show();    
    $('#titulo').html(titulo);

}

function move(donde, action) {

    var p = document.getElementById(donde);

    var style = p.style;
    
    var margen = (style.marginLeft).replaceAll("vw", "");

    var newMargen = Math.trunc(margen);
    
    if (action == 'izquierda') {

        console.log('<');
        if (newMargen != 0 || newMargen!=-0) {
            $('.' + donde).animate({ 'marginLeft': "+=32vw" });
           
        }


    } else if (action = 'derecha') {

        console.log('>');
        if (newMargen <= -224) {
            
            
        }else{
            $('.' + donde).animate({ 'marginLeft': "-=32vw" });
        }


    }
    console.log(newMargen);
}