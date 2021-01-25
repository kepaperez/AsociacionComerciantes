<?php
        
include_once '../model/usuarioModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$usuario=$data['usuario'];
$pass=$data['pass'];
$nombre=$data['nombre'];
$apellido=$data['apellido'];

$response = array();

$user = new usuarioModel();

$user->setNombreUsuario($usuario);
$user->setNombre($nombre);
$user->setApellido($apellido);
$user->setContrasenaUsuario($pass);

$user->newUser();

$response["msg"] = "usuario creado";

echo json_encode($response);
unset($response);