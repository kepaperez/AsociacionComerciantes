var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    let id = localStorage.getItem('idTienda');
    $scope.data = ({id: id});
       
    $http.post("controller/cAllProductos.php", $scope.data).then(function (response) {

        $scope.productos = response.data.list;
       
        console.log($scope.productos);

      

    })
    $http.post("controller/cTiendaInfo.php", $scope.data).then(function (response) {

        $scope.tiendaInfo = response.data.list;
       
        console.log($scope.tiendaInfo);

      

    })

});