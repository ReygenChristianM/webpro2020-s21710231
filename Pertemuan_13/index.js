/*
    Rest & Spread
*/

//Rest Operator

//contoh tanpa rest operator 
// const hitung =(a,b,c,d,e) => {
//     const angka = [a,b,c,d,e];
//     let total=0;
//    for(let i=0;i<5;i++){
//        total=total+angka[i];
//    }
//    return total;
// } 
// console.log(hitung(1,2,3,4,5));


//With Rest Operator
const hitung=(...angka)=>{
    let total=0;
    angka.forEach(el=>total=total+el);
    console.log(angka);//angka berisi array 
    return total;
}
console.log(hitung(1,2,3,4,5,6,7,8,9));//output : 45


//Spread Operator

const angka=[1,2,3,4,5];
console.log(angka);//output :[1,2,3,4,5]
console.log(...angka);//with Spread. output: 1 2 3 4 5

//1. duplikasi Array //
const angka2=[...angka];
angka[0]=10;
console.log(angka);
console.log(angka2);

//2. menggabungkan Array//

const angka3=[1,2,3,4,5];
const angka4=[6,7,8,9,10];

//Gabung menggunakan concat
const gabung= angka3.concat(angka4);
console.log(gabung);

//with Spread
const gabung6=[...angka3,...angka4];
// const gabung6=[...angka3,11,...angka4];//Menambahkan ditengah
console.log(gabung6);


//Objek

//Menambah Properti
let orang={
    nama:"Reygen",
    umur:20,
}
//orang.pekerjaan ="Mahasiswa";
//orang.Pendidikan ="SMA";

orang = {...orang, pekerjaan:"Mahasiswa", Pendidikan :"SMA"};
console.log(orang);

//Menggabungkan Objek
const obj1={a:1,b:2};
const obj2={c:3,d:4};

const objGabung={...obj1,...obj2};
console.log(objGabung);

