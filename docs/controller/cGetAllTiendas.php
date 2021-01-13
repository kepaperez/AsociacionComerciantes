<?php

include_once ("../model/tiendaModel.php");

$tienda= new tiendaModel();

$response=array();

$response['list']=$comentarios->setList(); 

echo json_encode($response); 
// var_dump($response);
unset ($tienda);
unset ($response);