<?php
class productoTiendaClass
{   
    protected $id_productoTienda;
    protected $id_producto;
    protected $stock;
    protected $precio;
    protected $id_tienda;

    /**
     * @return mixed
     */

    function getId_ProductoTienda()
    {
        return $this->id_productoTienda;
    }
     function getId_producto()
    {
        return $this->id_producto;
    }
     function getStock()
    {
        return $this->stock;
    }
     function getPrecio()
    {
        return $this->precio;
    }
     function getId_tienda()
    {
        return $this->id_tienda;
    }

    function setId_ProductoTienda($id_productoTienda)
    {
         $this->$id_productoTienda=$id_productoTienda;
    } 
     function setId_producto($id_producto)
    {
        $this->id_producto = $id_producto;
    }
     function setStock($stock)
    {
        $this->stock = $stock;
    }
     function setPrecio($precio)
    {
        $this->precio = $precio;
    }
     function setId_tienda($id_tienda)
    {
        $this->id_tienda = $id_tienda;
    }
}


 