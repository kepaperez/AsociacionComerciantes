var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {

    $scope.carritoCompra = JSON.parse(localStorage.getItem(0));

    console.log($scope.carritoCompra);

    $scope.precioFinal;
    $scope.verCarrito = true;
    $scope.verCheck = false;

    $scope.list = function () {

        window.location.href = "asociaciones.html";
    }

    $scope.calcularTotal = function () {
        // CALCULA EL TOTAL QUE HAY QUE PAGAR

        if ($scope.carritoCompra != null) {
            $scope.precioFinal = 0;

            for (let i = 0; i < $scope.carritoCompra.length; i++) {

                $scope.precioFinal = $scope.precioFinal + ($scope.carritoCompra[i].precio * $scope.carritoCompra[i].cantidad);
            }
            $scope.UpdateCarritoLocal();

        }
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

    $scope.CheckOut = function () {
        var url = "controller/cLoggedVerify.php";

        fetch(url, {
            method: 'POST', // or 'POST'
            headers: { 'Content-Type': 'application/json' }  //input data
        })
            .then(res => res.json()).then(result => {

                if (result.message === "logged") {

                    $scope.verCarrito = false;
                    $scope.verCheck = true;
                }
                else {
                    alert('Inicia sesion para poder finalizar la compra');
                }
            })
            .catch(error => console.error('Error status:', error));
    }

    $scope.comprar = function () {
        str = document.getElementById("saldo").innerHTML
        str = str.slice(0, str.length - 1)


        if ($scope.precioFinal > str) {
            alert('No hay saldo suficiente en la cuenta')
        } else {
            alert('Compra acceptada')

            $scope.saldoFinal = str - $scope.precioFinal;

            var url = "controller/cUpdateSaldo.php";
            var data = { 'saldo': $scope.saldoFinal };

            console.log(str);
            console.log($scope.precioFinal)
            
            confirm('sadfas');
            fetch(url, {
                method: 'POST', // or 'POST'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }  //input data
            })
                .then(res => res.json()).then(result => {

                    location.reload();
                    localStorage.clear();
                })
                .catch(error => console.error('Error status:', error));

        }

    }
})