function toggleDocumentField() {
    var absensi = document.getElementById("absensi").value;
    var documentField = document.getElementById("documentField");
  
    if (absensi === "sakit") {
      documentField.style.display = "block"; // Tampilkan kolom document image
    } else {
      documentField.style.display = "none"; // Sembunyikan kolom document image
    }
  }

  