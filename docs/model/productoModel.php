<?php
if($_SERVER["SERVER_NAME"]=="grupo3.zerbitzaria.net"){
    include_once("connect_data_remote.php");
}else{
    include_once("connect_data.php");
}

include_once ("productoClass.php");

class productoModel extends productoClass
{
    public function OpenConnect()
    {
        $konDat = new connect_data();
        try {
            $this->link = new mysqli($konDat->host, $konDat->userbbdd, $konDat->passbbdd, $konDat->ddbbname);
            // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
            // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión.
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
                                          // //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }
    public function CloseConnect()
    {
        mysqli_close($this->link);
    }
    public function setList()
    {
        $this->OpenConnect(); // konexio zabaldu - abrir conexión

        $id=$this->id;
        
        $sql = "CALL spProductId('$id')"; // SQL sententzia - sentencia SQL

        $result = $this->link->query($sql);
        
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) { // each row
            
            $this->id = $row['id'];
            $this->nombre = $row['nombre'];
            $this->imagen = $row['imagen'];
            $this->descripcion = $row['descripcion'];
            $this->marca = $row['marca'];
            $this->sexo = $row['Sexo'];
            $this->tipo = $row['tipo'];
             
            }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    public function setAllProductos()
    {
        $this->OpenConnect(); // konexio zabaldu - abrir conexión

        $sql = "CALL spAllProducto()"; // SQL sententzia - sentencia SQL

        $result = $this->link->query($sql);
      
        $list = array();
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) { // each row

            $producto = new productoModel();

            $producto->id = $row['id'];
            $producto->nombre = $row['nombre'];
            $producto->imagen = $row['imagen'];
            $producto->descripcion = $row['descripcion'];
            $producto->marca = $row['marca'];
            if($producto->sexo == null){

            }else{
                $producto->sexo = $row['sexo'];
            }
            
            $producto->tipo = $row['tipo'];
        

            $tienda = new tiendaModel();

            $tienda->setId($row['id']);
            $tienda->setNombre($row['nombre']);
            $tienda->setList();

            $producto->tienda = $tienda->ObjVars();
            
            array_push($list, get_object_vars($producto));
    
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function updateProducto(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        $Id=$this->id;
        $Nombre=$this->nombre;
        $Imagen=$this->imagen;
        $Descripcion=$this->descripcion;
        $Marca=$this->marca;
        $Sexo=$this->sexo;
        $Tipo=$this->tipo;
  
        $sql="CALL 	spUpdateProducto('$Id','$Nombre','$Imagen','$Descripcion','$Marca', '$Sexo','$Tipo')"; 
        
        $this->link->query($sql);
       
        $this->CloseConnect();

    }
    public function deleteProducto(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        $Id=$this->id;
        
  
        $sql="CALL 	spDeleteProducto('$Id')"; 
        
        $this->link->query($sql);
       
        $this->CloseConnect();

    }
    
    function ObjVars()
    {
        return get_object_vars($this);
    }
}
?>