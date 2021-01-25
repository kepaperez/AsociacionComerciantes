<?php
if($_SERVER["SERVER_NAME"]=="grupo3.zerbitzaria.net"){
    include_once("connect_data_remote.php");
}else{
    include_once("connect_data.php");
}

include_once ("tiendaClass.php");

class tiendaModel extends tiendaClass
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

        $sql = "CALL spAllTiendas()"; // SQL sententzia - sentencia SQL

        $result = $this->link->query($sql);
      
        $list = array();
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) { // each row

            $tienda = new tiendaModel();

            $tienda->id = $row['id'];
            $tienda->nombre = $row['nombre'];
            $tienda->direccion = $row['direccion'];
            $tienda->horario = $row['horario'];
            $tienda->imagen = $row['imagen'];
            $tienda->tipo = $row['tipo'];
        
            
            array_push($list, get_object_vars($tienda));
    
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }
    public function setTiendaInfo()
    {
        $this->OpenConnect(); // konexio zabaldu - abrir conexión

        $id=$this->id;
 
        $sql = "CALL spTiendaById($id)"; // SQL sententzia - sentencia SQL
      
    
        $result = $this->link->query($sql);
      
        if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) { // each row

            $this->id = $row['id'];
            $this->nombre = $row['nombre'];
            $this->direccion = $row['direccion'];
            $this->horario = $row['horario'];
            $this->imagen = $row['imagen'];
            $this->tipo = $row['tipo'];
            $this->imgBanner = $row['imgBanner'];
        }
        mysqli_free_result($result);
        $this->CloseConnect();
      
            
     

    }
    public function updateTienda(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        $Id=$this->id;
        $Nombre=$this->nombre;
        $Direccion=$this->direccion;
        $Horario=$this->horario;
        $Imagen=$this->imagen;
        $Tipo=$this->tipo;
        $ImgBanner=$this->imgBanner;
        
                  
        $sql="CALL 	spUpdateTienda('$Id','$Nombre','$Direccion',' $Horario','$Imagen','$Tipo','$ImgBanner')"; 
        
        $this->link->query($sql);
       
        $this->CloseConnect();
    
    
    }
    function ObjVars()
    {
        return get_object_vars($this);
    }
    
}
?>