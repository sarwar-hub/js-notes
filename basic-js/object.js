// Declare object
let myPhone = { brand: 'Asus', color: 'black', size: "5 inch", bettery: '5000mah' }
//console.log(myPhone);



// Get and Set values



// Get single property value by dot ( when you know property name )
var brand = myPhone.brand;
//var brand = myPhone['brand']; ( Alternative )
//console.log(brand);


// Set single property value by dot ( when you know property name )
myPhone.size = '6 inch';
//console.log(myPhone.size);


// get and set property, value of and object ( when you don't know property name )
var properties = Object.keys(myPhone);
var values = Object.values(myPhone);
//////////








// Get data from object by looping
let objectName = { prop1: 'value1', prop2: 'value2', prop3: 'value3', }

var propertyNames = Object.keys(objectName); // get property names as an array ( now this is an array )

for ( var i = 0; i < propertyNames.length; i++ ) {

    var propertyName = propertyNames[i]; // get single names from array
    var propertyValue = objectName[propertyName]; // like myPhone['brand']
    //console.log(propertyName, propertyValue);

}



/***/

// Get data from object by dynamic looping ( for-in loop )
for ( var propName in objectName ) { // propName containing single property names from object and objectName acts like an array of property names
    var propValue = objectName[propName]; // objectName acts like an array of property names
    //console.log(propName, propValue);
}