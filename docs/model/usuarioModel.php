<?php
include_once 'connect_data.php';
include_once 'usuarioClass.php';


class usuarioModel extends usuarioClass{
    private $link;

 	public function OpenConnect()
    {
        $konDat=new connect_data();
         try
        {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
        }
        catch(Exception $e)
        {
             echo $e->getMessage();
         }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta 
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }                   
    public function CloseConnect()
    {
         try
         { 
           $this->link->close();
         }
         catch(Exception $e)
        {
         echo $e->getMessage();
        }  
    } 
   
 
    public function findUserByUserName($pass){

        $this->OpenConnect();
        
        $username=$this->getNombreUsuario();
        
        $sql = "call spUser('$username')";

        $result = $this->link->query($sql);

        $error='no error';
        
        if ($row = $result->fetch_array(MYSQLI_ASSOC))
        {
            $this->nombre = $row['nombre'];
            $this->password = $row['contrasenaUsuario'];
            $this->apellido= $row['apellido'];
            $this->dni= $row['dni'];
            $this->admin= $row['admin'];
            $this->telefono= $row['telefono'];
            $this->direccion= $row['direccion'];
            $this->saldo= $row['saldo'];
            $this->id= $row['id'];           
            $this->idTienda= $row['idTienda'];
                      

            if($this->password == $pass){

                    $error='no error';              

            }else{
                $error='password error';
            }
           
        } else {
     
             $error='user not found';
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $error; 

    }
    
    public function newUser(){

        $this->OpenConnect();  
        
        $usuario=$this->nombreUsuario;
        $pass=$this->contrasenaUsuario;
        $nombre=$this->nombre;
        $apellido=$this->apellido;        
        
        $sql="call spNewUser('$usuario','$pass','$nombre','$apellido')";

        $result = $this->link->query($sql);
        
        $this->link->query($sql);
       
        $this->CloseConnect();

        return $result;

    }

    public function updateUser(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        $nombre=$this->nombre;
        $apellido=$this->apellido;
        $usuario=$this->nombreUsuario;
        $telefono=$this->telefono;
        $direccion=$this->direccion;
        $id=$this->id;

        
        $sql="CALL spUpdateUser('$nombre','$apellido','$usuario',' $telefono','$direccion','$id')"; 
        
        $this->link->query($sql);
       
        $this->CloseConnect();

     
    
    }
    
    public function updateSaldo(){
        $this->OpenConnect();  
        
        $saldo=$this->saldo;
        $id=$this->id;

        $sql="CALL spUpdateSaldo('$saldo','$id')"; 

        var_dump($sql);

        $this->link->query($sql);
       
        $this->CloseConnect();

    }
    public function ObjVars()
    {
        return get_object_vars($this);
    }
}
