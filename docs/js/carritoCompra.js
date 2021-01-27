var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope) {

    $scope.carritoCompra = JSON.parse(localStorage.getItem(0));

    $scope.precioFinal;
    $scope.verCarrito = true;
    $scope.verCheck = false;
    $scope.btnCheck = true;
    $scope.btnEdit = false;

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

    $scope.vaciarProducto = function (index) {
        // ELIMINO EL BOMBON DEL CARRITO 
        $scope.carritoCompra.splice(index, 1);
        $scope.calcularTotal();
        $scope.UpdateCarritoLocal();
    }

    $scope.UpdateCarritoLocal = function () {

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

                    $scope.verCheck = true;
                    $scope.btnCheck = false;
                    $scope.btnEdit = true;
                    $(".cantidadCarrito").prop("disabled", true);
                    $(".quitarBtn").prop("disabled", true);

                }
                else {
                    alert('Inicia sesion para poder finalizar la compra');
                }
            })
            .catch(error => console.error('Error status:', error));
    }

    $scope.editarCarrito = function () {
        $scope.verCheck = false;
        $scope.btnCheck = true;
        $scope.btnEdit = false;
        $(".cantidadCarrito").prop("disabled", false);
        $(".quitarBtn").prop("disabled", false);

    }

    $scope.actualizarUser = function () {

        var thisnombre = document.getElementById('nombreCheckout').value;
        var thisapellido = document.getElementById('apellidoCheckout').value;
        var thisusuario = document.getElementById('usuarioCheckout').value;
        var thistlf = document.getElementById('tlfCheckout').value;
        var thisDirec = document.getElementById('direccionCheckout').value;
        var thisId = document.getElementById('idUser').dataset.id;

        var url = "controller/cUpdateUser.php";

        var data = ({
            'nombre': thisnombre,
            'apellido': thisapellido,
            'usuario': thisusuario,
            'telefono': thistlf,
            'direccion': thisDirec,
            'id': thisId
        })
        alert('reinicia la sesion');

        fetch(url, {
            method: 'POST', // or 'POST'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' }  //input data

        })
            .then(res => res.json()).then(result => {


            })
            .catch(error => console.error('Error status:', error));
    }

    $scope.comprar = function () {
        str = document.getElementById("saldo").innerHTML
        str = str.slice(0, str.length - 1)

        if ($scope.precioFinal > str) {
            alert('No hay saldo suficiente en la cuenta')
        } else {

            //$scope.saldoFinal = str - $scope.precioFinal;

            // var url = "controller/cUpdateSaldo.php";
            //var data = { 'saldo': $scope.saldoFinal };

            // fetch(url, {
            //     method: 'POST', // or 'POST'
            //     body: JSON.stringify(data), // data can be `string` or {object}!
            //     headers: { 'Content-Type': 'application/json' }  //input data
            // })
            //     .then(res => res.json()).then(result => {

            //         location.reload();
            //         localStorage.clear();
            //     })
            //     .catch(error => console.error('Error status:', error));

            // ======================================================================

            var local = JSON.parse(localStorage.getItem(0));

            var carritoFinal = ({});

            var respuesta = confirm('quiere continuar?');

            if (respuesta == true) {
                alert('Compra acceptada')
                for (let i = 0; i < local.length; i++) {
                    console.log(local[i])

                    carritoFinal[i] = ({
                        'stock': local[i].stock,
                        'unidades': local[i].cantidad,
                        'idProductoTienda': local[i].idProductoTienda
                    })
                }
                console.log(carritoFinal);

                fetch("controller/cUpdateStock.php", {
                    method: 'POST',
                    body: JSON.stringify(carritoFinal), // data can be `string` or {object}!
                    headers: { 'Content-Type': 'application/json' }  //input data
                })
                    .then(res => res.json()).then(result => {

                        // location.reload();
                        localStorage.clear();
                    })
                    .catch(error => console.error('Error status:', error));
            }

        }

    }
})