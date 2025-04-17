let value = true;

// Klik tombol submit
document.getElementById("submit").addEventListener("click", function () {
  submitMessage();
});

// Input data message, menampilkannya dan reset form
function submitMessage() {
  event.preventDefault();

  // Input Nama
  const name = document.getElementById("name").value;
  // Input Tanggal lahir
  const birthdate = document.getElementById("birthdate").value;
  // Input Gender
  const gender = document.querySelector('input[name="gender"]:checked');
  // Input Message
  const message = document.getElementById("msg").value;

  // Validation
  if (name && birthdate && gender && message) {
    value = true;
  }
  if (name == "") {
    document.getElementById("name-alert").style.display = "block";
    value = false;
  } else {
    document.getElementById("name-alert").style.display = "none";
  }
  if (birthdate == "") {
    document.getElementById("birthdate-alert").style.display = "block";
    value = false;
  } else {
    document.getElementById("birthdate-alert").style.display = "none";
  }
  if (!gender) {
    document.getElementById("gender-alert").style.display = "block";
    value = false;
  } else {
    document.getElementById("gender-alert").style.display = "none";
  }
  if (message == "") {
    document.getElementById("msg-alert").style.display = "block";
    value = false;
  } else {
    document.getElementById("msg-alert").style.display = "none";
  }

  // Output data
  if (value) {
    // Name
    document.getElementById("result-message-name").innerHTML = name;
    // Birthdate
    // Mengubah urutan YYYY-MM-DD menjadi DD-MM--YYYY
    if (birthdate) {
      const date = birthdate.split("-");
      const dateReverse = `${date[2]}-${date[1]}-${date[0]}`;
      document.getElementById("result-message-birth").innerHTML = dateReverse;
    }
    // Gender
    if (gender) {
      if (gender.value === "male") {
        document.getElementById("result-message-gender").innerHTML =
          "Laki-laki";
      } else {
        document.getElementById("result-message-gender").innerHTML =
          "Perempuan";
      }
    }
    // Message
    document.getElementById("result-message-msg").innerHTML = message;
    // Show message time
    const waktu = new Date().toLocaleString();
    document.getElementById("result-message-time").innerHTML = waktu;
    // Reset form
    document.getElementById("form-message").reset();
  }
}

function hideAlert() {
  document.getElementById("name-alert").style.display = "none";
  document.getElementById("birthdate-alert").style.display = "none";
  document.getElementById("gender-alert").style.display = "none";
  document.getElementById("msg-alert").style.display = "none";
}

hideAlert();

let indexBanner = 0;

function nextBanner() {
  indexBanner++;
  showBanner();
}
// Menampilkan tiap banner
function showBanner() {
  const banner = document.getElementsByClassName("banner");

  if (indexBanner > banner.length - 1) {
    indexBanner = 0;
  }
  // Hide semua banner
  for (let i = 0; i < banner.length; i++) {
    banner[i].style = "display : none";
  }
  // Show banner seusai index
  banner[indexBanner].style = "display : block";
}

setInterval(() => {
  nextBanner();
}, 3000);

// Meminta nama saat masuk pertama kali ke halaman
function displayName() {
  const nameHome = prompt("Masukkan nama anda");
  if (nameHome) {
    document.getElementById(
      "name-home"
    ).innerHTML = `Hello ${nameHome}, Welcome to Website`;
  } else {
    document.getElementById(
      "name-home"
    ).innerHTML = `Hello Guest, Welcome to Website`;
  }
}

// displayName();
