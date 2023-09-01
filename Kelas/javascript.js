let a = 2;
let b = 3;
let c = 4;
let d = 5;
let e = b + ((a * c) / a) * b * b + a - d;
/*3+2*4/2*3*3+2-5*/
console.log(e);

let x = 6;
let y = 5;
if (x > y) {
  console.log("benar");
} else {
  console.log("salah");
}

let nilai = 70;
let kkm = 80;
if (nilai > kkm) {
  console.log("lulus");
} else {
  console.log("tidak lulus");
}

let bulan = 2;
let tanggal = 20;
let zodiak = "belum dibuat";

if (bulan == 1) {
  if (tanggal > 0 && tanggal < 20) {
    zodiak = "Arie";
  }
  if (tanggal > 19 && tanggal < 32) {
    zodiak = "Taurus";
  }
}

if (bulan == 2) {
  if (tanggal > 0 && tanggal < 20) {
    zodiak = "Gemini";
  }
  if (tanggal > 19 && tanggal < 30) {
    zodiak = "Cancer";
  }
}

if (bulan == 3) {
  if (tanggal > 0 && tanggal < 20) {
    zodiak = "Leo";
  }
  if (tanggal > 19 && tanggal < 32) {
    zodiak = "Virgo";
  }
}

if (bulan == 4) {
  if (tanggal > 0 && tanggal < 20) {
    zodiak = "Libra";
  }
  if (tanggal > 19 && tanggal < 31) {
    zodiak = "Scorpio";
  }
}

if (bulan == 5) {
  if (tanggal > 0 && tanggal < 20) {
    zodiak = "Sagitarius";
  }
  if (tanggal > 19 && tanggal < 32) {
    zodiak = "Capricon";
  }
}

if (bulan == 6) {
  if (tanggal > 0 && tanggal < 20) {
    zodiak = "Aquarius";
  }
  if (tanggal > 19 && tanggal < 31) {
    zodiak = "Pisces";
  }
}

console.log(zodiak);
