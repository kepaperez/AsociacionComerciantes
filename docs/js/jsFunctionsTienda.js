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


    $scope.abrirSociedad = function (item) {
        console.log(item);
        switch (item.tipo) {
            case 'Moda':
                console.log('moda');
                if (item.id == 2) {
                    window.location.href = "footlocker.html";
                } else {
                    window.location.href = "nike.html";
                }

                break;
            case 'Alimentacion':
                console.log('alimetacion');
                //id= item.id;
                var idTienda= item.id;
                //var id = $(this).attr("id");
                localStorage.setItem('idTienda', idTienda);

                window.location.href = "alimentacion.html";
                break;
            case 'Cosmetica':
                console.log('cosmetica');
                var idTienda= item.id;
                // var idTienda = $(this).attr("idTienda");
                localStorage.setItem('idTienda', idTienda);

                window.location.href = "cosmetica.html";
                break;

            default:
                console.log('Lo lamentamos, por el momento no disponemos ');
        }
    };

});