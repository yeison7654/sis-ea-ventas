<?php
//Definimos las variables de conexion
$server = "localhost";
$user = "root";
$pass = "";
$db = "bd_ventas";
//Creamos la conexion
try {
    //code...
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}