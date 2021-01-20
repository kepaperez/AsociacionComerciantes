var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    let id = localStorage.getItem('idTienda');
    $scope.data = ({id: id});
       
    $http.post("controller/cAllProductos.php", $scope.data).then(function (response) {

        $scope.productos = response.data.list;
       
        console.log($scope.productos);

      

    })



    // let id = localStorage.getItem('idTienda');
    // loadProductos(id);

    // $scope.productos=[];
    // function loadProductos(id) {

    //     var url = "controller/cAllProductos.php";
    //     var data = { 'id': id };

    //     fetch(url, {
    //         method: 'POST', // or 'POST'
    //         body: JSON.stringify(data), // data can be `string` or {object}!
    //         headers: { 'Content-Type': 'application/json' } //input data

    //     })
    //         .then(res => res.json()).then(result => {
                
    //             $scope.productos = result.list;
    //             console.log($scope.productos);
                

    //         })
    //         .catch(error => console.error('Error status:', error));
    // };
 
});