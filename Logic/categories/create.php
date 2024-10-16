<?php
require_once "../mysql.php";
require_once "../conexion.php";
//Variables de la categoria
$name = "Gaseosas";
$description = "Relacionados a las gaseosas";
//validar que los campos no esten vacios
if ($name == "" || $description == "") {
    echo "Error, campos vacios";
    die();
}
//preparamos el array con los datos
$arrData = array(
    $name,
    $description
);
//preparamos la consulta
$sql = "INSERT INTO categories (c_name,c_description) VALUES(?,?);";
$request = register($conexion, $arrData, $sql);
