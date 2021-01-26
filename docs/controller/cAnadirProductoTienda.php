<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/productoTiendaModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$productotienda = new productoTiendaModel();

$id_producto=$data['id_producto'];
$stock=$data['stock'];
$precio=$data['precio'];
$id_tienda=$data['id_tienda'];

$productotienda->setId_producto($id_producto);
$productotienda->setStock($stock);
$productotienda->setPrecio($precio);
$productotienda->setId_tienda($id_tienda);

var_dump($productotienda);

$productotienda->añadirProductoTienda();

unset ($productotienda);

