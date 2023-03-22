class Human {
    // ES6 way of writing property
    /* constructor() {
        this.gender = 'male';
    } */

    // ES7 way of writing property
    gender = 'male'; 

    // ES6
    /* printGender() {
        console.log(this.gender);
    } */
    // ES7
    printGender = () => {
        console.log(this.gender); // but still need to use 'this' keyword to use a property
    }
}

class Person extends Human {
    constructor() {
        super(); // you don't need to call super in ES7
        this.name = 'Sid';
        this.gender = 'Mahapurush';
    }

    // Alternate ES7 way
    /*
    name = 'Sid';
    gender = 'Mahapurush';
    */

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();