// Recursing function - Calling a function inside same function

// get sum of 1 - 100
function addSeriallyOf(i) {
    if ( i == 1 ) {
        return i;
    }
    return i + addSeriallyOf(i-1);
}
//console.log(addSeriallyOf(5));




// get factorial of 5
function factorialOf(num){
    if(num === 1){
        return num;
    }
    return num * factorialOf(num-1) 
}
//console.log(factorialOf(5));
