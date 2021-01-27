<?php

 include_once ("../model/productoTiendaModel.php");

 $data=json_decode(file_get_contents("php://input"),true);
 
 $productoTienda= new productoTiendaModel();
 
 $productoTienda->id_producto=$data['id_producto'];
 $productoTienda->stock=$data['stock'];
 $productoTienda->precio=$data['precio'];
 $productoTienda->id_tienda=$data['id_tienda'];
 
$response=array();

$response['error']=$productoTienda->insert(); 
echo json_encode($response);
