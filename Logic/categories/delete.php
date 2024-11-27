<?php
require_once "../mysql.php";
require_once "../conexion.php";
//Variables de la categoria
$txtID = $_POST["txtId"];
//validar que los campos no esten vacios
if ($txtID == "" ) {
    echo json_encode([
        "status" => false,
        "msg" => "Los campos no pueden estar vacios"
    ]);
    die();
}
//preparamos el array con los datos
$arrData = array(
   $txtID
);
//preparamos la consulta
$sql = "DELETE FROM categories WHERE idCategories=?;";
$request = delete($conexion, $arrData, $sql);
if ($request) {
    echo json_encode([
        "status" => true,
        "msg" => "Registro eliminado correctamente"
    ]);
    die();
}
