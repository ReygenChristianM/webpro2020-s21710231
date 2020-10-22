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


///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercise 
//Convert to ES6
function yearUntilRetirement(year, firstName){
  var age = 28;
  var retirement = 65 - age;
  if(retirement>0){
    console.log(firstName+ " retired in "+retirement+" years")
  }else{
    console.log(firstName+ " is already retired")
  }
}


//ES6
const yearUntilRetirement= (year, firstName) => {
  let age = 28;
  let retirement = 65-age;
  if(retirement>0){
    console.log(`${firstName} retired in ${retirement} years`);
  }else{
    console.log(`${firstName} is already retired`);
  }
  
}






  