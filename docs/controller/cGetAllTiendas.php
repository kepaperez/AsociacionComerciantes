<?php

include_once ("../model/tiendaModel.php");

$tienda= new tiendaModel();

$response=array();

$response['list']=$tienda->setList(); 

echo json_encode($response); 
<<<<<<< HEAD
// var_dump($response);

=======

unset ($tienda);
<<<<<<< HEAD
unset ($response); 
=======
>>>>>>> dd8884b3c54e35e080d84469909e7de34166f348
unset ($response);
>>>>>>> 8338ce7511fee99f278be03da472cf989d4f43dc
