<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Principal</title>
    <link rel="stylesheet" href="<?= BASE_URL ?>App/assets/css/style.css">
</head>

<body>
    <!-- Menú lateral -->
    <div class="sidebar" id="sidebar">
        <h2 class="logo">Mi Sistema</h2>
        <ul class="menu">
            <li><a href="#dashboard" class="menu-link">Dashboard</a></li>
            <li><a href="#usuarios" class="menu-link">Usuarios</a></li>
            <li><a href="#reportes" class="menu-link">Reportes</a></li>
            <li><a href="#configuracion" class="menu-link">Configuración</a></li>
            <li><a href="#soporte" class="menu-link">Soporte</a></li>
        </ul>
    </div>

    <!-- Contenedor principal -->
    <div class="main-content">
        <!-- Menú superior -->
        <header class="header">
            <h1 class="system-name">Mi Sistema de Gestión</h1>
            <button class="logout-btn" onclick="logout()">Cerrar Sesión</button>
        </header>

        <!-- Área de contenido -->
        <section class="content">
            <h2>Gestion de Categorias</h2>
            <p>Gestion y administracion de categorias </p>
        </section>
        <section class="content-body" >
            <div>
                <form action="">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="txtNombre" >
                    </div>
                </form>
            </div>
        </section>        
    </div>
    <script>
        let base_url = "<?= BASE_URL ?>";
    </script>
    <script src="<?= BASE_URL ?>App/assets/js/main.js"></script>
</body>

</html>