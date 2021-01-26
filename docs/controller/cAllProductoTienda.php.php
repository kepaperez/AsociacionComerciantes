<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/productoTiendaModel.php");

$productotienda = new productoTiendaModel();

$response=array();

$response['list']=$productotienda->setList();

echo json_encode($response); 

// var_dump($response);

unset ($productotienda);
unset ($response); 

