/*
    Arrow Function
 */

 //Deklarasi fungsi biasa
function ucapkanSalam() {
    return "Selamat Pagi";
  };
  
  //Dengan Arrow Function

  // fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
  };
  
  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
  // fungsi yang tidak memiliki parameter
  const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  
  console.log(namaJenisAnjing()); // Output: Pug (hasil random)
  