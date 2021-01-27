<?php

 include_once ("../model/productoTiendaModel.php");

 $data=json_decode(file_get_contents("php://input"),true);
 
 $productoTienda= new productoTiendaModel();
 
$id_producto=$data['id_producto'];
 $stock=$data['stock'];
 $precio=$data['precio'];
 $id_tienda=$data['id_tienda'];
 
$productoTienda->setId_producto($id_producto);

$productoTienda->setStock($stock);

$productoTienda->setPrecio($precio);

$productoTienda->setId_tienda($id_tienda);
 
$response=array();


$response['error']=$productoTienda->insert(); 
echo json_encode($response);
