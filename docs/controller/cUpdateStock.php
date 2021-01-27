<?php

include_once ("../model/productoTiendaModel.php");

$data=json_decode(file_get_contents("php://input"),true);

$limite = count($data);

for($i=0; $i<$limite; $i++){

    $productoTienda = new productoTiendaModel();

    $id_productoTienda=$data[$i]['idProductoTienda'];

    $stock=$data[$i]['stock']-$data[$i]['unidades'];

    $productoTienda->setStock($stock);

    $productoTienda->buy($id_productoTienda);

}

$response['error'] = 'no error';

echo json_encode($response);

unset($response);

unset ($productoTienda);