<?php
require "../connect.php";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Sistem Absensi</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Sistem Absensi</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Manajemen Karyawan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Manajemen Absensi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Izin dan Cuti</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pengaturan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Keluar</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Content -->
    <div class="container mt-4">
        <h2>Dashboard</h2>
        <!-- Konten Admin Dashboard disini -->
    </div>

    <!-- Footer -->
    <footer class="footer mt-auto py-3 bg-dark text-white">
        <div class="container text-center">
            <span class="text-muted">Sistem Absensi &copy; 2024</span>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="scripts.js"></script>
</body>

</html>
