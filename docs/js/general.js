document.addEventListener('click', function (evt) {
    //  event listener para el boton de añadir al carrito 
    if (evt.target.className === 'añadirBtn') {
        añadirCarrito(evt.target.dataset);
    }
    if (evt.target.className === 'verCarrito') {
        alert('ey');
        window.location.href = "carritoCompra.html";
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

function añadirCarrito(data) {

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
    if (carritoCompra.length == 0) {
        carritoCompra.push({
            "idProducto": thisIdProducto,
            "idTienda": thisIdTienda,
            "idProductoTienda": thisId_ProductoTienda,
            "nombre": thisNombre,
            "img": thisImg,
            "marca": thisMarca,
            "sex": thissexo,
            "precio":thisPrecio,
            'tienda':thisTienda,
            "stock":thisStock,
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
                "precio":thisPrecio,
                'tienda':thisTienda,
                "stock":thisStock,
                "cantidad": 1
            })
        }
    }

    localStorage.clear();
    localStorage.removeItem(0);

    localStorage.setItem(0,angular.toJson(carritoCompra));
    console.log(JSON.stringify(carritoCompra));
}
