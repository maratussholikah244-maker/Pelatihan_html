// Pastikan kode dijalankan setelah elemen HTML dimuat
document.addEventListener("DOMContentLoaded", function() {
  const tombolSapa = document.getElementById("sapaButton");
  
  // Cek dulu apakah tombol ada di halaman
  if (tombolSapa) {
    tombolSapa.addEventListener("click", function() {
      alert("Halo! Terima kasih ya sudah mampir 😊");
    });
  }
});
