<?php
class productoTiendaClass
{
    public $id_producto;
    public $stock;
    public $precio;
    public $id_tienda;

    /**
     * @return mixed
     */



    public function getId_producto()
    {
        return $this->id_producto;
    }
    public function getStock()
    {
        return $this->stock;
    }
    public function getPrecio)
    {
        return $this->precio;
    }
    public function getId_tienda()
    {
        return $this->id_tienda;
    }
 
   

  

    public function setId_producto($id_producto)
    {
        $this->id_producto = $id_producto;
    }
    public function setStock($stock)
    {
        $this->stock = $stock;
    }
    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }
    public function setId_tienda($id_tienda)
    {
        $this->id_tienda = $id_tienda;
    }
 


 