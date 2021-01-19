<?php

include_once ("../model/productoTiendaModel.php");
$data=json_decode(file_get_contents("php://input"),true);

$productoTienda = new productoTiendaModel();
 
$id_tienda=$data['idTienda'];
var_dump($id_tienda);
$productoTienda->setId_tienda($id_tienda);

$response=array();

$response['list']=$productoTienda-> setList(); 

echo json_encode($response); 
// var_dump($response);
unset ($producto);

unset ($response);