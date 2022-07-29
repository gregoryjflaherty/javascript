


// FUNCTIONS ARE OBJECTS
function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];
console.log(operations[1](100, 4))

for (let func of operations) {
    console.log(func(30, 5))
}

const thing = {
    doSomething: multiply,

}
console.log(thing.doSomething(5, 2))

// HIGHER ORDER FUNCTIONS
// functiond as arguments 

// 1
function callThreeTimes(f) {
    f();
    f();
    f();
}

function cry() {
    console.log("Boo Hoo");
}

callThreeTimes(cry)

//2
function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}
repeatNTimes(cry, 5)


//3 
function rage() {
    console.log("I HATE EVERYTHING")
}

function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand > 0.5) {
        f1();
    }
    else {
        f2();
    }
}
pickOne(cry, rage)

// FUNCTIONS AS RETURN VALUES 
function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}
const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

console.log(triple(3))

function makeBetweenFunc(x, y) {
    return function (num) {
        return num > - x && num <= y;
    }
}



const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 2000);

console.log(isChild(19))
console.log(isNineties(1994))

//callback
// calling function within a function

function showUp() {
    alert("Im Here!")
}

setTimeout(showUp, 5000)
const btn = document.querySelector('button');
btn.addEventListener('click', showUp) // callback of named function 