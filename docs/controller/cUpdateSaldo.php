<?php
session_start();

$data=json_decode(file_get_contents("php://input"),true);

$saldo=number_format($data['saldo'], 2);

$_SESSION['user']['saldo'] = $saldo;

$response['error'] = 'no error';

echo json_encode($response);

