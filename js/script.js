let input = [];
let output = [];

document.getElementById("submit").addEventListener("click", function () {
  event.preventDefault();
  const waktu = new Date().toLocaleString();

  document.getElementById("result-message-time").innerHTML += waktu;

  //   Input Nama dan Menampilkannya di sebelah form
  input.push(document.getElementById("name").value);
  let name = (document.getElementById("result-message-name").innerHTML =
    input[0]);
  document.getElementById("result-message-name").innerHTML = ": ";
  document.getElementById("result-message-name").innerHTML += input[0];

  //   Input Tanggal lahir dan Menampilkannya di sebelah form
  input.push(document.getElementById("birthplace").value);
  // Mengubah urutan YYYY-MM-DD menjadi DD-MM--YYYY
  const date = input[1].split("-");
  const dateReverse = `${date[2]}-${date[1]}-${date[0]}`;
  document.getElementById("result-message-birth").innerHTML = ": ";
  document.getElementById("result-message-birth").innerHTML += dateReverse;

  //   Input Jenis Kelamin dan Menampilkannya di sebelah form
  input.push(document.querySelector('input[name="gender"]:checked').value);
  if (input[2] == "male") {
    document.getElementById("result-message-gender").innerHTML += "Laki-Laki";
  } else document.getElementById("result-message-gender").innerHTML += "Perempuan";

  //   Input Pesan dan Menampilkannya di sebelah form
  input.push(document.getElementById("msg").value);
  document.getElementById("result-message-msg").innerHTML = ": ";
  document.getElementById("result-message-msg").innerHTML += input[3];

  // Menampilkan Pengirim di banner Home
  document.getElementById(
    "greeting-home"
  ).innerHTML = `Hello ${name}, Welcome to Website`;

  // Reset form dan isi array input
  document.getElementById("form-message").reset();
  input = [];
});
