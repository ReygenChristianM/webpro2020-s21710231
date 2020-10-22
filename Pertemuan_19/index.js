//Class & Constructor//

class Person{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName; 
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

//Membuat object dari class
const person1= new Person("Reygen", "Moningka");
const person2= new Person("Christofel", "Robert");

person1.displayFullName();
person2.displayFullName();

//Inheritance//
class Student extends Person{
    constructor(firstName, lastName, NIM){
        super(firstName, lastName);//memanggil dari class super
        this.NIM=NIM;
    }
    static sayHello(){//Static Member
        console.log(`Hello World`);
    }
    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }
    //Setter dan Getter//
    set studentScore(score){
        this.score=score;
    }

    get studentScore(){
        return this.score;
    }
}

const Reygen = new Student("Ito", "Moningka", "999999999");
Reygen.displayFullName();
Reygen.displayNIM();
Student.sayHello();//Memanggil static member 

//Setter & Getter
Reygen.studentScore=95;
console.log(Reygen.studentScore);
