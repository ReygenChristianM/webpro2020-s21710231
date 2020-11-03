//Review Arrow Function

//Single Argument
// const calcAge = year => {
//     return 2020-year;
// }
// calcAge(2000);

//Multiple Argument
// const calcAge = (birthYear, currentYear) => {
//     return currentYear-birthYear;
// }
// calcAge(2000, 2020);

//No Argument with implicit return value
// const calcAge=()=> 2020-1992;
//implicit return value adalah suatu kondisi di mana sebuah fungsi langsung mengembalikan nilai
// tanpa ada deklarasi variabel atau operasi lainnya di dalamnya.


const years = [1990,1992,2001,2005];

// const calcAge5=years.map(function(el){
//     return 2020-el;
// })
// console.log(calcAge5);

const calcAge6=years.map((el)=> 2020-el)

console.log(calcAge6);


/*Default Parameter*/

//contoh
// const calcAge= (birthYear, currentYear=2020)=>currentYear-birthYear

// console.log(calcAge(2000,2021));