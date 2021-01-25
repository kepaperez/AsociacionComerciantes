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
    
});
