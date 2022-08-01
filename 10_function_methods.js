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