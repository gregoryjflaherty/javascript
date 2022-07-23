let students = [];
let shoppingList = ['cereal', 'ice'];
let randomCollection = [NaN, 'dog', 5];
let colors = ['red', 'blue', 'green']
colors[0] // red
colors[colors.length - 1] // green
colors[1] = 'purple' // change value in array 

// add items to end of array 
// push - add to end 
// pop - remove from end 
// shift - add to front of array 
// unshift - remove front of array 


// concat
// merge two or more arrays 
let fruits = ['apple', 'pear']
let veggies = ['asparagus', 'brussel sprouts']

const fruitsAndVeggies = fruits.concat(veggies)
console.log(fruitsAndVeggies)

// includes
// true or false lets you know if value is in array 
console.log(fruitsAndVeggies.includes('apple')) // true 
console.log(fruitsAndVeggies.includes('orange')) // false 

// can include second argument to see if it searches after that index 
console.log(fruitsAndVeggies.includes('apple', 1)) // false 
console.log(fruitsAndVeggies.includes('asparagus', 2)) // true 

if (fruitsAndVeggies.includes('pear')) {
    console.log("Yum")
}

//indexOf
// returns index of passed in argument if present, -1 if not present
console.log(fruitsAndVeggies.indexOf('brussel sprouts')) // 3
console.log(fruitsAndVeggies.indexOf('salad')) // -1

//reverse 
// mutates original array and reverses array 

// joins 
// turns array into string
let letters = ["Y", "O", "L", "O"]
console.log(letters.join(" "))
console.log(letters.join("-"))
console.log(letters.join("O"))

// slice 
// slices a new array from original array 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let smallNums = nums.slice(0, 4)
console.log(smallNums)
console.log(nums.slice(-1)) // this is where -1 indexes count from back 
let copy = nums.slice() // makes a copy of the original array

// splice 
// insert and delete
let animals = ['shark', 'whale', 'dolphin', 'grouper', 'salmon', 'lobster']
console.log(animals.splice(1, 0, 'octopus'))
// 1 is where inserting, 0 is deleting, then what youre adding
console.log(animals)

console.log(animals.splice(3, 2))
console.log(animals)

// array.sort()
// sorts only strings ! converts everything to string then sorts 

// const can change when assigned to an array - because the constant is the assignment
// to the array not the values within it. 
const myEggs = ['brown', 'blue']
myEggs[0] = 'pink';
console.log(myEggs); // ['pink', 'blue']
// USE const WHEN ASSIGNING ARRAYS


// nested arrays
const nestedColors = [
    ['red', 'crimson'],
    ['orange', 'dark orange']
]
console.log(nestedColors[0][0]) // red
console.log(nestedColors[1][0]) // orange