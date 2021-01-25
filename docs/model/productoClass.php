<?php
class productoClass
{
    protected $id;
    protected $nombre;
    protected $imagen;
    protected $descripcion;
    protected $marca;
    protected $sexo;
    protected $tipo;

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
    public function getSexo()
    {
        return $this->sexo;
    }
    public function getTipo()
    {
        return $this->tipo;
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
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }


}
 