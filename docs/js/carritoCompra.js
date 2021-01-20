var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {

    // calcularTotal();

    $scope.carritoCompra = JSON.parse(localStorage.getItem(0));

    console.log($scope.carritoCompra);

    $scope.precioFinal;


    $scope.calcularTotal = function () {
        // CALCULA EL TOTAL QUE HAY QUE PAGAR
        alert('calculando');

        $scope.precioFinal = 0;

        for (let i = 0; i < $scope.carritoCompra.length; i++) {

            $scope.precioFinal = $scope.precioFinal + ($scope.carritoCompra[i].precio * $scope.carritoCompra[i].cantidad);
        }

        console.log($scope.precioFinal);
    }
    
    $scope.vaciarCarrito = function () {
        // VACIA EL CARRITO AL COMPLETO
        alert("El carrito se va ha vaciar");

        $scope.carritoCompra = "";

        location.reload();
    }

    $scope.vaciarBombon = function (index) {
        // ELIMINO EL BOMBON DEL CARRITO 
        $scope.carritoCompra.splice(index, 1);

        $scope.calcularTotal();
    }
})