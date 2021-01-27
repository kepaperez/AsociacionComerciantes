<?php
if($_SERVER["SERVER_NAME"]=="grupo3.zerbitzaria.net"){
    include_once("connect_data_remote.php");
}else{
    include_once("connect_data.php");
}

include_once ("ventasClass.php");

class ventasModel extends ventasClass
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
   
    public function fillVenta(){

        $this->OpenConnect();  
        
        $idProducto=$this->id_producto;
        $idTienda=$this->id_tienda;
        $idUsuario=$this->id_usuario;
        $fecha=$this->fecha; 
        $precio=$this->precio;           
        
        $sql="call spNewVenta('$idProducto','$idTienda','$idUsuario','$fecha','$precio')";

        var_dump($sql);
        
        $result = $this->link->query($sql);
        
        $this->link->query($sql);
       
        $this->CloseConnect();

        return $result;
    }
   
    function ObjVars()
    {
        return get_object_vars($this);
    }
    
}
?>