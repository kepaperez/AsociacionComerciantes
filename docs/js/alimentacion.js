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
        $("#direccion").css("display", "none")
        $("#direccion1").css("display", "block")
        $(" .navbar a::before").css("background", "linear-gradient(to right,  #b35a08, #ebbc7f, #d39000)")
        $(".login a::before").css("background", "linear-gradient(to right, #b11616, #ee1515, #ad0202)")
       
        
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
        $("#direccion").css("display", "block")
        $("#direccion1").css("display", "none")
        $(".navbar a::before").css("background", "linear-gradient(to right, #63b308, #b3eb7f, #78d300)") 
        $(".login a::before").css("background", "linear-gradient(to right, #16b138, #52ee15, #8ead02)")
       
        
       
    }
});
