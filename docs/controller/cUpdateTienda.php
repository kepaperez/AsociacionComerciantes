<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/tiendaModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$tienda= new tiendaModel();
 
$id=$data['id'];
$nombre=$data['nombre'];
$direccion=$data['direccion'];
$horario=$data['horario'];
$imagen=$data['imagen'];
$tipo=$data['tipo'];
$imgBanner=$data['imgBanner'];

$tienda->setId($id);

$tienda->setNombre($nombre);

$tienda->setDireccion($direccion);

$tienda->setHorario($horario);

$tienda->setImagen($imagen);

$tienda->setTipo($tipo);

$tienda->setImgBanner($imgBanner);



var_dump($tienda);

$tienda->updateTienda();

unset ($tienda);