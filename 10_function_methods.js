// built in methods for arrays 
// forEach 
// map 
// filter 
// find 
// reduce 
// some 
// every 

// forEach 
const nums = [1, 4, 5, 67 , 8]


nums.forEach(function(n) {
    console.log(n * 2);
}) // anonymous function

function printTriples(n) {
    console.log(n * 3)
}
nums.forEach(printTriples); 

const books = [{
        title: 'Good Omens', 
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    }, 
    {
        title: 'Bone: The Complete Collection',
        authors: ['Jeff Smith'],
        rating: 4.42
    }, 
    {
        title: 'American Gods', 
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }]

books.forEach(function(book) {
    console.log(book.title.toUpperCase());
})

// w/ index 
books.forEach(function(book, idx) {
    console.log(book.title, idx);
})

// map 
const numbers = [20, 21, 22, 23, 24, 25, 26, 27 ]
const words = ['asap', 'brb','rsvp', 'diy']

const doubles = numbers.map(function(num){
    return num * 2; 
})
// must put return or else it iwll be an array of undefined 

console.log(doubles); 

const numDetails = numbers.map(function(n){
    return {
        value: n, 
        isEven: n % 2 == 0
    }
})

const abbrevs = words.map(function(word){
    return word.toUpperCase().split('').join('.');
})
console.log(abbrevs)

// arrow functions 
// another way of defiing a function 
const oldSquare = function(x){
    return x * x; 
}
const newSquare = (x) => {
    return x * x; 
}

const isEven = (num) => {
    return num % 2 === 0; 
}
// can also write without parenthesis 
// const isEven = num => {
//     return num % 2 === 0; 
// }

const greet = () => {
    console.log('hi')
}

// arrow functions - implicit returns
const square = n => (n * n);
// parenthesis instead of {}


const numsTwo = [1, 2, 3, 4, 5, 6, 7, 8]; 

const doubles2 = numsTwo.map(n => n * 2); 

const parityList = numsTwo.map((n) => (n % 2 === 0 ? 'even' : 'odd'));