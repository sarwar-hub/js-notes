// Array can contain multiple values

// this array containing fruits names
let fruits = ['Apple', 'Banana', 'Grap'];

// index number of elements are starts from 0 to positve numbers
var indexOfElement = fruits.indexOf('Apple'); // Change element names to see their index number.
//console.log(indexOfElement); // result will be 0


// Get lenght of array
var lenghtOFArray = fruits.length;
//console.log(lenghtOFArray); // will be 3


// Get element by index number
var elementName = fruits[0]; // we'll get first element
//console.log(elementName); // will be "Apple"

// Set element name by index number
fruits[1] = "Orange"; // it will replace second element name to "Orange"
//console.log(fruits); // we can see second element name "Orange" instread of "Banana"



// Add an element to the last of an array
fruits.push('Mango');
//console.log(fruits); // we'll "Mango added as the last element of fruits(array)"

// Remove an element from last of an array
fruits.pop(); // no need to define element name or index number, pop always removes last element of an array
//console.log(fruits); // we can see two elements

// pop() returns the removed value
//var removedElement = fruits.pop(); // we can get removed element name




// Add an element to the first of an array
fruits.shift(); // shifted/removed the first element
//console.log(fruits);

// You can also add to first of the array by unshift("element");




// Remove duplicates from an array
let myAccessories = ['Headphone', 'Charger', 'Powerbank', 'Laptop', 'Mobile', 'Charger', 'Powerbank'];
let uniqueItems = removeDuplicates(myAccessories);
//console.log(myAccessories); // All items
//console.log(uniqueItems); // Unique items

function removeDuplicates(names) {
    let uniqueItems = []; // uniquItem is empty at start
    for( let i = 0; i < names.length; i++) {
        let name = names[i];
        if(uniqueItems.includes(name) == false) { // if uniqueItem has not the name than push the name
            uniqueItems.push(name); // push one by one by checking existance of element
        }
    }
    return uniqueItems;
}


