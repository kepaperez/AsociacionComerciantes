<?php
session_start();
include_once '../model/ventasModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$id=$_SESSION['user']['id'];

$fecha=date("Y/m/d");

$limite = count($data);

for($i=0; $i<$limite; $i++){

    $idProducto=$data[$i]['idProducto'];
    $idTienda=$data[$i]['idTienda'];
    $precio=$data[$i]['precio'];
    var_dump($idProducto);

    $venta= new ventasModel();

    $venta->setId_producto($idProducto);
    $venta->setId_tienda($idTienda);
    $venta->setFecha($fecha);
    $venta->setPrecio($precio);
    $venta->setId_usuario($id);

    var_dump($venta);

    $venta->fillVenta();
    
}

