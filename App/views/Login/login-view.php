<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <div style="margin: auto; width: 50%; background-color: aqua; padding: 10px;">
        <h1>Inicio de Sesion</h1>
        <form id="form_login">
            <div style="margin-bottom: 1rem;">
                <label for="txtUser">Usuario</label>
                <input type="text" name="txtUser" id="txtUser">
            </div>
            <div style="margin-bottom: 1rem;">
                <label for="txtPassword">Contraseña</label>
                <input type="password" name="txtPassword" id="txtPassword">
            </div>
            <div style="margin-bottom: 1rem;"><button type="submit">Inicio de Sesion</button></div>
        </form>
    </div>
    <script>
        let base_url = "<?= BASE_URL ?>";
    </script>
    <script src="<?= BASE_URL ?>App/assets/js/Login/functions_login.js"></script>
</body>

</html>