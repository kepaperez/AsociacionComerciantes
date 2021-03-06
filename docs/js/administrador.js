var miApp = angular.module('miApp', []);
miApp.controller('miControlador', function ($scope, $http) {



    loggedVerify();
    loadTiendas();

    function loggedVerify() {
        var url = "controller/cLoggedVerify.php";

        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json()).then(result => {

                if (result.message === "logged") {

                    console.log(result.user);

                    user = result.user;
                    if (user.admin != 0) {
                        $(".try").css("display", "none");
                        console.log(user);
                        $("#" + user.idTienda + "").css("display", "block");
                    } else {
                        $(".try").css("display", "block");
                    }

                }
            })
            .catch(error => console.error('Error status:', error));


    }
    function loadTiendas() {

        var url = "controller/cGetAllTiendas.php";
        $http({
            method: "POST",
            url: "controller/cGetAllTiendas.php"
        })
            .success(function (result) {

                console.log(result.list);

                tiendas = result.list;


                var newRow = "<h2>TIENDAS</h2>";
                newRow += "<table>";
                newRow += "<tr></tr>";

                for (let i = 0; i < tiendas.length; i++) {

                    newRow += "<tr class='try' id ='" + tiendas[i].id + "' >" + "<td> <input id ='nombre" + tiendas[i].id + "' value ='" + tiendas[i].nombre + "'></td>" +
                        "<td><input id ='direccion" + tiendas[i].id + "' value ='" + tiendas[i].direccion + "'></td>" +
                        "<td><input id ='horario" + tiendas[i].id + "' value ='" + tiendas[i].horario + "'></td>" +
                        "<td><input id ='tipo" + tiendas[i].id + "' value ='" + tiendas[i].tipo + "'></td>" +
                        "<td><input id ='imagen" + tiendas[i].id + "' value ='" + tiendas[i].imagen + "'></td>" +
                        "<td><input id ='imgBanner" + tiendas[i].id + "' value ='" + tiendas[i].imgBanner + "'></td>" +

                        /* "<td><button type='button' class='btn btn-dark' onclick=deleteUser(" + usuarios[i].id + ")>X</button></td>" +*/

                        "<td class='m-2'><button type='button' class='btn btn-outline-success m-2' onclick=updateTienda('" + tiendas[i].id + "') >" +
                        "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-cloud-upload-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                        "<path fill-rule='evenodd' d='M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z' />" +
                        "</svg>" +
                        "</button></td>" +

                        "<td class='m-2'><button type='button' class='btn btn-outline-danger m-2' onclick=productosDeTienda('" + tiendas[i].id + "') >EditarProductos </button></td>" +


                        /*"<td><button type='button' class='btn btn-success' onclick=UpdateUserAdmin(" + usuarios[i].id + ")>+</button></td>" +*/
                        "</tr>";
                }
                newRow += "</table>";

                $('.container1').html(newRow);



            });
    }


});

function updateTienda(id) {
    alert("La tienda se va a actualizar");
    var id = id;
    var nombre = $("#nombre" + id).val()
    var direccion = $("#direccion" + id).val()
    var horario = $("#horario" + id).val()
    var imagen = $("#imagen" + id).val()
    var tipo = $("#tipo" + id).val()
    var imgBanner = $("#imgBanner" + id).val()


    var url = "controller/cUpdateTienda.php";
    var data = { 'id': id, 'nombre': nombre, 'direccion': direccion, 'horario': horario, 'imagen': imagen, 'tipo': tipo, 'imgBanner': imgBanner };

    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' } //input data
    })

        .catch(error => console.error('Error status:', error));
    location.reload();
}


function productosDeTienda(id) {



    /*console.log(idEquipo);*/

    var url = "controller/cAllProductos.php";
    var data = { 'id': id };

    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' }  //input data

    })
        .then(res => res.json()).then(result => {
            productos = result.list;

            console.log(productos);

            var newRow = "<h2>Productos de " + productos[0].shop.nombre + "</h2>";
            newRow += "<table>";
            newRow += "<tr><th>Nombre</th><th>Stock</th><th>Imagen</th><th>Descrip</th><th>Marca</th><th>Sexo</th><th>Tipo</th></tr>";

            for (let i = 0; i < productos.length; i++) {

                newRow += "<tr>" + "<td> <input id ='nombre" + productos[i].id_producto + "' value ='" + productos[i].producto.nombre + "'></td>" +
                    "<td><input id ='stock" + productos[i].id_producto + "' value ='" + productos[i].stock + "'class=' InputPequeño'></td>" +
                    "<td><input id ='imagen" + productos[i].id_producto + "' value ='" + productos[i].producto.imagen + "'></td>" +
                    "<td><input id ='descripcion" + productos[i].id_producto + "' value ='" + productos[i].producto.descripcion + "'></td>" +
                    "<td><input id ='marca" + productos[i].id_producto + "' value ='" + productos[i].producto.marca + "' class=' InputPequeño'></td>" +
                    "<td><input id ='sexo" + productos[i].id_producto + "' value ='" + productos[i].producto.sexo + "' class=' InputPequeño'></td>" +
                    "<td><input id ='tipo" + productos[i].id_producto + "' value ='" + productos[i].producto.tipo + "'></td>" +


                    /* "<td><button type='button' class='btn btn-dark' onclick=deleteUser(" + usuarios[i].id + ")>X</button></td>" +*/

                    "<td class='m-2'><button type='button' class='btn btn-outline-success m-2' onclick=updateProducto('" + productos[i].id_producto + "') >" +
                    "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-cloud-upload-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill-rule='evenodd' d='M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z' />" +
                    "</svg>" +
                    "</button></td>" +

                    "<td class='m-2'><button type='button' class='btn btn-outline-danger m-2' onclick=eliminarProducto('" + productos[i].id_producto + "') >Eliminar</button></td>" +
                    /*"<td><button type='button' class='btn btn-success' onclick=UpdateUserAdmin(" + usuarios[i].id + ")>+</button></td>" +*/
                    "</tr>";
            }
            newRow += "</table>";

            $('.container2').html(newRow);
            cargarComboProductos(id,productos[0].shop.nombre);
            //////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////
        })
        .catch(error => console.error('Error status:', error));
};
function loadProductosTienda() {
    var url = "controller/cAllProductosTienda.php";


    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' }  //input data

    })
}
function updateProducto(id) {
    var id = id;
    var nombre = $("#nombre" + id).val()
    var imagen = $("#imagen" + id).val()
    var descripcion = $("#descripcion" + id).val()
    var marca = $("#marca" + id).val()
    var sexo = $("#sexo" + id).val()
    var tipo = $("#tipo" + id).val()



    var url = "controller/cUpdateProducto.php";
    var data = { 'id': id, 'nombre': nombre, 'imagen': imagen, 'descripcion': descripcion, 'marca': marca, 'sexo': sexo, 'tipo': tipo };

    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' } //input data
    })

        .catch(error => console.error('Error status:', error));
        location.reload();
}
function eliminarProducto(id) {
    var id = id;

    var url = "controller/cEliminarProducto.php";
    var data = { 'id': id };

    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' } //input data
    })

        .catch(error => console.error('Error status:', error));
        location.reload();
}

function cargarComboProductos(idDenda,dendaIzena) {
   

    var url = "controller/cAllProductoCombo.php";
    fetch(url, {
        method: 'POST', // or 'POST
        headers: { 'Content-Type': 'application/json' }  //input data

    })
        .then(res => res.json()).then(result => {

            console.log(result.list);

            productos = result.list;


            var newRow = "<h2>Insertar producto a la tienda</h2>";
            newRow += "<table>";
            newRow += "<tr><th>Producto</th><th>Stock</th><th>Precio</th><th>Tienda</th></tr>";

            newRow += "<tr>" + "<td><form action=''>" +
                "<select name='productoTienda' id='comboProducto'>";
            for (let i = 0; i < productos.length; i++) {
                newRow += "<option value='" + productos[i].id + "'> " + productos[i].id + " - " + productos[i].nombre + "</option>";
            }
            newRow += "</select>" +
                "<br><br>" +
                "</form></td>" +
                "<td><input id ='stock' value =''></td>" +
                "<td><input id ='precio' value =''></td>" +
                "<td><input id ='denda' value ='" + dendaIzena + "' disabled></td>" +
                "<td class='m-2'><button type='button' class='btn btn-success m-2' onclick=anadirATienda('" + idDenda + "') >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-cloud-upload-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z' />" +
                "</svg>" +
                "</button></td>" +
                
                "</tr>";

            newRow += "</table>";

            $('.container3').html(newRow);


        });
        
}
function anadirATienda(zenb) {
   
    var id_producto = $('#comboProducto').val();
    var stock = $("#stock").val();
    var precio = $("#precio").val();
    var id_tienda = zenb;
    
    
    var url = "controller/cInsertProductoTienda.php";
    var data = { 'id_producto': id_producto, 'stock': stock, 'precio': precio, 'id_tienda': id_tienda};

    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}  //input data
        })
        .then(res => res.json()).then(result => {
            console.log(result.error);
        })
        .catch(error => console.error('Error status:', error));
    
        location.reload();

   
} 

