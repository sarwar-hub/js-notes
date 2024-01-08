// handle error

let age = 12;

try{
    // error 1
    //console.log(gender);

    // error 2
    if(age < 18 ) { // try condition
        throw 'Not Allowed'; // throw error will go in catch's error parameter and it will show according catch's code.
    }
    else if (isNaN(age)) {
        throw 'Age must be a number';
    }
    else {
        console.log('Allowed');
    }
} catch(error) {
    console.log('ERROR - ' + error);
    // errorContainer.innerText = error;
} finally {
    console.log('code inside of "finally" will always execute');
}
