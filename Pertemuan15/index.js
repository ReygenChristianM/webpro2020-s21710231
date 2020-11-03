//Destructuring
//-------------------------------------//

//Memecah item atau property pada array atau object kedalam variabel yang berbeda

//1.Array

const colors = ["merah","kuning","hijau"];
// let satu=colors[0];
// let dua=colors[1];
// let tiga=colors[2];

//using Destructuring
// let [satu,dua,tiga]=colors;
// console.log(satu,dua,tiga);

// let [satu, ,tiga]=colors;
// console.log(satu,tiga);

//Contoh default argument
let[satu,dua,tiga,empat="biru"]=colors;
console.log(satu,dua,tiga,empat);


//2.Object

const user={
    name:"Reygen",
    gender:"male",
    age:20,
};

// let name=user.name;
// let gender=user.gender;
// let age=user.age;

//Using Destructuring
let{name,gender,age}=user;
console.log(name,gender,age);

//contoh default argument
let{name,gender,age,born="Manado"}=user;
console.log(name,gender,age,born);

//
// let{name,age}=user;
// console.log(name,age);

//
//let {name:nama,age:umur }= user;
//console.log(name,umur);

//3.Array Object 

const users=[
    {id:1,name:"john"},
    {id:2,name:"jane"},
    {id:3,name:"bob"},
];

let[user1,user2,user3]=users;
console.log(user1,user2,user3);


let[
    {id:idUser1,name:nameUser1},
    {id:idUser2,name:nameUser2},
    {id:idUser3,name:nameUser3},
]//=users;

//4.Kombinasi dengan Rest Operator

const warna = ["merah","kuning","hijau","biru"];
let [satu,...lainnya]=warna;

console.log(satu);
console.log(lainnya);