<?php

include_once ("../model/productoTiendaModel.php");

$response=array();

$data=json_decode(file_get_contents("php://input"),true);


$limite = count($data);

for($i=0; $i<$limite; $i++){

    $productoTienda = new productoTiendaModel();

    $id_productoTienda=$data[$i]['idProductoTienda'];

    // $productoTienda->setId_ProductoTienda($id_productoTienda);    

    // var_dump('$id_productoTienda');

    // var_dump($id_productoTienda);

    // var_dump('$productoTienda');

    // var_dump($productoTienda);


    $stock=$data[$i]['stock']-$data[$i]['unidades'];

    $productoTienda->setStock($stock);

     $productoTienda->buy($id_productoTienda);

}

echo json_encode($response); 

unset ($productoTienda);

unset ($productoTienda);