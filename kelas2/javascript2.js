function halo() {
  alert("halo javascript");
}
function waktu() {
  document.getElementById("waktu").innerHTML = Date();
}
function Zodiak() {
  let tanggal = document.getElementById("tanggal").value;
  let bulan = document.getElementById("bulan").value;
  let zodiak = "belum dibuat";

  if (bulan == 1) {
    if (tanggal > 0 && tanggal < 20) {
      zodiak = "aries";
    }
    if (tanggal > 19 && tanggal < 32) {
      zodiak = "taurus";
    }
  }

  if (bulan == 2) {
    if (tanggal > 0 && tanggal < 20) {
      zodiak = "gemini";
    }
    if (tanggal > 19 && tanggal < 31) {
      zodiak = "cancer";
    }
  }

  if (bulan == 3) {
    if (tanggal > 0 && tanggal < 20) {
      zodiak = "leo";
    }
    if (tanggal > 19 && tanggal < 32) {
      zodiak = "virgo";
    }
  }

  document.getElementById("zodiak").innerHTML = zodiak;
}
function kali() {
  let a = document.getElementById("bill1").value;
  let b = document.getElementById("bill2").value;
  let hasil = a * b;
  document.getElementById("hasil").innerHTML = hasil;
}

function nama() {
  document.getElementById("name").innerHTML = "Ragil Mina Aulia";
}

function namasaya() {
  document.getElementById("saya").innerHTML =
    document.getElementById("nama").value;
}

function penjumlahan() {
  let c = document.getElementById("angka1").value;
  let d = document.getElementById("angka2").value;
  let HASIL = parseInt(c) + parseInt(d);
  document.getElementById("HASIL").innerHTML = HASIL;
}

let btn = document.getElementById("jam");
btn.onclick = function(){
    document.getElementById("waktu").innerHTML= Date();
}

let isi=document.getElementById("ketik");
let tampil=document.getElementById("waktu");
isi.onmouseover=function(){
  tampil.innerHTML=isi.value;
}

let hari=document.getElementById("hari");
hari.addEventListener("click", coba);

function coba(){
  alert("coba coba");
}
 

