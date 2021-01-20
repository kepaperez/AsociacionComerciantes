<?php

include_once ("../model/tiendaModel.php");
$data=json_decode(file_get_contents("php://input"),true);

$id_tienda=$data['id'];


$id_tienda = new tiendaModel();

$tienda->setId($id_tienda);

$response=array();

$response['list']=$tienda-> setTiendaInfo(); 

echo json_encode($response); 
// var_dump($response);
unset ($tienda);

unset ($response);