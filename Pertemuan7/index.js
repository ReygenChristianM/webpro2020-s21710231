/*
    Java Script Conditional
 */

 // if,else,else if
 let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}

// Switch Case

// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "selasa":
//     seragamSekolah = "kemeja hijau bawahan hitam";
//     break;
//   case "rabu":
//     seragamSekolah = "kemeja putih bawahan putih";
//     break;
//   case "kamis":
//     seragamSekolah = "kemeja batik merah bawahan hitam";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah);

/*Apabila kita mempunyai dua atau lebih kondisi yang berbeda, tetapi keputusan yang akan dijalankan sama,
kita bisa menggabungkan beberapa perintah case tanpa menggunakan break dan hanya menggunakan break di kondisi terakhir*/

let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah);


/*
    JavaScript Loop
*/


 //for 
 for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// For/in Loop
const buku1 = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };
 for (x in buku1) {
   console.log(x, ':', buku1[x]);
 }

 // For/of Loop
 const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku) {
  console.log(x);
}

// While
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//Do While
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 10);

