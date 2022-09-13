// shot hand object properties
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length; 
//     return {
//         max: max,
//         min: min,
//         sum: sum, 
//         avg: avg
//     }
// }

// original version above 

// short hand version below 
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length; 
    return {
        max,
        min,
        sum,
        avg,
    }
}



const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]
const statsResult = getStats(reviews);


//computed property
// dynamimc key 
const role = 'host'; 
const person = 'Jools Holland'
const role2 = 'Director'; 
const person2 = 'James Cameron'

const team = {}
team[role] = person;
team[role2] = person2;
//team = 
// {
//  host: 'Jools Holland',
//  director: 'James Cameron''
// }

const team2 = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen',
}

function addProp(obj, k, v){
    const copy = {...obj}
    copy[k] = v
    return copy
}

const result = addProp(team2, 'happy', ':)')

// Adding functions to objects
// calling .something is a method 
// adding a function to an object makes it a method 


const math = {
    add: function(x, y){return x + y}, 
    multiply: function(x, y){return x * y} 
}
// math.add(2, 5) => 10


const auth = {
    username: 'myname',
    login(){
        console.log('Logged you in')
    },
    logout(){
        console.log('Goodbye')
    }
}

//keyword this 
// reference to current execution scope - can be the window obj
function sayHi(){
    console.log("HI")
    console.log(this)
}
// this is window object - not in an object!!
alert("LOL")
//or
window.alert("LOL again")

const person3 = {
    first: 'G',
    last: 'Flaherty', 
    printBio(){
        console.log(this)
        console.log(`${this.first} ${this.last}`)
    },
    laugh: () => {
        console.log(this)
        console.log(`${this.first} says hahaha`)
    }
}
// this is in an object so this is person3!!!

// the value of this depends on the invocation context 
// i.e. how it's called

const printBioFunction = person.printBio
// this will not work - returns undefined

// arrow methods - 
// laugh - this is the window while printBio is the object
// undefined says hahaha
// generally dont use arrow functions as methods in an object


// set interva; 
// ANNOYOMATIC DEMO 

// setInterval(func, 3000)
// in milliseconds whatever function put in here will run every 3 seconds

const annoyer = {
    phrases: ['literally', 'cray', 'omggg', 'like totally', 'i cant even'],
    pickPhrase(){
        const {phrases} = this
        // destructuring
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx]
    },
    start(){
        this.timerId = setInterval(() =>
            console.log(this.pickPhrase())
        , 3000)
    },
    stop(){
        clearInterval(this.timerId)
        console.log('Thank God its over!')
    }
}


// annoyer.stop()
