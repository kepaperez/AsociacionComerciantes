var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {

    $scope.carritoCompra=localStorage.getItem(0);

    console.log($scope.carritoCompra);
})