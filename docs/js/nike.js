// ====================================ANGULAR=======================
var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {

    $scope.data = ({id: 1 });

    $http.post("controller/cAllProductos.php", $scope.data).then(function (response) {

        $scope.listaTodo = response.data.list;

        console.log(response.data);

        $scope.calculate();

        

    })

    $scope.calculate = function () {

        // calcula un numero random y elige un producto
        let index = 0;
        for (index; index < $scope.listaTodo.length; index++) { }
        var x = Math.floor((Math.random() * index) + 1);


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
    // declara el array 
    $scope.listaActual = [];

    $scope.loadProductList = function (tipo) {
        // Se encarga de recoger los datos dependiendo del genero
        // se limpia el array 

        //Genera un numero randgit om para que se ordene la seccion Variado
        $scope.listaActual = [];
        $scope.random = function () {
            return 0.5 - Math.random();

        }


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
        $scope.$apply();
    }

    $scope.loadProduct = function (id) {
        // Buscamos el producto que hemos elegido por el id 
        for (let index = 0; index < $scope.listaTodo.length; index++) {


            if ($scope.listaTodo[index].producto.id == id) {
                // cuando lo encontramos rellenamos 

                $('.boxImg').css('background-image', 'url(img/nike/' + $scope.listaTodo[index].producto.imagen + '.jpg)');
                $('.nombre').html($scope.listaTodo[index].producto.nombre)
                $('.genero').html($scope.listaTodo[index].producto.sexo)
                $('.descripcion').html($scope.listaTodo[index].producto.descripcion)
                $('.precio').html($scope.listaTodo[index].precio + '€')

                $('.añadirBtn').attr('data-thisId_ProductoTienda',$scope.listaTodo[index].id_productoTienda)
                $('.añadirBtn').attr('data-thisIdProducto',$scope.listaTodo[index].id_producto)
                $('.añadirBtn').attr('data-thisIdTienda',$scope.listaTodo[index].id_tienda)
                $('.añadirBtn').attr('data-thisNombre',$scope.listaTodo[index].producto.nombre)
                $('.añadirBtn').attr('data-thisImg',$scope.listaTodo[index].producto.imagen)
                $('.añadirBtn').attr('data-thisMarca',$scope.listaTodo[index].producto.marca)
                $('.añadirBtn').attr('data-thissexo',$scope.listaTodo[index].producto.sexo)
                $('.añadirBtn').attr('data-thisPrecio',$scope.listaTodo[index].precio)
                $('.añadirBtn').attr('data-thisStock',$scope.listaTodo[index].stock)

                $('.añadirBtn').attr('data-thisTienda','Nike');

            }

        }

    }
})

// ===================================JQUERY================================
document.addEventListener('click', function (evt) {
    if (evt.target.className === 'comprarBoton') {
        ver('divComprar', 'loadProducto', evt.target.value);
    }
    if (evt.target.className === 'comprarBotonArt') {
        ver('divComprar', 'loadProducto', evt.target.value);
    }

}, false);

var sex = '';

function ver(where, titulo, id) {

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
        if (newMargen != 0 || newMargen != -0) {
            $('.' + donde).animate({ 'marginLeft': "+=32vw" });

        }

    } else if (action = 'derecha') {
        if (newMargen <= -224) {


        } else {
            $('.' + donde).animate({ 'marginLeft': "-=32vw" });
        }


    }

}