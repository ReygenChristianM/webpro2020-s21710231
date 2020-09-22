// Var, Let, Const

// let nama = "Reygen";
// let nama = "Christian";

// console.log(nama);//error 

//Scope dalam javascript
//1. Function Scope (var)
//2. Block Scope

//function scope


// (function test(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
// })();

// function test(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
// }

// test();
// console.log(i);//output : i is not defined


// //Block Scope (let,const)
// for (let j=0;j<10;j++){
//     console.log(j);
// }

// console.log(j);//j not defined karena j hanya bisa diakses dari dalam block

/*  Template Literal    */

const person ={
    firstName: "Reygen",
    lastName: "Moningka",
    Age:20,
};
//cara biasa
console.log("Halo nama saya "+person.firstName+" "+person.lastName+". Umur saya adalah "+person.Age+" tahun");
//Template Literal
console.log(`Halo nama saya ${person.firstName} ${person.lastName}. Umur saya adalah ${person.Age} tahun`)

