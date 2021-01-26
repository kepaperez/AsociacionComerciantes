<?php

/*En que modelo buscamos la funcion*/ 
include_once ("../model/usuarioModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$user= new usuarioModel();
 
$nombre=$data['nombre'];
$apellido=$data['apellido'];
$usuario=$data['usuario'];
$tlf=$data['telefono'];
$direccion=$data['direccion'];
$id=$data['id'];

$user->setNombre($nombre);

$user->setApellido($apellido);

$user->setNombreUsuario($usuario);

$user->setTelefono($tlf);

$user->setDireccion($direccion);

$user->setId($id);


$user->updateUser();

unset ($user);