// map (Morph Array Piece by piece)
// map() can read all elements from an array and do work for every elements according to direction. finally changed elements puts in written array.




// find doubles
const numbers = [1,2,3,4,5];
const makeDouble = element => element * 2; // this arrow function will multiply an element.
const doubles = numbers.map( makeDouble ); // 'doubles' containing changed elements as array. inner function should be write without '()'
//console.log(doubles);





// find products
const products = [
    {name: "Mobile", price: 20000},
    {name: "Laptop", price: 50000}
];

// products
const product = products.map(products => products);
console.log(product);
// product names
const productNames = products.map(products => products.name);
console.log(productNames);





// find length
const names = ['Sarwar', 'Anik', 'Ashik'];
const nameLength = names.map(name => name.length);
//console.log(nameLength);



// forEach()
// forEach dosen't return anything (return undefined). it'll acts as map()
const arrayLength = names.forEach(name => names.length);
//console.log(arrayLength);