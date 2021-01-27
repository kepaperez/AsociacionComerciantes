<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/productoTiendaModel.php");

$producto = new productoModel();

$response=array();

$response['list']=$producto->setAllProductos();

echo json_encode($response); 

// var_dump($response);

unset ($producto);
unset ($response); 

