$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    })

});

var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    let id = localStorage.getItem('idTienda');
    alert(id);
    loadProductos(id);

    $scope.productos=[];
    function loadProductos(id) {

        var url = "controller/cAllProductos.php";
        var data = { 'id': id };

        fetch(url, {
            method: 'POST', // or 'POST'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' } //input data

        })
            .then(res => res.json()).then(result => {
                
                $scope.productos = result.list;
                console.log($scope.productos);
                

            })
            .catch(error => console.error('Error status:', error));
    };
});
