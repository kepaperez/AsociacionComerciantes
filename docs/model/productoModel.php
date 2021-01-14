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
    function ObjVars()
    {
        return get_object_vars($this);
    }
}
?>