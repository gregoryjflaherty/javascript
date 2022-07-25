

// run something ten times
for (let i = 1; i < 10; i++) {
    console.log("Hey", i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

const examScores = [99, 58, 98, 69, 84, 72, 83]
for (let i = 1; i < examScores.length; i++) {
    console.log(examScores[i])
}

const myStudents = [
    {
        name: 'Zeus',
        grade: 96
    },
    {
        name: 'Artemis',
        grade: 97
    },
    {
        name: 'Hera',
        grade: 85
    }
];
for (let i = 1; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.name} scored a ${student.grade}`)
}

// nested loop 
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
]
let total = 0
for (let i = 0; i < gameBoard.length; i++) {
    row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
        total += row[j];
    }
}
console.log(total)

// while loop 
let j = 0;
while (j <= 5) {
    console.log(`j is ${j}`);
    j++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(guess);
    guess = Math.floor(Math.random() * 10)
}

//For...of

let sports = ['football', 'baseball', 'basketball']

for (let sport of sports) {
    console.log(sport);
}

for (let char of 'hellooooo') {
    console.log(char);
}

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
    console.log(words1[i], words2[i]);
}

//looping over objects - object is not iterable 
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    'Kill Bill': 9.9,
    Nope: 8.1,
    'American Gangster': 8.8,
};

//use Object.keys
// for of 

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

const jeopardyWinnings = {
    regularPlay: 25,
    watsonChallenge: 25,
    tournamentOfChampions: 25,
    battleofTheDecades: 50.5,
}

let totalWinnings = 0;
for (let prop in jeopardyWinnings) {
    totalWinnings += jeopardyWinnings[prop];
}
console.log(totalWinnings)

for (let k in [25, 51, 77, 103]) {
    console.log(k);
}  // this prints out 0, 1 , 2, 3