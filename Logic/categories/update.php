<?php
$arrayDatos = array(
    $name,
    $description,
    $id
);
$sql = "UPDATE categories SET c_name=?,c_description=? WHERE idCategories=?;";
$response = update($conexion, $arrayDatos, $sql);
if ($response) {
    echo json_encode([
        "status" => true,
        "msg" => "Registro actualizado correctamente"
    ]);
    die();
} else {
    echo json_encode([
        "status" => false,
        "msg" => "Error al actualizar el registro"
    ]);
    die();
}
