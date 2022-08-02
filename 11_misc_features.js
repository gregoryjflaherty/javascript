// default params 
// long way 
function multiply(x, y) {
    if(typeof y === ''){
        y = 1;
    }
    return x * y;
}

// same as ruby 
function multiply(x, y = 1) {
    return x * y;
}


// spread 
// splitting an array or object into multiple arguments 
// ... syntax 
const maxNums = [1, 6, 9, 10, 99]
Math.max(...maxNums) // 99 

// using spread to combine arrays
const AFCWest = ['Chargers', 'Broncos', 'Raiders', 'Chiefs']
const AFCNorth = ['Steelers', 'Browns', 'Ravens', 'Bengals']
const AFC = [...AFCWest, ...AFCNorth, 'Dolphins', 'Colts']

// can also be used to make array copy 
const AFCWest2 = [...AFCWest]

// spread in objects
const feline = {
    legs: 4, 
    family: 'Felidae'
}
const canine = {
    legs: 4, 
    family: 'Caninae'
}
const dog = {
    ...canine, 
    isPet: true
}
// can also use to clone objects
const dogClone = {
    ...dog
}

// rest 
// collects all arguments 
function sum(...nums) {
    return nums.reduce((total, currVal) => total + currVal)
}
console.log(sum(4, 5, 6, 7))

// also collects remaining arguments
// combine every argument that hasnt been used into ...titles
function fullName(first, last, ...titles) {
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
}
fullName('tom', 'jones', 'III', 'order of the pheonix')

// destructuring arrays & objects
const raceResults = ['Greg', 'Dave', 'Caleb', 'Justin']
const [gold, silver, bronze] = raceResults;
const [first, , ,fourth] = raceResults; 
const [winner, ...others] = raceResults; 

const athlete = {
    first: 'Greg', 
    last: 'Flaherty',
    country: 'US',
    sport: 'tennis'
}

const {country: nation, sport: eventType} = athlete;
const {firstName, lastName, ...other } = athlete;

//nested destructuring
const wimbledonResults = [
{
    first: 'Novak', 
    last: 'Djokovic',
    country: 'Serbia'
}, 
{
    first: 'Nick', 
    last: 'Kyrgios', 
    country: 'Australia'
}, 
{
    first: 'Rafael', 
    last: 'Nadal', 
    country: 'Spain'
}] 

const [{first: goldWinner}, {country}] = wimbledonResults;

// param destructuring
function print(athlete){
    const {first, last, sport} = athlete;
    console.log(`${first} ${last}, ${sport}`);
}

const response = ['HTTP/1.1', '200 OK', 'application/json']
function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`)
}
