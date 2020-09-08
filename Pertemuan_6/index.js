/*
    Object
*/

//Deklarasi object

//1.Object Literals 
const mhs1 ={ 
    namaDepan : 'John',
    namaBelakang : 'Doe',
    umur : 31,
    sudahLulus: true,
    alamat : {
        jalan :"jln. Arnold Mononutu",
        kecamatan :"Airmadidi",
        kabupaten :"Minahasa Utara",
    },
    IPSemester:[3.05,3.25,3.0,3.4],
    hitungIPK: function(){
        let total=0;
        this.IPSemester.forEach(function(el){
            total=total+el;
        })
        this.IPkumulatif= total/4;   
    },
};

//2.kata kunci new
// const mhs2 =  new Object();
// mhs2.namaDepan ="Jane";
// mhs2.namaBelakang ="Smith";


//Mengakses properti object
//1. Dot Notation
console.log(mhs1.umur);

//2. Bracket Notation
console.log(mhs1[namaBelakang]);

///////////////////////////
console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester[2]);
mhs1.hitungIPK();
console.log(mhs1);

//Delete
//delete mhs1.namaBelakang;

//Array Object 
const mahasiswa=[
    {
        nim:"001",
        namaDepan:"Reygen",
        namaBelakang:"Moningka",
    },
    {
        nim:"002",
        namaDepan:"Rey",
        namaBelakang:"Monigir",
    },
    {
        nim:"003",
        namaDepan:"Ren",
        namaBelakang:"Doe",
    },
];

mahasiswa.forEach(function(el){
    console.log(el);
})