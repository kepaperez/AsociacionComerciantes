<?php
        
include_once '../model/usuarioModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$username=$data['username'];
$pass=$data['password'];

$response = array();

$user = new usuarioModel();

$user->setNombreUsuario($username);

$error=$user->findUserByUserName($pass);

if ($error !="no error" ) {
    
    $response["message"] = $error;
    
} else {
    
    $response["message"] = $error; //not error
  
   if (!isset($_SESSION))
   {
     session_start();
   }
   $response["message"]="no error";  
   $_SESSION['username']=$username;

}

echo json_encode($response);
unset($response);

