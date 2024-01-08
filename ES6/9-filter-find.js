// filter (condition based, returns all filtered elements)
// filter() can read all elements from an array and filter every elements according to condition. finally all filtered elements puts in an array(in written variable acts like an array).



// filter odds
const numbers = [1,2,3,4,5];
const odds = numbers.filter(n => n%2 !== 0); // 'odds' containing odd number as array from 'numbers'
//console.log(odds);




// filter all cheaper
const products = [
    {name: "Asus", price: 25000},
    {name: "Vivo", price: 15000},
    {name: "Samsung", price: 45000},
    {name: "iPhone", price: 95000}
];


const cheapers = products.filter(prod => prod.price <= 25000); // pass a condition as filter direction (dont forget to set arrow functions parameter)
//console.log(cheapers);




// find
// find() acts as filter() but, returns first matched elemenet only.
const even = numbers.find(n => n%2 == 0);
//console.log(even);
