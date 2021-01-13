<?php
class productoClass
{
    public $id;
    public $nombre;
    public $imagen;
    public $descripcion;
    public $marca;
    /**
     * @return mixed
     */



    public function getId()
    {
        return $this->id;
    }
    public function getNombre()
    {
        return $this->nombre;
    }
    public function getImagen()
    {
        return $this->imagen;
    }
    public function getDescripcion()
    {
        return $this->descripcion;
    }
    public function getMarca()
    {
        return $this->marca;
    }
   

  

    public function setId($id)
    {
        $this->id = $id;
    }
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }
    public function setImagen($imagen)
    {
        $this->imagen = $imagen;
    }
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }
    public function setMarca($marca)
    {
        $this->marca = $marca;
    }


}
 