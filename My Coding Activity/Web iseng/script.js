// Ambil elemen caption
var captionElement = document.getElementById("carousel-caption");

// Fungsi untuk menampilkan caption sesuai dengan slide yang aktif
function updateCaption() {
  var activeSlide = document.querySelector(".carousel-item.active");
  captionElement.classList.add("carousel-caption");
  var captionText = activeSlide.dataset.caption;
  captionElement.textContent = captionText;
}

// Panggil fungsi updateCaption saat slide berubah
var carousel = document.getElementById("carouselExampleControls");
carousel.addEventListener("slid.bs.carousel", updateCaption);


var countdownDate = new Date("August 9, 2023 16:00:00").getTime();

    // Update countdown every 1 second
    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display countdown
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // If countdown is finished, display message
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Acara telah berlangsung!";
      }
    }, 1000);



document.addEventListener('DOMContentLoaded', function() {
  // Mengambil elemen-elemen form
  const form = document.getElementById('form-rsvp');
  const namaInput = document.getElementById('input-nama');
  const ucapanInput = document.getElementById('input-ucapan');
  const kontainerPesan = document.getElementById('pesan-chat');

  // Menambahkan event listener pada form ketika dikirim
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const nama = namaInput.value;
    const ucapan = ucapanInput.value;

    // Membuat elemen untuk pesan output
    const pesan = document.createElement('div');
    pesan.classList.add('pesan', 'pesan-output');
    const balonPesan = document.createElement('div');
    balonPesan.classList.add('balon-pesan');
    balonPesan.classList.add('float-left')
    const teksPesan = document.createElement('p');
    teksPesan.classList.add('teks-pesan');
    teksPesan.innerHTML = `<strong>${nama}</strong>: ${ucapan}`;

    // Menambahkan pesan output ke dalam kontainer pesan
    balonPesan.appendChild(teksPesan);
    pesan.appendChild(balonPesan);
    kontainerPesan.appendChild(pesan);

    // Mengosongkan field input setelah dikirim
    namaInput.value = '';
    ucapanInput.value = '';
  });
});