document.addEventListener('click', function (evt) {
    if (evt.target.className === 'añadirBtn') {
        // angular.element(document.getElementById('miControlador')).scope().añadirCarrito(evt.target.value);
        loadData(evt.target.id, evt.target.value)

    }
}, false);

var listaTodo;
var productos;
function loadData(id, value) {
    alert('OK ' + id);

    var url = "controller/cAllProductos.php";
    var data = { 'id': id };

    fetch(url, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' } //input data
    })
        .then(res => res.json()).then(result => {
            productos = result.list;

            añadirCarrito(value);
        })
        .catch(error => console.error('Error status:', error));
}

var carritoCompra = [];

if (localStorage.getItem('0') != null) {
    carritoCompra = JSON.parse(localStorage.getItem('0'));
}


function añadirCarrito(value) {

    for (let x = 0; x < productos.length; x++) {
        if (productos[x].id_productoTienda == value) {
            var thisId_ProductoTienda = productos[x].id_productoTienda;
            var thisIdProducto = productos[x].id_producto;
            var thisIdTienda = productos[x].id_tienda;

            var thisNombre = productos[x].producto.nombre;
            var thisImg = productos[x].producto.imagen;
            var thisMarca = productos[x].producto.marca;
            var thissexo = productos[x].producto.sexo;
        }
    }

    found = false;
    if (carritoCompra.length == 0) {
        carritoCompra.push({ 'idProducto': thisIdProducto, 'idTienda': thisIdTienda, 'idProductoTienda': thisId_ProductoTienda, 'nombre': thisNombre, 'img': thisImg, 'marca': thisMarca, 'sex': thissexo, 'cantidad': 1 })
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
            carritoCompra.push({ 'idProducto': thisIdProducto, 'idTienda': thisIdTienda, 'idProductoTienda': thisId_ProductoTienda, 'nombre': thisNombre, 'img': thisImg, 'marca': thisMarca, 'sex': thissexo, 'cantidad': 1 })
        }
    }
    localStorage.clear();
    localStorage.setItem(0, JSON.stringify(carritoCompra));
}
