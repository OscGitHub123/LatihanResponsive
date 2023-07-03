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




    var messages = []; // Array untuk menyimpan pesan-pesan
var currentSlideIndex = 0; // Indeks slide saat ini

document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Mengambil nilai-nilai input dari formulir
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var attendance = document.getElementById("attendance").value;

  // Membuat objek pesan
  var pesan = {
    name: name,
    message: message,
    attendance: attendance
  };

  // Menyimpan pesan dalam array
  messages.push(pesan);

  // Menampilkan output dalam output-slides
  var outputSlides = document.getElementById("output-slides");
  outputSlides.innerHTML = "";

  messages.forEach(function(item) {
    var outputElement = document.createElement("div");
    outputElement.className = "output-message";
    outputElement.innerHTML = "<h2>Terima kasih, " + item.name + "!</h2>" +
                              "<p>Ucapan Anda: " + item.message + "</p>" +
                              "<p>Kehadiran: " + item.attendance + "</p>";
    outputSlides.appendChild(outputElement);
  });

  // Reset formulir
  document.getElementById("rsvp-form").reset();

  // Mengatur indeks slide saat ini ke slide terakhir
  currentSlideIndex = messages.length - 1;
});

// Slide berikutnya
var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function() {
  var outputSlides = document.getElementById("output-slides");
  var slideHeight = outputSlides.clientHeight;

  // Menggeser slide hanya jika masih ada slide berikutnya
  if (currentSlideIndex < messages.length - 1) {
    currentSlideIndex++;
    outputSlides.style.transform = "translateY(-" + (slideHeight * currentSlideIndex) + "px)";
  }
});
