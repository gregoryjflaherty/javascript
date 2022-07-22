// boolean ture or false
true 
false 
'false'
// not boolean 

// strings of characters single or double 
let firstName = "Greg"; 
let msg = 'Can also use single but stay consistent'
let numberString = '1235'
typeof '1989'
// string
"he said 'Yes'"
//using quotes wihin a string 
let lastName = "Flaherty"; 
firstName + " " + lastName 
// "Greg Flaherty"

//strings are indexed
"hello".length 
// 5

"     .".length
// 6

let mySong = "SurfinUSA"
mySong[0] 
// "S"
mySong[12]
//undefined
mySong[12]

//strings are immutable
mySong[0] = "F";
mySong[0] 
// still equals "S"

let msg = "You are grounded"; 
msg.toUpperCase()
//"YOU ARE GROUNDED"
msg
//back to original 

msg.toLowerCase()
//"you are grounded"

//TRIM
let color = '  purple  '; 
color.trim()
//'purple'
color.trimEnd()
//'  purple'
color.trim().toUpperCase()
//"PURPLE"

//INDEX OF 
let tvShow = 'catdog'; 
tvShow.indexOf('cat'); 
//0  WHERE THE STRING STARTS
tvShow.indexOf('dog');
//3 
tvShow.indexOf('z');
// -1 (not found)

//SLICE
let str = "supercalifragilisticexpialidocious"
str.slice(0,5); //'super'
str.slice(5); //'califragilisticexpialidocious'
'$50.60'.slice(1) // "50.60"

//REPLACE
'baseball is entertaining'.replace('entertaining', 'ok') // 'baseball is ok'
'ha ha ha'.replace('ha', 'he') // 'he ha ha' only replaces first

// DOCUMENTATION NOTE 
// str.slice(beginIndex[, endIndex])
// brackets in this show it is optional

//string escapes 
'he said I ain\'t happy'
//   \' backslash tells JS this upcoming quote is not ending the str
"HELLO \n GOODBYE"
// HELLO
// GOODBYE

//STRING TEMPLATE LITERALS
//not quotes using backticks
`he said 'lol'`
let userName = "fakename"; 
`Welcome back ${userName}`; //Welcome back fakename

let animal = 'pig'
let sound = 'oink'
`${animal} says ${sound}`; //pig says oink

const minAge = 21;
let yourAge = 19;
`You must be ${minAge} to enter. Come back in ${minAge - yourAge} years`; 

//Null is abscene of data
let loggedInUser = null; 
//Undefined is a variable that does not have an assigned value

//Math Object
Math.PI // 3.141592653589793
Math.abs(-1254)
Math.floor(3.654) // 3 takes off decimal 
Math.round(3.654) // 4 rounds number
Math.pow(7, 2) // 49 
Math.random() // returns random decimal between 0 and 1 

// to get random from 1 to 10
const step1 = Math.random(); 
// 0.59611004892810545
const step2 = step1 * 10; 
// 5.9611004892810545
const step3 = Math.floor(step2); 
//5 this gives random from 0 to 9
const step4 = step3 + 1; 
// gives 1 to 10

Math.floor(Math.random() * 10) + 1; //one line 

//TYPE OF
typeof 99
typeof 'word'
typeof null

//Turn str into integer
parseInt("28") // 28
parseInt("24.1465") // 24
parseInt("28dayslater") // 28 only if number is at beginning of String 

parseFloat("24.987") // 24.987
parseFloat("7") // 7
parseFloat("I ate 3 shrimp") // NaN