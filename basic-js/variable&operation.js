

// Variables are container for storing data.

// variable named cameraPrice is containing the price of a camera.
var cameraPrice = 15000;
//console.log(cameraPrice); // this line of code will show the value in console.



// Types of data ( Normally used in variables )
/**
 * Number
 * String
 * Boolean
 * Undefined
*/

var mobilePrice = 15000; // Number
var mobileBrand = "Nokia"; // String ( static )
var waterProof = false; // Boolean ( true, false )
var camera; // Undefined ( this variable decleared but, not defined the value )

// We can check the types of these data by "typeof" method.
//console.log(typeof mobilePrice); // change the name of variable to see different types.



// Operators
/**
 * Addition ( + )
 * Substraction ( - )
 * Multiplication ( * )
 * Division ( / )
 * Modulus ( % )
*/

// We can run operation in two operands by operators.

// Add value by addition operator( + )
var mobile = 15000;
var laptop = 25000;
var total = mobile + laptop;
//console.log(total);

// Add value by substraction operator( - )
var mobile = 15000;
var laptop = 25000;
var difference = laptop - mobile;
//console.log(difference);





// Change a varible value ( Direct change )
var watchPrice = 2000;
//console.log(watchPrice); // Normal price
watchPrice = 2500; 
//console.log(watchPrice); // Now we can see the Extended price



// Add to value
var mousePrice = 1000;
//console.log(mousePrice); // It will show mormal price
mousePrice = mousePrice + 500;
//console.log(mousePrice); // It will show with added price



// Shorthand operation
penPrice = 5
penPrice += 5; // +=, -=, *=, /=
//console.log(penPrice); // It will show with added price of the pen.



// Increement and Decreement
penPrice++; // pen price will increase by 1
//console.log(penPrice);

penPrice--; // pen price will decrease by 1
//console.log(penPrice);





// Concatination of string type values

var part1 = "Hello"; // first part of the sentence 
var space = " " // there is a space
var part2 = "World"; // last part of the sentence
var theSentance = part1 + space + part2;
//console.log(theSentance); // uncomment it and see the result




// Convert string to number ( if we find number in qoatation )
var x = "7";
//console.log(typeof x); // check the type ( it will show string )

// we can change it to number by parseInt() function
var x = parseInt(x); // changed to number ( to change in to float, use parseFloat() function )
//console.log(typeof x); // Now, check the type.


// Addition of 0.1 and 0.2 ( exceptional )
var sum = 0.1 + 0.2
var sum = sum.toFixed(1); // toFixed method defined the length after dot ( but the result will be string )
// Now convert it to float number using parseFloat() function
var sum = parseFloat(sum);
//console.log(sum); // see the float number version of sum




// Remainder - use of Modulus operator( % )
var a = 101;
var b = 5;
// Remainder of a/b 
var remainder = a%b // variable contain the number that is remained after a is divided by b
//console.log(remainder);// it will be 1






// Task ( get average )

// skill
var html = 70;
var css = 50;
var js = 50;
var tailwind = 80;
var react = 80;

var skillTypes = 5;

var totalSkill = html + css + js + tailwind + react;
var averageSkill = totalSkill/skillTypes;
//console.log(averageSkill);




// Compare two variable (check possibility)
var number1 = 10;
var number2 = 9;
//console.log( number1 < number2 ); // will show flase
//console.log( number1 > number2 ); // will show true
//console.log( number1 == number2 ); // will show false
//console.log( number1 !== number2 ); // will show true