
// distructuring
// distructuring object
const {name, age} = {name: 'Sarwar', age: 23}; // Left side name and age containing value of name and age from the object.
// same
const info = {name2: 'Sarwar', age2: 23};
const {name2, age2} = info;



// distructuring array
const [friend1, friend2] = ['Anik', 'Ashik']; // Left side name and age containing value of name and age from the array
//same
const friends = ['Anik', 'Ashik'];
const [friend3, friend4] = friends;



// distructuring functions return value (array)
function values() {
	return ['9', '7', '2']; // this is an array
}
const [num1, num2, num3] = values();