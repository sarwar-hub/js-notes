
// arrow function
const sum = (x,y) => x+y;

// arrow function for single parameter
const sum2 = (x) => x+y; // fisrt breaket for parameter is optional

// arrow function for empty parameter
const pie = () => 3.1415;

// arrow function for multiple line
const sum3 = (x,y,z) => {
	const add = x+y;
	const add2 = y+z;
	return add + add2; // you have to return in mulitlple line arrow function
}



// set defalut value of a functions parameter
function calculation(num1 = 0, num2 = 0) { // we can set default value in arguments
	const sum = num1 + num2;
	return sum;
}

