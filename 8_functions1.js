//function declaration
// funtion funcName(){
// do something ; 
// }

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled ${roll}`)
}

function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}
throwDice();

// using arguments
function greet(name) {
    console.log(`Hello ${name}`)
}
greet('Greg')

function square(num) {
    console.log(num * num);
}
square(8)

// multiple args
function sum(x, y) {
    console.log(x + y);
}
sum(4, 9)

// return statement
// explicit returns
function add(x, y) {
    return x + y;
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}

console.log(containsPurple(['blue', 'purple']));



function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(" ") !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

console.log(isValidPassword('89Fjjlnms', 'dogLuvr'))
console.log(isValidPassword('dogLuvr123!', 'dogLuvr'))
console.log(isValidPassword('hello1', 'dogLuvr'))


function avg(nums) {
    total = 0
    for (let num in nums) {
        total += nums[num]
    }
    return total / nums.length;
}

console.log(avg([5, 10]))

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCased.indexOf(char) === -1) {
        }
    }
    return true;
}

function getCard() {
    let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    let suit = ['clubs', 'spades', 'hearts', 'diamonds']
    let yourCard = {
        value: numbers[Math.floor(Math.random() * 12)],
        suit: suit[Math.floor(Math.random() * 3)]
    }
    return yourCard
}
console.log(getCard())
