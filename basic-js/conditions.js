// if your mark is less then 40, your will see "Your are Failed". Nor, "You are passed"

// Normal condition

mark = 40;
if( mark < 40 ) {
    console.log('You are Failed');
} 
else {
    //console.log('You are passed');
}







// Multistage condition



mymark = 340;

if ( mymark > 100 || mymark < 0 ) {
    //console.log('Invalid input');
}
else if ( mymark > 90 ) {
    console.log('You got A+');
}
else if ( mymark > 80 ) {
    console.log('You got A');
}
else if ( mymark > 70 ) {
    console.log('You got A-');
}
else if ( mymark > 60 ) {
    console.log('You got B+');
}
else if ( mymark > 50 ) {
    console.log('You got B');
}
else if ( mymark >= 40 ) {
    console.log('You are PASSED');
}
else {
    console.log('You are FAILED');
}








// Multiple conditions



// configs
var hugeMoney = false;
var handu = true;
var smoking = false;



if ( hugeMoney == true || (smoking == false && handu == true) ) {
    //console.log('Maiya raji');
} else {
    console.log('Patro change');
}







// Nested condition




// Question - write correct numbers as their spelling
var five = 5;
var seven = 7;
var three = 3;
var one = 1;

if ( five == 5 ) {
    if ( seven == 7 ) {
        if ( three == 3 ) {
            if ( one == 1 ) {
                //console.log('Well doen');
            } else {
                console.log('Try again');
            }
        } else {
            console.log('Try again');
        }
    } else {
        console.log('Try again');
    }
} else {
    console.log('Try again');
}




/**
 * make a condition that 
    1. show numbers 1-50,
    2. show 'foo' if the number divisible by 3,
    3. show 'bar' if the number divisible by 5,
    4. show 'foobar' if the number divisible by both 3 nd 5,
*/

for( let i = 1; i <= 50; i++ ) {
    if ( i % 3 == 0 && i % 5 == 0 ) { // if have double condition than take it at first
        //console.log('foobar');
    }
    else if ( i & 3 == 0 ) {
        //console.log('foo');
    }
    else if ( i % 5 == 0 ) {
        //console.log('bar');
    }
    else {
        //console.log(i); // not showing all, showing conditionally
    }
}










