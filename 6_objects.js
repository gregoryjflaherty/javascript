
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
}

console.log(fitBitData.totalSteps)

// all keys converted to strings 

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
}
let mysteryColor = 'yellow';
console.log(palette[mysteryColor]) // '#f9ca24'

const userReviews = {};

userReviews['kingG89'] = 5.0;
userReviews['mrNothing0'] = 3.0;
userReviews.anotherOne = 1;
console.log(userReviews);

const studentOne = {
    firstName: 'Greg',
    lastName: 'Flaherty',
    exams: {
        midterm: 94,
        final: 100
    }
}
const finalGrade = (studentOne.exams.midterm + studentOne.exams.final) / 2;
console.log(finalGrade);

// cannot compare values 
const user = {
    username: "fakeuser8",
    notifications: [],
}
if (!user.notifications.length) {
    console.log("No notifications")
}


// to see if array or object elemets are equal you need to loop 