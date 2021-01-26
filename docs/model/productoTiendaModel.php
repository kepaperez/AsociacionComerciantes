<?php
if($_SERVER["SERVER_NAME"]=="grupo3.zerbitzaria.net"){
    include_once("connect_data_remote.php");
}else{
    include_once("connect_data.php");
}

require_once ("productoModel.php");

require_once ("tiendaModel.php");
include_once ("productoTiendaClass.php");

class productoTiendaModel extends productoTiendaClass
{
    private $producto;
    private $shop;
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

        $id=$this->id_tienda;
        

        $sql = "CALL spAllProductoTienda($id)"; // SQL sententzia - sentencia SQL

        $result = $this->link->query($sql);
      
        $list = array();
     
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) { // each row

            $productotienda = new productoTiendaModel();

            $productotienda->id_productoTienda = $row['id_productoTienda']; 
            $productotienda->id_producto = $row['id_producto'];
            $productotienda->stock = $row['stock'];
            $productotienda->precio = $row['precio'];
            $productotienda->id_tienda = $row['id_tienda'];
                  

            $product = new productoModel();

            $product->setId($row['id_producto']);
            $product->setList();

            $productotienda->producto = $product->ObjVars();


            $tienda = new tiendaModel();

            $tienda->setId($row['id_tienda']);
            $tienda-> setTiendaInfo();

           
            $productotienda->shop = $tienda->ObjVars();
            
            array_push($list, get_object_vars($productotienda));

        }
     
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }
    
    public function añadirProductoTienda(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $IdProductInsert=$this->id_product;
        $StockInsert=$this->stock;
        $PrecioInsert=$this->precio;
        $Id_tiendaInsert=$this->id_tienda;
                  
        $sql="CALL 	spInsertProducto('$IdProductInsert','$StockInsert','$PrecioInsert','$Id_tiendaInsert')"; 
        

        $this->link->query($sql);
       
        $this->CloseConnect();
    }

    public function buy(){

        $this->OpenConnect();  
        
        $Id=$this->id_productoTienda;
        $stock=$this->stock;
                          
        $sql="CALL spBuy('$stock','$Id')"; 
        
        $this->link->query($sql);
       
        $this->CloseConnect();
    }
    function ObjVars()
    {
        return get_object_vars($this);
    }
}
?>