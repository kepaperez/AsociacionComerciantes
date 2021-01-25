<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/ptoductoModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$producto= new productoModel();
 
$id=$data['id'];
$nombre=$data['nombre'];
$imagen=$data['imagen'];
$descripcion=$data['descripcion'];
$marca=$data['marca'];


$producto->setId($id);

$producto->setNombre($nombre);

$producto->setImagen($imagen);

$producto->setDescripcion($descripcion);

$producto->setMarca($marca);



$producto->updateProducto();

unset ($producto);