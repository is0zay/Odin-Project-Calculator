/* function add (a, b) { return a + b; };

function subtract (a, b) { return a - b; };

function multiply (a, b) { return a * b; };

function divide (a, b) { return a / b; }; */



let numberStore = "";
let operatorStore = "";

// screen display
const screenDisplay = document.querySelector('.calcScreen');

let screen = document.createElement('div');
screen.textContent = "";
let doMath = screen.textContent;

screenDisplay.appendChild(screen);

function operate (doMath) {
    /* add(a, b);
    subtract(a, b);
    multiply(a, b);
    divide(a, b); */


}


// number buttons that add to string on screen
const oneBtn = document.querySelector("#oneBtn");
oneBtn.addEventListener('click', () => { 
    screen.textContent += "1";
    return numberStore += "1";
});

const twoBtn = document.querySelector("#twoBtn");
twoBtn.addEventListener('click', () => { 
   screen.textContent += `${2}`;
   return numberStore += `${2}`;
});


const threeBtn = document.querySelector("#threeBtn");
threeBtn.addEventListener('click', () => { 
    screen.textContent += `${3}`;
    return numberStore += `${3}`;
});


const fourBtn = document.querySelector("#fourBtn");
fourBtn.addEventListener('click', () => {
    screen.textContent += `${4}`;
    return numberStore += `${4}`;
});


const fiveBtn = document.querySelector("#fiveBtn");
fiveBtn.addEventListener('click', () => {
    screen.textContent += `${5}`;
    return numberStore += `${5}`;
});


const sixBtn = document.querySelector("#sixBtn");
sixBtn.addEventListener('click', () => {
    screen.textContent += `${6}`;
    return numberStore += `${6}`;
});


const sevenBtn = document.querySelector("#sevenBtn");
sevenBtn.addEventListener('click', () => {
    screen.textContent += `${7}`;
    return numberStore += `${7}`;
});


const eightBtn = document.querySelector("#eightBtn");
eightBtn.addEventListener('click', () => {
    screen.textContent += `${8}`;
    return numberStore += `${8}`;
    
});


const nineBtn = document.querySelector("#nineBtn");
nineBtn.addEventListener('click', () => {
    screen.textContent += `${9}`;
    return numberStore += `${9}`;
});


const zeroBtn = document.querySelector("#zeroBtn")
zeroBtn.addEventListener('click', () => {
    screen.textContent += `${0}`;
    return numberStore += `${0}`;
});

// operator btn add to screen
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener('click', () => {
    screen.textContent += "+";
    return operatorStore += "+";
});


const subtractBtn = document.querySelector("#subtractBtn");
subtractBtn.addEventListener('click', () => {
    screen.textContent += "-";
    return operatorStore += "-";
});


const multiplyBtn = document.querySelector("#multiplyBtn");
multiplyBtn.addEventListener('click', () => {
    screen.textContent += "*";
    return operatorStore += "*";
});


const divideBtn = document.querySelector("#divideBtn");
divideBtn.addEventListener('click', () => {
    screen.textContent += "/";
    operatorStore += "/";
});

const equalBtn = document.querySelector("#equalBtn");
eightBtn.addEventListener('click', ()=> { 
    
    console.log(operate(screen.textContent));
    
});


const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click', () => {location.reload()});