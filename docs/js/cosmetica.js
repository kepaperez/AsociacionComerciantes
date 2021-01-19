var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    let idTienda = localStorage.getItem('idTienda');
    loadProductos(idTienda);


    function loadProductos(idTienda) {

        var url = "controller/cAllProductos.php";
        var data = { 'idTienda': idTienda };

        fetch(url, {
            method: 'POST', // or 'POST'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' } //input data

        })
            .then(res => res.json()).then(result => {
                productos = result.list;
                console.log(productos);

            })
            .catch(error => console.error('Error status:', error));
    };
});