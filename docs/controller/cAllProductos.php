<?php

include_once ("../model/productoTiendaModel.php");
$data=json_decode(file_get_contents("php://input"),true);
$id_tienda=$data['id'];


$productoTienda = new productoTiendaModel();

$productoTienda->setId_tienda($id_tienda);

$response=array();

$response['list']=$productoTienda-> setList(); 

echo json_encode($response); 
// var_dump($response);
unset ($producto);

unset ($response);