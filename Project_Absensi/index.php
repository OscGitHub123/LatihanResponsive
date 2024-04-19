<?php
require "connect.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Absensi</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/style.css">
</head>
<body class="bg-light">

    <svg class="bground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,224C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>

    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <h1 class="text-center mb-4">Selamat Datang di Sistem Absensi</h1>
                
                <div class="card">
                    <div class="card-body">
                        <form action="proses_absensi.php" method="POST">
                            <div class="mb-3">
                                <label for="nama" class="form-label">Nama:</label>
                                <input type="text" id="nama" name="nama" class="form-control" required>
                            </div>

                            <div class="mb-3">
                                <label for="nomor_id" class="form-label">Nomor ID/NIK:</label>
                                <input type="text" id="nomor_id" name="nomor_id" class="form-control" required>
                            </div>

                            <div class="mb-3">
                                <label for="tanggal" class="form-label">Tanggal:</label>
                                <input type="date" id="tanggal" name="tanggal" class="form-control" required>
                            </div>

                            <div class="mb-3">
                            <label for="absensi">Absensi:</label>
                                <select  id="absensi" class="form-select" name="absensi" onchange="toggleDocumentField()">
                                <option value="hadir">Hadir</option>
                                <option value="sakit">Sakit</option>
                                <option value="izin">Izin</option>
                                </select>

                            </div>
                            
                            <div class="mb-3" id="documentField" style="display: none;">
                                <label for="documentImage"></label>
                                <input type="file" id="documentImage" name="documentImage">
                                </div>
                            <div class="mb-3">
                                <label for="jam_masuk" class="form-label">Jam Masuk:</label>
                                <input type="time" id="jam_masuk" name="jam_masuk" class="form-control" required>
                            </div>
<br>
                            <div class="mb-3">
                                <label for="jam_keluar" class="form-label">Jam Keluar:</label>
                                <input type="time" id="jam_keluar" name="jam_keluar" class="form-control">
                            </div>

                            <div class="mb-3">
                                <label for="keterangan" class="form-label">Keterangan:</label>
                                <textarea id="keterangan" name="keterangan" rows="4" class="form-control"></textarea>
                            </div>

                            <input type="submit" value="Absen" class="btn btn-primary">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <svg class="bground bot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,224C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
