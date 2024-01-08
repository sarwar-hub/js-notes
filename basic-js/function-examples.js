// Convertion

// Make a function that coverts iches to feet
function inchToFeet(inch) {
    const feetValue = inch/12; // inch value is diveded by 12
    return feetValue; // this will return in function when called the function
}
const inchValue = 60; // given inch value which will go in functions parameter
const feetValue = inchToFeet(inchValue); 
//console.log(feetValue);


// Make a function that coverts miles to km
function MilesToKm(miles) {
    const kmValue = miles*1.609344;
    return kmValue;
}
const milesValue = 4;
const kmValue = MilesToKm(milesValue);
//console.log(kmValue);






// Function about convertion hour to minutes
function hourToMinute(hr) {
    let minuteCount = hr * 60;
    return minuteCount;
}
let getMinute = hourToMinute(1);
//console.log(getMinute);







// Make a function to check the input number is even or not
function isEven(input) {
    if ( input%2 == 0 ) {
        return true;
    } else {
        return false;
    }
}

const inputNumber = 22;
const isThatEven = isEven(inputNumber);
//console.log(isThatEven);








// Make a function that can show sum of all element of an array

function sumOfAll(elements) {
    let total = 0; // variable for first total value (for single value - addition)
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        total = total + element; // 'total' containing sum of elements evenly 
    }
    return total;
}

let prices = [ 20, 25, 30, 35 ]; 
let totalFinal = sumOfAll(prices); // function argument from array
//console.log(totalFinal);









// Get odd numbers from an array
function getOdd(numbers) {
    let oddNumbers = []; // variable will contain odd numbers (this is for multiple values)
    for( let i = 0; i < numbers.length; i++ ) {
        let number = numbers[i];
        if(number%2 !== 0) {
            oddNumbers.push(number); // will push odd number to 'oddNumbers' array // if single value than = . // if multiple it will be push().
        }
    }
    return oddNumbers;
}

// Function called and taken in an array
let odds = getOdd(prices); // 'odds' containing odd numbers from 'prices' array
//console.log(odds);

//console.log(sumOfAll(odds));  // Now use 'sumOfAll()' function to get sum of odd numbers






// Factorial ( Forward )
function factorialOf(number) {
    let result = 1;
    for(let i = 1;  i <= number; i++) {
        result = result * i // 'result' containing result of multiplication evenly
    }
    return result;
}
let output = factorialOf(5);
//console.log(output);


// Factorial ( Reverse )
function factorialOf(number) {
    let result = number;
    for( let i = number; i >= 1; i-- ) { // i starts from number value and runs till i >= 1
        result = result * i; // 'result' containing result of multiplication evenly
    }
    return result;
}
let output2 = factorialOf(10)
//console.log(output2);







// Is Leap Year
let years = [2023, 2024, 2025, 2028, 2030];
let leapYears = isLeap(years); // have to take functions value in a variable
//console.log(leapYears);

function isLeap(input) {
    let leapYears = []; // this variable will contain leap years (this is for multiple values)
    for(let i = 0; i < input.length; i++) { // have to check condition
        let year = input[i];
        if(year%4 == 0) {
            leapYears.push(year); // if single value than = . // if multiple it will be push().
        }
    }
    return leapYears;
}





//  Find min/max value of object property value from inside of an array (for max, change condition)

const phones = [
    {name: 'Nokia', camera: 5, price: 20000},
    {name: 'Samsung', camera: 16, price: 25000},
    {name: 'Asus', camera: 12, price: 28000},
    {name: 'HTC', camera: 8, price: 22000},
    {name: 'Cat', camera: 8, price: 35000}
]
let cheapestPhone = findLowest(phones); // passed argument to function
//console.log(cheapestPhone);

function findLowest(phones) {
    let cheapest = phones[0]; // now cheapest containing fist (this is for single value)
    for( let i = 0; i < phones.length; i++ ) {
        let phone = phones[i];
        if( phone.price < cheapest.price ) { // if looped phone price(one by one) < first phone(declared on top)
            cheapest = phone; // if single value than = . // if multiple it will be push().
        }
    }
    return cheapest;
}








// Shopping cart total
let shoppingCart = [
    { name: 'Mobile', price: 15000, quantity: 1 },
    { name: 'Headphone', price: 150, quantity: 2 },
    { name: 'Cover', price: 100, quantity: 1 },
];

let myTotal = cartTotal(shoppingCart);
//console.log(myTotal);

function cartTotal(items) {
    let myTotal = 0; // have to set an variable to add prices here (this is for single value of addition)
    for ( let i = 0; i < items.length; i++ ) {
        let item = items[i];
        let perItemTotal = item.price * item.quantity; // item price * item quantity = item total price
        myTotal = myTotal + perItemTotal;
    }
    return myTotal;
}




// Fanction about discount on purches quantity
let ticketQuantity = 210;
let totalPrice = discountPriceOf(ticketQuantity);
//console.log(totalPrice);

function discountPriceOf(ticketQuantity) {
    // fixed discounted price on quantity
    const first100RatePerTicket = 100;
    const second100RatePerTicket = 90;
    const restRatePerTicket = 70;

    if ( ticketQuantity <= 100 ) {
        let totalTicketPrice = ticketQuantity * first100RatePerTicket;
        return totalTicketPrice;
    }
    else if ( ticketQuantity <= 200 ) {
        let first100TicketTotalPrice = 100 * first100RatePerTicket;
        let restTicketQuantity = ticketQuantity - 100;
        let restTicketPrice = restTicketQuantity * second100RatePerTicket;
        let totalTicketPrice = first100TicketTotalPrice + restTicketPrice
        return totalTicketPrice;
    }
    else {
        let first100TicketTotalPrice = 100 * first100RatePerTicket;
        let second100TicketTotalPrice = 100 * second100RatePerTicket;
        let restTicketQuantity = ticketQuantity - 200;
        let restTicketPrice = restTicketQuantity * restRatePerTicket;
        let totalTicketPrice = first100TicketTotalPrice + second100TicketTotalPrice + restTicketPrice;
        return totalTicketPrice;
    }
}



// Handle unexpected value of parameter
function addOf( number1, number2 ) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' ) {
        return 'Please enter both a number';
    }
    let sum = number1 + number2;
    return sum;
}
let theSum = addOf( 5, 7 );
//console.log(theSum);









// Search from arraay

function searchFrom(items, searchFor) {
    let result = [];
    for (const item of items ) {   
        if ( item.name.toLowerCase().includes(searchFor.toLowerCase()) ) {
            result.push(item);
        }
    }
    return result;
}

const cloths = [
    {name: 'full shirt', price: 1200},
    {name: 'half shirt', price: 1000},
    {name: 'jeans pant', price: 1100},
    {name: 'pant', price: 1400},
    {name: 'white sunglass', price: 200},
    {name: 'black sunglass', price: 250}
];

let searchingFor = 'SHIRT';
let result = searchFrom(cloths, searchingFor);
console.log(result);
