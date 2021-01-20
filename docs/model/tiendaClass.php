<?php
class tiendaClass
{
    public $id;
    public $nombre;
    public $direccion;
    public $horario;
    public $imagen;
    public $tipo;
    public $imgBanner;

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
    public function getDireccion()
    {
        return $this->direccion;
    }
    public function getHorario()
    {
        return $this->horario;
    }
    public function getImagen()
    {
        return $this->imagen;
    }
    public function getTipo()
    {
        return $this->tipo;
    }
    public function getImgBanner()
    {
        return $this->imgBanner;
    }



  

    public function setId($id)
    {
        $this->id = $id;
    }
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }
    public function setHorario($horario)
    {
        $this->horario = $horario;
    }
    public function setImagen($imagen)
    {
        $this->imagen = $imagen;
    }
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }
   
    public function setImgBanner($imgBanner)
    {
        $this->imgBanner = $imgBanner;
    }
   
   
   

}