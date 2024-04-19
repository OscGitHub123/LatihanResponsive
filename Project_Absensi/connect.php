<?php

$servername = "localhost";  // Ganti dengan host database Anda
$username = "root";      // Ganti dengan username database Anda
$password = "";      // Ganti dengan password database Anda
$database = "absensi";  // Ganti dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
