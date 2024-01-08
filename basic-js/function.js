// Declare and call a function
function myFunction() {
    console.log('Function executed');
}
//myFunction();




// Function with parameter ( addition of parameter )
function myFunction2( x, y ) {
    var sum = x + y;
    //console.log(sum);
}
myFunction2( 5, 7 ); // Function will show the sum these two parameter.



//  Another Example ( average of three parameter )
function averageOfThree( x, y, z ) {
    var sum = x + y + z;
    var average = sum/3;
    var averageFixed = average.toFixed(2);
    var finalAverage = parseFloat(averageFixed);
    //console.log(finalAverage);
}
averageOfThree( 9, 15, 23 );








//  Another Example ( get product quantuty based on giving cash )
function buyProduct(cash) {
    var productPrice = 25;
    var productQuantity = cash/productPrice;
    var productQuantityFixed = productQuantity.toFixed(0); // to show in round figur
    var finalQuantity = parseInt(productQuantityFixed); // to show in round figur
    return finalQuantity; // function will return quantuty of product based on cash
}
var finalQuantity = buyProduct(201); // 'finalQuantity' variable containing 'buyProduct()' functions return value
//console.log(finalQuantity);