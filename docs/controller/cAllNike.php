<?php

include_once ("../model/productoTiendaModel.php");
$data=json_decode(file_get_contents("php://input"),true);

$productoTienda = new productoTiendaModel();

$id=1;
$productoTienda->setId_tienda($id);

$response=array();

$response['list']=$productoTienda-> setList(); 

echo json_encode($response); 
// var_dump($response);
unset ($producto);

unset ($response);