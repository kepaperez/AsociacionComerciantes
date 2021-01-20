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
    $scope.data = ({id: id});

    $http.post("controller/cAllProductos.php", $scope.data).then(function (response) {

        $scope.productos = response.data.list;

        console.log($scope.productos);
})
});