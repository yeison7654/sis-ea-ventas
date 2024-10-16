<?php
//funcion para registrar en las tablas
function register($conexion, array $arrData, string $sql)
{
    try {
        //preparamos la consulta con la conexion
        $prepared = $conexion->prepare($sql);
        $prepared->execute($arrData);
        return $prepared;
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}
