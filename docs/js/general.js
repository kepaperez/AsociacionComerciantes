//    // ==============ANGULAR================
// var miApp = angular.module('miApp', []);
// miApp.controller('miControlador', function ($scope) {

//     $scope.CarritoCompra=[];

//     $scope.añadirCarrito= function(value){

//         alert('producto con id :'+value+' añadido');

//         for (let i = 0; i < array.length; i++) {


//         }
//     }
// })

document.addEventListener('click', function (evt) {
    if (evt.target.className === 'añadirBtn') {
        // angular.element(document.getElementById('miControlador')).scope().añadirCarrito(evt.target.value);
        añadirCarrito(evt.target.value);
    }
}, false);

var carritoCompra = [''];
function añadirCarrito(value) {

    alert('producto con id :' + value + ' añadido');


    for (let i = 0; i < carritoCompra.length; i++) {
        
        if (carritoCompra[i].producto.id_productoTienda==value) {

            // EL PRODUCTO YA ESTA EN EL CARRITO 
            alert('ESTA');
         }

        else{

            // EL PRODUCTO NO ESTA EN EL CARRITO TODAVIA
            
            alert('NO ESTA');
        }
    }
}
