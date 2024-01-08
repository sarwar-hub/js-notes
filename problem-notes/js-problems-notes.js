// 1. Create Random color

function createRandomColor() {
    let r = Math.floor( Math.random() * 256 );
    let g = Math.floor( Math.random() * 256 );
    let b = Math.floor( Math.random() * 256 );

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
}



// Create element to orderd list
function createElement(shape, result) {
    let container = document.getElementById('result-container');
    let li = document.createElement('li');
    container.appendChild(li);
    li.classList.add('bg-red-700/50', 'p-1', 'rounded', 'mb-2');
    li.innerHTML = shape + ` ` + result + `cm<sup>2</sup>` + `<button class="text-white bg-red-700 px-3 ml-3 rounded hover:bg-red-800">in m<sup>2</sup></button>`;
}




// Set attribute
document.getElementById('button').setAttribute('disabled', true)




// serial set
let serial = 0;
document.getElementById('id').addEventListener('click', function(){
	serial += 1;
})
//continue---------
-------------------------






// return multiple value from a function
function calculations(num1, num2) {
let sum = num1 + num2;
let multiply = num1 * num2;
return [sum, multiply]
}
const result = calculations(5, 10)
console.log(result[0], result[1]);


