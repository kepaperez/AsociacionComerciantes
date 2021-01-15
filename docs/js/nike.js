// ====================================ANGULAR=======================
var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    $http.get("controller/cAllNike.php").then(function (response) {

        $scope.listaTodo = response.data.list;

        console.log($scope.listaTodo);

        $scope.calculate()
    })

    $scope.calculate = function () {

        // calcula un numero random y elige un producto
        let index = 0;
        for (index; index < $scope.listaTodo.length; index++) {

        }

        var x = Math.floor((Math.random() * index) + 1);

        console.log($scope.listaTodo[x]);

        // CARGA DE FONDOS

        // -----Principal-Random----
        $('.divPrincipal').css('background-image', 'url(img/nike/' + $scope.listaTodo[x].producto.imagen + '.jpg)');
        $('#nombrePrincipal').html($scope.listaTodo[x].producto.nombre);
        $('.Random .comprarBoton').attr('value', $scope.listaTodo[x].producto.id);

        // ----Trending----
        $('#columnTrending1').css('background-image', 'url(img/nike/' + $scope.listaTodo[7].producto.imagen + '.jpg)');
        $('#columnTrending2').css('background-image', 'url(img/nike/' + $scope.listaTodo[28].producto.imagen + '.jpg)');
        $('#columnTrending2').css('background-image', 'url(img/nike/' + $scope.listaTodo[28].producto.imagen + '.jpg)');


        // --------Mas--------
        $('.columnMas1').css('background-image', 'url(img/nike/nikeHombre.jpg)');
        $('.columnMas2').css('background-image', 'url(img/nike/nikeMujer.jpg)');
        $('.columnMas3').css('background-image', 'url(img/nike/NikeNino.jpg)');
    }

    // $scope.getAll=function(){

    //     alert("todo");

    //     $http.get("controller/cAllNike.php").then(function (response) {

    //         $scope.listaTodo = response.data.list;

    //         console.log($scope.listaTodo);
    //     })
    // }


    // declara el array 
    $scope.listaActual = [];

    $scope.loadProductList = function (tipo) {
        // Se encarga de recoger los datos dependiendo del genero
        // se limpia el array 

        alert("hasiera");
        $scope.listaActual = [];
        $scope.random = function () {
            return 0.5 - Math.random();
        }
        console.log(sex);

        for (let index = 0; index < $scope.listaTodo.length; index++) {

            if (tipo == 1) {
                if ($scope.listaTodo[index].producto.sexo == sex || $scope.listaTodo[index].producto.sexo == 'Unisex') {

                    $scope.listaActual.push($scope.listaTodo[index].producto)
                }
            }

            else if (tipo == 2) {

                if ($scope.listaTodo[index].producto.sexo == sex) {

                    $scope.listaActual.push($scope.listaTodo[index].producto)
                }
            }


        }
        console.log($scope.listaActual);
        alert("bukaera");

    }

    $scope.loadProduct = function (id) {

        $('.comprar').scrollTop(0);

        console.log(id);

        // Buscamos el producto que hemos elegido por el id 
        for (let index = 0; index < $scope.listaTodo.length; index++) {

            if ($scope.listaTodo[index].producto.id == id) {
                // cuando lo encontramos rellenamos 
                console.log($scope.listaTodo[index]);

                $('.boxImg').css('background-image', 'url(img/nike/' + $scope.listaTodo[index].producto.imagen + '.jpg)');
                $('.nombre').html($scope.listaTodo[index].producto.nombre)
                $('.genero').html($scope.listaTodo[index].producto.sexo)
                $('.descripcion').html($scope.listaTodo[index].producto.descripcion)
                $('.precio').html($scope.listaTodo[index].precio + '€')
            }

        }

    }
})

// ===================================JQUERY================================
document.addEventListener('click', function (evt) {
    if (evt.target.className === 'comprarBoton') {
        console.log(evt.target.value)

        ver('divComprar', 'loadProducto', evt.target.value);
    }
    if (evt.target.className === 'comprarBotonArt') {
        ver('divComprar', 'loadProducto', evt.target.value);
    }
}, false);

var sex = '';

function ver(where, titulo, id) {
    console.log(id);

    $("#btn1").removeClass("borde");
    $("#btn2").removeClass("borde");
    $("#btn3").removeClass("borde");
    $("#btn4").removeClass("borde");

    $('#' + id).addClass("borde");

    $('#divComprar').hide();
    $('#divPrincipal').hide();
    $('#divSecundario').hide();
    $('#divTodo').hide();
    $('#' + where).show();
    $('#titulo').html(titulo);

    if (titulo == 'loadProducto') {

        angular.element(document.getElementById('miControlador')).scope().loadProduct(id)
    }

    if (where == 'divTodo') {

        // angular.element(document.getElementById('miControlador')).scope().getAll();
    }

    if (id == 'btn2') {
        // seccion mujeres
        sex = 'Mujer';
        angular.element(document.getElementById('miControlador')).scope().loadProductList('1')
    }

    if (id == 'btn3') {
        // seccion hombres
        sex = 'Hombre';
        angular.element(document.getElementById('miControlador')).scope().loadProductList('1')
    }

    if (id == 'btn4') {
        // seccion ninos
        sex = 'Nino';
        angular.element(document.getElementById('miControlador')).scope().loadProductList('2')
    }

    if (id == 'btn4') {
        // seccion ninos
        sex = 'Nino';
        angular.element(document.getElementById('miControlador')).scope().loadProductList('2')
    }
}

function move(donde, action) {

    var btn = $(event.target);
    btn.prop('disabled', true);
    setTimeout(function () {
        btn.prop('disabled', false);
    }, 900);

    var p = document.getElementById(donde);

    var style = p.style;

    var margen = (style.marginLeft).replaceAll("vw", "");

    var newMargen = Math.trunc(margen);

    if (action == 'izquierda') {

        console.log('<');
        if (newMargen != 0 || newMargen != -0) {
            $('.' + donde).animate({ 'marginLeft': "+=32vw" });

        }

    } else if (action = 'derecha') {

        console.log('>');
        if (newMargen <= -224) {


        } else {
            $('.' + donde).animate({ 'marginLeft': "-=32vw" });
        }


    }
    console.log(newMargen);
}









