<?php

include_once ("../model/tiendaModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$tienda= new tiendaModel();

$response=array();

$id=$data['id'];


$tienda->setId($id);

$response['tienda']=$tienda->setTiendaInfo(); 

echo json_encode($response); 

unset ($tienda);
unset ($response);