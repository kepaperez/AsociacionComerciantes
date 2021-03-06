loggedVerify();
document.addEventListener('click', function (evt) {
    //  event listener para diferentes botones    

    if (evt.target.className === 'añadirBtn') {

        animacionAñadir(evt.target.dataset);
        añadirCarrito(evt.target.dataset);

    }

    if (evt.target.className === 'verCarrito') {

        window.location.href = "carritoCompra.html";
    }

    if (evt.target.className === 'inicio') {

        window.location.href = "asociaciones.html";
    }

    if (evt.target.className === 'userLoged') {
        desplegable()
    }

    if (evt.target.id === 'iniciar') {
        $(".iniciar").css("display", "block");
        $(".registrar").css("display", "none");
    }

    if (evt.target.id === 'registrar') {
        $(".iniciar").css("display", "none");
        $(".registrar").css("display", "block");
    }

    if (evt.target.id === 'logout' || evt.target.id === 'logoutt') {
        logout();
    }

    if (evt.target.id === 'administrador') {
        window.location.href = "administrador.html";

    }

}, false);

var listaTodo;
var productos;

var carritoCompra = [];


// miramos si el carrito esta vacio o no para recoger sus datos 
if (localStorage.getItem('0') != null) {
    carritoCompra = JSON.parse(localStorage.getItem('0'));

    alert('Tienes algo guardado en el carrito de la compra');
}

function animacionAñadir(data) {
    //funcion para la animacion del boton 
    var id = data.id;

    console.log(document.querySelectorAll("[data-id=" + id + "]")[0]);
    document.querySelectorAll("[data-id=" + id + "]")[0].innerHTML = "Añadiendo...";

    setTimeout(function () { document.querySelectorAll("[data-id=" + id + "]")[0].innerHTML = "Añadido!"; }, 1000,);

    setTimeout(function () { document.querySelectorAll("[data-id=" + id + "]")[0].innerHTML = "Añadir <span>&rarr;</span>"; }, 2000,)
}

function añadirCarrito(data) {
    //funcion para añadir el producto al carrito de la compra y para el localstorage 
    var thisId_ProductoTienda = data.thisid_productotienda;
    var thisIdProducto = data.thisidproducto;
    var thisIdTienda = data.thisidtienda;

    var thisNombre = data.thisnombre;
    var thisImg = data.thisimg;
    var thisMarca = data.thismarca;
    var thissexo = data.thissexo;
    var thisPrecio = data.thisprecio;
    var thisTienda = data.thistienda;
    var thisStock = data.thisstock;



    found = false;
    console.log(carritoCompra);
    if (carritoCompra.length == 0) {
        //si esta vacio el carrito se mete automaticamente
        carritoCompra.push({
            "idProducto": thisIdProducto,
            "idTienda": thisIdTienda,
            "idProductoTienda": thisId_ProductoTienda,
            "nombre": thisNombre,
            "img": thisImg,
            "marca": thisMarca,
            "sex": thissexo,
            "precio": thisPrecio,
            'tienda': thisTienda,
            "stock": thisStock,
            "cantidad": 1
        })
    }
    else {
        for (let i = 0; i < carritoCompra.length; i++) {
            //no esta vacio
            if (carritoCompra[i].idProductoTienda == thisId_ProductoTienda) {
                //el produto esta y se suma +1
                carritoCompra[i].cantidad++;
                found = true;
            }
        }
        if (!found) {
            //el producto no esta y se sube
            carritoCompra.push({
                "idProducto": thisIdProducto,
                "idTienda": thisIdTienda,
                "idProductoTienda": thisId_ProductoTienda,
                "nombre": thisNombre,
                "img": thisImg,
                "marca": thisMarca,
                "sex": thissexo,
                "precio": thisPrecio,
                'tienda': thisTienda,
                "stock": thisStock,
                "cantidad": 1
            })
        }
    }

    //limpiamos el carrito subimos de nuevo 
    localStorage.clear();
    localStorage.removeItem(0);

    localStorage.setItem(0, angular.toJson(carritoCompra));


}

var accion = 0;
function desplegable() {
    //funcion para el  desplegable de iniciar sesion/registrar

    if (accion == 1) {
        accion = 0;
        $("#desplegable").css("display", "none");

    } else {
        accion = 1;
        $("#desplegable").css("display", "block");

    }


}

function login() {
    //funcion para logearse
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "controller/cLogin.php";

    var data = {
        'username': username, 'password': password
    };


    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' }  //input data

    })
        .then(res => res.json()).then(result => {

            if (result.message === "no error") {

                location.reload();

            }
            else {
                alert(result.message);
            }

        })
        .catch(error => console.error('Error status:', error));

}
var user;
function loggedVerify() {
    //verifica si hemos logeado anteriormente
    var url = "controller/cLoggedVerify.php";

    fetch(url, {
        method: 'GET',
    })
        .then(res => res.json()).then(result => {

            if (result.message === "logged") {


                console.log(result.user);

                user = result.user;
                $(".userLoged").html(result.username);
                $(".saldo").html(result.user.saldo + "€");
                $("#logout").css("display", "inline");
                $(".iniciar").css("display", "none");
                $(".registrar").css("display", "none");
                $(".botonLog").css("display", "inline");
                if (result.user.admin == 0 | result.user.idTienda != null) {
                    $(".botonAdmin").css("display", "inline");
                }

                // ==========================================
                // checkOut

                loadCheckoutData()
            }
        })
        .catch(error => console.error('Error status:', error));


}

function registrar() {
    //funcion para registrarnos en la pagina web 
    var usuario = document.getElementById("usuarioReg").value;
    var nombre = document.getElementById("nombreReg").value;
    var apellido = document.getElementById("apellidoReg").value;
    var pass = document.getElementById("passReg").value;

    var url = "controller/cRegistrar.php";

    var data = {
        'usuario': usuario,
        'nombre': nombre,
        'apellido': apellido,
        'pass': pass
    };


    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' }  //input data

    })
        .then(res => res.json()).then(result => {

            alert(result.msg);

            var url = "controller/cLogin.php";

            var data = {
                'username': usuario, 'password': pass
            };


            fetch(url, {
                method: 'POST', // or 'POST'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }  //input data

            })
                .then(res => res.json()).then(result => {

                    if (result.message === "no error") {

                        location.reload();

                    }
                    else {
                        alert(result.message);
                    }

                })
                .catch(error => console.error('Error status:', error));


        })
        .catch(error => console.error('Error status:', error));


}

function logout() {
    // funcion para deslogearnos
    localStorage.clear();
    var url = "controller/cLogout.php";

    fetch(url, {
        method: 'GET',
    })
        .then(res => res.text()).then(result => {

            alert('logout');
            location.reload();
            window.location.href = "index.html";
        })
        .catch(error => console.error('Error status:', error));
}

function loadCheckoutData() {
    //cargamos los datos del usuario logeado en la seccion de checkout
    $("#idUser").attr('data-id', user.id);
    $("#nombreCheckout").val(user.nombre);
    $("#apellidoCheckout").val(user.apellido);
    $("#usuarioCheckout").val(user.nombreUsuario);
    $("#dniCheckout").val(user.dni);
    $("#tlfCheckout").val(user.telefono);
    $("#direccionCheckout").val(user.direccion);
    $(".SaldoCheckout").html(user.saldo + "€");

}