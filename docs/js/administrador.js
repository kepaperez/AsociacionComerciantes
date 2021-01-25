var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    loadTiendas();



    function loadTiendas() {

        var url = "controller/cGetAllTiendas.php";
        $http({
            method: "POST",
            url: "controller/cGetAllTiendas.php"
        })
            .success(function (result) {

                console.log(result.list);
                $scope.tiendas = result.list;
            });
    }
    //El boton
    // $("#enviar").click(function () {

    //     alert("La tienda se va a actualizar");

    //     updateTienda();
    // });
    function updateTienda(){
        var nombre = $("#nombre").val()
        var direccion = $("#direccion").val()
        var horario = $("#horario").val()
        var imagen = $("#imagen").val()
        var tipo = $("#tipo").val()
        var imgBanner = $("#imgBanner").val()


        var url = "../controller/cUpdateUser.php";
        var data = { 'nombre': nombre, 'direccion': direccion, 'horario': horario, 'imagen': imagen, 'tipo': tipo, 'imgBanner': imgBanner};

        fetch(url, {
            method: 'POST', // or 'POST'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' } //input data
        })
    
            .catch(error => console.error('Error status:', error));
    }
     //El boton
    // $("#enviar").click(function () {

    //     alert("El usuario se va a actualizar");

    //     updateUsuario();
    // });
    function updateUsuario(){
        var nombre = $("#nombre").val()
        var apellido = $("#apellido").val()
        var dni = $("#dni").val()
        var admin = $("#admin").val()
        var telefono = $("#telefono").val()
        var nombreUsuario = $("#nombreUsuario").val()
        var contrasenaUsuario = $("#contrasenaUsuario").val()
        var direccion = $("#direccion").val()
        var saldo = $("#saldo").val()


        var url = "../controller/cUpdateUser.php";
        var data = { 'nombre': nombre, 'apellido':apellido,'dni': dni, 'admin':admin,  'telefono': telefono, 'nombreUsuario': nombreUsuario, 'contrasenaUsuario': contrasenaUsuario, 'direccion': direccion, 'saldo': saldo};

        fetch(url, {
            method: 'POST', // or 'POST'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' } //input data
        })
    
            .catch(error => console.error('Error status:', error));
    }
});
