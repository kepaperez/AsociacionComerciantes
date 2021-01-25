<?php
class ventasClass{
    protected $id;
    protected $id_producto;
    protected $id_tienda;
    protected $id_usuario;
    protected $fecha;
    protected $precio;
    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getId_producto()
    {
        return $this->id_producto;
    }

    /**
     * @return mixed
     */
    public function getId_tienda()
    {
        return $this->id_tienda;
    }

    /**
     * @return mixed
     */
    public function getId_usuario()
    {
        return $this->id_usuario;
    }

    /**
     * @return mixed
     */
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * @return mixed
     */
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $id_producto
     */
    public function setId_producto($id_producto)
    {
        $this->id_producto = $id_producto;
    }

    /**
     * @param mixed $id_tienda
     */
    public function setId_tienda($id_tienda)
    {
        $this->id_tienda = $id_tienda;
    }

    /**
     * @param mixed $id_usuario
     */
    public function setId_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;
    }

    /**
     * @param mixed $fecha
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    /**
     * @param mixed $precio
     */
    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }

}