// A class is a template of making object
/**
 * class name should be starts with capital letter
 * a class needs 
    (i) property (property assigned with '=')
    (ii) constractor method (a method that used to assign unassigned properies)
    (iii) other methods if need
*/ 



// make a template of student's overview
class Student {
    // properties
    name; // unassigned property that will assigned in constructor's argument from class names parameter.
    feePerMonth = 500;
    month;
    totalFee;
    class = 'Ten';

    // constractor method
    constructor(name, month) {
        this.name = name;
        this.month = month;
        this.totalFee = this.feePerMonth * month;
    }

    // other methods to do
    comment(comment){
        console.log( `He is ${comment}` );
    }

}

// get object 
const sarwar = new Student( 'Sarwar', 5 ); // to excecute, write 'new' before class name and parameters are for constructor method.
// for other methods
sarwar.comment('good'); // other methods access by this.

console.log(sarwar);