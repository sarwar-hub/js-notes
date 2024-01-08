// While loop


var x = 0;
// it means loop will be running untill the condition is false
while ( x < 5 ) {
    //console.log('loop running');
    // have to increase the value of x, Nor condition never end and also the loop
    x++;
}
// this will run 5 times couse of it starts from 0






// Show even numbers in 0 - 10
var number = 0;
while ( number <= 10 ) {
    //console.log(number);
    number += 2;
}


// Show odd numbers in 0 - 10
var number = 1;
while ( number <= 10 ) {
    //console.log(number);
    number += 2;
} 








// For loop

for ( var i = 0; i <= 10; i++ ) {
    //console.log(i);
} 





// Get array elements by for loop

let fruits1 = ['Apple', 'Banana', 'Grap'];
for ( var i = 0; i < fruits1.length; i++ ) {
    var fruit = fruits1[i]; 
    //console.log(fruit);
}



// Get array elements by for-of loop
const friends = ['Anik', 'Ashik', 'Jihad', 'Musa'];
for ( const friend of friends ) {
    console.log(friend);
}





// Break

 // Break within value of i
for ( var i = 0; i < 10 ; i++ ) {
    if ( i > 5 ) {
        break; // loop will be stop when i is greater than 5
    }
    //console.log(i);
}


// Break within element name
let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
for ( var i = 0; i < fruits.length; i++ ) {
    var fruit = fruits[i];
    if ( fruit == 'Mango' ) {
        break; // Loop will stop when fruit is equel to 'Mango'
    }
    //console.log(fruit);
}







// Continue

let nums = [ 10, 20, 30, 40, 50, 15, 25, 35, 45 ];
for ( var i = 0; i < nums.length; i++ ) {
    var num = nums[i];
    if ( num < 30 ) {
        continue; // loop will skip elements under 30
    }
    //console.log(num);
}







// Reverse loop ( show 10 - 0 )
for ( var i = 10; i >= 0; i-- ) {
    //console.log(i);
} 




// Check even of odd
var numbers = [15, 20, 25];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if ( number%2 == 0 ) {
        //console.log(true);
    } else {
        //console.log(false);
    }
}