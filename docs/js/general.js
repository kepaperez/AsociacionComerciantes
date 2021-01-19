var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    // ==============ANGULAR================
})

document.addEventListener('click', function (evt) {
    if (evt.target.className === 'comprarBoton') {
        ver('divComprar', 'loadProducto', evt.target.value);
    }
    if (evt.target.className === 'comprarBotonArt') {
        ver('divComprar', 'loadProducto', evt.target.value);
    }
}, false);

