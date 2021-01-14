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

        $('#divPrincipalImg').css('background-image', 'url(img/nike/' + $scope.listaTodo[x].producto.imagen + '.jpg)');
        $('#nombrePrincipal').html($scope.listaTodo[x].producto.nombre);
    }



    // $scope.getAll=function(){

    //     alert("todo");

    //     $http.get("controller/cAllNike.php").then(function (response) {

    //         $scope.listaTodo = response.data.list;

    //         console.log($scope.listaTodo);
    //     })
    // }

    // declara el array 
    $scope.listaActual=[];

    $scope.loadProduct =function(tipo) {
        // Se encarga de recoger los datos dependiendo del genero
        // se limpia el array 
        
        $scope.listaActual=[];
    
        console.log(sex);
    
        for (let index = 0; index < $scope.listaTodo.length; index++) {
            
            if (tipo == 1){
                if ($scope.listaTodo[index].producto.sexo == sex || $scope.listaTodo[index].producto.sexo == 'Unisex') {
    
                    $scope.listaActual.push($scope.listaTodo[index].producto)  
                }
            }

            else if(tipo== 2) {

                if ($scope.listaTodo[index].producto.sexo == sex) {
    
                    $scope.listaActual.push($scope.listaTodo[index].producto)  
                }
            }
            
            
        }
        console.log($scope.listaActual);
    }

})


// ===================================JQUERY================================
document.addEventListener('click', function (evt) {
    if (evt.target.className === 'comprarBoton') {
        ver('divComprar');
    }
    if (evt.target.className === 'comprarBotonArt') {
        ver('divComprar');
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

    if (where == 'divTodo') {

        // angular.element(document.getElementById('miControlador')).scope().getAll();
    }


    if (id == 'btn2') {
        // seccion mujeres
        sex = 'Mujer';
        angular.element(document.getElementById('miControlador')).scope().loadProduct('1')
    }

    if (id == 'btn3') {
        // seccion hombres
        sex = 'Hombre';
        angular.element(document.getElementById('miControlador')).scope().loadProduct('1')
    }

    if (id == 'btn4') {
        // seccion ninos
        sex = 'Nino';
        angular.element(document.getElementById('miControlador')).scope().loadProduct('2')
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






