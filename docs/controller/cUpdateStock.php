<?php

include_once ("../model/productoTiendaModel.php");

$response=array();

$data=json_decode(file_get_contents("php://input"),true);


for($i=0; $i<$data[$i]; $i++){

    $productoTienda = new productoTiendaModel();

    $id=$data[$i]['idProductoTienda'];

    $stock=$data[$i]['stock']-$data[$i]['unidades'];

    $productoTienda->setId_productoTienda($id);

    $productoTienda->setStock($stock);

    $productoTienda->buy();

}

echo json_encode($response); 
// var_dump($response);
unset ($productoTienda);

unset ($productoTienda);