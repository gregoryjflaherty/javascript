

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