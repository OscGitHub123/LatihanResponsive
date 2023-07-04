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


document.getElementById('rsvpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit

  // Mendapatkan nilai input
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  var presence = document.getElementById('attendance').value;

  // Menambahkan komentar ke dalam kontainer komentar
  addComment(name, message, presence);

  // Mengosongkan form
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
  document.getElementById('attendance').value = '';
});

function addComment(name, message, presence) {
  var commentContainer = document.getElementById("comment-wrapper");
  var commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  var commentAvatar = document.createElement("div");
  commentAvatar.classList.add("avatar");

  // Mengambil huruf pertama dari nama pengguna
  var initial = name.charAt(0).toUpperCase();
  
  // Membuat avatar berisi huruf pertama
  commentAvatar.innerText = initial;

  commentDiv.appendChild(commentAvatar);

  var commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  var commentName = document.createElement("h4");
  commentName.innerText = name;
  commentContent.appendChild(commentName);

  var commentMessage = document.createElement("p");
  commentMessage.innerText = message;
  commentContent.appendChild(commentMessage);

  commentDiv.appendChild(commentContent);
  commentContainer.appendChild(commentDiv);
}
