var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {


    loadTiendas();
    $scope.tiendas = [];

    function loadTiendas() {

        var url = "controller/cGetAllTiendas.php";

        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json()).then(result => {
                console.log(result.list);
                $scope.tiendas = result.list;


            })
            .catch(error => console.error('Error status:', error));
    };
});