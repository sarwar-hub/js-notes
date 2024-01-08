// Find Maximum


// Function that will return max value from two
let mine = 70;
let she = 90;
isMax(mine, she)
function isMax(mark1, mark2) {
    if (mark1 > mark2) {
        //console.log('I got max');
    } else {
        //console.log('She got max');
    }
}



// Function that will return max value from three
let x = 5;
let y = 9;
let z = 7;

if (x > y && x > z) {
    //console.log('x is max');
}
else if (y > z && y > x) {
    //console.log('y is max');
}
else{
    //console.log('z is max');
}


// Function that will return max value from array
function getLargest(numbers) {
    let largest = numbers[0];
    for ( let i = 0; i < numbers.length; i++ ) {
        let number = numbers[i];
        if (number > largest) { // to get minimu, just change the condition here
            largest = number;
        }
    }
    return largest;
    
}   
let ages = [22, 38, 19,30, 15];
let largestAge = getLargest(ages);
//console.log(largestAge);
