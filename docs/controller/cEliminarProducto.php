<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/productoModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$producto= new productoModel();
 
$id=$data['id'];

$producto->setId($id);

$producto->deleteProducto();

unset ($producto);
