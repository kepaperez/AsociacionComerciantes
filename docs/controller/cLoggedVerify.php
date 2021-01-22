<?php
session_start();

$response=array();
$response["message"]="no logged";

if (isset($_SESSION['username']))
{
     $response["message"]="logged";

     $response["username"]=$_SESSION['username'];

     $response["user"]=$_SESSION['user'];
     } 

echo json_encode($response);
unset($response);
