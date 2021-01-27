<?php
session_start();

include_once '../model/usuarioModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$saldo=number_format($data['saldo'], 2);

$_SESSION['user']['saldo'] = $saldo;

// ===================================================

$user= new usuarioModel();
$id=$_SESSION['user']['id'];
$saldo=number_format($data['saldo'], 2);

$user->setId($id);
$user->setSaldo($saldo);


$user->updateSaldo();
$response['error'] = 'no error';



echo json_encode($response);

