<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/productoModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$producto= new productoModel();
 
$id=$data['id'];
$nombre=$data['nombre'];
$imagen=$data['imagen'];
$descripcion=$data['descripcion'];
$marca=$data['marca'];
$sexo=$data['sexo'];
$tipo=$data['tipo'];


$producto->setId($id);

$producto->setNombre($nombre);

$producto->setImagen($imagen);

$producto->setDescripcion($descripcion);

$producto->setMarca($marca);

$producto->setSexo($sexo);

$producto->setTipo($tipo);



$producto->updateProducto();

unset ($producto);