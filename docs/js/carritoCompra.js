var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {
    
    $scope.carritoCompra = JSON.parse(localStorage.getItem(0));

    console.log($scope.carritoCompra);

    $scope.precioFinal;



    $scope.list= function(){

        window.location.href = "asociaciones.html";
    }

    $scope.calcularTotal = function () {
        // CALCULA EL TOTAL QUE HAY QUE PAGAR
      

        $scope.precioFinal = 0;

        for (let i = 0; i < $scope.carritoCompra.length; i++) {

            $scope.precioFinal = $scope.precioFinal + ($scope.carritoCompra[i].precio * $scope.carritoCompra[i].cantidad);
        }

        $scope.UpdateCarritoLocal();
    }

    $scope.vaciarCarrito = function () {
        // VACIA EL CARRITO AL COMPLETO
        alert("El carrito se va ha vaciar");

        $scope.carritoCompra = "";
        $scope.UpdateCarritoLocal();
        location.reload();
    }

    $scope.vaciarBombon = function (index) {
        // ELIMINO EL BOMBON DEL CARRITO 
        $scope.carritoCompra.splice(index, 1);
        $scope.calcularTotal();
        $scope.UpdateCarritoLocal();
    }

    $scope.UpdateCarritoLocal = function () {
        console.log($scope.carritoCompra);
        localStorage.clear();
        localStorage.removeItem(0);
        localStorage.setItem(0, angular.toJson($scope.carritoCompra));
        
    }

})