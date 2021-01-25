<?php
class productoClass
{
    protected $id;
    protected $nombre;
    protected $imagen;
    protected $descripcion;
    protected $marca;
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
 