/*
    Destrukturisari 
*/

//Menyimpan isi array atau ke variabel-variabel lain//

//Tanpa menggunakan destrukturisari
let buah = ["mangga", "pisang", "anggur"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

//Contoh Dengan menggunakan Destrukturisasi
let persona = ["Orpheus","Izanagi","Arsene","Thanatos"]
let [persona1,persona2,persona3,persona4] = persona;

console.log(persona1); // Output: Orpheus
console.log(persona2); // Output: Izanagi
console.log(persona3); // Output: Arsene
console.log(persona4); // Output: Thanatos

// Memilih element yang ingin disimpan atau tidak ke variabel 
// gunakan koma kosong untuk melewati element kedua dan keempat 
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter


