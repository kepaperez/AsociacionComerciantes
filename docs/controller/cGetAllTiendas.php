<?php

include_once ("../model/tiendaModel.php");

$tienda= new tiendaModel();

$response=array();

$response['list']=$tienda->setList(); 

echo json_encode($response); 
<<<<<<< HEAD

unset ($tienda);
unset ($response);
=======

// var_dump($response);

unset ($tienda);
unset ($response); 


>>>>>>> be93e5bd83646e5d207bce6e6ba7b948c5a33a86
