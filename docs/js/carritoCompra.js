var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {

    $scope.carritoCompra=JSON.parse(localStorage.getItem(0));

    console.log($scope.carritoCompra);
})