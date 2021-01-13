<?php

include_once ("../model/tiendaModel.php");

$tienda= new tiendaModel();

$response=array();

$response['list']=$tienda->setList(); 

echo json_encode($response); 

unset ($tienda);
unset ($response);