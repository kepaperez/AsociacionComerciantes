

function show(where, titulo) {

    $('#divPrincipal').hide();
    $('#divSecundario').hide();
    $('#' + where).show();
    $('#titulo').html(titulo);

}


// // Cuando clickamos el boton de la izquierda
// function left(where, i) {
//     console.log(i1);

//     console.log('izquierda');

//     if (i1 == 0 && i2 == 0 && i3 == 0) {
//         console.log('no');
//     } else {
//         console.log('si');
//         $('.' + where).animate({ 'marginLeft': "+=31vw" });
//         restar(i);

//     }
// }

// // cuando clickamos el boton de la derecha
// function right(where, i) {
//     console.log(i1);

//     console.log('derecha');

//     if (i1 == 7 && i2 == 7 && i3 == 7) {
//         console.log('no');
//     } else {

//         console.log('si');
//         $('.' + where).animate({ 'marginLeft': "-=31vw" });
//         sumar(i);
//     }
// }


// function restar(i) {

//     if (i == 1) { i1--; }

//     else if (i == 2) { i2--; }

//     else if (i == 3) { i3--; }
// }


// function sumar(i) {
//     if (i == 1) { i1++; }

//     else if (i == 2) { i2++; }

//     else if (i == 3) { i3++; }
// }


var max = 7;

var variable;



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