$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    })

});

var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    let id = localStorage.getItem('idTienda');
    $scope.data = ({ id: id });

    $http.post("controller/cAllProductos.php", $scope.data).then(function (response) {

        $scope.productos = response.data.list;

        console.log($scope.productos);
    })
    if (id == 3) {
        //Fruteria
        $("#texto1").css("display", "none")
        $("#texto").css("display", "block")
        $("body").css("background-color", " rgb(204, 250, 162)")
        $(".menu").css("background-color", "rgb(162, 243, 129)")
        $(".info").css("background-color", "#8d9733")
        $(".card").css("background-color", "rgb(209, 241, 136)")
        $(".cardTitulo").css("color", "#65d806")
        $(".cardTitulo").css("border-bottom", "1px solid #53d806")
        $("#direccion1").css("display", "none")
        $("#direccion").css("display", "block")
        
       
        
    } else {
        //Panaderia
        $("#texto1").css("display", "block")
        $("#texto").css("display", "none")
        $("body").css("background-color", "rgb(223, 174, 100)")
        $(".menu").css("background-color", "rgb(250, 219, 162)")
        $(".info").css("background-color", "#976d33")
        $(".card").css("background-color", "rgb(241, 199, 136)")
        $(".cardTitulo").css("color", "#d84206")
        $(".cardTitulo").css("border-bottom", "1px solid #d84206")
        $("#direccion1").css("display", "block")
        $("#direccion").css("display", "none")
        
       
    }
});
