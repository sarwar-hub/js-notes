// extend a class


// Main class
class Students {
    // common properties
    name;
    roll;
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
    }
}





// 'Students' extends by 'ClassSeven' class
class ClassSeven extends Students {
    class = 'Seven'; 
    constructor(name, roll) { // parameters come from class name, where excecuted.
        super(name, roll);
    }
}


// 'Students' extends by 'ClassTen' class
class ClassTen extends Students {
    class = 'Ten';
    optionalSubject; // this optionalSubject
    constructor(name, roll, optionalSubject) { // parameters come from class name, where excecuted.
        super(name, roll);
        this.optionalSubject = optionalSubject;
    }
}


// ClassSeven
const sarwar = new ClassSeven('Sarwar', 12);
console.log(sarwar);

// ClassTen
const sarwar2 = new ClassTen('Sarwar', 10, 'HM');
console.log(sarwar2);