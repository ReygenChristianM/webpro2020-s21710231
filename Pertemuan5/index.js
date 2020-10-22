/* 
     1.Array
*/

//deklarasi array
let angka=['1','2','3','4','5','6','7','8'];
let buah=['mangga','apel','jeruk'];
let arr=['text',1,true];
console.log(angka);
console.log(buah);
console.log(arr);

let myFunc= function(){
    return "Hello Array";
}

let arr2=['text',1,true,myFunc(),[1,2,3,4]];
//mengakses element dalam array
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2])
console.log(arr2);

console.log(typeof arr2);
console.log(arr2.length);

//deklarasi array menggunakan kata kunci new
let buah2= new Array("salak","jambu","melon");
console.log(buah2);

////Manipulasi Array
////1.Menambah isi array
// let mhs=[];
////Manual
// mhs[0]="John";
// mhs[1]="Bob";
// mhs[2]="Jane";
// mhs[3]="peter";
// console.log(mhs)
////2.Mengubah isi array
// mhs[1]="Donny"
// console.log(mhs);

////3.Menghapus isi array
// mhs[2]=undefined;
// console.log(mhs);

// //4.Menampilkan isi Array
// let mhs=["John","Bob","Jane","Peter"];

// for (let i=0;i<mhs.length;i++){
//     console.log("Mahasiswa ke-"+i+0+" Adalah "+mhs[i]);
// }

//Method dalam array
//1.length
//2.toString
let mhs=["John","Bob","Jane","Peter"];
console.log(mhs.toString());
//3.join
console.log(mhs.join(" - "));
//4.push, pop, unshift, shift

mhs.push("Reygen");//menambahkan di paling belakang
mhs.push("Stenly");
console.log(mhs.join(" - "));

mhs.pop();//menghapus yang paling belakang
console.log(mhs.join(" - "));

mhs.unshift("Ito");//menambahkan di paling depan
console.log(mhs.join(" - "));
mhs.shift();//menghapus paling depan
console.log(mhs.join(" - "));

//5.Concat
let buah=["mangga","apel","anggur"];

let sayur=["kangkung","bayam","buncis"];

let makanan=sayur.concat(buah);
console.log(makanan);

//6.Splice & Slice
//a.splice : menambah,menghapus,mengganti element dalam array

let buah2=["pisang","mangga","apel","jeruk"];
buah2.splice(2,2,"melon","semangka")//menambah dari index ke-2,menghapus 2 element mulai dari index ke-2
console.log(buah2.join(" - "));
//b.slice 
let buah3=buah2.slice(0,3);
console.log(buah3.join(" - "));

//7.forEach & Map

//forEach 
let num=[1,2,3,4,5,6,7,8];
angka.forEach(function(el){
    console.log(el);
})

//Map : sama seperti foreach tapi me return array
let num2=num.map(function(el){
    console.log(el);
})

console.log(num2);

//8.Sort
let number=[1,3,7,6,4];
let ms=["john","rain","bob"];

angka.sort();
console.log(number);
ms.sort();
console.log(ms);

//9.Filter

let nums = [1,2,3,4,5,6,7,8];

let nums2=nums.filter(function(el){
    return el> 5
})
console.log(nums2);