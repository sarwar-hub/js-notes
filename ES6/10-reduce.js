// reduce
// reduce(): get elements from array, do an operation of all elements and returns the final result according to direction.


// sum of all elements
const numbers = [1,2,3,4,5];
const sum = numbers.reduce( (accumulatedPrev, next) => accumulatedPrev + next , 0 ); // 0 is starting value;
// accumulatedPrev contains sum of every operation
//console.log(sum);
