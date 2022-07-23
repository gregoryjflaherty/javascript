//unicode for string comparison

//EQUALITY 
// == equality of value not equality of type 
// coerce values to similar typesw to compare 
// can result in werid results

7 == '7' // true - converts to common type 

// === checks for equality and type 
7 === '7' // false 
3 === 3 // true
 // GO WITH === !!!


if (1 === 1) {
    console.log("It's true ")
}


let num = 37

if (num % 2 != 0) {
    console.log("Odd number!")
}


// PERFORMANCE REVIEW
// 3 - superstar 
// 2 - meets expectations 
// 1 - needs improvements 

let rating = 0;

if (rating === 3) {
    console.log("You are a superstar")
}
else if (rating === 2) {
    console.log("Meets expectations")
}
else if (rating === 1) {
    console.log("Needs improvements")
}
else {
    console.log("Invalid rating")
}


let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`You have a high score of ${userScore}`)
    highScore = userScore;
}
else {
    console.log(`Your score of ${userScore} did not beat the high score of ${highScore}`)
}

let password = 'hello';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password')
    }
    else {
        console.log('Password is long enough but cannot contain spaces')

    }
}
else {
    console.log('Password must be longer');
}


// TRUTHY AND FALSEY VALUES
let mystery = 5;
if (mystery) {
    console.log("TRUTHY")
}
else {
    console.log("FALSEY")
}

// ALL VALUES ARE TRUTHY except 
// false
// 0
// "" empty string
// null 
// undefined
// NaN



let loggedInUser = null;

if (loggedInUser) {
    console.log('You are logged in')
}
else {
    console.log("Please log in")
}

1 <= 4 && 'a' === 'a'; //true
9 > 10 && 9 >= 9; //false
'abc'.length === 3 && 1 + 1 === 4; // false  

let password_2 = 'taco tuesday';

if (password_2.length >= 6 && password_2.indexOf(" ") === -1) {
    console.log('Valid')
}
else {
    console.log('Invalid')
}

!null // true 
!45 // false
!(0 === 0) // false  

let loggedUser;

if (!loggedUser) {
    console.log("No ones here")
}
else {
    console.log("Thx for coming")
}

// switch statement
let day = 8;

switch (day) {
    case 1:
    case 8:
    case 15: // can put multiple cases
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// TERNARY OPERATOR 
// condition ? ifTrue : ifFalse

let numTwo = 2
numTwo === 2 ? console.log("Yup") : console.log("Nah")